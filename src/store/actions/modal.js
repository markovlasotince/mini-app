import actionTypes from '../actionTypes';

// SHOW/HIDE MODAL
export const showModal = name => ({
  type: actionTypes.SHOW_MODAL,
  show: true,
  name,
});

export const hideModal = () => ({
  type: actionTypes.HIDE_MODAL,
  hide: false,
});