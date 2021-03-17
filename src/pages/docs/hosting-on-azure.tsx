import { DocumentationPage } from '@app/components'
import MDXDocument from '@content/docs/hosting-on-azure.mdx'
import docs from '@content/docs/all-docs'

export default function DocsPage(): JSX.Element {
  return (
    <DocumentationPage {...docs['hosting-on-azure']}>
      <MDXDocument />
    </DocumentationPage>
  )
}
