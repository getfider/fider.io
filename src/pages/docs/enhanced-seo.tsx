import { DocumentationPage } from '@app/components'
import MDXDocument from '@content/docs/enhanced-seo.mdx'
import docs from '@content/docs/all-docs'

export default function DocsPage(): JSX.Element {
  return (
    <DocumentationPage {...docs['enhanced-seo']}>
      <MDXDocument />
    </DocumentationPage>
  )
}
