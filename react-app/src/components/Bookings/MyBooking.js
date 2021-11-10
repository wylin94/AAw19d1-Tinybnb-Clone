import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBookings } from "../../store/booking";

function ShowAllBookings() {
  const dispatch = useDispatch();
  const bookings = useSelector(state => state.booking)

  useEffect(() => {
    dispatch(getBookings())
  },[dispatch])

  console.log("--->", bookings)

  return (
    <div>
      <h1>My reservations</h1>
      <ul>
        {Object.keys(bookings).map(key =>
          <li key={bookings[key].id}>Spot ID:{bookings[key].spotId}. Start Date:{bookings[key].startDate}. End Date: {bookings[key].endDate}.</li>
        )}
      </ul>
    </div>

  )


}

export default ShowAllBookings
