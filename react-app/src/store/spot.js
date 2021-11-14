// === Type ===

const LOAD = "spots/LOAD";
const CREATE = "spots/CREATE";
const UPDATE = "spots/UPDATE";
const DELETE = "spots/DELETE";

// === Action ===
const loadSpots = (list) => ({
	type: LOAD,
	list,
});

const create = (spot) => ({
	type: CREATE,
	spot,
});

const edit = (spot) => ({
	type: UPDATE,
	spot,
});

const remove = (spot) => ({
	type: DELETE,
	spot,
});

//  === Thunk ===

// <========================= Get All Spots ==========================>

export const getSpots = () => async (dispatch) => {
	const response = await fetch(`/api/spots/`);

	if (response.ok) {
		const list = await response.json();
		dispatch(loadSpots(list));
	}
};

// <========================= Get One Spot ==========================>

export const getSingleSpot = (id) => async (dispatch) => {
	const response = await fetch(`/api/spots/${id}`);

	if (response.ok) {
		const data = await response.json();
		dispatch(loadSpots(data));
	}
};

// export const getSpotsByCity = (city) => async (dispatch) => {    <========================= Get Spots By City ==========================>
// 	const response = await fetch(`/api/spots/search/${city}`);

// 	if (response.ok) {
// 		const list = await response.json();
// 		dispatch(loadSpots(list));
// 	}
// };

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

// <========================= Create Spot ==========================>

export const createSpot = (spot) => async (dispatch) => {
	const response = await fetch(`/api/spots/`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(spot),
	});

	if (response.ok) {
		const newSpot = await response.json();
		dispatch(create(newSpot));
		return newSpot;
	}

	// else show error
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

// <========================= Edit Spot ==========================>

export const editSpot = (updateSpot) => async (dispatch) => {
	const response = await fetch(`/api/spots/${updateSpot.id}`, {
		method: "PATCH",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(updateSpot),
	});

	if (response.ok) {
		const editiedSpot = await response.json();
		dispatch(edit(editiedSpot));
		return editiedSpot;
	}
};

// <========================= Delete Spot ==========================>

export const deleteSpot = (removeSpot) => async (dispatch) => {
	const response = await fetch(`/api/spots/${removeSpot.id}`, {
		method: "DELETE",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(removeSpot),
	});

	if (response.ok) {
		// This If statement is likely to be modify. Leave it as a placeholder for now
		const deletedSpot = await response.json();
		dispatch(remove(deletedSpot));
		return deletedSpot;
	}
};

// <========================= Add Images ==========================>

export const addImage = (image) => async (dispatch) => {
	const res = await fetch("/api/images/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(image),
	});
	const newImage = await res.json();
	return newImage;
};

//  === Reducer ===

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
			return (newState[action.spot.id] = action.spot);
		case UPDATE:
			return (newState[action.spot.id] = action.spot);
		case DELETE:
			delete newState[action.spot.id];
			return newState;
		default:
			return state;
	}
};

export default spotReducer;
