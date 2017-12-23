export const COPY_EMAIL = 'COPY_EMAIL';
export const UNSET_SNACKBAR = 'UNSET_SNACKBAR';

const initialState = {
  copied: false,
  snackText: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case COPY_EMAIL:
      return {
        ...state,
        copied: true,
        snackText: 'Email copied to clipboard!',
      }
    case UNSET_SNACKBAR:
      return {
        ...state,
        copied: false,
        snackText: '',
      }
    default:
      return state
  }
}

export const copyEmail = () => {
  return dispatch => {
    dispatch({
      type: COPY_EMAIL
    })
  }
}

export const unsetSnackbar = () => {
  return dispatch => {
    dispatch({
      type: UNSET_SNACKBAR
    })
  }
}