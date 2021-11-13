import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBookings } from "../../store/booking";
import { NavLink } from "react-router-dom";
import EditBookingForm from "./EditBooking";
import DeleteBookingForm from "./DeleteBooking";
import EditBookingFormModal from "./EditIndex";
import DeleteBookingFormModal from "./DeleteIndex";

function ShowAllBookings() {
  const dispatch = useDispatch();
  const bookings = useSelector(state => state.booking)

  useEffect(() => {
    dispatch(getBookings())
  },[dispatch])


  return (
    <div>
      <h1>My reservations</h1>
        {Object.keys(bookings).map(booking =>
          <div key={bookings[booking].id}>
            <div>
              Spot ID: {bookings[booking].spotId}
            </div>
            <div>
              Start Date: {bookings[booking].startDate}
            </div>
            <div>
              End Date: {bookings[booking].endDate}
            </div>
            {/* <EditBookingForm booking={bookings[booking]} /> */}
              {/* <DeleteBookingForm booking={bookings[booking]} /> */}
            <div>
              <EditBookingFormModal booking={bookings[booking]} />
              <DeleteBookingFormModal booking={bookings[booking]} />
            </div>
          </div>
      )}
      {/* {Object.keys(bookings).map(booking =>
        <div key={bookings[booking].id}>
          <NavLink to={`/my-reservations/${bookings[booking].id}`}>Edit</NavLink>
        </div>
      )} */}
    </div>

  )


}

export default ShowAllBookings
