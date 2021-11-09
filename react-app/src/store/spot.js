const LOAD = "spots/LOAD";
const CREATE = "spots/CREATE";

// const ADD_SPOT = "spots/ADD_SPOT"
// const UPDATE_SPOT = "spots/UPDATE_SPOT"
// const DELETE_SPOT = "spots/DELETE_SPOT"

const loadSpots = (list) => ({
	type: LOAD,
	list,
});

const create = (list) => ({
	type: LOAD,
	list,
});

export const getSpots = () => async (dispatch) => {
	console.log(1)
	const response = await fetch(`/api/spots`);
	console.log(2)

	if (response.ok) {
		console.log(3)
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

export const createSpot = (spot) => async (dispatch) => {
	const {userId, address, city, state, country, name, price} = spot;
	const response = await fetch(`/api/spots`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({userId, address, city, state, country, name, price}),
	});

	if (response.ok) {
		const spot = await response.json();
		dispatch(create(spot));
		return spot;
	}
};


const spotReducer = (state = [], action) => {
	// let spot;
	switch (action.type) {
		case LOAD:
			// newState = Object.assign({}, state);
			// action.list.forEach((spot) => {
			// 	newState[spot.id] = spot;
			// });
			// return newState;
			return action.list;
		// case CREATE:
		// 	st
		// 	const newspot = 

		default:
			return state;
	}
};

export default spotReducer;
