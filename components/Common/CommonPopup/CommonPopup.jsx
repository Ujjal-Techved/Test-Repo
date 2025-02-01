import React, { useEffect } from 'react';
import { Modal } from 'reactstrap';
import styles from './CommonPopup.module.css'
// import './CommonPopup.css';

const CommonPopup = React.memo((props) => {

    useEffect(() => {
        if (props.isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'visible';
        }
      }, [props.isOpen]);

    return (
        <Modal className='common_popup_wrapper' centered={true} isOpen={props.isOpen} toggle={props.toggle} {...props}>
            {props.children}
        </Modal>
    )
})

export default CommonPopup
