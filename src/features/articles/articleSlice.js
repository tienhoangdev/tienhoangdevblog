import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { CMS_API } from 'src/services'

const initialState = {
  articles: [],
  keywordsFilter: undefined,
  sortby: 'publish_on',
  sorttype: 'desc',
  isArticlesLoading: false,
  error: null,
  totalArticles: 0,
  totalPages: 0,
  currentPage: 1,
  page: 1,
  pageSize: 10,
  keywordStats: {},
  isKeywordStatLoading: false,
}

export const fetchArticleStatsByKeywords = createAsyncThunk(
  'articles/fetchArticleStatsByKeywords',
  async (keywords, { rejectWithValue }) => {
    try {
      return CMS_API.getArticleStats(keywords)
    } catch (error) {
      toast.error(
        'Get articles stats by keywords failed: ' + error?.response?.data?.error ||
          'Something went wrong',
      )
      return rejectWithValue(error)
    }
  },
)

export const fetchArticleList = createAsyncThunk(
  'articles/getList',
  async (params, { rejectWithValue }) => {
    try {
      return CMS_API.getArticleList(params)
    } catch (error) {
      toast.error(
        'Get list articles failed: ' + error?.response?.data?.error || 'Something went wrong',
      )
      return rejectWithValue(error)
    }
  },
)

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    updateKeywordsFilter: (state, action) => {
      state.keywordsFilter = action.payload
    },
    clearKeywordsFilter: (state) => {
      state.keywordsFilter = undefined
    },
    deleteKeywordInFilter: (state, action) => {
      state.keywordsFilter = state.keywordsFilter
        ?.split(',')
        ?.filter((keyword) => keyword !== action.payload)
        ?.join(',')
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticleStatsByKeywords.pending, (state) => {
      state.isArticlesLoading = true
      state.error = null
    })
    builder.addCase(fetchArticleStatsByKeywords.fulfilled, (state, action) => {
      state.isArticlesLoading = false
      state.keywordStats = action.payload.data.data
      state.error = null
    })

    builder.addCase(fetchArticleList.pending, (state) => {
      state.isArticlesLoading = true
      state.error = null
    })

    builder.addCase(fetchArticleList.fulfilled, (state, action) => {
      state.isArticlesLoading = false
      state.articles = action.payload.data.data
      state.totalArticles = action.payload.data.totalArticles
      state.totalPages = action.payload.data.totalPages
      state.currentPage = action.payload.data.totalPages
      state.error = null
    })

    builder.addCase(fetchArticleList.rejected, (state, action) => {
      state.isArticlesLoading = false
      state.error = action.payload
    })
  },
})

export const { updateKeywordsFilter, clearKeywordsFilter, deleteKeywordInFilter } =
  articleSlice.actions
export default articleSlice.reducer
