import React, { useEffect } from "react";
import { connect } from "react-redux";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";

// components
import ModalWindow from "../../components/ModalWindow";
import LoginForm from "../../components/Forms/LoginForm";

import "./login.scss";

// actions
import { showModal, hideModal } from "../../store/actions/modal";

const Login = ({ showModal, hideModal }) => {
  const modalTitle = "Please, enter your username and password";
  const setProps = (name) => {
    showModal(name);
  };

  useEffect(() => {
    showModal(modalTitle);
  });

  return (
    <div className="login-page-wrapper">
      <button
        className="login-button"
        onClick={() => setProps(modalTitle)}
        type="button"
      >
        Click here to login
      </button>
      <ModalWindow closeModal={hideModal}>
        <LoginForm />
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
