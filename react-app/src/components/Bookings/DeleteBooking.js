import React from "react";
import { useState } from "react";
import { getBookings } from "../../store/booking";
import { useDispatch } from "react-redux";
import { deleteBooking } from "../../store/booking";
import { useHistory } from "react-router-dom";
import { authenticate } from "../../store/session";
import { useSelector } from "react-redux";


function DeleteBookingForm( { booking }) {
  const dispatch = useDispatch();
  const bookingId = booking.id;
  const history = useHistory();
  const bookings = useSelector(state => state.booking)

  // const [, updateState] = React.useState();
  // const forceUpdate = React.useCallback(() => updateState({}), []);

  const handleDelete = async (e) => {
    e.preventDefault();
    let deletedBooking = await dispatch(deleteBooking(bookingId));
    let updateSession = await dispatch(authenticate());
    if (deletedBooking) {
      let allBookings = await dispatch(getBookings())
      history.push("/my-reservations");
    }
  }

  if (booking !== null || booking !== undefined) {

    return (
      <div>
        <h3>Delete Booking</h3>
        <form onSubmit={handleDelete}>
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }

  return null;

}

export default DeleteBookingForm
