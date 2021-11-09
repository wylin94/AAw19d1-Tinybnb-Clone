const LOAD = "spots/LOAD";
const CREATE = "spots/CREATE";
const UPDATE = "spots/UPDATE";

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

const edit = (spot) => ({
	type: UPDATE,
	spot,
});

export const getSpots = () => async (dispatch) => {
	const response = await fetch(`/api/spots`);

	if (response.ok) {
		const list = await response.json();
		dispatch(loadSpots(list));
	}
};

// export const getSingleSpot = (city) => async (dispatch) => {
// 	const response = await fetch(`/api/spots/search/${city}`);

// 	if (response.ok) {
// 		const list = await response.json();
// 		dispatch(loadSpots(list));
// 	}
// };

export const getSpotsByCity = (city) => async (dispatch) => {
	const response = await fetch(`/api/spots/search/${city}`);

	if (response.ok) {
		const list = await response.json();
		dispatch(loadSpots(list));
	}
};

// export const createSpot = (spot) => async (dispatch) => {
// 	const { userId, address, city, state, country, name, price } = spot;
// 	const response = await fetch(`/api/spots`, {
// 		method: "POST",
// 		headers: { "Content-Type": "application/json" },
// 		body: JSON.stringify({
// 			userId,
// 			address,
// 			city,
// 			state,
// 			country,
// 			name,
// 			price,
// 		}),
// 	});

// 	if (response.ok) {
// 		const spot = await response.json();
// 		dispatch(create(spot));
// 		return spot;
// 	}
// };

export const createSpot = (spot) => async (dispatch) => {
	const response = await fetch(`/api/spots`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(spot),
	});

	if (response.ok) {
		const newSpot = await response.json();
		dispatch(create(newSpot));
		return newSpot;
	}
};

// export const editSpot = (spot) => async (dispatch) => {
// 	const { address, city, state, country, lat, lng, name, price } = spot;
// 	const response = await fetch(`/api/spots`, {
// 		method: "PATCH",
// 		headers: { "Content-Type": "application/json" },
// 		body: JSON.stringify({
// 			address,
// 			city,
// 			state,
// 			country,
// 			lat,
// 			lng,
// 			name,
// 			price,
// 		}),
// 	});

// 	if (response.ok) {
// 		const spot = await response.json();
// 		dispatch(edit(spot));
// 		return spot;
// 	}
// };

export const editSpot = (spot) => async (dispatch) => {
	const response = await fetch(`/api/spots`, {
		method: "PATCH",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(spot),
	});

	if (response.ok) {
		const spot = await response.json();
		dispatch(edit(spot));
		return spot;
	}
};

const spotReducer = (state = {}, action) => {
	let newState = { ...state };

	switch (action.type) {
		case LOAD:
			// newState = Object.assign({}, state);
			// action.list.forEach((spot) => {
			// 	newState[spot.id] = spot;
			// });
			// return newState;

			// return action.list;

			// console.log(Object.values(action.list.spots));

			// newState = Object.assign({}, state);
			// action.list.spot.forEach((spot) => {
			// 	newState[spot.id] = spot;
			// });

			// return { ...state, ...action.list };
			newState = { ...action.list };
			return newState;

		case CREATE:
			return action.spot;
		case UPDATE:
			newState = { ...state, [state.length]: action.spot };
			return newState;
		default:
			return state;
	}
};

export default spotReducer;
