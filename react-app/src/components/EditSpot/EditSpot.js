import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { addSpot } from "../../store/allSpots";
import { addSpotPic, fetchSpot, updateSpot } from "../../store/currentSpot";
import { deleteSpotPic } from "../../store/allPics";
import { FaTrash } from 'react-icons/fa'
import './EditSpot.css'
import { fetchAllPics } from "../../store/allPics";
import { errorHandler, preventLetters } from "../utils"

function EditSpot() {
	const { spotId } = useParams();
	const spot = useSelector(state => state.currSpot)
	const spotPics = useSelector(state => state.spotPics)
	const currSpotPics = spotPics.filter(pic => +pic["spot_id"] === +spotId)
	// console.log(currSpotPics)
	const history = useHistory();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.session);
	const [spotName, setSpotName] = useState(spot.name);
	const [spotPrice, setSpotPrice] = useState(spot.price);
	const [description, setDescription] = useState(spot.description);
	const [numBedrooms, setNumBedrooms] = useState(spot.numBedrooms);
	const [numBeds, setNumBeds] = useState(spot.numBeds);
	const [numBaths, setNumBaths] = useState(spot.numBaths);
	const [totalGuests, setTotalGuests] = useState(spot.totalGuests);
	const [pic1, setPic1] = useState(null);
	const [pic2, setPic2] = useState(null);
	const [pic3, setPic3] = useState(null);

	const [errors, setErrors] = useState([]);

	useEffect(() => {
		dispatch(fetchSpot(spotId))
		dispatch(fetchAllPics())
	}, [dispatch])

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newSpot = {
			name: spotName,
			price: spotPrice,
			description,
			num_bedrooms: numBedrooms,
			num_baths: numBaths,
			num_beds: numBeds,
			total_guests: totalGuests,
			id: spotId
		};
		const data = await dispatch(updateSpot(newSpot));
		// console.log("RIGHT HERE", data);
		if (data.name && !data.errors) {
			if (pic1) {
				const newPic = await dispatch(
					addSpotPic({ spotId: data.id, imgUrl: pic1 })
				);
			}
			if (pic2) {
				await dispatch(addSpotPic({ spotId: data.id, imgUrl: pic2 }));
			}
			if (pic3) {
				await dispatch(addSpotPic({ spotId: data.id, imgUrl: pic3 }));
			}
			return history.push(`/rooms/${data.id}`);
		}
		if (data.errors) {
			setErrors(data.errors);
		}
	};

	const handlePicDelete = (id) => {
		// console.log(spotPic)
		dispatch(deleteSpotPic(id))
	}

	return (
		<div className="cs-container">
			<form onSubmit={handleSubmit}>
				<div className="cs-header">
					<p>Edit your spot</p>
				</div>
				<div className="err-box">
					{errors.length > 0 &&
						errors.map((error) => <p className="login-err">{error.split(":")[1]}</p>)}
				</div>
				<div className="cs-input-field">
					<h3>Your Listing Name</h3>
					<input
						type="text"
						placeholder="What is the name of your getaway?"
						onChange={(e) => setSpotName(e.target.value)}
						value={spotName}
					// required
					/>
				</div>
				<div className="cs-input-field">
					<h3>Price per night</h3>
					<input
						type="number"
						placeholder={"$" + 0}
						onChange={(e) => setSpotPrice(e.target.value)}
						value={spotPrice}
						onKeyPress={(e) => preventLetters(e)}
						min={25}
					// required
					/>
				</div>
				<div className="cs-input-field">
					<h3>Your {spot.spotType} description</h3>
					<textarea
						name=""
						id=""
						cols="30"
						rows="10"
						onChange={(e) => setDescription(e.target.value)}
						value={description}
					// required
					></textarea>
				</div>
				<div className="cs-input-field es">
					<p>How many bedrooms?</p>
					<input
						type="number"
						onChange={(e) => setNumBedrooms(e.target.value)}
						value={numBedrooms}
						onKeyPress={(e) => preventLetters(e)}
						min={0}
					// required
					/>
					<p>How many bathrooms?</p>
					<input
						type="number"
						onChange={(e) => setNumBaths(e.target.value)}
						value={numBaths}
						onKeyPress={(e) => preventLetters(e)}
						min={0}
					// required
					/>
					<p>How many beds?</p>
					<input
						type="number"
						onChange={(e) => setNumBeds(e.target.value)}
						value={numBeds}
						onKeyPress={(e) => preventLetters(e)}
						min={0}
					// required
					/>
					<p>What is the max occupancy?</p>
					<input
						type="number"
						onChange={(e) => setTotalGuests(e.target.value)}
						value={totalGuests}
						onKeyPress={(e) => preventLetters(e)}
						min={0}
					// required
					/>
				</div>
				<div className="cs-input-field pics">
					<h3>Add more pictures</h3>
					<input
						type="text"
						placeholder="Picture Url"
						onChange={(e) => setPic1(e.target.value)}
						value={pic1}
					/>
					<input
						type="text"
						placeholder="Picture Url"
						onChange={(e) => setPic2(e.target.value)}
						value={pic2}
					/>
					<input
						type="text"
						placeholder="Picture Url"
						onChange={(e) => setPic3(e.target.value)}
						value={pic3}
					/>
				</div>
				<div className="edit-sp">
					{currSpotPics &&
						currSpotPics.map((spotPic) => (
							<div
								className="ss-pics esp"
								style={{ backgroundImage: `url("${spotPic.imgUrl}")` }}
							>
								<FaTrash className="trash-btn esptrash" onClick={() => handlePicDelete(spotPic.id)} />
							</div>
						))}
				</div>
				<div className="ep-btns">
					<button className="reserve-btn ep" type="submit">
						Submit
					</button>
					<button
						className="reserve-btn ep"
						onClick={() => history.push(`/rooms/${spotId}`)}
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default EditSpot;
