import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CFormLabel,
  CFormInput,
  CFormText,
  CFormFeedback,
  CCallout,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
  CCol,
  CFormSelect,
  CFormCheck,
  CButton,
} from '@coreui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const ResultLineChart = ({ dataSet }) => {
  console.log('dataSet', dataSet)
  const data = {
    labels: [...dataSet.map((item) => item.age)],
    datasets: [
      {
        label: 'Tài sản',
        data: [...dataSet.map((item) => item.futureValue)],
        // backgroundColor: 'rgba(54, 162, 235, 0.2)',
        // borderColor: 'rgba(54, 162, 235, 1)',
        fill: false,
        borderWidth: 1,
        cubicInterpolationMode: 'monotone',
        tension: 0.4,
      },
      {
        label: 'Vốn',
        data: [...dataSet.map((item) => item.capitalValue)],
        // backgroundColor: 'rgba(54, 162, 235, 0.2)',
        // borderColor: 'rgba(54, 162, 235, 1)',
        fill: false,
        borderWidth: 1,
        cubicInterpolationMode: 'monotone',
        tension: 0.4,
      },
    ],
  }

  const options = {
    // Add your desired options here
  }

  return (
    <>
      <Line data={data} options={options} />
    </>
  )
}

function calculateCompoundInterest({
  currentAmount,
  monthlyInvestment,
  startingAge,
  investmentYears,
  interestRate,
}) {
  const result = []
  let currentValue = currentAmount + monthlyInvestment * 12
  for (let i = 1; i <= investmentYears; i++) {
    let futureValue = currentValue * (1 + interestRate / 100)
    result.push({
      year: i,
      age: startingAge + i,
      capitalValue: currentAmount + monthlyInvestment * 12 * i,
      futureValue,
    })
    currentValue = futureValue + monthlyInvestment * 12
  }
  return result
}

const InvestingResultTable = () => {
  return <>Table</>
}

const FinancialFreedom = () => {
  const [dataSet, setDataSet] = useState([])
  const [isResultChartShow, setIsResultChartShow] = useState(false)

  useEffect(() => {}, [])
  const formik = useFormik({
    initialValues: {
      currentAmount: 10000000,
      monthlyInvestment: 5000000,
      interestRate: 10,
      investmentYears: 10,
      startingAge: 20,
      investingGoal: 0,
    },
    validationSchema: Yup.object({
      currentAmount: Yup.number('Không hợp lệ')
        .min(0, 'Số tiền đang đầu tư không được nhỏ hơn 0')
        .required('Nhập số tiền đang đầu tư'),
      monthlyInvestment: Yup.number('Không hợp lệ')
        .min(0, 'Số tiền đầu tư hàng tháng không được nhỏ hơn 0')
        .required('Nhập số tiền đầu tư hàng tháng'),
      interestRate: Yup.number('Không hợp lệ')
        .min(0, 'Lãi suất đầu tư hàng năm phải lớn hơn 0%')
        .required('Nhập lãi suất đầu tư hàng năm'),
      startingAge: Yup.number('Không hợp lệ')
        .min(0, 'Tuổi bắt đầu đầu tư không được nhỏ hơn 0')
        .max(100, 'Bạn đùa tôi à?')
        .required('Nhập số tuổi khi bắt đầu đầu tư'),
      investmentYears: Yup.number('Không hợp lệ')
        .min(1, 'Số năm đầu tư không được nhỏ hơn 1')
        .required('Nhập số năm đầu tư'),
    }),
    onSubmit: (values) => {
      console.log('Values submitted', values)
      const result = calculateCompoundInterest(values)
      setDataSet(result)
      if (!isResultChartShow) setIsResultChartShow(true)
      console.log('Results', result)
    },
  })
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Kế hoạch tài chính</CCardHeader>
        <CCardBody>
          <div className="container">
            <CAccordion activeItemKey={2}>
              <CAccordionItem itemKey={1}>
                <CAccordionHeader>Nhập kế hoạch tài chính của bạn tại đây</CAccordionHeader>
                <CAccordionBody>
                  <CForm className="row g-3" onSubmit={formik.handleSubmit}>
                    <CCol md={6}>
                      <CFormInput
                        type="number"
                        id="currentAmount"
                        label="Số tiền đang đầu tư hiện tại"
                        onFocus={(e) => e.target.select()}
                        {...formik.getFieldProps('currentAmount')}
                        invalid={!!formik.touched.currentAmount && !!formik.errors.currentAmount}
                      />
                      <CFormFeedback invalid>{formik.errors.currentAmount}</CFormFeedback>
                    </CCol>
                    <CCol md={6}>
                      <CFormInput
                        type="number"
                        id="monthlyInvestment"
                        label="Số tiền đầu tư thêm hàng tháng"
                        onFocus={(e) => e.target.select()}
                        {...formik.getFieldProps('monthlyInvestment')}
                        invalid={
                          !!formik.touched.monthlyInvestment && !!formik.errors.monthlyInvestment
                        }
                      />
                      <CFormFeedback invalid>{formik.errors.monthlyInvestment}</CFormFeedback>
                    </CCol>
                    <CCol xs={4}>
                      <CFormInput
                        type="number"
                        id="startingAge"
                        label="Số tuổi của bạn khi bắt đầu đầu tư"
                        onFocus={(e) => e.target.select()}
                        {...formik.getFieldProps('startingAge')}
                        invalid={!!formik.touched.startingAge && !!formik.errors.startAge}
                      />
                      <CFormFeedback invalid>{formik.errors.startingAge}</CFormFeedback>
                    </CCol>

                    <CCol xs={4}>
                      <CFormInput
                        type="number"
                        id="investmentYears"
                        label="Số năm đầu tư"
                        onFocus={(e) => e.target.select()}
                        {...formik.getFieldProps('investmentYears')}
                        invalid={
                          !!formik.touched.investmentYears && !!formik.errors.investmentYears
                        }
                      />
                      <CFormFeedback invalid>{formik.errors.investmentYears}</CFormFeedback>
                    </CCol>

                    <CCol xs={4}>
                      <CFormInput
                        type="number"
                        id="interestRate"
                        label="Lãi suất đầu tư hàng năm (%)"
                        onFocus={(e) => e.target.select()}
                        {...formik.getFieldProps('interestRate')}
                        invalid={!!formik.touched.interestRate && !!formik.errors.interestRate}
                      />
                      <CFormFeedback invalid>{formik.errors.interestRate}</CFormFeedback>
                    </CCol>
                    <CCol xs={2}>
                      <CFormInput
                        type="text"
                        id="unit"
                        label="Đơn vị tính"
                        value={'VND'}
                        disabled
                      />
                    </CCol>
                    <CCol xs={12}>
                      <CButton color="primary" type="submit">
                        Hiển thị kết quả
                      </CButton>
                    </CCol>
                  </CForm>
                </CAccordionBody>
              </CAccordionItem>
            </CAccordion>
            {isResultChartShow && (
              <CCallout color="success">
                Bạn sẽ có {Math.floor(dataSet[dataSet.length - 1].futureValue).toLocaleString()} VND
                vào năm bạn {dataSet[dataSet.length - 1].age} tuổi. Sau {dataSet.length} năm đầu tư
                với lãi suất {formik.values.interestRate}% một năm và{' '}
                {formik.values.monthlyInvestment.toLocaleString()} VND đầu tư mỗi tháng
              </CCallout>
            )}
            {isResultChartShow && <ResultLineChart dataSet={dataSet} />}
          </div>
        </CCardBody>
      </CCard>
    </>
  )
}

ResultLineChart.propTypes = {
  dataSet: PropTypes.array.isRequired,
}

export default FinancialFreedom
