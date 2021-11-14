import React from "react";
import { useSelector } from "react-redux";
// import { getSpots } from "../../store/spot";
import "./SpotInfo.css"

function SingleSpotInfo({booking}) {
  // const dispatch = useDispatch();
  const spotId = booking.spotId;
  const allSpots = useSelector((state) => state.session.user.spots);
  const singleSpot = allSpots.find(element => element.id == spotId);
  const name = singleSpot.name;
  const spotUrl = singleSpot.images[0].url;
  const address = singleSpot.address;
  const city = singleSpot.city;
  const country = singleSpot.country;
  const state = singleSpot.state;

  return (
    <div>
      <h4>Your stay in {name}</h4>
      <img src={spotUrl} alt="spotImage1"></img>
      <div>
        {address}
      </div>
      <div>
        {city}, {state}
      </div>
      <br>
      </br>
    </div>
  )

}

export default SingleSpotInfo
