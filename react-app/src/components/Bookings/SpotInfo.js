import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSpots } from "../../store/spot";


function SingleSpotInfo({booking}) {
  const dispatch = useDispatch();
  const spotId = booking.spotId;
  const allSpots = useSelector((state) => state.session.user.spots);
  const singleSpot = allSpots.find(element => element.id == spotId);
  const city = singleSpot.city;
  const spotUrl = singleSpot.images[0].url
  console.log(spotUrl);

  return (
    <div>
      <h4>Your stay in {city}</h4>
      <img src={spotUrl} alt="spotImage1"></img>
    </div>
  )

}

export default SingleSpotInfo
