import React from "react";
import { useSelector } from "react-redux";
// import { getSpots } from "../../store/spot";
import "./SpotInfo.css";

function SingleSpotInfo({ booking }) {
	// const dispatch = useDispatch();
	const spotId = booking.spotId;
	const allSpots = useSelector((state) => state.spot?.spots);
	const singleSpot = allSpots.find((element) => element.id == spotId);
	const name = singleSpot?.name;
	const spotUrl = singleSpot?.images[0].url;
	const address = singleSpot?.address;
	const city = singleSpot?.city;
	const country = singleSpot?.country;
	const state = singleSpot?.state;

	return (
		<div className="spotInfoContainer">
			<img src={spotUrl} alt="spotImage1"></img>
			<div>
				<div className="spotTitle">{name}</div>
				<div className="spotDetailContainer">
					<div className="spotDetail">{address}</div>
					<div className="spotDetail">{city}, {state} {country}</div>
				</div>
			</div>
		</div>
	);
}

export default SingleSpotInfo;
