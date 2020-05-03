import React from "react";
import { connect } from "react-redux";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";

// components
import ModalWindow from "../../components/ModalWindow";

// actions
import { showModal, hideModal } from "../../store/actions/modal";

const Login = ({ showModal, hideModal }) => {
  const setProps = (name) => {
    showModal(name);
  };

  return (
    <div className="login-page-wrapper">
      <button
        className="single-image button-base-styles"
        onClick={() => setProps("Please, enter your username and password")}
        type="button"
      >
        Login here
      </button>
      <ModalWindow closeModal={hideModal}>
        <h1>This should be form</h1>
      </ModalWindow>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  showModal: (name) => dispatch(showModal(name)),
  hideModal: () => dispatch(hideModal("HIDE_MODAL", false)),
});

Login.propTypes = {
  showModal: PropTypes.func,
  hideModal: PropTypes.func,
};

Login.defaultProps = {
  showModal: () => {},
  hideModal: () => {},
};

export default hot(module)(connect(null, mapDispatchToProps)(Login));
