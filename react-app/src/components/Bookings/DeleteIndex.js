import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteBookingForm from './DeleteBooking';

function DeleteBookingFormModal({ booking }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} className="editButton">
                Delete
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteBookingForm onClose={() => setShowModal(false)} booking={booking} />
                </Modal>
            )}
        </>
    );
}

export default DeleteBookingFormModal;
