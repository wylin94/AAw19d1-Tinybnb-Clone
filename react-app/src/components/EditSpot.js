// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

// import

// import { createSpot } from "../store/spot";

// import { useHistory, useParams } from "react-router";

// function AddSpot() {
// 	const dispatch = useDispatch();
// 	const userId = useSelector((state) => state.session.user?.id);
// 	const history = useHistory();

// 	const [address, setAddress] = useState("");
// 	const [city, setCity] = useState("");
// 	const [state, setState] = useState("");
// 	const [country, setCountry] = useState("");
// 	const [name, setName] = useState("");
// 	const [price, setPrice] = useState("");

// 	const handleCreateSubmit = async (e) => {
// 		e.preventDefault();
// 		let newSpot = await dispatch(
// 			createSpot({ userId, address, city, state, country, name, price })
// 		);
// 		if (newSpot) {
// 			history.push("/");
// 		}
// 	};

// 	return (
// 		<form onSubmit={handleCreateSubmit}>
// 			<label>Adddress</label>
// 			<input
// 				type="text"
// 				required
// 				value={address}
// 				onChange={(e) => setAddress(e.target.value)}
// 			/>
// 			<label>City</label>
// 			<input
// 				type="text"
// 				required
// 				value={city}
// 				onChange={(e) => setCity(e.target.value)}
// 			/>
// 			<label>State</label>
// 			<input
// 				type="text"
// 				required
// 				value={state}
// 				onChange={(e) => setState(e.target.value)}
// 			/>
// 			<label>Country</label>
// 			<input
// 				type="text"
// 				required
// 				value={country}
// 				onChange={(e) => setCountry(e.target.value)}
// 			/>
// 			<label>Name</label>
// 			<input
// 				type="text"
// 				required
// 				value={name}
// 				onChange={(e) => setName(e.target.value)}
// 			/>
// 			<label>Price</label>
// 			<input
// 				type="text"
// 				required
// 				value={price}
// 				onChange={(e) => setPrice(e.target.value)}
// 			/>
// 			<button type="submit">Create</button>
// 		</form>
// 	);
// }

// export default AddSpot;
