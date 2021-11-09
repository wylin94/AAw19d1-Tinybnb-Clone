const LOAD = "spots/LOAD";

// const ADD_SPOT = "spots/ADD_SPOT"
// const UPDATE_SPOT = "spots/UPDATE_SPOT"
// const DELETE_SPOT = "spots/DELETE_SPOT"

const loadSpots = (list) => ({
	type: LOAD,
	list,
});

export const getSpots = () => async (dispatch) => {
	console.log(3);
	const response = await fetch(`/api/spots`);

	if (response.ok) {
		console.log(4);
		const list = await response.json();
		console.log(5);
		console.log(list);
		console.log(typeof list);
		dispatch(loadSpots(list));
		console.log(6);
	}
};

export const getSpotsByCity = (city) => async (dispatch) => {
	const response = await fetch(`/api/spots/search/${city}`);

	if (response.ok) {
		const list = await response.json();
		console.log(list);
		dispatch(loadSpots(list));
	}
};

// const initialState = {};

const spotReducer = (state = {}, action) => {
	let newState;
	// let spot;
	switch (action.type) {
		case LOAD:
			newState = Object.assign({}, state);
			action.list.forEach((spot) => {
				newState[spot.id] = spot;
			});
			return newState;

		default:
			return state;
	}
};

export default spotReducer;
