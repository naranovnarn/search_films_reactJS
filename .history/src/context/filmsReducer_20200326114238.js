import { GET_FILMS, SEARCH_FILM, GET_TAGS } from './filmsTypes'

const handlers = {
  DEFAULT: state => state,
  [GET_FILMS] : (state, action) => ({...state, films: action.payload}),
  [SEARCH_FILM] : (state, action) => ({...state, films: action.payload}),
  [GET_TAGS]
}

export const filmsReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}