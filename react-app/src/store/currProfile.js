/* ----------------------------------------------------------------------- */
/* -----------------------------Actions----------------------------------- */
/* ----------------------------------------------------------------------- */

const GET_PROFILE = "currentProfile/GET_PROFILE";
const UPDATE_PROFILE = "currentProfile/UPDATE_PROFILE"
/* ----------------------------------------------------------------------- */
/* ----------------------------Action Creators---------------------------- */
/* ----------------------------------------------------------------------- */

const getProfileAction = (profile) => ({
  type: GET_PROFILE,
  profile
});

const updateProfileAction = (updatedProfile) => ({
  type: UPDATE_PROFILE,
  updatedProfile
})


/* ----------------------------------------------------------------------- */
/* --------------------------------Thunks--------------------------------- */
/* ----------------------------------------------------------------------- */

export const fetchProfile = (id) => async (dispatch) => {
  const res = await fetch(`/api/users/${id}`);
  const profile = await res.json();
  // console.log(profile)
  dispatch(getProfileAction(profile));
};

export const updateProfile = (updatedProfile) => async (dispatch) => {
  // console.log("LOOK", updatedProfile)
  const res = await fetch(`/api/users/${updatedProfile.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedProfile),
  });
  const profile = await res.json();
  // console.log(profile)
  dispatch(updateProfileAction(profile));
};

/* ----------------------------------------------------------------------- */
/* -----------------------Initial State & Reducer------------------------- */
/* ----------------------------------------------------------------------- */

const initialState = {};

const currProfileReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_PROFILE:
      newState = { ...action.profile };
      return newState;
    case UPDATE_PROFILE:
      newState = { ...action.updatedProfile }
      return newState
    default:
      return state;
  }
};

export default currProfileReducer;
