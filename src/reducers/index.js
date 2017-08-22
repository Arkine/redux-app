import { combineReducers } from 'redux'
import { articles, articlesLoaded } from './articles'

const rootReducer = combineReducers({
  articles,
  articlesLoaded
})

export default rootReducer
