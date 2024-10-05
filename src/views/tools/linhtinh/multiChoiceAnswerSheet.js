import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CFormInput,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormCheck,
  CFormFeedback,
} from '@coreui/react'
import { addData } from '../../../services/indexedDB'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import * as Yup from 'yup'

// Format data trắc nghiệm
// numberOfQuestion: 50,
// point: 10,
// description:...,
// answers: [{
// review-flag: false,
// correct: false || true,
// answered: false || true
// }]
//
// TODO: Create a new sheet
// TODO: Ask for number of questions
// TODO: Generate schemas for the spreadsheet
// TODO: Save new sheet to the database
// TODO: Render the sheet to UI
// TODO: Let user update it
// TODO: Countdown timer
// TODO: Delete the sheet
const MultiChoiceAnswerSheet = () => {
  const STORE_NAME = 'multi-choice-answer-sheet'
  const [data, setData] = useState([])
  const [showCreateNewSheet, setShowCreateNewSheet] = useState(true)

  const formik = useFormik({
    initialValues: {
      data: [],
    },
    // validationSchema: Yup.object({
    //   data: Yup.array().min(1, 'Must have atleast 1 answer'),
    // }),
    onSubmit: (values) => {
      addData(STORE_NAME, values)
      console.debug('Submited values', values)
    },
  })

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Template trả lời câu hỏi trắc nghiệm</CCardHeader>
        <CCardBody>
          <div className="container">
            <CreateNewAnswerSheetModal isShow={showCreateNewSheet} />
            <CButton color="success">
              <span style={{ color: '#fff' }}>Tạo sheet mới</span>
            </CButton>
            <CForm onSubmit={formik.handleSubmit}>
              <CFormInput type="text" id="data" onChange={(e) => setData(e.target.value)} />
              <CButton color="primary" type="submit" className="mt-2">
                Lưu kết quả
              </CButton>
            </CForm>
          </div>
        </CCardBody>
      </CCard>
    </>
  )
}

const CreateNewAnswerSheetModal = ({ isShow }) => {
  const formik = useFormik({
    initialValues: {
      numberOfQuestions: 50,
      numberOfAnswers: 4,
      typeOfAnswers: 'alphabet',
      allowMultipleAnswers: true,
    },
    validationSchema: Yup.object({
      numberOfQuestion: Yup.number('Không hợp lệ').min(1, 'Số lượng câu hỏi không được nhỏ hơn 1'),
      numberOfAnswers: Yup.number('Không hợp lệ')
        .min(2, 'Số lượng đáp án cho một câu hỏi không được nhỏ hơn 2')
        .max(10, 'Số lượng câu hỏi không được lớn hơn 10'),
    }),
    onSubmit: (values) => {
      console.log('Modal values', values)
    },
  })
  return (
    <>
      <CModal visible={isShow}>
        <CForm>
          <CModalHeader>
            <CModalTitle>Tạo sheet trả lời mới</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormInput
              type="number"
              label="Số lượng câu hỏi:"
              onFocus={(e) => e.target.select()}
              {...formik.getFieldProps('numberOfQuestions')}
              invalid={!!formik.touched.numberOfQuestions && !!formik.errors.numberOfQuestions}
            />
            <CFormFeedback invalid>{formik.errors.numberOfQuestions}</CFormFeedback>
            <CFormInput
              type="number"
              label="Số lượng đáp án cho mỗi câu hỏi:"
              onFocus={(e) => e.target.select()}
              {...formik.getFieldProps('numberOfAnswers')}
              invalid={!!formik.touched.numberOfAnswers && !!formik.errors.numberOfAnswers}
            />
            <CFormFeedback invalid>{formik.errors.numberOfAnswers}</CFormFeedback>
            <CFormCheck type="radio" defaultChecked name="typeOfAnswersRadio" label="Chữ (A-Z)" />
            <CFormCheck type="radio" name="typeOfAnswersRadio" label="Số (1,2,...)" />
            <CFormCheck label="Cho phép chọn nhiều đáp án:" defaultChecked />
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" style={{ color: 'white' }}>
              Huỷ
            </CButton>
            <CButton color="primary" type="submit">
              Lưu
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>
    </>
  )
}

CreateNewAnswerSheetModal.propTypes = {
  isShow: PropTypes.bool,
}

export default MultiChoiceAnswerSheet
