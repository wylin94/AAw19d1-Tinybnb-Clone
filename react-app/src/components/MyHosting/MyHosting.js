import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import MapContainer from "../Maps";

import CreateSpotFormModal from "../CreateSpotFormModal";
import EditSpotFormModal from "../EditSpotFormModal";
import DeleteSpotFormModal from "../DeleteSpotFormModal";

import styles from "./MyHosting.module.css";

function MyHosting() {
	const spots = useSelector((state) => state.session.user.spots);
	console.log(1)
	const GMapSetting = {
		width: "400px",
		height: "400px",
		lat: 37.0902,
		lng: -95.7129,
		zoom: 3,
	}

	return (
		<>
			<div className={styles.myHostingWrapper}>
				<div className={styles.myHostingLeftContainer}>
					<CreateSpotFormModal />
					<h1 className={styles.title}>My Hosting Spot</h1>
					{spots?.map((spot) => {
						return (
							<div key={spot.id} className={styles.spotContainer}>
								<NavLink className={styles.navlink} to={`/spots/${spot.id}`}>
									<div className={styles.spotInnerContainer}>
										<img
											className={styles.spotCover}
											src={spot?.images[0]?.url}
											alt={spot.name}
										></img>
										<div className={styles.spotInfo}>
											<div className={styles.spotText}>Entire rental unit in {spot.city}</div>
											<div className={styles.spotTitle}>{spot.name}</div>
											<div className={styles.spotDetail}>{spot.city}, {spot.state} {spot.country}</div>
											<div className={styles.spotPrice}>${spot.price} / night</div>
										</div>
									</div>
								</NavLink>
								<div className={styles.editDeleteButton}>
									<EditSpotFormModal spot={spot} />
									<DeleteSpotFormModal spot={spot} />
								</div>
							</div>
						);
					})}
				</div>
				<div className={styles.googleMapContainer}>
					<MapContainer spots={spots} GMapSetting={GMapSetting}/>
				</div>
			</div>
		</>
	);
}

export default MyHosting;
