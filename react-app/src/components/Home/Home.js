import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import LoginForm from "../auth/LoginForm";
import { getSpots } from "../../store/spot";

import CreateSpotFormModal from "../CreateSpotFormModal";
import TinyBnBVideo from "../Video/TinyBnBVideo.mp4";

import "./Home.css";

function Home() {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.session);
	const spots = useSelector((state) => state.spot?.spots);

	const [openLogin, setOpenLogin] = useState(false);

	const spotPics = [
		"https://wallpaperaccess.com/full/1761719.jpg",
		"https://thumbs.dreamstime.com/b/blue-sky-clouds-anime-style-background-shining-sun-white-fluffy-sunny-day-scene-cartoon-vector-illustration-heavens-223720268.jpg",
		"https://t3.ftcdn.net/jpg/02/61/69/72/360_F_261697296_h1HxkaArBysB0HEkm4ZAMPGOSKPEGP2n.jpg",
		"https://thumbs.dreamstime.com/b/cartoon-illustration-background-forest-bright-forest-woods-silhouttes-trees-bushes-ferns-flowers-cartoon-illustration-124835236.jpg",
		"https://mcvt-comet-37.fra1.cdn.digitaloceanspaces.com//previews/56184/preview_56184.jpg",
		"https://www.freevector.com/uploads/vector/preview/26742/Cabin_In_Winter.jpg",
	];

	useEffect(() => {
		dispatch(getSpots());
	}, [dispatch]);

	return (
		<div>
			{/* <div
				className="splash-main-pic"
				style={{
					backgroundImage: `url("https://tinybnb.s3.us-west-1.amazonaws.com/homepage.jpeg")`,
				}}
			></div> */}
			<div className="splash-main-pic">
				<video
					autoPlay
					loop
					muted
					style={{
						position: "relative",
						width: "100%",
						left: "50%",
						top: "50%",
						height: "100%",
						objectFit: "cover",
						transform: "translate(-50%, -50%",
						zIndex: "-1",
					}}
				>
					<source src={TinyBnBVideo} type="video/mp4" />
				</video>
			</div>

			<div className="splash-btm-cont">
				<div className="splash-states-cont">
					<h3 className="headertxt">Adventure Spots</h3>
					<div className="splash-states">
						{spots &&
							spots?.map((spot, index) => {
								if (index < 6) {
									return (
										<div className="single-state">
											<NavLink
												className="inactive sssp"
												to={`/spots/${spot?.id}`}
											>
												<div
													className="state-pics"
													style={{
														backgroundImage:
															index < 6
																? `url(${spotPics[index]})`
																: `url(${spotPics[1]})`,
													}}
												></div>
												<p>{spot?.city}</p>
											</NavLink>
										</div>
									);
								}
							})}
					</div>
				</div>
				<div className="la-container"></div>
				<div className="try-host-box">
					{user ? (
						<NavLink className="inactive th" to={user ? "/become-a-host" : ""}>
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
			</div>
			{openLogin && <LoginForm setOpenLogin={setOpenLogin} />}
		</div>
	);
}

export default Home;
