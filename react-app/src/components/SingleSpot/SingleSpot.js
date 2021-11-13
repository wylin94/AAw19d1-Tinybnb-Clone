import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useParams, useHistory } from "react-router";
import { avgReview } from '../multipurpose'
import SSReviewSection from "../SSReviewSection/SSReviewSection";
import SingleReview from "../SingleReview/SingleReview";
import CreateReview from "../CreateReview/CreateReview";
import { AiFillStar } from "react-icons/ai";
import { BsHouseDoor, BsChatSquare } from "react-icons/bs";
import { IoSparklesOutline } from 'react-icons/io5';

import { getSpots } from "../../store/spot";
import MapContainer from "../Maps";
import CreateBookingForm from "../Bookings/AddBooking";
import styles from "./SingleSpot.module.css";

function SingleSpot() {
    const dispatch = useDispatch();
    const {spotId} = useParams();
    const { user } = useSelector(state => state.session)
    const reviews = useSelector(state => state.reviews)
    const spot = useSelector((state) => state.spot.spots?.find(ele => ele.id === +spotId))
    const spotReviews = reviews?.filter(review => review.spotId === spot.id)
    const madeReview = spotReviews?.filter(review => review?.userId === user?.id).length > 0 ? true : false
    
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

            <section id="reviewSection">
                <div className="ss-btm-wrapper">

                    <div className="ss-btm-head-review">
                        <AiFillStar className="sp-star" />
                        <p className="headertxt">
                            {spotReviews?.length > 0 && avgReview(spotReviews)}
                        </p>
                        <span> · </span>
                        <span className="headertxt">
                            {spotReviews?.length} reviews
                        </span>
                    </div>
                    <div className="ss-rev-bars">
                        <div className="rev-bars-left">
                            <div className="single-rev-bar">
                                <p>Cleanliness</p>
                                <SSReviewSection
                                    spotReviews={spotReviews}
                                    revSec={"cleanRating"}
                                />
                            </div>
                            <div className="single-rev-bar">
                                <p>Communication</p>
                                <SSReviewSection
                                    spotReviews={spotReviews}
                                    revSec={"commRating"}
                                />
                            </div>
                            <div className="single-rev-bar">
                                <p>Check-in</p>
                                <SSReviewSection
                                    spotReviews={spotReviews}
                                    revSec={"checkInRating"}
                                />
                            </div>
                        </div>
                        <div className="rev-bars-right">
                            <div className="single-rev-bar">
                                <p>Accuracy</p>
                                <SSReviewSection
                                    spotReviews={spotReviews}
                                    revSec={"accurRating"}
                                />
                            </div>
                            <div className="single-rev-bar">
                                <p>Location</p>
                                <SSReviewSection
                                    spotReviews={spotReviews}
                                    revSec={"locationRating"}
                                />
                            </div>
                            <div className="single-rev-bar">
                                <p>Value</p>
                                <SSReviewSection
                                    spotReviews={spotReviews}
                                    revSec={"valueRating"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="ss-all-reviews">
                        {spotReviews &&
                            spotReviews.map((review) => (
                                <SingleReview user={user} review={review} />
                            ))}
                    </div>
                    {user && (
                        <div className="create-rev">
                            <h3 className="headertxt">Create a Review</h3>
                            <CreateReview madeReview={madeReview} spotId={spotId}/>
                        </div>
                    )}
                </div>
            </section>


        </div>
    )
}

export default SingleSpot;
