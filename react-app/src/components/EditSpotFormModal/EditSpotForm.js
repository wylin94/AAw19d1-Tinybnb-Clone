import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { authenticate } from "../../store/session";
import { editSpot } from "../../store/spot";
import "./EditSpotForm.css";

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
	const [lat, setLat] = useState(spot.lat);
	const [lng, setLng] = useState(spot.lng);
	const [price, setPrice] = useState(spot.price);

	const [errors, setErrors] = useState([]);

	const handleEditSubmit = async (e) => {
		e.preventDefault();

		const data = { id, address, city, state, country, name, price };

		let editedSpot = await dispatch(editSpot(data));
		let updateSession = await dispatch(authenticate());
		if (editedSpot) {
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
		<div className="cse-container">
			<form onSubmit={handleEditSubmit}>
				<div className="cs-header">
					<p>Host a spot</p>
				</div>
				<div className="err-box">
					{errors.length > 0 &&
						errors.map((error) => (
							<p className="login-err">{error.split(":")[1]}</p>
						))}
				</div>
				<div className="cse-input-field">
					<label>Name</label>
					<input
						type="text"
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="cse-input-field">
					<label>Price</label>
					<input
						type="text"
						required
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
				</div>
				<div className="cse-input-field loc">
					<label>Adddress</label>
					<input
						className="lft"
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
					<label>Longitude</label>
					<input
						type="number"
						required
						value={lng}
						onChange={(e) => setLng(e.target.value)}
					/>
					<label>Latitude</label>
					<input
						type="number"
						required
						value={lat}
						onChange={(e) => setLat(e.target.value)}
					/>
				</div>
				<div className="createSpotButtonCtn">
					<button className="reserve-btn" type="submit">
						Update
					</button>
				</div>
				<div className="edit-form-button">
					<button
						className="reserve-btn"
						type="button"
						onClick={handleCancelClick}
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default EditSpotForm;
