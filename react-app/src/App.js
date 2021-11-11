import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import { fetchAllSpots } from './store/allSpots'
import { fetchSpot, updateSpot } from './store/currentSpot'
import { fetchProfile, updateProfile } from './store/currProfile'
import { fetchBookings, deleteBooking, addBooking } from './store/bookings'
import { fetchAllLocations } from './store/locations'
import { fetchAllReviews } from './store/reviews';
import SplashPage from './components/SplashPage/SplashPage';
import SpotsPage from './components/SpotsPage/SpotsPage';
import SingleSpot from './components/SingleSpotPage/SingleSpot';
import CreateSpot from './components/CreateSpotFormModal/CreateSpot';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Bookings from './components/Bookings/Bookings';
import EditSpot from './components/EditSpot/EditSpot';

function App() {
	const [loaded, setLoaded] = useState(false);
	const dispatch = useDispatch();


	useEffect(() => {
		(async () => {
			await dispatch(authenticate());
			await dispatch(fetchAllSpots())
			await dispatch(fetchBookings())
			await dispatch(fetchAllLocations())
			// await dispatch(fetchAllReviews())
			setLoaded(true);
		})();
	}, [dispatch]);


	if (!loaded) {
		return null;
	}

	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				{/* <Route path="/login" exact={true}>
          <LoginForm />
        </Route> */}
				{/* <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route> */}
				<ProtectedRoute path="/become-a-host" exact={true}>
					<CreateSpot />
				</ProtectedRoute>
				<ProtectedRoute path="/rooms/:spotId/edit" exact={true}>
					<EditSpot />
				</ProtectedRoute>
				<ProtectedRoute path="/users/:userId/bookings" exact={true}>
					<Bookings />
				</ProtectedRoute>
				<Route path="/users/:userId" exact={true}>
					<ProfilePage />
				</Route>
				<Route path="/" exact={true}>
					<SplashPage />
				</Route>
				<Route path="/spots/:location" exact={true}>
					<SpotsPage />
				</Route>
				<Route path="/rooms/:spotId" exact={true}>
					<SingleSpot />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
