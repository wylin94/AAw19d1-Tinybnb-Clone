import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBookings } from "../../store/booking";
// import { NavLink } from "react-router-dom";
// import EditBookingForm from "./EditBooking";
// import DeleteBookingForm from "./DeleteBooking";
import EditBookingFormModal from "./EditIndex";
import DeleteBookingFormModal from "./DeleteIndex";
import SingleSpotInfo from "./SpotInfo";
import "./Booking.css"

function ShowAllBookings() {
  const dispatch = useDispatch();
  const bookings = useSelector(state => state.booking)

  useEffect(() => {
    dispatch(getBookings())
  }, [dispatch])



  return (
    <div className="bookingWrapper">
      <h1 className="title">Your trips</h1>
        {Object.keys(bookings).map(booking =>
          <div className="bookingContainer" key={bookings[booking].id}>
            <div>
              {/* Spot ID: {bookings[booking].spotId} */}
              <SingleSpotInfo booking={bookings[booking]} />
            </div>
            <div className="dateContainer">
              <div>
                Start Date: {bookings[booking].startDate.toString().slice(0,16)}
              </div>
              <div>
                End Date: {bookings[booking].endDate.toString().slice(0,16)}
              </div>
            </div>
            {/* <EditBookingForm booking={bookings[booking]} /> */}
              {/* <DeleteBookingForm booking={bookings[booking]} /> */}
            <div className="buttonContainer">
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
