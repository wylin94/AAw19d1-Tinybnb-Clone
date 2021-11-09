import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Home from "./components/Home";
import SpotList from "./components/SpotList";
import AddSpot from "./components/AddSpot";
import ShowAllBookings from "./components/Bookings/MyBooking";
import MyHosting from "./components/MyHosting";
import { authenticate } from "./store/session";


function App() {
	const [loaded, setLoaded] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			await dispatch(authenticate());
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
				<Route path="/" exact={true}>
					<Home />
				</Route>
				<Route path="/addspot">
					<AddSpot />
				</Route>
				<Route path="/login" exact={true}>
					<LoginForm />
				</Route>
				<Route path="/sign-up" exact={true}>
					<SignUpForm />
				</Route>
				<ProtectedRoute path="/users" exact={true}>
					<UsersList />
				</ProtectedRoute>
				<ProtectedRoute path="/users/:userId" exact={true}>
					<User />
				</ProtectedRoute>
				<Route path="/spots/:cities" exact={true}>
					<SpotList />
				</Route>
				{/* <Route path="/spots/:spotId" exact={true}>
					<Spot />
				</Route> */}

				<Route path="/my-hosting" exact={true}>
					<MyHosting />
				</Route>
				<Route path="/my-reservations" exact={true}>
					<ShowAllBookings />
				</Route>
				<Route>
					<div>Page not found</div>
				</Route>

			</Switch>
		</BrowserRouter>
	);
}

export default App;
