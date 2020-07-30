import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <div>
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleClearSelectedOption}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            className="option-modal"
        >
            <h3 className="option-modal__Title">Selected Option</h3>
            {props.selectedOption &&
            <p className="option-modal__body">{props.selectedOption}</p>
            }
            <button
                className="button"
                onClick={props.handleClearSelectedOption}
            >OK
            </button>
        </Modal>
    </div>
);

export default OptionModal;