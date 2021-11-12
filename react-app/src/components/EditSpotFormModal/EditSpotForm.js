import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { authenticate } from "../../store/session";
import { editSpot } from "../../store/spot";
import styles from "./EditSpotForm.module.css";

function EditSpotForm({ spot, onClose }) {
	const dispatch = useDispatch();
	const history = useHistory();
	const userId = useSelector((state) => state.session.user?.id);

	const [id, setId] = useState(spot.id);
	const [address, setAddress] = useState(spot.address);
	const [city, setCity] = useState(spot.city);
	const [state, setState] = useState(spot.state);
	const [country, setCountry] = useState(spot.country);
	const [name, setName] = useState(spot.name);
	// const [lat, setLat] = useState(spot.lat);
	// const [lng, setLng] = useState(spot.lng);
	const [price, setPrice] = useState(spot.price);

	const handleEditSubmit = async (e) => {
		e.preventDefault();

		const data = { id, address, city, state, country, name, price };

		let editedSpot = await dispatch(editSpot(data));
		let updateSession = await dispatch(authenticate());
		if (editedSpot) {
			onClose();
			history.push("/my-hosting");
		}
	};

	return (
		<div className={styles.editSpotFormContainer}>
			<h2 className={styles.editSpotFormTitle}>Edit Spot</h2>
			<form onSubmit={handleEditSubmit}>
				<label>Adddress</label>
				<input
					type="text"
					required
					value={address}
					onChange={(e) => setAddress(e.target.value)}
				/>
				<label>City</label>
				<input
					type="text"
					required
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
				<label>State</label>
				<input
					type="text"
					required
					value={state}
					onChange={(e) => setState(e.target.value)}
				/>
				<label>Country</label>
				<input
					type="text"
					required
					value={country}
					onChange={(e) => setCountry(e.target.value)}
				/>
				{/* <input
					type="text"
					required
					value={lat}
					onChange={(e) => setCountry(e.target.value)}
				/>
				<input
					type="text"
					required
					value={lng}
					onChange={(e) => setCountry(e.target.value)}
				/> */}
				<label>Name</label>
				<input
					type="text"
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<label>Price</label>
				<input
					type="text"
					required
					value={price}
					onChange={(e) => setPrice(e.target.value)}
				/>
				<button type="submit">Update</button>
			</form>
		</div>
	);
}

export default EditSpotForm;
