import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { deleteBooking } from "../../store/bookings"
import { BsArrowRightShort } from 'react-icons/bs'
import './Bookings.css'
import { useEffect } from "react";
import { fetchAllSpots } from "../../store/allSpots";

function Bookings() {
  const dispatch = useDispatch()
  const bookings = useSelector(state => state.bookings)
  const { user } = useSelector(state => state.session)
  const spots = useSelector(state => state.allSpots)
  const userBookings = bookings.filter(booking => booking.userId === user.id)
  // console.log(userBookings)

  useEffect(() => {
    dispatch(fetchAllSpots())
  }, [dispatch])

  const handleCancel = (id) => {
    dispatch(deleteBooking(id))
  }
  return (
    <div className="booking-cont">
      <div className="trip-head">
        <h1>Your Trips</h1>
      </div>
      <div className="booking-wrapper">
        {userBookings.length > 0 ? userBookings.map(booking => {
          const spot = spots.filter(spot => spot.id === booking.spotId)[0]
          const startDate = booking.startDate.split(' ')
          const endDate = booking.endDate.split(' ')
          const startDateFormat = `${startDate[2]} ${startDate[1]}, ${startDate[3]}`
          const endDateFormat = `${endDate[2]} ${endDate[1]}, ${endDate[3]}`;
          if (spot) {

            return (

              <div className="single-trip-wrap">
                <NavLink
                  className="inactive"
                  to={`/rooms/${spot.id}`}
                  exact={true}
                >
                  <div className="trip-contents">
                    <div
                      className="booking-spot-pic"
                      style={{
                        backgroundImage: `url('${spot.spotPics[0]}')`,
                      }}
                    ></div>
                    <div className="trip-cont-btm">
                      <p>{spot.name}</p>
                      <p>
                        <span className="trip-span">Reserved from: </span> {startDateFormat} <BsArrowRightShort className="arrowright" /> {" "}
                        {endDateFormat}
                      </p>
                      <p>Guests: {booking.numGuest}</p>
                    </div>
                  </div>
                </NavLink>
                <button className="reserve-btn cncltrip" onClick={() => handleCancel(booking.id)}>
                  Cancel Trip
                </button>
              </div>
            )
          }
        })
          :
          <div className="no-bookings">
            <h1>You do not have any reservations yet!</h1>
          </div>
        }
      </div>
    </div>
  )
}

export default Bookings
