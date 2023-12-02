import React, { useEffect, useState } from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'
import MDEditor from '@uiw/react-md-editor'
import Code from '../../components/Code'

const NodejsEventLoop = () => {
  const [markdownStr, setMarkdownStr] = useState('')

  useEffect(() => {
    import('./markdowns/Node js Eventloop d01db081fb184ceda0c67ccbbbb5a338.md').then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setMarkdownStr(response))
        .catch((err) => console.log(err)),
    )
  }, [])

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Node.js Event loop</CCardHeader>
        <CCardBody>
          <div className="container">
            <MDEditor.Markdown source={markdownStr} components={{ code: Code }} />
          </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default NodejsEventLoop
