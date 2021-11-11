/* ----------------------------------------------------------------------- */
/* -----------------------------Actions----------------------------------- */
/* ----------------------------------------------------------------------- */

const GET_PICS = "pics/GET_PICS";
const DELETE_PIC = "pics/DELETE_PIC"

/* ----------------------------------------------------------------------- */
/* ----------------------------Action Creators---------------------------- */
/* ----------------------------------------------------------------------- */

const getPicsAction = (allPics) => ({
  type: GET_PICS,
  allPics,
});

const deletePicsAction = (picId) => ({
  type: DELETE_PIC,
  picId
})

/* ----------------------------------------------------------------------- */
/* --------------------------------Thunks--------------------------------- */
/* ----------------------------------------------------------------------- */

export const fetchAllPics = () => async (dispatch) => {
  const allPics = await fetch("/api/spotpics/");
  const pics = await allPics.json();
  //   console.log(spots.allSpots)
  dispatch(getPicsAction(pics.allPics));
};

export const deleteSpotPic = (id) => async (dispatch) => {
  const res = await fetch(`/api/spotpics/${id}`, {
    method: "DELETE",
  });
  dispatch(deletePicsAction(id))
};

/* ----------------------------------------------------------------------- */
/* -----------------------Initial State & Reducer------------------------- */
/* ----------------------------------------------------------------------- */

const initialState = [];

const allPicsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_PICS:
      newState = [...action.allPics];
      return newState;
    case DELETE_PIC:
      newState = [...state]
      for (let i = 0; i < newState.length; i++) {
        let pic = newState[i]
        if (pic.id === action.picId) {
          newState.splice(newState.indexOf(pic), 1)
        }
      }
      return newState
    default:
      return state;
  }
};

export default allPicsReducer;
