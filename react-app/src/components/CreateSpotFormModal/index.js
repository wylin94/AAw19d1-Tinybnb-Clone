import React, { useState } from 'react';

import { Modal } from '../../context/Modal';
import CreateAlbumForm from './CreateAlbumForm';
import styles from "./index.module.css"

function CreateAlbumFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button title="Create Album" className={styles.createAlbumButton} onClick={() => setShowModal(true)}>
        <i class="fas fa-folder-plus"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateAlbumForm onClose={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default CreateAlbumFormModal;
