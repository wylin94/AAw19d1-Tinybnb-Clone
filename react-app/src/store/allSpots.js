/* -----------------------------Actions----------------------------------- */

const GET_SPOTS = "allSpots/GET_SPOTS";
const ADD_SPOT = "allSpots/ADD_SPOT"
const DELETE_SPOT = 'allSpots/DELETE_SPOT'

/* ----------------------------Action Creators---------------------------- */

const getSpotsAction = (allSpots) => ({
  type: GET_SPOTS,
  payload: allSpots,
});

const addSpotAction = (spot) => ({
  type: ADD_SPOT,
  spot
})

const deleteSpotAction = (id) => ({
  type: DELETE_SPOT,
  id
})

/* --------------------------------Thunks--------------------------------- */

export const fetchAllSpots = () => async (dispatch) => {
  const allSpots = await fetch("/api/spots/");
  const spots = await allSpots.json();
  dispatch(getSpotsAction(spots.allSpots));
};


export const addSpot = (spot) => async (dispatch) => {
  const res = await fetch("/api/spots/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(spot),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(addSpotAction(data));
    return data;
  } else if (res.status < 500) {
    const data = await res.json();
    if (data.errors) {
      return data;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
}

export const deleteSpot = (id) => async (dispatch) => {
  const res = await fetch(`/api/spots/${id}`, {
    method: "DELETE"
  })
  if (res.ok) {
    dispatch(deleteSpotAction(id))
  }
}
/* -----------------------Initial State & Reducer------------------------- */

const initialState = [];

const allSpotsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_SPOTS:
      newState = [...action.payload];
      return newState;
    case ADD_SPOT:
      newState = [...state, action.spot]
      return newState
    case DELETE_SPOT:
      newState = [...state]
      for (let i = 0; i < newState.length; i++) {
        const spot = newState[i]
        if (spot.id === action.id) {
          newState.splice(newState.indexOf(spot), 1);
        }
      }
      return newState
    default:
      return state;
  }
};

export default allSpotsReducer;
