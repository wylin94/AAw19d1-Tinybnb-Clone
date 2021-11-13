import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { NavLink } from "react-router-dom";
import { fetchAllLocations } from '../../store/locations'
import LoginForm from "../auth/LoginForm";

import './Home.module.css'

function SplashPage() {
	const dispatch = useDispatch()
	const { user } = useSelector(state => state.session)
	const locations = useSelector(state => state.locations)
	// console.log(locations)
	// console.log(user)

	const [openLogin, setOpenLogin] = useState(false)

	const statePics = [
		"https://wallpaperaccess.com/full/1761719.jpg",
		"https://thumbs.dreamstime.com/b/blue-sky-clouds-anime-style-background-shining-sun-white-fluffy-sunny-day-scene-cartoon-vector-illustration-heavens-223720268.jpg",
		"https://t3.ftcdn.net/jpg/02/61/69/72/360_F_261697296_h1HxkaArBysB0HEkm4ZAMPGOSKPEGP2n.jpg",
		"https://thumbs.dreamstime.com/b/cartoon-illustration-background-forest-bright-forest-woods-silhouttes-trees-bushes-ferns-flowers-cartoon-illustration-124835236.jpg",
		"https://mcvt-comet-37.fra1.cdn.digitaloceanspaces.com//previews/56184/preview_56184.jpg",
		"https://www.freevector.com/uploads/vector/preview/26742/Cabin_In_Winter.jpg",
	];

	useEffect(() => {
		dispatch(fetchAllLocations())
	}, [dispatch])

	return (
		<div>
			<div
				className="splash-main-pic"
				style={{
					backgroundImage: `url("https://ze-robot.com/images/source/31660.jpg")`,
				}}
			>
				{/* <h2>Background Pic</h2> */}
			</div>
			<div className="splash-btm-cont">
				<div className="splash-states-cont">
					<h3 className="headertxt">Adventure Spots</h3>
					<div className="splash-states">
						{locations &&
							locations.map((location, ind) => {
								// console.log(ind);
								return (
									<div className="single-state">
										<NavLink className="inactive sssp" to={`/spots/${location}`}>
											<div
												className="state-pics"
												style={{
													backgroundImage:
														ind < 6
															? `url(${statePics[ind]})`
															: `url(${statePics[1]})`,
												}}
											></div>
											<p>{location}</p>
										</NavLink>
									</div>
								);
							})}
					</div>
				</div>
				<div className="la-container">
					<h3 className="headertxt">Live anywhere</h3>
					<div className="la-content">
						<div>
							<div
								className="la-pics"
								style={{
									backgroundImage: `url("https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720")`,
								}}
							></div>
							<p className="headertxt la-txt">Outdoor getaways</p>
						</div>
						<div>
							<div
								className="la-pics"
								style={{
									backgroundImage: `url("https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720")`,
								}}
							></div>
							<p className="headertxt la-txt">Unique stays</p>
						</div>
						<div>
							<div
								className="la-pics"
								style={{
									backgroundImage: `url("https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720")`,
								}}
							></div>
							<p className="headertxt la-txt">Entire home listings</p>
						</div>
						<div>
							<div
								className="la-pics"
								style={{
									backgroundImage: `url("https://thehappypuppysite.com/wp-content/uploads/2015/09/The-Siberian-Husky-HP-long.jpg")`,
								}}
							></div>
							<p className="headertxt la-txt">Pets Always Allowed</p>
						</div>
					</div>
				</div>
				<div className="try-host-box">
					{user ? (
						<NavLink
							className="inactive th"
							to={user ? "/become-a-host" : ""}
						>
							<div
								className="try-hosting"
								style={{
									backgroundImage: `url("https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/blt2380dfc8baa6f1bf/5fd42f39da1c393383d3fe7d/US_LakeLure_US_Header.jpeg?width=1680&auto=webp")`,
								}}
							>
								<div className="try-hosting-inner">
									<h2 className="headertxt">Try Hosting</h2>
									<p>
										Earn extra income and unlock new opportunities by sharing
										your space.
									</p>
								</div>
							</div>
						</NavLink>
					) : (
						<div className="th" onClick={() => setOpenLogin(true)}>
							<div
								className="try-hosting"
								style={{
									backgroundImage: `url("https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/blt2380dfc8baa6f1bf/5fd42f39da1c393383d3fe7d/US_LakeLure_US_Header.jpeg?width=1680&auto=webp")`,
								}}
							>
								<div className="try-hosting-inner">
									<h2 className="headertxt">Try Hosting</h2>
									<p>
										Earn extra income and unlock new opportunities by sharing
										your space.
									</p>
								</div>
							</div>
						</div>
					)}
				</div>
				{/* <div>
            <h3>Discover things to do</h3>
          </div> */}
			</div>
			{openLogin && <LoginForm setOpenLogin={setOpenLogin} />}
		</div>
	);
}

export default SplashPage
