import { DocumentationPage } from '@app/components'
import MDXDocument from '@content/docs/using-webhooks.mdx'
import docs from '@content/docs/all-docs'

export default function DocsPage(): JSX.Element {
  return (
    <DocumentationPage {...docs['using-webhooks']}>
      <MDXDocument />
    </DocumentationPage>
  )
}
