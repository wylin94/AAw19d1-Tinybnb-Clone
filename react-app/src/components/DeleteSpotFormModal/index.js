// import React, { useState } from "react";

// import { Modal } from "../../context/Modal";
// import DeleteSpotForm from "./DeleteSpotForm";
// import styles from "./index.module.css";

// function DeleteSpotFormModal({ spot }) {
// 	const [showModal, setShowModal] = useState(false);

// 	return (
// 		<>
// 			<button
// 				title="Delete Spot"
// 				className={styles.deleteSpotButton}
// 				onClick={() => setShowModal(true)}
// 			>
// 				Delete Spot
// 			</button>
// 			{showModal && (
// 				<Modal onClose={() => setShowModal(false)}>
// 					<DeleteSpotForm spot={spot} onClose={() => setShowModal(false)} />
// 				</Modal>
// 			)}
// 		</>
// 	);
// }

// export default DeleteSpotFormModal;
