export const COPY_EMAIL = 'COPY_EMAIL';
export const UNSET_SNACKBAR = 'UNSET_SNACKBAR';
export const OPEN_DIALOG = 'OPEN_DIALOG';
export const CLOSE_DIALOG = 'CLOSE_DIALOG';

const initialState = {
  copied: false,
  snackText: '',
  dialog: false,
  dialogHtml: null,
  dialogBtnColor: '#aaa',
  dialogBgColor: '#eee',
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
    case OPEN_DIALOG:
      return {
        ...state,
        dialog: true,
        dialogHtml: action.payload
      }
    case CLOSE_DIALOG:
      return {
        ...state,
        dialog: false,
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

export const openDialog = (html) => {
  return dispatch => {
    dispatch({
      type: OPEN_DIALOG,
      payload: html,
    })
  }
}

export const closeDialog = () => {
  return dispatch => {
    dispatch({
      type: CLOSE_DIALOG
    })
  }
}