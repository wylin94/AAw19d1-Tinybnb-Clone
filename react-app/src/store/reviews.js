/* -----------------------------Actions----------------------------------- */

const GET_REVIEWS = "reviews/GET_REVIEWS";
const ADD_REVIEW = "reviews/ADD_REVIEW"
const DELETE_REVIEW = "reviews/DELETE_REVIEW"

/* ----------------------------Action Creators---------------------------- */

const getReviews = (allReviews) => ({
  type: GET_REVIEWS,
  allReviews,
});

const addReview = (review) => ({
  type: ADD_REVIEW,
  review
})

const deleteReview = (revId) => ({
  type: DELETE_REVIEW,
  revId
})

/* --------------------------------Thunks--------------------------------- */

export const fetchAllReviews = () => async (dispatch) => {
  const res = await fetch("/api/reviews/");
  const reviews = await res.json();
  dispatch(getReviews(reviews.allReviews));
};

export const addNewReview = (review) => async (dispatch) => {
  const res = await fetch("/api/reviews/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  });
  const newReview = await res.json()
  dispatch(addReview(newReview))
}

export const deleteSingleReview = (reviewId) => async (dispatch) => {
  const res = await fetch(`/api/reviews/${reviewId}`, {
    method: 'DELETE'
  })
  dispatch(deleteReview(reviewId))
}

/* -----------------------Initial State & Reducer------------------------- */

const initialState = [];

const allReviewsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_REVIEWS:
      newState = [...action.allReviews];
      return newState;
    case ADD_REVIEW:
      newState = [...state, action.review]
      return newState
    case DELETE_REVIEW:
      newState = [...state]
      for (let i = 0; i < newState.length; i++) {
        const review = newState[i]
        if (review.id === action.revId) {
          newState.splice(newState.indexOf(review), 1);
        }
      }
      return newState
    default:
      return state;
  }
};

export default allReviewsReducer;
