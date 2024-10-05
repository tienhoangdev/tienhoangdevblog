import React, { useEffect, useState } from 'react'
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

const CAGRCalculator = () => {
  const [beginingValue, setBeginingValue] = useState(0)
  const [endingValue, setEndingValue] = useState(0)
  const [numberOfYears, setNumberOfYears] = useState(0)
  const [cagr, setCagr] = useState(0)

  useEffect(() => {
    let cargResult = ((Math.pow(endingValue / beginingValue, 1 / numberOfYears) - 1) * 100).toFixed(
      2,
    )
    cargResult = isNaN(cargResult) || cargResult === Infinity ? '-' : cargResult
    setCagr(cargResult)
  }, [beginingValue, endingValue, numberOfYears])

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>CAGR Calculator</CCardHeader>
        <CCardBody>
          <div className="container">
            <h5>CAGR là gì?</h5>
            <p>
              CAGR, hoặc Compound Annual Growth Rate là tỷ lệ tăng trưởng hàng năm kép, Tốc độ tăng
              trưởng hằng năm kép là một thuật ngữ kinh doanh và đầu tư cụ thể cho thu nhập đầu tư
              thường niên hóa trơn tru trong một thời kỳ nhất định
            </p>
            <p>
              Công thức: <b>CAGR = [(Số dư cuối kỳ/ Số dư đầu kỳ) ^1/n] – 1</b>
              <small> (n là số năm đầu tư)</small>
            </p>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="beginingValue">Số dư đầu kỳ:</CFormLabel>
                <CFormInput
                  type="number"
                  id="beginingValue"
                  aria-describedby="beginingValue"
                  onChange={(e) => {
                    setBeginingValue(e.target.value)
                  }}
                />
                <CFormText id="beginingValue"></CFormText>
              </div>
            </CForm>

            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="endingValue">Số dư cuối kỳ:</CFormLabel>
                <CFormInput
                  type="number"
                  id="endingValue"
                  aria-describedby="endingValue"
                  onChange={(e) => setEndingValue(e.target.value)}
                />
                <CFormText id="endingValue"></CFormText>
              </div>
            </CForm>

            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="numberOfYears">Số năm đầu tư:</CFormLabel>
                <CFormInput
                  type="number"
                  id="numberOfYears"
                  aria-describedby="numberOfYears"
                  onChange={(e) => setNumberOfYears(e.target.value)}
                />
                <CFormText id="numberOfYears"></CFormText>
              </div>
            </CForm>
            <CCallout color="primary">CAGR: {cagr}%</CCallout>
          </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default CAGRCalculator
