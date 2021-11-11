import React from "react";
import { useState } from "react";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { deleteBooking } from "../../store/booking";

function DeleteBookingForm( { booking }) {
  const dispatch = useDispatch()
  const bookingId = booking.id
  console.log(bookingId)

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteBooking(bookingId))
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
