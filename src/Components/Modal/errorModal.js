import React from 'react';
import './style.css';
import { Modal } from 'react-responsive-modal';
import styles from './errorModal.module.css';
import 'react-responsive-modal/styles.css';

const closeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-x" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M10 10l4 4m0 -4l-4 4" />
    </svg>
);


const ErrorModal = (props) => {
    const parseError = (error) => {
        try {
            return typeof error === 'string' ? JSON.parse(error).message : error;
        } catch (e) {
            return error;
        }
    }
  
    return (
        <>   
            <Modal
            open={props.open}
            onClose={() => props.onClose()}
            center
            classNames= {{
                overlay: 'customOverlay',
                modal: 'customModal',
            }}
            closeIcon={closeIcon}
            >
                <div className={styles.modalContainer}>
                    <h2 className={styles.modalHeader}>There was an error:</h2>
                    <h3 className={styles.modalText}>{parseError(props.errorMessage).message}</h3>
                </div>
            </Modal>
        </>
    );
};

export default ErrorModal;