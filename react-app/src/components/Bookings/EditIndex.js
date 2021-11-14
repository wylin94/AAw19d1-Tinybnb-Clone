import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditBookingForm from './EditBooking';

function EditBookingFormModal({booking}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} className="editButton">
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
