/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./modalWindow.scss";

import icon from "../../assets/close-button.svg";

const ModalWindow = ({ isOpen, title, children, closeModal }) => {
  useEffect(() => {
    if (isOpen) {
      const parent = document.getElementsByClassName("modal-window-wrapper")[0];
      parent.classList.add("show-up-animation");
    }
  }, [isOpen]);

  if (isOpen) {
    document.body.classList.add("non-scrollable");

    return (
      <div className="modal-window-wrapper">
        <div className="modal-window-header">
          <span className="header-title">{title}</span>
          <input
            type="image"
            className="header-icon"
            onClick={closeModal}
            src={icon}
          />
        </div>
        <div className="modal-window-content">{children}</div>
      </div>
    );
  }

  return null;
};
const mapStateToProps = (state) => ({
  isOpen: state.utils.modalOpen,
  title: state.utils.name,
});

ModalWindow.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};

ModalWindow.defaultProps = {
  title: "",
};

export default connect(mapStateToProps)(ModalWindow);
