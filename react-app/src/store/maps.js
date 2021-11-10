const LOAD_API_KEY = "map/LOAD_API_KEY";

const loadApiKey = (key) => ({
	type: LOAD_API_KEY,
	payload: key,
});

export const getKey = () => async (dispatch) => {
	const response = await fetch(`/api/map/key`, {
		method: "POST",
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(loadApiKey(data.key));
	}
};

const initialState = { key: null };

const mapsReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_API_KEY:
			return { key: action.payload };
		default:
			return state;
	}
};

export default mapsReducer;
