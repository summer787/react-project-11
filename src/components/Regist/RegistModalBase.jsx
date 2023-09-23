import ReactModal from "react-modal";
import { bool, string, node, func } from "prop-types";
import { useEffect } from "react";
import closebutton from "@/assets/Regist/close_button_icon.svg";
import style from "./RegistModalBase.module.css";

function RegistModalBase({ isOpen = false, onClose = false, title, children }) {
  useEffect(() => {
    if (isOpen) {
    document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <ReactModal
      isOpen={isOpen}
      onClose={onClose}
      ariaHideApp={false}
      style={{
        overlay: {
          background: "rgb(0,0,0,0.8)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
        content: {
          background: "	rgb(33,33,33) ",
          width: "40rem",
          height: "30rem",
          display: "flex",
          flexDirection: "column",
          border: "none",
          position: "relative",
        },
      }}
    >
      <header className={style.modal__header}>
        <h1 className={style.modal__title}>{title}</h1>
        <button
          type="button"
          className={style.modal__close__button}
          onClick={onClose}
          aria-label="Close"
        >
          <img src={closebutton} alt="닫기" />
        </button>
      </header>
      <div className={style.modal__content}>{children}</div>
    </ReactModal>
  );
}

RegistModalBase.defaultProps = {
  isOpen: false,
  onClose: () => {},
  children: node,
  title: "",
};

RegistModalBase.propTypes = {
  isOpen: bool,
  onClose: func,
  children: node,
  title: string,
};

export default RegistModalBase;
