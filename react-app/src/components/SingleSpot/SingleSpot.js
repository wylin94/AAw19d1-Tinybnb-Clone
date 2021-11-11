import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useParams, useHistory } from "react-router";

import { getSpots } from "../../store/spot";
import MapContainer from "../Maps";
import CreateBookingForm from "../Bookings/AddBooking";
import styles from "./SingleSpot.module.css";

function SingleSpot() {
    const dispatch = useDispatch();
    const {spotId} = useParams();
    const spot = useSelector((state) => state.spot.spots?.find(ele => ele.id === +spotId))

	const GMapSetting = {
		width: "1200px",
		height: "400px",
		lat: spot?.lat,
		lng: spot?.lng,
        zoom: 15,
	}

	useEffect(() => {
		dispatch(getSpots());
	}, [dispatch, spotId]);

    return (
        <div className={styles.singleSpotContainer}>
            <div>
                <div>{spot?.name}</div>
                <div>{spot?.city}</div>
                <div>{spot?.state}</div>
                <div>{spot?.country}</div>
            </div>

            <div className={styles.spotImagesContainer}>
                <div className={styles.imageLeft}>
                    <img className={styles.image1} src={spot?.images[0]?.url} alt="spotImage1"></img>
                </div>
                <div className={styles.imageMid}>
                    <img className={styles.image2} src={spot?.images[1]?.url} alt="spotImage2"></img>
                    <img className={styles.image3} src={spot?.images[2]?.url} alt="spotImage3"></img>
                </div>
                <div className={styles.imageRight}>
                    <img className={styles.image4} src={spot?.images[3]?.url} alt="spotImage4"></img>
                    <img className={styles.image5} src={spot?.images[4]?.url} alt="spotImage5"></img>
                </div>
            </div>

            <div className={styles.infoBodyContainer}>
                <div>
                    <div className={styles.infoTitleContainer}>
                        <div>Entire house hosted by {spot?.user.username}</div>
                        <img className={styles.profilePicture}src={spot?.user.profile_pic} alt="profile_pic"></img>
                    </div>
                    <div>
                        *******Placeholder: More detail about the spot goes here****
                    </div>
                </div>
                <CreateBookingForm />
            </div>

            <div>
                <div>Where you'll be</div>
                <div className="googleMapContainer">
                    <MapContainer spot={spot} GMapSetting={GMapSetting}/>
                </div>
            </div>
            
        </div>
    )
}

export default SingleSpot;