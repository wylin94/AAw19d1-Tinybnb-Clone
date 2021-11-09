import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getSpots } from "../store/spot";
import { useSelector, useDispatch } from "react-redux";

function Home() {
	// const [spots, setSpots] = useState([]);

	// useEffect(() => {
	// 	async function fetchData() {
	// 		const response = await fetch("/api/spots/");
	// 		const responseData = await response.json();
	// 		setSpots(responseData.spots);
	// 	}
	// 	fetchData();
	// }, []);
	const dispatch = useDispatch();
	const spots = useSelector((state) => state.spot.spots);

	useEffect(() => {
		dispatch(getSpots());
	}, [dispatch]);

	return (
		<>
			<div>test</div>
			<ul>
				{spots?.map((spot) => (
					<li key={spot.id}>{spot.name}</li>
				))}
			</ul>
		</>

		// <></>

		// <>
		// 	<NavLink to={"/spots/sanjose"}>San Jose</NavLink>
		// 	<NavLink to={"/spots/sanfrancisco"}>San Francisco</NavLink>
		// 	<NavLink to={"/spots/newyork"}>New York</NavLink>
		// 	<NavLink to={"/spots/seattle"}>Seattle</NavLink>
		// 	<NavLink to={"/spots/austin"}>Austin</NavLink>
		// 	<NavLink to={"/spots/losangeles"}>Los Angeles</NavLink>
		// </>
	);
}

export default Home;
