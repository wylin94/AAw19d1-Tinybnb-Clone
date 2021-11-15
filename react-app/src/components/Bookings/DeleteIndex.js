import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteBookingForm from './DeleteBooking';
import "./DeleteIndex.css"

function DeleteBookingFormModal({ booking }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="deleteBookingButton" onClick={() => setShowModal(true)}>
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
