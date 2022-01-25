import ReactDOM from "react-dom";
import classes from "../UI/Modal.module.css";

const Backdrop = () => {
  return <div className={classes.backdrop} />
}

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById('modals-container')

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement)}
    </>
  );
}

export default Modal;