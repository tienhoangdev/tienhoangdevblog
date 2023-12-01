import React, { useState } from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CFormLabel,
  CFormInput,
  CFormText,
  CCallout,
} from '@coreui/react'

const AgeCalculator = () => {
  const [age, setAge] = useState(0)

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Age Calculator</CCardHeader>
        <CCardBody>
          <div className="container">
            <h5>Nhập số tuổi của bạn để in ra số tuổi của bạn</h5>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="age">Nhập số tuổi của bạn:</CFormLabel>
                <CFormInput
                  type="number"
                  id="age"
                  aria-describedby="age"
                  onChange={(e) => {
                    setAge(e.target.value)
                  }}
                />
                <CFormText id="age"></CFormText>
              </div>
            </CForm>
            <CCallout color="primary">Tuổi của bạn là: {age}</CCallout>
          </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default AgeCalculator
