import React, { useState } from 'react';
import './Modal.scss';

const Modal = ({openModal,closeModal}) => {


  return (
  <>
      {openModal && (
        <div className="modal-container">
          <div className="modal">
            <button className="close-btn" onClick={()=>closeModal(!openModal)}>
              &times;
            </button>
            
            <div className='modal-content'>
                Could not complete due to time limit
            </div>
            {/* Add your modal content here */}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
