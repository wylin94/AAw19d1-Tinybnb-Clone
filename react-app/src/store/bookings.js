const LOAD_BOOKINGS = "bookings/LOAD_BOOKINGS";
const ADD_BOOKING = "bookings/ADD_BOOKING";
const EDIT_BOOKING = "bookings/EDIt_BOOKING";
const DELETE_BOOKING = "bookings/DELETE_BOOKING";

const loadBookings = (list) => ({
	type: LOAD_BOOKINGS,
	list,
});

const addBooking = (booking) => ({
	type: ADD_BOOKING,
	booking,
});

const editBooking = (booking) => ({
	type: EDIT_BOOKING,
	booking,
});

const removeBooking = (bookingId) => ({
	type: DELETE_BOOKING,
	bookingId,
});

export const getBookings = () => async (dispatch) => {
	const response = await fetch("/api/bookings/my-reservations");

	if (response.ok) {
		const list = await response.json();
		dispatch(loadBookings(list));
	}
};

export const createBooking = (booking) => async (dispatch) => {
	const response = await fetch(`/api/bookings/`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(booking),
	});
	if (response.ok) {
		const newBooking = await response.json();
		dispatch(addBooking(newBooking));
		return newBooking;
	}
};

export const updateBooking = (data) => async (dispatch) => {
	const response = await fetch(`/api/bookings/${data.id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	if (response.ok) {
		const booking = await response.json();
		dispatch(editBooking(booking));
		return booking;
	}
};

export const deleteBooking = (bookingId) => async (dispatch) => {
	const response = await fetch(`/api/bookings/${bookingId}`, {
		method: "DELETE",
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(removeBooking(data));
	}
};

const bookingReducer = (state = {}, action) => {
	switch (action.type) {
		case LOAD_BOOKINGS:
			return { ...state, ...action.list };

		case ADD_BOOKING:
			return { ...state, [action.booking.id]: action.booking };

		case EDIT_BOOKING:
			return { ...state, [action.booking.id]: action.booking };

		case DELETE_BOOKING:
			const newState = { ...state };
			delete newState[action.bookingId.id];
			return newState;

		default:
			return state;
	}
};

export default bookingReducer;

// /* ----------------------------------------------------------------------- */
// /* -----------------------------Actions----------------------------------- */
// /* ----------------------------------------------------------------------- */

// const GET_BOOKINGS = "bookings/GET_BOOKINGS";
// const DELETE_BOOKING = "bookings/DELETE_BOOKING"
// const ADD_BOOKING = "bookings/ADD_BOOKING"

// /* ----------------------------------------------------------------------- */
// /* ----------------------------Action Creators---------------------------- */
// /* ----------------------------------------------------------------------- */
// const getBookingsAction = (bookings) => ({
//   type: GET_BOOKINGS,
//   bookings
// });

// const deleteBookingAction = (id) => ({
//   type: DELETE_BOOKING,
//   id
// })

// const addBookingAction = (booking) => ({
//   type: ADD_BOOKING,
//   booking
// })

// /* ----------------------------------------------------------------------- */
// /* --------------------------------Thunks--------------------------------- */
// /* ----------------------------------------------------------------------- */

// export const fetchBookings = () => async (dispatch) => {
//   const res = await fetch("/api/bookings/");
//   const bookings = await res.json();
//   // console.log(bookings.allBookings)
//   dispatch(getBookingsAction(bookings.allBookings));
// };

// export const addBooking = (newBooking) => async (dispatch) => {
//   const res = await fetch("/api/bookings/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(newBooking)
//   })
//   const booking = await res.json()
//   dispatch(addBookingAction(booking))
// }

// export const deleteBooking = (id) => async (dispatch) => {
//   const res = await fetch(`/api/bookings/${id}`, {

//     method: "DELETE"
//   })
//   dispatch(deleteBookingAction(id))
// }

// /* ----------------------------------------------------------------------- */
// /* -----------------------Initial State & Reducer------------------------- */
// /* ----------------------------------------------------------------------- */

// const initialState = [];

// const bookingsReducer = (state = initialState, action) => {
//   let newState;
//   switch (action.type) {
//     case GET_BOOKINGS:
//       newState = [...action.bookings];
//       return newState;
//     case ADD_BOOKING:
//       newState = [...state, action.booking]
//       // newState.push(action.booking)
//       return newState
//     case DELETE_BOOKING:
//       newState = [...state]
//       for (let i = 0; i < newState.length; i++) {
//         const booking = newState[i]
//         if (booking.id === action.id) {
//           newState.splice(newState.indexOf(booking), 1);
//         }
//       }
//       // newState.map(booking => {
//       //     if(booking.id === action.id){
//       //         newState.splice(newState.indexOf(booking), 1)
//       //     }
//       // })
//       // console.log('NEWSTATE HERE', newState)
//       return newState
//     default:
//       return state;
//   }
// };

// export default bookingsReducer;
