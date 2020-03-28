import { GET_FILMS } from './filmsTypes'

const handlers = {
  DEFAULT: state => state,
  [GET_FILMS] : (state, action) => ({...state, films: action.payload})
}

export const filmsReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}