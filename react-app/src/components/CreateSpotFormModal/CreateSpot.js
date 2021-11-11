import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { addSpot } from '../../store/allSpots'
import { addSpotPic } from '../../store/currentSpot'
import { capitalizeString, stateList, errorHandler, preventLetters } from "../utils";

import "./CreateSpot.css"

function CreateSpot() {
	const history = useHistory()
	const dispatch = useDispatch()
	const { user } = useSelector(state => state.session)
	const [spotName, setSpotName] = useState('')
	const [spotPrice, setSpotPrice] = useState(25)
	const [description, setDescription] = useState('')
	const [type, setType] = useState('')
	const [numBedrooms, setNumBedrooms] = useState(0)
	const [numBeds, setNumBeds] = useState(0)
	const [numBaths, setNumBaths] = useState(0)
	const [totalGuests, setTotalGuests] = useState(0)
	const [state, setState] = useState('')
	const [address, setAddress] = useState('')
	const [long, setLong] = useState(0)
	const [lat, setLat] = useState(0)
	const [pic1, setPic1] = useState('')
	const [pic2, setPic2] = useState('')
	const [pic3, setPic3] = useState('')

	const [errors, setErrors] = useState([])


	const handleSubmit = async (e) => {
		e.preventDefault()
		const newSpot = {
			name: spotName,
			price: spotPrice,
			description,
			type,
			num_bedrooms: numBedrooms,
			num_baths: numBaths,
			num_beds: numBeds,
			total_guests: totalGuests,
			city: state ? capitalizeString(state) : '',
			st_address: address,
			longitude: long,
			latitude: lat,
			userId: user.id
		}
		const data = await dispatch(addSpot(newSpot))
		// console.log("HERE IS THE DATA",data)
		if (data.errors) {
			setErrors(data.errors)
		}
		if (data.name && !data.errors) {
			// console.log("MADE IT IN")
			const newPic = await dispatch(
				addSpotPic({
					spotId: data.id,
					imgUrl: pic1
						? pic1
						: "https://www.thefactsite.com/wp-content/uploads/2018/08/death-star-facts.jpg",
				})
			);
			if (pic2) {
				await dispatch(addSpotPic({ spotId: data.id, imgUrl: pic2 }))
			}
			if (pic3) {
				await dispatch(addSpotPic({ spotId: data.id, imgUrl: pic3 }))
			}
			return history.push(`/rooms/${data.id}`)
		}

	}
	// console.log(errors)

	return (
		<div className="cs-container">
			<form onSubmit={handleSubmit}>
				<div className="cs-header">
					<p>Host a spot</p>
				</div>
				<div className="err-box">
					{errors.length > 0 &&
						errors.map((error) => (
							<p className="login-err">{error.split(":")[1]}</p>
						))}
				</div>
				<div className="cs-input-field">
					<h3>Spot Name</h3>
					<input
						type="text"
						placeholder="What is the name of your getaway?"
						onChange={(e) => setSpotName(e.target.value)}
						value={spotName}

					/>
				</div>
				<div className="cs-input-field">
					<h3>Price per night</h3>
					<input
						type="number"
						placeholder={"$" + 0}
						onChange={(e) => setSpotPrice(e.target.value)}
						onKeyPress={(e) => preventLetters(e)}
						// min={25}
						value={spotPrice}
						required
					/>
				</div>
				<div className="cs-input-field">
					<h3>Please give a description of your getaway</h3>
					<textarea
						name=""
						id=""
						cols="30"
						rows="5"
						onChange={(e) => setDescription(e.target.value)}
						value={description}

						placeholder="Tell us about your getaway"
					></textarea>
				</div>
				<div className="cs-input-field">
					<p>What kind of place is this?</p>
					<select
						name="type"
						id=""
						onChange={(e) => setType(e.target.value)}
						value={type}

					>
						<option value="">--Spot Types--</option>
						<option value="Condo">Condo</option>
						<option value="House">House</option>
						<option value="Villa">Villa</option>
						<option value="Cabin">Cabin</option>
						<option value="Tree House">Tree House</option>
						<option value="Beach House">Beach House</option>
						<option value="Camp Site">Camp Site</option>
					</select>
				</div>
				<div className="cs-input-field">
					<p>How many bedrooms?</p>
					<input
						type="number"
						onChange={(e) => setNumBedrooms(e.target.value)}
						placeholder="0 bedrooms"
						value={numBedrooms}
						onKeyPress={(e) => preventLetters(e)}
						min={0}

					/>
				</div>
				<div className="cs-input-field">
					<p>How many bathrooms?</p>
					<input
						type="number"
						onChange={(e) => setNumBaths(e.target.value)}
						value={numBaths}
						placeholder="0 baths"
						onKeyPress={(e) => preventLetters(e)}
						min={0}

					/>
				</div>
				<div className="cs-input-field">
					<p>How many beds?</p>
					<input
						type="number"
						onChange={(e) => setNumBeds(e.target.value)}
						value={numBeds}
						placeholder="0 beds"
						onKeyPress={(e) => preventLetters(e)}
						min={0}

					/>
				</div>
				<div className="cs-input-field">
					<p>What is the max occupancy?</p>
					<input
						type="number"
						onChange={(e) => setTotalGuests(e.target.value)}
						value={totalGuests}
						placeholder="0 guests"
						onKeyPress={(e) => preventLetters(e)}
						min={0}

					/>
				</div>
				<div className="cs-input-field loc">
					<h3>Location</h3>
					<select
						name="state"
						placeholder="State"
						onChange={(e) => setState(e.target.value)}
						value={state}

					>
						<option value="">--States--</option>
						{stateList &&
							stateList.map((state) => (
								<option value={state}>{state}</option>
							))}
					</select>
					<h3>Street Address</h3>
					<input
						className="lft"
						type="text"
						// placeholder="Street Address"
						onChange={(e) => setAddress(e.target.value)}
						value={address}
						placeholder="Format: 123 Example Rd, Example City, VA 22201"

					/>
					<h3>Longitude</h3>
					<input
						type="number"
						placeholder="Longitude"
						onChange={(e) => setLong(e.target.value)}
						value={long}
					// onKeyPress={(e) => preventLetters(e)}

					/>
					<h3>Latitude</h3>
					<input
						type="number"
						placeholder="Latitude"
						onChange={(e) => setLat(e.target.value)}
						value={lat}
					// onKeyPress={(e) => preventLetters(e)}

					/>
				</div>
				<div className="cs-input-field pics">
					<h3>Pictures</h3>
					<p>*optional but recommended*</p>
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
				<button className="reserve-btn" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}

export default CreateSpot
