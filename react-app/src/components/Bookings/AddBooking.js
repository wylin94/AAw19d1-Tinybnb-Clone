import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { createBooking } from "../../store/booking";

function CreateBookingForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  // const userId = useSelector(state => state.session.user.id);
  // const spotId
  const [startDate, setStartDate] = useState(false);
  const [endDate, setEndDate] = useState(false);

  const reset = () => {
    setStartDate("");
    setEndDate("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const booking = {
      // spotId,
      // userId,
      startDate,
      endDate
    }
    let createdBooking = await dispatch(createBooking(booking));
    if (createdBooking) {
      // history.push()
      reset();
    }
  }

  const handleCancelClick = (e) => {
    e.preventDefault();
  }



  return (
    <div>
      <h1>Add Booking Page</h1>
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

export default CreateBookingForm
