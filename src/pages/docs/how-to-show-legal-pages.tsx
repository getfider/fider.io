import { DocumentationPage } from '@app/components'
import MDXDocument from '@content/docs/how-to-show-legal-pages.mdx'
import docs from '@content/docs/all-docs'

export default function DocsPage(): JSX.Element {
  return (
    <DocumentationPage {...docs['how-to-show-legal-pages']}>
      <MDXDocument />
    </DocumentationPage>
  )
}
