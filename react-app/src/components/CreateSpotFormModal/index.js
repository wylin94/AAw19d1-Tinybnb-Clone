import React, { useState } from "react";

import { Modal } from "../../context/Modal";
import CreateSpotForm from "./CreateSpotForm";
import styles from "./index.module.css";

function CreateSpotFormModal() {
	const [showModal, setShowModal] = useState(false);
	const isModal = true;

	return (
		<>
			<button
				title="Create Spot"
				className={styles.createSpotButton}
				onClick={() => setShowModal(true)}
			>
				Start Hosting
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<CreateSpotForm
						onClose={() => setShowModal(false)}
						isModal={isModal}
					/>
				</Modal>
			)}
		</>
	);
}

export default CreateSpotFormModal;
