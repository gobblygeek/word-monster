/*
 * action types
 */
export const GET_USER_DATA = 'GET_USER_DATA'
export const GET_NAV_DATA = 'GET_NAV_DATA'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function doLogin(text) {
  return { type: GET_USER_DATA, text }
}

export function getNavData(index) {
  return { type: GET_NAV_DATA, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
