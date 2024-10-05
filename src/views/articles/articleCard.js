import React, { useState } from 'react'
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton, CBadge } from '@coreui/react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const NO_THUMBNAIL_SRC = `${process.env.REACT_APP_MINIO_HOST}/public-assets/images/no-thumbnail.jpg`

const ArticleCard = ({ article, keywordStats }) => {
  const { id, title, keywords, thumbnail, description } = article
  const [thumbnailSrc, setThumbnailSrc] = useState(thumbnail)
  const navigate = useNavigate()

  const handleThumbnailError = () => {
    setThumbnailSrc(NO_THUMBNAIL_SRC)
  }

  const showArticleContent = (articleId) => {
    navigate(`/articles/${articleId}`)
  }

  return (
    <>
      <CCard style={{ width: '18rem' }}>
        <CCardImage
          width={285}
          height={215}
          orientation="top"
          src={thumbnailSrc}
          onError={handleThumbnailError}
          style={{ cursor: 'pointer' }}
          onClick={() => showArticleContent(id)}
        />
        <CCardBody>
          <CCardTitle style={{ cursor: 'pointer' }} onClick={() => showArticleContent(id)}>
            {title}
          </CCardTitle>
          <CCardText>{description}</CCardText>
          {keywords.map((keyword) => (
            <>
              <CButton color="light" className="position-relative m-1" shape="rounded-pill">
                {keyword}
                <CBadge color="danger" shape="rounded-pill" className="m-1">
                  {keywordStats?.[keyword] || 1} <span className="visually-hidden">bài viết</span>
                </CBadge>
              </CButton>
            </>
          ))}
        </CCardBody>
      </CCard>
    </>
  )
}

ArticleCard.propTypes = {
  article: PropTypes.objectOf({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, // id can be a number or a string
    title: PropTypes.string.isRequired,
    keywords: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of strings
    thumbnail: PropTypes.string.isRequired, // URL to the image, assuming it's a string
    description: PropTypes.string.isRequired,
  }),
  keywordStats: PropTypes.any,
}
export default ArticleCard
