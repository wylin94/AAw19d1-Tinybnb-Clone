import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import allSpotsReducer from './allSpots'
import currSpotReducer from './currentSpot';
import currProfileReducer from './currProfile';
import bookingsReducer from './bookings';
import allLocationsReducer from './locations';
import allReviewsReducer from './reviews';
import allPicsReducer from './allPics';

const rootReducer = combineReducers({
	session,
	allSpots: allSpotsReducer,
	currSpot: currSpotReducer,
	currProfile: currProfileReducer,
	bookings: bookingsReducer,
	locations: allLocationsReducer,
	reviews: allReviewsReducer,
	spotPics: allPicsReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
	enhancer = applyMiddleware(thunk);
} else {
	const logger = require('redux-logger').default;
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
	return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
