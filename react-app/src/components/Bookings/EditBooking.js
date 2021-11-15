import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { updateBooking } from "../../store/booking";
import "./EditBooking.css"

function EditBookingForm({ booking, onClose }) {
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
      onClose();
      reset();
      history.push("/my-reservations")
    } else {
      new Error("Please fill in all required fields")
    }
  }

  const handleCancelClick = (e) => {
    onClose();
    reset();
    history.push("/my-reservations");
  }

  return (
    <div className="editBookingWrapper">
      <h3>Edit Booking</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="checkin-date">Start Date</label>
        </div>
        <div>
          <input name="checkin-date" type="date" value={startDate} onChange={e => setStartDate(e.target.value)} required/>
        </div>
        <div>
          <label htmlFor="checkout-date">End Date</label>
        </div>
        <div>
          <input name="checkout-date" type="date" value={endDate} onChange={e => setEndDate(e.target.value)} required/>
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
