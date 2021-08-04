import React, { Component } from "react";
import { createPortal } from "react-dom";
import styles from "./BurgerModal.module.css";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleEsc);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEsc);
    const body = document.querySelector("body");
    body.style.overflow = "auto";
  }

  handleEsc = (e) => {
    if (e.code === "Escape") {
      this.props.hideModal();
    }
  };
  onHandleClick = () => {
    this.props.hideModal();
  };
  handleBackdropClick = (e) => {
    if (e.target !== e.currentTarget) return;
    this.props.hideModal();
  };

  render() {
    return createPortal(
      <div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
