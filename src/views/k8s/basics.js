import React, { useEffect, useState } from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'
import MDEditor from '@uiw/react-md-editor'
import Code from '../../components/Code'

const KubernetesBasics = () => {
  const [markdownStr, setMarkdownStr] = useState('')

  useEffect(() => {
    import('./markdowns/Kubernetes Basics.md').then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setMarkdownStr(response))
        .catch((err) => console.log(err)),
    )
  }, [])

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Kubernetes basics</CCardHeader>
        <CCardBody>
          <div className="container">
            <MDEditor.Markdown source={markdownStr} components={{ code: Code }} />
          </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default KubernetesBasics
