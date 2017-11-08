import React from 'react';
import Modal from 'react-modal';

const RemoveExpenseModal = props => (
  <Modal
    isOpen={props.modalIsOpen}
    onRequestClose={props.handleCancelRemove}
    contentLabel="Remove Confirmation"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Remove Confirmation</h3>
    <p className="modal__body">Remove this expense?</p>
    <div className="modal__button">
      <button className="button" onClick={props.handleConfirmRemove}>
        Confirm
      </button>
      <button
        className="button button--secondary"
        onClick={props.handleCancelRemove}
      >
        Cancel
      </button>
    </div>
  </Modal>
);

export default RemoveExpenseModal;
