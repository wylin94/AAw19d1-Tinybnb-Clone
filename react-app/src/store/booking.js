const LOAD_BOOKINGS = 'bookings/LOAD_BOOKINGS';

const loadBookings = (list) => ({
  type: LOAD_BOOKINGS,
  list
})

export const getBookings = () => async dispatch => {
  const response = await fetch('/api/bookings/my-reservations');

  if (response.ok) {
    const list = await response.json();
    dispatch(loadBookings(list))
  }
}

const initialState = {};


const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKINGS: {
      const allBookings = {};
      action.list.forEach(booking => {
        allBookings[booking.id] = booking;
      });
      return {
        ...allBookings
      }
    }

    default:
      return state
  }


}

export default bookingReducer
