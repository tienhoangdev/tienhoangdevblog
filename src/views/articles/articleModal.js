import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { CMS_API } from 'src/services'
import { toast } from 'react-toastify'
import {
  CModal,
  CModalTitle,
  CModalHeader,
  CModalBody,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CCol,
  CRow,
  CCardImage,
} from '@coreui/react'
import MDEditor from '@uiw/react-md-editor'
import Code from '../../components/Code'
import moment from 'moment'
import { readingTime } from 'reading-time-estimator'

const NO_THUMBNAIL_SRC = `${process.env.REACT_APP_MINIO_HOST}/public-assets/images/no-thumbnail.jpg`

const ArticleModal = ({ visible = false, articleId, handleCloseArticleModal }) => {
  const [articleInfo, setArticleInfo] = useState(null)
  const [articleMarkdownContent, setArticleMarkDownContent] = useState('')
  const [publishedDateDiff, setPublishedDateDiff] = useState(0)
  // const [articleThumbnailUrl, setArticleThumbnailUrl] = useState('')
  const [readTimeEstimation, setReadTimeEstimation] = useState({
    words: 0,
    text: 'less than a minute read',
    minutes: 0,
  })
  const [thumbnail, setThumbnail] = useState('')

  useEffect(() => {
    if (articleId) {
      CMS_API.getArticleById(articleId)
        .then((response) => {
          setArticleInfo(response)
          setPublishedDateDiff(moment().diff(response.publish_on, 'days'))
          setThumbnail(response.thumbnail)
          CMS_API.fetchArticleMDContent(response.content)
            .then((data) => {
              setArticleMarkDownContent(data.data)
              const readingTimeEstimation = readingTime(data.data)
              setReadTimeEstimation(readingTimeEstimation)
            })
            .catch((e) => {
              console.error(e)
              toast.error('Không tải được bài viết')
            })
        })
        .catch((e) => {
          console.error(e)
          toast.error('Không tải được bài viết')
        })
    }
  }, [articleId])

  const handleImageError = () => {
    setThumbnail(NO_THUMBNAIL_SRC)
  }

  return (
    <CModal
      fullscreen="lg"
      size="xl"
      visible={visible}
      onClose={handleCloseArticleModal}
      aria-labelledby="FullscreenArticleModal"
    >
      <CModalHeader>
        <CModalTitle id="FullscreenArticleModal">{articleInfo?.title}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CCard className="mb-3">
          <CRow className="g-0">
            <CCol md={4}>
              <CCardImage
                src={thumbnail}
                style={{ objectFit: 'cover' }}
                onError={handleImageError}
              />
            </CCol>
            <CCol md={8}>
              <CCardBody>
                <CCardTitle>{articleInfo?.title}</CCardTitle>
                <CCardText>{articleInfo?.description}</CCardText>
                <CCardText>
                  <small className="text-body-secondary">
                    Được đăng {publishedDateDiff} ngày trước
                  </small>
                </CCardText>

                <CCardText>
                  <small className="text-body-secondary">
                    Độ dài: {readTimeEstimation.words} từ
                  </small>
                </CCardText>

                <CCardText>
                  <small className="text-body-secondary">{readTimeEstimation.text}</small>
                </CCardText>
              </CCardBody>
            </CCol>
          </CRow>
        </CCard>
        <div className="container">
          <MDEditor.Markdown source={articleMarkdownContent} components={{ code: Code }} />
        </div>
      </CModalBody>
    </CModal>
  )
}

ArticleModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  articleId: PropTypes.number.isRequired,
  handleCloseArticleModal: PropTypes.func.isRequired,
}
export default ArticleModal
