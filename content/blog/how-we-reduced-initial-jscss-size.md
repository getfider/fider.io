+++
date = "2018-10-24"
title = "How we reduced our initial JS/CSS size by 67%"
description = "We have been working on reducing the amount of bytes that we send to all Fider users. Being a web application built with React, we have focused on JS and CSS. On this post we share our learnings, some concepts and suggestions on how you can do the same with your web application."
author = "goenning"
+++

<figure>
  <img src="/images/blog/bundle-size-improvements.png" />
</figure>

Fider is built with React and Webpack on the frontend, so the topics below will be mostly useful for teams using same stack, but the concepts can also be applied to other stacks.

### Table of Contents

- <a href="#webpack-bundle-analyzer">Webpack Bundle Analyzer</a>
- <a href="#long-term-caching-with-content-hash">Long term caching with content hash</a>
- <a href="#the-common-bundle">The common bundle</a>
- <a href="#code-splitting-on-route-level">Code Splitting on route level</a>
- <a href="#loading-external-dependencies-on-demand">Loading external dependencies on demand</a>
- <a href="#font-awesome-and-tree-shaking">Font Awesome and Tree Shaking</a>
- <a href="#switching-from-big-to-small-npm-packages">Switching from big to small NPM packages</a>
- <a href="#optimising-the-main-bundle-is-crucial">Optimising the main bundle is crucial</a>
- <a href="#tslib-typescript-only">TSLib (TypeScript only)</a>

## Webpack Bundle Analyzer

[webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) is a webpack plugin that generates an interactive zoomable treemap of all your bundles. This has been crucial for us to understand which modules are inside each bundle. You can also see which are the biggest modules within each bundle.

*If you don’t know the root cause, how can you tackle it?*

This is an example of what this plugin will generate for you.

<figure>
  <img src="/images/blog/bundle-size-initial-view.png" />
</figure>

Did you notice that huge <strong>entities.json</strong> inside the vendor bundle? That's a good starting point to analyze the content of your bundle.

## Long term caching with content hash

Long term caching is the process of telling the browser to cache a file for a long time, like 3 months or even 1 year. This is a important settings to ensure that returning users won’t need to download the same JS/CSS files over and over again.

The browser will cache files based on its full path name, so if you need to force the user to download a new version of your bundle, you need to rename it. Luckly webpack provides a feature to generate the bundles with a dynamic name, hence forcing the browser to download new files only.

We have previously used **chunkhash** for a long time on our webpack configuration. 99% of the cases where you want long term cache, the best option is to use **contenthash**, which will generate a hash based on its content.

This technique does not reduce the bundle size, but it certainly helps to reduce the amount of times the user has to download our bundles. If the bundle didn’t change, don’t force the user to download it again.

To learn more, visit the official documentation https://webpack.js.org/guides/caching/

## The common bundle

Combining all the NPM packages into a separate bundle has been a long time practice for many teams. This is very useful when combined with long term caching. 

NPM packages change less often than our app code, so we don’t need to force users to download all your NPM packages if nothing has changed. This is usually called the **vendor bundle**.

But we can take this practice one step further. 

What about your own code that also change less often? Maybe you have a few basic components like Button, Grid, Toggle, etc. that have been created some time ago and haven't changed in a while.

This is a good candidate for a **common bundle**. You can check this [PR #636](https://github.com/getfider/fider/pull/636) where we basically move all our own modules inside some specific folders into a common bundle. 

This will ensure that, unless we change our base components, the user won’t need to redownload it. 

## Code Splitting on route level

Code splitting is currently a hot topic. This has been around for some time, but the tools and frameworks have evolved a lot, to the point where doing code splitting is much simpler now.

It’s very common to have applications that push one big bundle that contains all the JS/CSS required to render any page within the application, even if the user is only looking at the Home page. We don’t know if the user will ever visit the Site Settings page, but we have pushed all the code for that already. Fider has been doing this for a long time and we now have changed it.

The idea of Code Splitting is to generate multiple smaller bundles, usually one per route, and a main bundle. The only bundle we send to all the users is the main bundle, which will then asynchronously download all the required bundles to render the current page.

It seems complicated, but thanks to React and Webpack, this is not rocket science anymore. For those using React <= 16.5, we recommend [react-loadable](https://github.com/jamiebuilds/react-loadable). If you’re already on React 16.6, then you can use React.lazy() which has been a new addition to this version.

- In this PR you can find how <a href="https://github.com/cfilby">@cfilby</a> (thank you!) added code splitting to Fider with react-loadable: [PR #596](https://github.com/getfider/fider/pull/596)
- After we migrated to React 16.6, we have then replaced this external package with React.lazy and Suspense: [PR #646](https://github.com/getfider/fider/pull/646)

We also had issues with some rare events where users were having issues to download asynchronous bundles. A potential solution has been documented on [How to retry when React lazy fails](https://goenning.net/2018/11/16/how-to-retry-dynamic-import-with-react-lazy/).

## Loading external dependencies on demand

By using the Webpack Bundle Analyzer we noticed that our vendor bundle had all the content of react-toastify, which is the toaster library that we use. That is usually ok, except that 95% of the Fider users will never see a toaster message. There are very few places we show a toaster, so **why do we push 30kB of JavaScript to every user if they don’t need it**? 

This is a similar problem to the one above, except that we are not talking about routes anymore, this is a feature used in multiple routes. Can you code split on a feature level?

Yes, you can!

In a nutshell, what you have to do is switch from static import to dynamic import.

```javascript
// before
import { toast } from "./toastify";
toast("Hello World");

// after
import("./toastify").then(module => {
  module.toast("Hello World");
});
```

Webpack will bundle the toastify module and all its NPM dependencies separately. The **browser will then only download that bundle when the toast is needed**. If you have configured long term caching, then on the second toaster call it won’t have to download it again.

The video below shows how it looks like on the browser.

<figure>
  <img src="/images/blog/bundle-size-async-toastify.gif" />
</figure>

You can see the details on how this was implemented on [PR #645](https://github.com/getfider/fider/pull/645)

## Font Awesome and Tree Shaking

Tree Shaking is the process of importing only what you need from a module and discarding the rest. This is enabled by default when running webpack on production mode.

The usual approach to use Font Awesome is to import an external font file and a CSS that maps each character (icon) on that font to one CSS class. The result is that even though we only use icon A, B and C, we are forcing the browsers to download this external font and a CSS definition of 600+ icons.

Thankfully we found **react-icons**, a NPM package with all free Font Awesome (and other icon packages too!) in a SVG format and exported as React Components on a ES Module format.

You can then **import only the icons you need** and webpack will remove all other icons from the bundle. The result? Our CSS has is now **~68kB smaller**. Not to mention that we don’t need to download external fonts anymore. This change was the biggest contributor on reducing the CSS size on Fider.

Want see how? Check out this [PR #631](https://github.com/getfider/fider/pull/631) 

## Switching from big to small NPM packages

> "NPM is like a lego store full of building blocks that you can just pick whichever one you like. You don’t pay for the package you install, but your users pay for the byte size that it adds to your application. Choose wisely." - @goenning

While using the Bundle Analyzer we found that markdown-it alone was consuming ~40% of our vendor bundle. We have then decided to go shopping on NPM and look for an alternative markdown parser. The goal was to find a package that was smaller, well maintained and had all the features we needed.

We’ve been using [bundlephobia.com](https://bundlephobia.com/) to analyse the byte size of any NPM package before installing it. We have switched from markdown-it to marked, which **reduced ~63kB from our vendor bundle** with minimal API change. 

Curious about it? Check out [PR #643](https://github.com/getfider/fider/pull/643).

You can also compare these two packages on bundlephobia:

- https://bundlephobia.com/result?p=marked@0.5.2
- https://bundlephobia.com/result?p=markdown-it@8.4.2

Think twice before adding a large package. Do you really need it? Can your team implement a simpler alternative? If not, can you find another package that does the same job with less bytes? Ultimately, you can still add the NPM package and load it asynchronously like we did with react-toastify mentioned above.

## Optimising the main bundle is crucial

Imagine that you have an application doing code splitting by route. It’s already running in production and you commit a change to your Dashboard route component. You might think that Webpack will only generate a different file for the bundle that contain the Dashboard route, correct? 

Well, that’s not what actually happens.

Webpack will **ALWAYS** regenerate the main bundle if something else changes in your application. The reason being that the main bundle is a pointer to all other bundles. If the hash of another bundle has changed, the main bundle has to change its content so that it now points to the new hash of the Dashboard bundle. Makes sense?

So if your main bundle contains not only the pointers, but also a lot of common components like Buttons, Toggle, Grids and Tabs, you’re basically forcing the browser to redownload something that has not changed.

Use the webpack bundle analyzer to understand what’s inside your main bundle. You can then apply some of the techniques we’ve mentioned above to reduce the main bundle size.

## TSLib (TypeScript only)

When compiling TypeScript code to ES5, the TypeScript Compiler will also emit some helper functions to the output JavaScript file. This process ensures that the code we wrote in TypeScript is compatible with older browsers that doesn’t support ES6 features like Classes and Generators.

These helper functions are very small, but when there are many TypeScript files, these helper functions will be present on every file that uses a non-ES5 code. Webpack won’t be able to tree shake it and the final bundle will contain multiple occurrences of the very same code. The result? A slightly bigger bundle.

Thankfully there’s a solution for this. There is a NPM package called **tslib** that contains all the helper functions needed by TypeScript. We can then tell the compiler to import the helper functions from the tslib package instead of emitting it to the output JavaScript file. This is done by setting **importHelpers: true** on the **tsconfig.json** file. Don’t forget to install tslib with **npm install tslib —save**. 

That’s all! 

The amount of bytes this can reduce from the bundle will depend on the amount of non-ES5 files, which can be a lot on a React app if most of the Components are classes.

## The next billions users

Are you ready for [the next billion users](https://developers.google.com/web/billions/)? Think about all the potential users of your app that currently struggle to use it because on a low-cost device and slower network.

Reducing the byte size of our bundles has a direct impact on the performance of our applications and can help us make it more accessible to everyone. Hopefully this post can you help on this journey.

Thank you for reading!
