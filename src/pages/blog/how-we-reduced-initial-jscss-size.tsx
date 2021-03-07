import { BlogArticle } from '@app/components'
import MDXDocument from '@content/blog/how-we-reduced-initial-jscss-size.mdx'

export const metadata = {
  title: 'How we reduced our initial JS/CSS size by 67%',
  publishedOn: new Date('2018-10-24T00:00:00Z'),
  slug: 'how-we-reduced-initial-jscss-size',
  cover: 'how-we-reduced-initial-jscss-size.jpg',
  excerpt:
    'We have been working on reducing the amount of bytes that we send to all Fider users. Being a web application built with React, we have focused on JS and CSS. On this post we share our learnings, some concepts and suggestions on how you can do the same with your web application.',
}

export default function BlogPost(): JSX.Element {
  return (
    <BlogArticle {...metadata}>
      <MDXDocument />
    </BlogArticle>
  )
}
