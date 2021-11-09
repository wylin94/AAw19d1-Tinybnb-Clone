const LOAD_BOOKINGS = 'bookings/LOAD_BOOKINGS';
const ADD_BOOKING = 'bookings/ADD_BOOKING'

const loadBookings = (list) => ({
  type: LOAD_BOOKINGS,
  list
})

// const addBooking = (booking) => {
//   type: ADD_BOOKING,
//   booking
// }

export const getBookings = () => async dispatch => {
  const response = await fetch('/api/bookings/my-reservations');

  if (response.ok) {
    const list = await response.json();
    dispatch(loadBookings(list))
  }
}


const bookingReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_BOOKINGS:

      return { ...state, ...action.list };

    default:
      return state
  }


}

export default bookingReducer
