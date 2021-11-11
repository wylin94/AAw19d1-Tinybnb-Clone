import { useState } from "react";
import { NavLink } from 'react-router-dom'
import { DateRangePicker } from "react-date-range";
import { bookedDates, avgReview } from "../utils";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from '../../store/bookings'
import { AiFillStar } from "react-icons/ai";
import LoginForm from "../auth/LoginForm"
import differenceInCalendarDays from "date-fns/differenceInCalendarDays";

import './CheckIn.css'

function CheckIn({ spot, spotReviews }) {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.session)
    const bookings = useSelector(state => state.bookings)
    const userBooks = bookings.filter(booking => booking.userId === user?.id && booking.spotId === spot.id)
    const spotBookings = bookings.filter(booking => booking.spotId === spot.id)

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [numGuests, setNumGuests] = useState(1)
    const [openCalendar, setOpenCalendar] = useState(false)
    const [openGuests, setOpenGuests] = useState(false)
    const [isBooked, setIsBooked] = useState(userBooks.length ? true : false)
    const [errors, setErrors] = useState([])
    const [openLogin, setOpenLogin] = useState(false)
    const nights = differenceInCalendarDays(startDate, endDate)
    const currBookedDates = bookedDates(spotBookings)
    const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: 'selection'
    }

  const handlePicker = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const clearDates = () => {
    setStartDate(new Date())
    setEndDate(new Date())
  }

  const handleReserve = () => {
    let booked = false
    for (let i = 0; i < currBookedDates.length; i++) {
      const currDate = currBookedDates[i]
      if (
        currDate
          .toString()
          .includes(
            startDate.toString().split(" ").slice(0, 4).join(" ")
          ) ||
        currDate
          .toString()
          .includes(endDate.toString().split(" ").slice(0, 4).join(" "))
      ) {
        booked = true;
      }
    }
    if (
      booked
    ) {
      const newErrors = ["That date is unavailable"];
      setErrors(newErrors);
    } else {
      const newBooking = {
        spotId: spot.id,
        userId: user.id,
        startDate,
        endDate,
        numGuests,
      };
      dispatch(addBooking(newBooking));
      setStartDate(new Date());
      setEndDate(new Date());
      //   console.log("Done")
    }
  }
  const handleCIClick = () => {
    setOpenGuests(false)
    setOpenCalendar(!openCalendar);
  }
  const handleNotLoggedIn = (e) => {
    e.preventDefault()
    setOpenLogin(true)
  }

  let split;
  let formatResDate;
  if (userBooks.length > 0) {
    split = userBooks[0].startDate.split(" ");
    formatResDate = `${split[2]} ${split[1]}, ${split[3]}`
  }
  let startDateSplit = startDate.toString().split(' ')
  let endDateSplit = endDate.toString().split(' ')
  let startDateFormat = `${startDateSplit[1]}/${startDateSplit[2]}/${startDateSplit[3]}`
  let endDateFormat = `${endDateSplit[1]}/${endDateSplit[2]}/${endDateSplit[3]}`

  return (
    <div className="check-in-container">
      <div className="check-in-wrapper">
        <div className="check-in-head">
          <div className="ppn">
            <p>${spot.price}</p>
            <span>/ night</span>
          </div>
          <div className="ci-rev">
            <AiFillStar className="sp-star" />
            <p>{spotReviews.length > 0 && avgReview(spotReviews)}</p>
            <a href="#reviewSection" className="rev-anch">
              <span>({spotReviews.length} reviews)</span>
            </a>
          </div>
        </div>
        <div>
          <div className="ci-co-mid">
            <div className="ci-co" onClick={handleCIClick}>
              <div className="ci-co-but ci-right">
                <p className="ci-co-text">Check-in</p>
                <p className="ci-co-ad">{startDateFormat}</p>
              </div>
              <div className="ci-co-but">
                <p className="ci-co-text">Checkout</p>
                <p className="ci-co-ad">{endDateFormat}</p>
              </div>
            </div>
            {openCalendar && (
              <div className="calendar-pop">
                <DateRangePicker
                  ranges={[selectionRange]}
                  onChange={handlePicker}
                  disabledDates={currBookedDates}
                  minDate={new Date()}
                />
                <div className="drp-btn-cont">
                  <button
                    className="drp-btns"
                    onClick={() => setOpenCalendar(false)}
                  >
                    Close
                  </button>
                  <button className="drp-btns" onClick={clearDates}>
                    Clear Dates
                  </button>
                </div>
              </div>
            )}
            <div className="ci-co-guest">
              <div onClick={() => setOpenGuests(!openGuests)}>
                <p className="ci-co-text">Guests</p>
                <p className="ci-co-gtext">{numGuests} guests</p>
              </div>
              {openGuests && (
                <div className="guests-pop">
                  <h3>Guests</h3>
                  <div className="plus-minus">
                    <button
                      className="guest-btns"
                      onClick={() => setNumGuests(numGuests - 1)}
                      disabled={numGuests === 1}
                    >
                      -
                    </button>
                    <p>{numGuests}</p>
                    <button
                      className="guest-btns"
                      onClick={() => setNumGuests(numGuests + 1)}
                      disabled={numGuests === spot.totalGuests}
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {user ? <button
        className="reserve-btn"
        onClick={handleReserve}
        disabled={startDate.toString() === endDate.toString()}
      >
        {startDate.toString() === endDate.toString() ? "Please select your dates" : "Reserve Spot!"}
      </button>
        :
        <button className="reserve-btn" onClick={(e) => handleNotLoggedIn(e)}>You must be signed in to book</button>
      }

      {!(startDate.toString() === endDate.toString()) && (
        <div className="costs-cont">
          <div className="fees">
            <p>
              ${spot.price} x {Math.abs(nights)} nights{" "}
            </p>
            <p>${spot.price * Math.abs(nights)}</p>
          </div>
          <div className="fees">
            <p>Cleaning Fee</p>
            <p>$50</p>
          </div>
          <div className="fees">
            <p>Service Fee</p>
            <p>$28</p>
          </div>
          <div className="total">
            <p>Total</p>
            <p>${spot.price * Math.abs(nights) + 70}</p>
          </div>
        </div>
      )}
      {errors.length ? <p>{errors}</p> : ''}
      {userBooks.length ? (
        <div className="res-set">
          <p>You are all set for your reservation on </p>
          <NavLink className="inactive bookdate" to={`/users/${user.id}/bookings`}>
            <span>{formatResDate}</span>
          </NavLink>
        </div>
      ) : null}
      {openLogin && <LoginForm setOpenLogin={setOpenLogin} />}
    </div>
  );
}

export default CheckIn;

