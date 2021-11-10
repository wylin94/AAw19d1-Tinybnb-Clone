// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { NavLink } from "react-router-dom";
// import { getSpots, getSpotsByCity } from "../store/spot";

// function SpotList() {
// 	const dispatch = useDispatch();
// 	const spots = useSelector((state) => Object.values(state.spots));

// 	useEffect(() => {
// 		dispatch(getSpotsByCity());
// 	}, [dispatch]);

// 	return (
// 		<>
// 			{/* <div>
// 				{spots.map((spot) => (
// 					<NavLink key={spot.id} to={`/spots/${spot.id}`}>
// 						<div>
// 							<p> {spot.name} </p>
// 						</div>
// 					</NavLink>
// 				))}
// 			</div> */}
// 		</>
// 	);
// }

// export default SpotList;
