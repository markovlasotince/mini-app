import actionTypes from '../actionTypes';

const initialState = {
  modalOpen: false,
  name: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MODAL:
      return {
        modalOpen: action.show,
        name: action.name,
      };
    case actionTypes.HIDE_MODAL:
      return {
        modalOpen: action.hide,
      };
    default:
      return state;
  }
};
