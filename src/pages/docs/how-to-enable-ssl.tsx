import { DocumentationPage } from '@app/components'
import MDXDocument from '@content/docs/how-to-enable-ssl.mdx'
import docs from '@content/docs/all-docs'

export default function DocsPage(): JSX.Element {
  return (
    <DocumentationPage {...docs['how-to-enable-ssl']}>
      <MDXDocument />
    </DocumentationPage>
  )
}
