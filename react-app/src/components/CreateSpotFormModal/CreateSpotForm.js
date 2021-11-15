import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import { authenticate } from "../../store/session";

import { createSpot, addImage } from "../../store/spot";
import "./CreateSpotForm.css";

function CreateSpotForm({ onClose, isModal }) {
	const dispatch = useDispatch();
	const history = useHistory();

	const userId = useSelector((state) => state.session.user?.id);

	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [lng, setLng] = useState(1);
	const [lat, setLat] = useState(1);
	const [country, setCountry] = useState("");
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [img1, setImg1] = useState("");
	const [img2, setImg2] = useState("");
	const [img3, setImg3] = useState("");
	const [img4, setImg4] = useState("");
	const [img5, setImg5] = useState("");

	const [errors, setErrors] = useState([]);

	useEffect(() => {
		history.listen(() => {
			window.scrollTo(0, 0);
		});
	});

	const handleCreateSubmit = async (e) => {
		e.preventDefault();

		const data = {
			userId,
			address,
			city,
			state,
			country,
			lng,
			lat,
			name,
			price,
		};

		let newSpot = await dispatch(createSpot(data));
		let updateSession = await dispatch(authenticate());

		if (newSpot.errors) {
			setErrors(newSpot.errors);
		}

		if (newSpot.name && !newSpot.errors) {
			const newImg = await dispatch(
				addImage({
					spotId: newSpot.id,
					url: img1
						? img1
						: "https://media.istockphoto.com/photos/evening-view-of-a-modern-house-with-swimming-pool-picture-id1151833014?k=20&m=1151833014&s=612x612&w=0&h=Qh2AOfpldnl608khblIXdKMA251j9SijSGWLgoHx2WM=",
				})
			);
			if (img2) {
				await dispatch(
					addImage({
						spotId: newSpot.id,
						url: img2
							? img2
							: "https://media.istockphoto.com/photos/evening-view-of-a-modern-house-with-swimming-pool-picture-id1151833014?k=20&m=1151833014&s=612x612&w=0&h=Qh2AOfpldnl608khblIXdKMA251j9SijSGWLgoHx2WM=",
					})
				);
			}
			if (img3) {
				await dispatch(
					addImage({
						spotId: newSpot.id,
						url: img3
							? img3
							: "https://media.istockphoto.com/photos/evening-view-of-a-modern-house-with-swimming-pool-picture-id1151833014?k=20&m=1151833014&s=612x612&w=0&h=Qh2AOfpldnl608khblIXdKMA251j9SijSGWLgoHx2WM=",
					})
				);
			}
			if (img4) {
				await dispatch(
					addImage({
						spotId: newSpot.id,
						url: img4
							? img4
							: "https://media.istockphoto.com/photos/evening-view-of-a-modern-house-with-swimming-pool-picture-id1151833014?k=20&m=1151833014&s=612x612&w=0&h=Qh2AOfpldnl608khblIXdKMA251j9SijSGWLgoHx2WM=",
					})
				);
			}
			if (img4) {
				await dispatch(
					addImage({
						spotId: newSpot.id,
						url: img5
							? img5
							: "https://media.istockphoto.com/photos/evening-view-of-a-modern-house-with-swimming-pool-picture-id1151833014?k=20&m=1151833014&s=612x612&w=0&h=Qh2AOfpldnl608khblIXdKMA251j9SijSGWLgoHx2WM=",
					})
				);
			}

			history.push("/my-hosting");
			let updateSession = await dispatch(authenticate());

			if (isModal) {
				onClose();
				window.scrollTo(0, 900000);
			}
		}
	};

	const handleCancelClick = (e) => {
		onClose();
		history.push("/my-hosting");
	};

	return (
		<div className="cs-container">
			<form onSubmit={handleCreateSubmit}>
				<div className="cs-header">
					<p>Host a spot</p>
				</div>
				<div className="err-box">
					{errors.length > 0 &&
						errors.map((error) => (
							<p className="login-err">{error.split(":")[1]}</p>
						))}
				</div>
				<div className="cs-input-field">
					<label>Name</label>
					<input
						type="text"
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="cs-input-field">
					<label>Price</label>
					<input
						type="text"
						required
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
				</div>
				<div className="cs-input-field loc">
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

				<div className="cs-input-field-bottom pics">
					<div className="cs-input-field-bottom-h6">
						<h6>🌙 🌕 Images are optional but recommended 🌙 🌕</h6>
					</div>
					<input
						type="text"
						placeholder="🏠 Image Url"
						onChange={(e) => setImg1(e.target.value)}
						value={img1}
					/>
					<input
						type="text"
						placeholder="🏠 Image Url"
						onChange={(e) => setImg2(e.target.value)}
						value={img2}
					/>
					<input
						type="text"
						placeholder="🏠 Image Url"
						onChange={(e) => setImg3(e.target.value)}
						value={img3}
					/>
					<input
						type="text"
						placeholder="🏠 Image Url"
						onChange={(e) => setImg4(e.target.value)}
						value={img4}
					/>
					<input
						type="text"
						placeholder="🏠 Image Url"
						onChange={(e) => setImg5(e.target.value)}
						value={img5}
					/>
					<input
						type="text"
						placeholder="🏠 Image Url"
						onChange={(e) => setImg1(e.target.value)}
						value={img1}
					/>
					<div className="createSpotButtonCtn">
						<button className="reserve-btn-cs" type="submit">
							Submit Hosting!
						</button>
					</div>
					<div className="create-form-button">
						<button
							className="reserve-btn-cs"
							type="button"
							onClick={handleCancelClick}
						>
							Cancel
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default CreateSpotForm;
