import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StarRatings from 'react-star-ratings'
import { addNewReview } from '../../store/reviews'
import { onlyWhiteSpace } from '../multipurpose'

import './CreateReview.css'

function CreateReview({ spotId, madeReview }) {
  const { user } = useSelector(state => state.session)
  const dispatch = useDispatch()
  const [cleanRating, setCleanRating] = useState(0)
  const [accurRating, setAccurRating] = useState(0)
  const [checkInRating, setCheckInRating] = useState(0)
  const [commRating, setCommRating] = useState(0)
  const [locationRating, setLocationRating] = useState(0)
  const [valueRating, setValueRating] = useState(0)
  const [reviewText, setReviewText] = useState('')
  const [errors, setErrors] = useState([])
  const changeRating = (newRating, name) => {
    if (name === "cleanRating") {
      setCleanRating(newRating)
    }
    if (name === "accurRating") {
      setAccurRating(newRating)
    }
    if (name === "checkInRating") {
      setCheckInRating(newRating)
    }
    if (name === "commRating") {
      setCommRating(newRating)
    }
    if (name === "locationRating") {
      setLocationRating(newRating)
    }
    if (name === "valueRating") {
      setValueRating(newRating)
    }
  }

  const handleSubmit = () => {
    if (reviewText.length > 0 && onlyWhiteSpace(reviewText)) {
      setErrors(["Review must not be only whitespace."])
    } else if (cleanRating && accurRating && commRating && locationRating && checkInRating && valueRating && reviewText.length <= 3000 && reviewText.length > 0) {
      const newReview = {

        userId: user?.id,
        spotId: spot?.id,

        cleanRating,
        accurRating,
        commRating,
        locationRating,
        checkInRating,
        valueRating,
        reviewText
      }
      dispatch(addNewReview(newReview))
      setAccurRating(0)
      setCleanRating(0)
      setCommRating(0)
      setLocationRating(0)
      setCheckInRating(0)
      setValueRating(0)
      setReviewText('')
    } else if (reviewText.length > 3000) {
      setErrors(["Review must be less than 3000 characters."])
    } else {
      const newErrors = [
        "Please fill out all ratings and review text then resubmit",
      ];
      setErrors(newErrors);
    }
  }


  return (
    <div>
      {madeReview ? (
        <div>
          <p>You have already left your review on this spot</p>
        </div>
      ) : (
        <div className="rev-wrapper">
          <div className="stars-sec">
            <div className="stars-left">
              <div className="create-rev-rating">
                <p>Cleanliness</p>
                <StarRatings
                  rating={cleanRating}
                  changeRating={changeRating}
                  name="cleanRating"
                  starRatedColor="red"
                  starDimension="20px"
                />
              </div>
              <div className="create-rev-rating">
                <p>Communication</p>
                <StarRatings
                  rating={commRating}
                  changeRating={changeRating}
                  name="commRating"
                  starRatedColor="red"
                  starDimension="20px"
                />
              </div>
              <div className="create-rev-rating">
                <p>Check-In</p>
                <StarRatings
                  rating={checkInRating}
                  changeRating={changeRating}
                  name="checkInRating"
                  starRatedColor="red"
                  starDimension="20px"
                />
              </div>
            </div>
            <div className="stars-right">
              <div className="create-rev-rating">
                <p>Accuracy</p>
                <StarRatings
                  rating={accurRating}
                  changeRating={changeRating}
                  name="accurRating"
                  starRatedColor="red"
                  starDimension="20px"
                />
              </div>
              <div className="create-rev-rating">
                <p>Location</p>
                <StarRatings
                  rating={locationRating}
                  changeRating={changeRating}
                  name="locationRating"
                  starRatedColor="red"
                  starDimension="20px"
                />
              </div>
              <div className="create-rev-rating">
                <p>Value</p>
                <StarRatings
                  rating={valueRating}
                  changeRating={changeRating}
                  name="valueRating"
                  starRatedColor="red"
                  starDimension="20px"
                />
              </div>
            </div>
          </div>
          <div className="rev-input">
            <h3>Please write your review here...</h3>
            {errors.length > 0 &&
              errors.map((error) => <p className="error">{error}</p>)}
            <textarea
              className="textarea-rev"
              pattern="[^' ']+"
              name=""
              id=""
              cols="30"
              rows="5"
              onChange={(e) => setReviewText(e.target.value)}
              value={reviewText}
            ></textarea>
          </div>
          <div className="rev-submit">
            <button className="submit-btn" onClick={handleSubmit}>
              Submit Review
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateReview
