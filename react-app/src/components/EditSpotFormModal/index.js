import React, { useState } from "react";

import { Modal } from "../../context/Modal";
import EditSpotForm from "./EditSpotForm";
import styles from "./index.module.css";

function EditSpotFormModal({ spot }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<button
				title="Edit Spot"
				className={styles.editSpotButton}
				onClick={() => setShowModal(true)}
			>
				Edit Spot
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<EditSpotForm spot={spot} onClose={() => setShowModal(false)} />
				</Modal>
			)}
		</>
	);
}

export default EditSpotFormModal;
