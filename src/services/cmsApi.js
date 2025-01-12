import axios from 'axios'
import { Service } from '../config'

export const getArticleList = async ({ page = 1, pageSize = 10, keywords, sortby, sorttype }) => {
  return axios.get(`${Service.CMS_API_HOST}/articles`, {
    params: { page, pageSize, keywords, sortby, sorttype },
  })
}

export const getArticleStats = async (keywords) => {
  return axios.get(`${Service.CMS_API_HOST}/articles/statistics`, {
    params: {
      keywords,
    },
  })
}
export const getArticleById = async (id) => {
  return axios.get(`${Service.CMS_API_HOST}/articles/${id}`).then((result) => result.data)
}

export const fetchArticleMDContent = async (link) => {
  return axios.get(link)
}
