import { DocumentationPage } from '@app/components'
import MDXDocument from '@content/docs/configuring-oauth.mdx'
import docs from '@content/docs/all-docs'

export default function DocsPage(): JSX.Element {
  return (
    <DocumentationPage {...docs['configuring-oauth']}>
      <MDXDocument />
    </DocumentationPage>
  )
}
