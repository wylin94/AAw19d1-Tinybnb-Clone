import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { updateBooking } from "../../store/booking";

function EditBookingForm({ booking }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const id = booking.id;
  const spotId = booking.spotId;
  const userId = booking.spotId;


  const [startDate, setStartDate] = useState("YYYY-mm-dd");
  const [endDate, setEndDate] = useState("YYYY-mm-dd");

  const reset = () => {
    setStartDate("");
    setEndDate("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Booking = {
      id,
      spotId,
      userId,
      // ...booking,
      startDate,
      endDate
    }
    let updatedBooking = await dispatch(updateBooking(Booking));
    if (updatedBooking) {
      // history.push()
      reset();
    } else {
      new Error("Please fill in all required fields")
    }
  }

  const handleCancelClick = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <h3>Edit Booking</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="checkin-date">Start Date</label>
        </div>
        <div>
          <input name="checkin-date" type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
        </div>
        <div>
          <label htmlFor="checkout-date">End Date</label>
        </div>
        <div>
          <input name="checkout-date" type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancelClick}>Cancel</button>
        </div>
      </form>
    </div>
  )





}

export default EditBookingForm
