import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import { authenticate } from "../../store/session";
import { deleteSpot } from "../../store/spot";
import "./DeleteSpotForm.css";

function DeleteSpotForm({ spot, onClose }) {
	const dispatch = useDispatch();
	const history = useHistory();
	// const userId = useSelector((state) => state.session.user?.id);

	const [id, setId] = useState(spot.id);

	const handleDeleteSubmit = async (e) => {
		e.preventDefault();

		const data = { id };

		let deletedSpot = await dispatch(deleteSpot(data));
		let updateSession = await dispatch(authenticate());
		if (deletedSpot) {
			onClose();
			window.scrollTo(0, 900000);
			history.push("/my-hosting");
		}
	};

	const handleCancelClick = (e) => {
		e.preventDefault();
		onClose();
	};

	return (
		<div className="DeleteSpotForm">
			<div className="DeleteSpotFormInner">
				<form onSubmit={handleDeleteSubmit} className="delete-spot-boxes">
					<div className="delete-p-ctn">
						<p className="delete-p">Do you want to delete this spot?</p>
					</div>

					<div className="delete-form-button">
						<button className="reserve-btn" type="submit">
							Delete
						</button>
					</div>
					<div className="delete-form-button">
						<button
							className="reserve-btn"
							type="reset"
							onClick={handleCancelClick}
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default DeleteSpotForm;
