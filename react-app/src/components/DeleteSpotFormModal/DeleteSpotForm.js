import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import { authenticate } from "../../store/session";
import { deleteSpot } from "../../store/spot";
import styles from "./DeleteSpotForm.module.css";

function DeleteSpotForm({ spot, onClose }) {
	const dispatch = useDispatch();
	const history = useHistory();
	// const userId = useSelector((state) => state.session.user?.id);

	const [id, setId] = useState(spot.id);

	const handleEditSubmit = async (e) => {
		e.preventDefault();

		const data = { id };

		let deletedSpot = await dispatch(deleteSpot(data));
		let updateSession = await dispatch(authenticate());
		if (deletedSpot) {
			onClose();
			history.push("/my-hosting");
		}
	};

	return (
		<div className={styles.deleteSpotFormContainer}>
			<h2 className={styles.deleteSpotFormTitle}>Delete Spot</h2>
			<form onSubmit={handleEditSubmit}>
				<h3>Do you want to delete this spot?</h3>
				<button type="submit">Delete</button>
			</form>
		</div>
	);
}

export default DeleteSpotForm;
