/* ----------------------------------------------------------------------- */
/* -----------------------------Actions----------------------------------- */
/* ----------------------------------------------------------------------- */

const GET_BOOKINGS = "bookings/GET_BOOKINGS";
const DELETE_BOOKING = "bookings/DELETE_BOOKING"
const ADD_BOOKING = "bookings/ADD_BOOKING"

/* ----------------------------------------------------------------------- */
/* ----------------------------Action Creators---------------------------- */
/* ----------------------------------------------------------------------- */
const getBookingsAction = (bookings) => ({
  type: GET_BOOKINGS,
  bookings
});

const deleteBookingAction = (id) => ({
  type: DELETE_BOOKING,
  id
})

const addBookingAction = (booking) => ({
  type: ADD_BOOKING,
  booking
})

/* ----------------------------------------------------------------------- */
/* --------------------------------Thunks--------------------------------- */
/* ----------------------------------------------------------------------- */

export const fetchBookings = () => async (dispatch) => {
  const res = await fetch("/api/bookings/");
  const bookings = await res.json();
  // console.log(bookings.allBookings)
  dispatch(getBookingsAction(bookings.allBookings));
};

export const addBooking = (newBooking) => async (dispatch) => {
  const res = await fetch("/api/bookings/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newBooking)
  })
  const booking = await res.json()
  dispatch(addBookingAction(booking))
}

export const deleteBooking = (id) => async (dispatch) => {
  const res = await fetch(`/api/bookings/${id}`, {

    method: "DELETE"
  })
  dispatch(deleteBookingAction(id))
}

/* ----------------------------------------------------------------------- */
/* -----------------------Initial State & Reducer------------------------- */
/* ----------------------------------------------------------------------- */

const initialState = [];

const bookingsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_BOOKINGS:
      newState = [...action.bookings];
      return newState;
    case ADD_BOOKING:
      newState = [...state, action.booking]
      // newState.push(action.booking)
      return newState
    case DELETE_BOOKING:
      newState = [...state]
      for (let i = 0; i < newState.length; i++) {
        const booking = newState[i]
        if (booking.id === action.id) {
          newState.splice(newState.indexOf(booking), 1);
        }
      }
      // newState.map(booking => {
      //     if(booking.id === action.id){
      //         newState.splice(newState.indexOf(booking), 1)
      //     }
      // })
      // console.log('NEWSTATE HERE', newState)
      return newState
    default:
      return state;
  }
};

export default bookingsReducer;
