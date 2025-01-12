import React from 'react'
import { useEffect, useState } from 'react'
import { CMS_API } from 'src/services'
import ArticleCard from './articleCard'
import { CCol, CRow, CContainer } from '@coreui/react'
import { fetchArticleList, fetchArticleStatsByKeywords } from 'src/features/articles/articleSlice'
import { useDispatch, useSelector } from 'react-redux'

const Articles = () => {
  const dispatch = useDispatch()
  const { keywordStats, articles, keywordsFilter, page, pageSize } = useSelector(
    (state) => state.articles,
  )

  useEffect(() => {
    dispatch(fetchArticleList({ page, pageSize, keywords: keywordsFilter }))
  }, [page, pageSize, keywordsFilter])

  useEffect(() => {
    if (articles.length) {
      const uniqueKeywords = articles.reduce((acc, current) => {
        for (const keyword of current?.keywords) {
          if (!acc.includes(keyword)) acc.push(keyword)
        }
        return acc
      }, [])
      if (uniqueKeywords.length) {
        dispatch(fetchArticleStatsByKeywords(uniqueKeywords.join(',')))
      }
    }
  }, [articles])
  return (
    <CContainer>
      <CRow>
        {articles?.length &&
          articles.map((article) => (
            <CCol key={article?.id}>
              <ArticleCard article={article} keywordStats={keywordStats} />
            </CCol>
          ))}
      </CRow>
    </CContainer>
  )
}

export default Articles
