import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditBookingForm from './EditBooking';
import "./EditIndex.css";

function EditBookingFormModal({booking}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="editBookingButton" onClick={() => setShowModal(true)}>
                Edit
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditBookingForm onClose={() => setShowModal(false)} booking={booking} />
                </Modal>
            )}
        </>
    );
}

export default EditBookingFormModal;
