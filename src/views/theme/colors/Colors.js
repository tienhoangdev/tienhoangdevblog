import React, { useEffect, useState } from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'
import MDEditor from '@uiw/react-md-editor'
import Code from '../../../components/Code'

const Colors = () => {
  const [markdownStr, setMarkdownStr] = useState('')

  useEffect(() => {
    import('src/assets/markdown/test-golang-doc/test-golang-doc.md').then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setMarkdownStr(response))
        .catch((err) => console.log(err)),
    )
  }, [])

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          Test coding blog
          {/* <DocsLink href="https://coreui.io/docs/utilities/colors/" /> */}
        </CCardHeader>
        <CCardBody>
          <div className="container">
            {/* <MDEditor */}
            {/*   value={markdownStr} */}
            {/*   onChange={setMarkdownStr} */}
            {/*   previewOptions={{ */}
            {/*     components: { */}
            {/*       code: Code, */}
            {/*     }, */}
            {/*   }} */}
            {/* /> */}
            <MDEditor.Markdown source={markdownStr} components={{ code: Code }} />
          </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Colors
