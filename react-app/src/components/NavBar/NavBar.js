import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import { authenticate, login } from "../../store/session";
import { MdStorage } from "react-icons/md";
import { checkIfImageExists } from "../multipurpose";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import "./NavBar.css";

import logo from "./logo.jpeg";

const NavBar = () => {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const [openDropDown, setOpenDropDown] = useState(false);
	const [openLogin, setOpenLogin] = useState(false);
	const [openSignUp, setOpenSignUp] = useState(false);
	let imageValid;

	if (sessionUser) {
		imageValid = checkIfImageExists(sessionUser.profile_pic);
	}

	const handleDemoLogin = () => {
		dispatch(login("demo@aa.io", "password"));
		setOpenDropDown(false);
	};
	const handleLoginClick = () => {
		setOpenLogin(true);
		setOpenDropDown(false);
	};
	const handleSignUpClick = () => {
		setOpenSignUp(true);
		setOpenDropDown(false);
	};
	return (
		<nav>
			<ul className="nav-links">
				<li>
					<NavLink
						className="inactive"
						to="/"
						exact={true}
						activeClassName="active"
					>
						<div>
							<img src={logo} className="tinybnb-logo" />
						</div>
					</NavLink>
				</li>
				<div>
					<NavLink className="inactive" to="/" exact={true}>
						<h1 className="nav-bar-title">TinyBnB</h1>
					</NavLink>
				</div>
				<div className="nav-bar-right">
					{sessionUser && (
						<li>
							<NavLink
								className="inactive"
								to="/become-a-host"
								exact={true}
								activeClassName="active"
							>
								Become a Host
							</NavLink>
						</li>
					)}
					<li className="nav-login-signup">
						<div
							onClick={() => setOpenDropDown(!openDropDown)}
							className={
								openDropDown
									? "nav-profile-click open"
									: "nav-profile-click closed"
							}
						>
							<MdStorage className="nav-pp-logo" />
							<div
								className="nav-profile-pic"
								style={{
									backgroundImage: `url(${
										sessionUser && imageValid
											? sessionUser.profile_pic
											: "https://a0.muscache.com/defaults/user_pic-50x50.png?v=3"
									} )`,
								}}
							></div>
						</div>
						{openDropDown && (
							<div className="profile-drop-down">
								{!sessionUser ? (
									<div className="dropdown-inside-loggedout">
										<p onClick={handleLoginClick} className="login-p">
											Login
										</p>

										<p onClick={handleSignUpClick} className="login-p">
											Sign Up
										</p>

										<p onClick={handleDemoLogin} className="inactive">
											Demo Login
										</p>
									</div>
								) : (
									<div className="dropdown-inside">
										<div className="dropdown-content">
											<NavLink
												className="inactive"
												to={`/users/${sessionUser.id}`}
												onClick={() => setOpenDropDown(false)}
											>
												Profile
											</NavLink>
											<NavLink
												className="inactive"
												to={`/my-hosting`}
												onClick={() => setOpenDropDown(false)}
											>
												Host
											</NavLink>
											<NavLink
												className="inactive"
												// to={`/users/${sessionUser.id}/bookings`}
												to={`/my-reservations`}
												onClick={() => setOpenDropDown(false)}
											>
												Trips
											</NavLink>
										</div>
										<div
											onClick={() => setOpenDropDown(false)}
											className="logout-botton"
										>
											<LogoutButton />
										</div>
									</div>
								)}
							</div>
						)}
					</li>
				</div>
			</ul>
			{openLogin && <LoginForm setOpenLogin={setOpenLogin} />}
			{openSignUp && <SignUpForm setOpenSignUp={setOpenSignUp} />}
		</nav>
	);
};

export default NavBar;
