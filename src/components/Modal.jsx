import './Modal.css'

function Modal({title, onCancel, onConfirm}) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{ title }</p>
        <div className="modal__buttons">
          <button onClick={onCancel} className="btn btn__cancel">Cancel</button>
          <button onClick={onConfirm} className="btn">Confirm</button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal