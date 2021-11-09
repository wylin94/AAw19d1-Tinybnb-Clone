import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBookings } from "../../store/booking";

function ShowAllBookings() {
  const dispatch = useDispatch();
  const bookings = useSelector(state => state.booking)



}

export default ShowAllBookings
