import { DocumentationPage } from '@app/components'
import MDXDocument from '@content/docs/hosting-on-gcp.mdx'
import docs from '@content/docs/all-docs'

export default function DocsPage(): JSX.Element {
  return (
    <DocumentationPage {...docs['hosting-on-gcp']}>
      <MDXDocument />
    </DocumentationPage>
  )
}
