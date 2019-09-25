+++
title = "Configuring OAuth"
description = "One-click sign in made easy"
category = "How To"
bref = "Learn how to create Facebook and Google sign in apps and use it in your Fider instance"
+++

OAuth is an open standard for authentication and authorization. Fider is an OAuth client that can connect to any OAuth2 provider to enable a fast, easy and secure sigin in process.

Fider has native support to Facebook, Google and GitHub. To add any other OAuth provider please follow this guide.

<h3>Registering a new OAuth Provider</h3>

While logged in as an Administrator, navigate to <strong>Site Settings -> Authentication</strong>.

This page list all registered providers, either Enabled or Disabled. To register a new provider, click <strong>Add New</strong> and fill the form with all the required information. If you're new to OAuth, we've prepared a <a href="#oauth-common-providers">list of how to configure the most common providers</a>.

<h3 id="oauth-testing">Testing</h3>

Before enabling any provider on Fider, we highly recommend that you keep it disabled and use the <strong>Test button</strong> to confirm it's working properly. 

<strong>Test button</strong> becomes available after registering a new provider. Whenever clicked, Fider opens a popup and redirects you to the provider of your choice to start the authentication process. Once authenticated, you'll be redirected back to Fider and a report will be presented. Once you're happy with the configuration, you can enable it and make it available for everyone to use during the sign in process.

<div class="container">
  <div class="row">
    <div class="col-sm-6">
      <figure>
        <img src="/images/docs/good-oauth-echo-response.png" />
        <figcaption>A correctly configured OAuth</figcaption>
      </figure>
    </div>
    <div class="col-sm-6">
      <figure>
        <img src="/images/docs/bad-oauth-echo-response.png" />
        <figcaption>How an incorrect configuration may look like</figcaption>
      </figure>
    </div>
  </div>
</div>

<h3 id="oauth-common-providers">Common Providers</h3>

<h4>Facebook</h4>

<div class="alert bg--warning">
  <span>This is only required for self-hosted Fider. Our Cloud service already has Facebook enabled.</span>
</div>

<ol>
  <li>Create a new Facebook app at <a href="https://developers.facebook.com/apps">https://developers.facebook.com/apps</a> and enable Facebook Login product</li> 
  <li>Take note of the <strong>App ID</strong> and an <strong>App Secret</strong> that you'll be given</li>
  <li>Input <strong>&lt;your-fider-site&gt;/oauth/facebook/callback</strong> into <strong>Valid OAuth Redirect URIs</strong> field and change your Facebook app status to Live</li>
  <li>
    Update your environment variable as follows
    <ul>
      <li><strong>OAUTH_FACEBOOK_APPID:</strong> <code>use the App ID given by Facebook</code></li>
      <li><strong>OAUTH_FACEBOOK_SECRET:</strong> <code>use the App Secret given by Facebook</code></li>
    </ul>
  </li>
</ol>

<h4>Google</h4>

<div class="alert bg--warning">
  <span>This is only required for self-hosted Fider. Our Cloud service already has Google enabled.</span>
</div>

<ol>
  <li>
    Create a Google app at <a href="https://console.developers.google.com">https://console.developers.google.com</a> by navigating to Credentials -> OAuth Client ID. Take note of the <strong>Client ID</strong> and <strong>Client Secret</strong> that you'll be given
  </li>
  <li>Input <strong>&lt;your-fider-site&gt;/oauth/google/callback</strong> into <strong>Authorized redirect URIs</strong> field</li>
  <li>
    Update your environment variable as follows
    <ul>
      <li><strong>OAUTH_GOOGLE_CLIENTID:</strong> <code>use the Client ID given by Google</code></li>
      <li><strong>OAUTH_GOOGLE_SECRET:</strong> <code>use the Client Secret given by Google</code></li>
    </ul>
  </li>
</ol>

<h4>GitHub</h4>

<div class="alert bg--warning">
  <span>This is only required for self-hosted Fider. Our Cloud service already has GitHub enabled.</span>
</div>

<ol>
  <li>
    Create a GitHub app at <a href="https://github.com/settings/applications/new">https://github.com/settings/applications/new</a>. Use <strong>&lt;your-fider-site&gt;/oauth/github/callback</strong> as the callback URL during registration.
  </li>
  <li>Take note of the <strong>Client ID</strong> and <strong>Client Secret</strong> that you'll be given</li>
  <li>
    Update your environment variable as follows
    <ul>
      <li><strong>OAUTH_GITHUB_CLIENTID:</strong> <code>use the Client ID given by GitHub</code></li>
      <li><strong>OAUTH_GITHUB_SECRET:</strong> <code>use the Client Secret given by GitHub</code></li>
    </ul>
  </li>
</ol>

<h4>Microsoft Azure AD</h4>

<ol>
  <li>Login to <a href="https://portal.azure.com/">https://portal.azure.com</a> and navigate to <strong>Azure Active Directory -> App Registrations</strong></li>
  <li>Click on New Application Registration and create a new application. Give it a name, select Web app / API type and use your Fider site URL as the sign-on URL</li>
  <li>Take note of the <strong>Application ID</strong> that you'll be given</li>
  <li>Navigate to <strong>Settings -> Keys</strong> and generate a new key. We recommend that you set this key to never expire. Take note of the <strong>Value</strong> of this key</li>
  <li>
    Fill Fider OAuth form as follows and then press Save
    <ul>
      <li><strong>Display Name:</strong> Azure AD</li>
      <li><strong>Client ID:</strong> <code>use the Application ID given by Azure</code></li>
      <li><strong>Client Secret:</strong> <code>use the Key Value you generated in Azure</code></li>
      <li><strong>Authorize URL:</strong> https://login.microsoftonline.com/<code>{yourTenantId}</code>/oauth2/v2.0/authorize</li>
      <li><strong>Token URL:</strong> https://login.microsoftonline.com/<code>{yourTenantId}</code>/oauth2/v2.0/token</li>
      <li><strong>Profile API URL:</strong> https://graph.microsoft.com/v1.0/me</li>
      <li><strong>Scope:</strong> User.Read</li>
      <li><strong>JSON Path ID:</strong> id</li>
      <li><strong>JSON Path Name:</strong> displayName</li>
      <li><strong>JSON Path Email:</strong> mail</li>
      <li><strong>Status:</strong> Disabled</li>
    </ul>
  </li>
  <li>Find Azure AD on the list of OAuth providers and copy the callback URL</li>
  <li>On Azure, navigate to your newly created <strong>App -> Settings -> Reply URLs</strong> and replace existing URL with the copied callback URL from Fider</li>
  <li>You can now <a href="#oauth-testing">Test</a> this configuration</li>
</ol>

<h4>Twitch</h4>

<ol>
  <li>Navigate to <a href="https://glass.twitch.tv/console/apps/create">https://glass.twitch.tv/console/apps/create</a> and register your new Twitch App</li>
  <li>Twitch requires you to input the OAuth Redirect URL upon registration. For now, just type any valid URL like http://example.org, we'll change this later</li>
  <li>Find your app on the list and click Manage</li>
  <li>Take note of the <strong>Client ID</strong> that is shown</li>
  <li>Click on <strong>New Secret</strong> and take note of <strong>Client Secret</strong> as well</li>
  <li>
    Fill Fider OAuth form as follows and then press Save
    <ul>
      <li><strong>Display Name:</strong> Twitch</li>
      <li><strong>Client ID:</strong> <code>use the Client ID given by Twitch</code></li>
      <li><strong>Client Secret:</strong> <code>use the Client Secret given by Twitch</code></li>
      <li><strong>Authorize URL:</strong> https://id.twitch.tv/oauth2/authorize</li>
      <li><strong>Token URL:</strong> https://id.twitch.tv/oauth2/token</li>
      <li><strong>Profile API URL:</strong> https://api.twitch.tv/helix/users</li>
      <li><strong>Scope:</strong> user:read:email</li>
      <li><strong>JSON Path ID:</strong> data[0].id</li>
      <li><strong>JSON Path Name:</strong> data[0].display_name</li>
      <li><strong>JSON Path Email:</strong> data[0].email</li>
      <li><strong>Status:</strong> Disabled</li>
    </ul>
  </li>
  <li>Find Twitch on the list of OAuth providers and copy the callback URL</li>
  <li>On Twitch, navigate to your newly created App, click manage and replace existing <strong>OAuth Redirect URL</strong> with the copied callback URL from Fider</li>
  <li>You can now <a href="#oauth-testing">Test</a> this configuration</li>
</ol>

<h4>Discord</h4>

<ol>
  <li>Navigate to <a href="https://discordapp.com/developers/applications">https://discordapp.com/developers/applications</a> and click on Create on aplication</li>
  <li>Change your App Name and take note of the <strong>Client ID</strong> that is shown</li>
  <li>Under Client Secret, click on <strong>click to reveal</strong> and take note of <strong>Client Secret</strong> as well</li>
  <li>
    Fill Fider OAuth form as follows and then press Save
    <ul>
      <li><strong>Display Name:</strong> Discord</li>
      <li><strong>Client ID:</strong> <code>use the Client ID given by Discord</code></li>
      <li><strong>Client Secret:</strong> <code>use the Client Secret given by Discord</code></li>
      <li><strong>Authorize URL:</strong> https://discordapp.com/api/oauth2/authorize</li>
      <li><strong>Token URL:</strong> https://discordapp.com/api/oauth2/token</li>
      <li><strong>Profile API URL:</strong> https://discordapp.com/api/users/@me</li>
      <li><strong>Scope:</strong> identify email</li>
      <li><strong>JSON Path ID:</strong> id</li>
      <li><strong>JSON Path Name:</strong> username</li>
      <li><strong>JSON Path Email:</strong> email</li>
      <li><strong>Status:</strong> Disabled</li>
    </ul>
  </li>
  <li>Find Discord on the list of OAuth providers and copy the callback URL</li>
  <li>On Discord, navigate to your newly created <strong>App -> OAuth2 -> Redirects</strong>, click Add Redirect, paste the callback URL from Fider and hit Save Changes</li>
  <li>You can now <a href="#oauth-testing">Test</a> this configuration</li>
</ol>

<h4>GitLab</h4>

<ol>
  <li>Navigate to <a href="https://gitlab.com/oauth/applications">https://gitlab.com/oauth/applications</a></li>
  <li>Input an application name, for example, Fider</li>
  <li>GitLab requires you to input the OAuth Redirect URL upon registration. For now, just type any valid URL like http://example.org, we'll change this later</li>
  <li>Select <strong>read_user</strong> on the list of scopes</li>
  <li>After saving, take note of the <strong>Application Id</strong> and <strong>Secret</strong> that is shown</li>
  <li>
    Fill Fider OAuth form as follows and then press Save
    <ul>
      <li><strong>Display Name:</strong> GitLab</li>
      <li><strong>Client ID:</strong> <code>use the Application Id given by GitLab</code></li>
      <li><strong>Client Secret:</strong> <code>use the Secret given by GitLab</code></li>
      <li><strong>Authorize URL:</strong> https://gitlab.com/oauth/authorize</li>
      <li><strong>Token URL:</strong> https://gitlab.com/oauth/token</li>
      <li><strong>Profile API URL:</strong> https://gitlab.com/api/v4/user</li>
      <li><strong>Scope:</strong> read_user</li>
      <li><strong>JSON Path ID:</strong> id</li>
      <li><strong>JSON Path Name:</strong> name</li>
      <li><strong>JSON Path Email:</strong> email</li>
      <li><strong>Status:</strong> Disabled</li>
    </ul>
  </li>
  <li>Find GitLab on the list of OAuth providers and copy the callback URL</li>
  <li>On GitLab, navigate to your newly created application, click Edit and replace the Redirect URL with the copied callback URL from Fider</li>
  <li>You can now <a href="#oauth-testing">Test</a> this configuration</li>
</ol>

<h4>Twitter</h4>

Unfortunately Twitter doesn't fully implement the OAuth2 protocol and the authorization flow. This means we cannot use this process to add Twitter authentication to Fider.

If you'd like to use Twitter as a sign in method for your site, please cast your vote on <a href="https://feedback.fider.io/ideas/1/add-twitter-as-authentication-method" target="_blank">Add Twitter as authentication method</a> as this requires internal changes to Fider.
