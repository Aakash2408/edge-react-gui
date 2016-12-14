import * as ACTION from './CachedUsers.action'
import { LOG_IN_USERNAME } from '../Login/Login.action'

export const users = (state = [], action) => {
  switch (action.type) {
    case ACTION.SET_CACHED_USERS :
      return action.data

    case ACTION.DELETE_USER_FROM_CACHE :
      console.log(action.data)
      return state.filter(user => user !== action.data)

    default:
      return state
  }

  return state
}

export const selectedUserToLogin = (state = null, action) => {
  switch (action.type) {
    case ACTION.SELECT_USER_LOGIN :
      return action.data

    case ACTION.REMOVE_USER_LOGIN :
      return null

    default:
      return state
  }
}

export const userToDeleteFromUserCache = (state = '', action) => {
  switch (action.type) {
    case ACTION.USER_TO_DELETE_FROM_CACHE :
      return action.data

    default:
      return state
  }
}
