import { DocumentationPage } from '@app/components'
import MDXDocument from '@content/docs/hosting-instance.mdx'
import docs from '@content/docs/all-docs'

export default function DocsPage(): JSX.Element {
  return (
    <DocumentationPage {...docs['hosting-instance']}>
      <MDXDocument />
    </DocumentationPage>
  )
}
