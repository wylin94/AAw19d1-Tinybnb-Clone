import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getSpots } from "../../store/spot";
import styles from './Home.module.css';

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
	// const spots = useSelector((state) => state.spot.spots);
	const spots = useSelector((state) => state.spot);

	useEffect(() => {
		dispatch(getSpots());
	}, [dispatch]);

	return (
		<div>
			<div className={styles.splashImageContainer}>
				<img className={styles.splashImage}src="/images/a17d549e-6268-4910-8d65-1ba98a93b6e3.jpeg" alt='Home Page'></img>
				<div>Not sure where to go? Perfect.</div>
				<button>I'm flexible</button>
			</div>

			<div>Inspiration For your next trip</div>
			<div>
				{spots?.spots?.map(spot => {
					return(
						<div>
							<div key={spot.id}>{spot.name}</div>
						</div>
					)
				})}
			</div>
		</div>

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
