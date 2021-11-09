import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBookings } from "../../store/booking";

function ShowAllBookings() {
  const dispatch = useDispatch();
  const bookings = useSelector(state => state.booking)
  console.log(bookings)

  useEffect(() => {
    dispatch(getBookings())
  },[dispatch])

  return (
    <div>
      <h1>My reservations</h1>
      <ul>
        {Object.keys(bookings).map((key) => {
          <li key={bookings[key].id}>{bookings[key].startDate}</li>
        })}
      </ul>
    </div>


  )


}

export default ShowAllBookings
