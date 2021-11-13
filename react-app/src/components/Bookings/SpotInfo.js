import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSpots } from "../../store/spot";


function SingleSpotInfo({booking}) {
  const dispatch = useDispatch();
  const spotId = booking.spotId;
  const allSpots = useSelector((state) => state.session.user.spots);
  const singleSpot = allSpots.find(element => element.id == spotId)
  console.log(singleSpot);

  return (
    <div>
      <h3>Single Spot Detail</h3>
    </div>
  )

}

export default SingleSpotInfo
