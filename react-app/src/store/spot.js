const LOAD = "spots/LOAD";

// const ADD_SPOT = "spots/ADD_SPOT"
// const UPDATE_SPOT = "spots/UPDATE_SPOT"
// const DELETE_SPOT = "spots/DELETE_SPOT"

const loadSpots = (list) => ({
	type: LOAD,
	list,
});

export const getSpots = () => async (dispatch) => {
	const response = await fetch(`/api/spots`);

	if (response.ok) {
		const list = await response.json();
		dispatch(loadSpots(list));
	}
};

export const getSpotsByCity = (city) => async (dispatch) => {
	const response = await fetch(`/api/spots/search/${city}`);

	if (response.ok) {
		const list = await response.json();
		dispatch(loadSpots(list));
	}
};

const initialState = {};

const spotReducer = (state = initialState, action) => {
	let newState;
	// let spot;
	switch (action.type) {
		case LOAD:
			// newState = Object.assign({}, state);
			// action.list.forEach((spot) => {
			// 	newState[spot.id] = spot;
			// });
			// return newState;
			return action.list;

		default:
			return state;
	}
};

export default spotReducer;
