/* ----------------------------------------------------------------------- */
/* -----------------------------Actions----------------------------------- */
/* ----------------------------------------------------------------------- */

const GET_LOCATIONS = "locations/GET_LOCATIONS";

/* ----------------------------------------------------------------------- */
/* ----------------------------Action Creators---------------------------- */
/* ----------------------------------------------------------------------- */

const getLocationsAction = (allLocations) => ({
  type: GET_LOCATIONS,
  allLocations
});

/* ----------------------------------------------------------------------- */
/* --------------------------------Thunks--------------------------------- */
/* ----------------------------------------------------------------------- */

export const fetchAllLocations = () => async (dispatch) => {
  const allSpots = await fetch("/api/spots/");
  const spots = await allSpots.json();
  const locations = {}
  spots.spots.forEach(spot => locations[spot.city] = "City")
  dispatch(getLocationsAction(Object.keys(locations)));
};

/* ----------------------------------------------------------------------- */
/* -----------------------Initial State & Reducer------------------------- */
/* ----------------------------------------------------------------------- */

const initialState = [];

const allLocationsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_LOCATIONS:
      newState = [...action.allLocations];
      return newState;
    default:
      return state;
  }
};

export default allLocationsReducer;
