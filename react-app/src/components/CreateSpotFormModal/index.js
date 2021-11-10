import React, { useState } from 'react';

import { Modal } from '../../context/Modal';
import CreateSpotForm from './CreateSpotForm';
import styles from "./index.module.css"

function CreateSpotFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button title="Create Spot" className={styles.createSpotButton} onClick={() => setShowModal(true)}>
        Create Spot
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSpotForm onClose={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default CreateSpotFormModal;
