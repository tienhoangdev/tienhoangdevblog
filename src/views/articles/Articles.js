import React from 'react'
import { useEffect, useState } from 'react'
import { CMS_API } from 'src/services'
import ArticleCard from './articleCard'
import { CCol, CRow, CContainer } from '@coreui/react'

const Articles = () => {
  const [articleList, setArticleList] = useState([])
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalArticles, setTotalArticles] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [keywordStats, setKeyWordStats] = useState({})

  useEffect(() => {
    CMS_API.getArticleList({ page, pageSize }).then((results) => {
      setArticleList(results.data.data)
      setTotalArticles(results.data.totalArticles)
      setTotalPages(results.data.totalPages)
      setCurrentPage(results.data.currentPage)
      console.log('[Tim] result getting article list', results)
    })
  }, [page, pageSize])

  useEffect(() => {
    if (articleList.length) {
      const uniqueKeywords = articleList.reduce((acc, current) => {
        for (const keyword of current?.keywords) {
          if (!acc.includes(keyword)) acc.push(keyword)
        }
        return acc
      }, [])
      if (uniqueKeywords.length) {
        CMS_API.getArticleStats(uniqueKeywords.join(',')).then((results) => {
          console.log('[Tim debug] results.data.result', results.data.result)
          setKeyWordStats(results.data.result)
        })
      }
    }
  }, [articleList])
  return (
    <CContainer>
      <CRow>
        {articleList.map((article) => (
          <CCol key={article?.id}>
            <ArticleCard article={article} keywordStats={keywordStats} />
          </CCol>
        ))}
      </CRow>
    </CContainer>
  )
}

export default Articles
