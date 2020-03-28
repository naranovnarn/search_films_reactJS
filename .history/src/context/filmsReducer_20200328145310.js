import { GET_FILMS, SEARCH_FILM, GET_TAGS, GET_FILMS_TAG, GET_LIST_TAGS, RE_RENDER, GET_MORE_FILMS } from './filmsTypes'

const handlers = {
  DEFAULT: state => state,
  [GET_FILMS] : (state, action) => ({...state, films: action.payload}),
  [SEARCH_FILM] : (state, action) => ({...state, films: action.payload}),
  [GET_TAGS]: (state, action) => ({...state, tages: action.payload}),
  [GET_FILMS_TAG]: (state, action) => ({...state, tages: action.payload}),
  [GET_LIST_TAGS]: (state, action) => ({...state, toogleOpen: action.payload}),
  [RE_RENDER]: (state) => ({...state}),
  [GET_MORE_FILMS]: (state) => ({...state, countItem: state.countItem + 15 })
}

export const filmsReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}