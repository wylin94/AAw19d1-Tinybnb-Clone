import React from "react";
// import { useState } from "react";
// import { getBookings } from "../../store/booking";
import { useDispatch } from "react-redux";
import { deleteBooking } from "../../store/booking";
import { useHistory } from "react-router-dom";
// import { authenticate } from "../../store/session";
// import { useSelector } from "react-redux";
import "./DeleteBooking.css"


function DeleteBookingForm({ booking, onClose }) {
  const dispatch = useDispatch();
  const bookingId = booking.id;
  const history = useHistory();
  // const bookings = useSelector(state => state.booking)

  // const [, updateState] = React.useState();
  // const forceUpdate = React.useCallback(() => updateState({}), []);

  const handleDelete = async (e) => {
    e.preventDefault();
    let deletedBooking = await dispatch(deleteBooking(bookingId));
    // let updateSession = await dispatch(authenticate());
    if (deletedBooking) {
      // let allBookings = await dispatch(getBookings())
      onClose();
      history.push("/my-reservations");
    }
  }

  if (booking !== null || booking !== undefined) {

    return (
      <div className="deleteBookingWrapper">
        <h4>Are you sure you want to delete this booking?</h4>
        <form onSubmit={handleDelete}>
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }

  return null;

}

export default DeleteBookingForm
