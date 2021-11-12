import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import MapContainer from "../Maps";

import CreateSpotFormModal from "../CreateSpotFormModal";
import EditSpotFormModal from "../EditSpotFormModal";
import DeleteSpotFormModal from "../DeleteSpotFormModal";

import styles from "./MyHosting.module.css";

function MyHosting() {
	const userId = useSelector((state) => state.session.user.id);
	const spots = useSelector((state) =>
		state.allSpots.find((ele) => ele.user.id === userId)
	);

	return (
		<>
			<h1>My Hosting Spot</h1>
			<CreateSpotFormModal />
			<div>
				{spots?.map((spot) => {
					return (
						<div key={spot.id} className={styles.spotContainer}>
							<NavLink to={"/"}>
								<div className={styles.spotInnerContainer}>
									<img
										className={styles.spotCover}
										src={spot?.images[0]?.url}
										alt={spot.name}
									></img>
									<div className={styles.spotInfo}>
										<div>{spot.name}</div>
										<div>
											{spot.city} {spot.state} {spot.country}
										</div>
										<div>${spot.price}/night</div>
									</div>
								</div>
							</NavLink>
							<div>
								<EditSpotFormModal spot={spot} />
							</div>
							<div>
								<DeleteSpotFormModal spot={spot} />
							</div>
						</div>
					);
				})}
			</div>
			<div className="googleMapContainer">
				<MapContainer spots={spots} />
			</div>
		</>
	);
}

export default MyHosting;
