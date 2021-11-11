import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router"
import { NavLink } from 'react-router-dom'
import { fetchSpot } from '../../store/currentSpot'
import { avgReview, getCity } from '../utils'
import SSReviewSection from "../SSReviewSection/SSReviewSection"
import SingleReview from "../SingleReview/SingleReview"
import CheckIn from "../CheckIn/CheckIn"
import CreateReview from "../CreateReview/CreateReview"
import { AiFillStar } from "react-icons/ai";
import { BsHouseDoor, BsChatSquare } from "react-icons/bs";
import { IoSparklesOutline } from 'react-icons/io5'

import './SingleSpot.css'
import { deleteSpot } from "../../store/allSpots"

function SingleSpot() {
  const { spotId } = useParams()
  const dispatch = useDispatch()
  const history = useHistory()
  // console.log(spotId)
  const { user } = useSelector(state => state.session)
  const spot = useSelector(state => state.currSpot)
  const reviews = useSelector(state => state.reviews)
  const spotReviews = reviews.filter(review => review.spotId === spot.id)
  // console.log(spot)
  // console.log(user)
  const madeReview = spotReviews.filter(review => review?.userId === user?.id).length > 0 ? true : false

  useEffect(() => {
    (async () => {
      await dispatch(fetchSpot(spotId));
    })();
  }, [dispatch])

  const handleDelete = () => {
    dispatch(deleteSpot(spotId))
    history.push(`/users/${user.id}`)
  }





  return (
    <>
      {spot.reviews && (
        <div className="ss-wrapper">
          <div className="ss-top-cont">
            <div className="ss-header">
              <div className="ss-header-right">
                <h3 className="headertxt">{spot.name}</h3>
                <div className="ss-header-address">
                  <div className="ss-head-review">
                    <AiFillStar className="sp-star" />
                    <p>{spotReviews.length > 0 && avgReview(spotReviews)}</p>
                    <a href="#reviewSection" className="rev-anch">
                      <span className="greytxt">
                        ({spotReviews.length} reviews)
                      </span>
                    </a>
                  </div>
                  <p className="greytxt">
                    {getCity(spot.stAddress)}, {spot.city}, United States
                  </p>
                </div>
              </div>
              {spot.user?.id === user?.id && (
                <div className="ss-header-btns">
                  <button
                    className="ss-btns"
                    onClick={() => history.push(`/rooms/${spotId}/edit`)}
                  >
                    Edit listing
                  </button>
                  <button className="ss-btns" onClick={handleDelete}>
                    Delete listing
                  </button>
                </div>
              )}
            </div>
            <div className="ss-pics-container">
              <div ss-main-pics>
                {spot.spotPics && (
                  <div
                    className="ss-main-pic"
                    style={{ backgroundImage: `url('${spot.spotPics[0]}')` }}
                  ></div>
                )}
              </div>
              <div className="ss-more-pics">
                {spot.spotPics &&
                  spot.spotPics.map((pic) =>
                    spot.spotPics.indexOf(pic) !== 0 ? (
                      <div
                        className="ss-pics"
                        style={{ backgroundImage: `url('${pic}')` }}
                      ></div>
                    ) : null
                  )}
              </div>
            </div>
          </div>
          <div className="ss-info-container">
            <div className="ss-middle">
              <div className="ss-sh-info">
                <div className="ss-host-info">
                  <div className="ss-host-head">
                    <h3 className="headertxt ss-heads">
                      {spot.spotType} hosted by {spot.user.name}
                    </h3>
                    <div className="ss-host-spot-stats">
                      <p>{spot.totalGuests} guests</p>
                      <span> · </span>
                      <p>{spot.numBedrooms} bedrooms</p>
                      <span> · </span>
                      <p>{spot.numBeds} bed</p>
                      <span> · </span>
                      <p>{spot.numBaths} bath</p>
                    </div>
                  </div>
                  <NavLink to={`/users/${spot.user.id}`} className="inactive">
                    <div
                      className="ss-profile-pic"
                      style={{
                        backgroundImage: `url('${spot.user.profile_pic}')`,
                      }}
                    ></div>
                  </NavLink>
                </div>
                <div className="ss-perks">
                  <div className="ss-single-perk">
                    <BsHouseDoor className="perk-icon" />
                    <div className="perk-inter">
                      <h3>Entire {spot.spotType}</h3>
                      <p>
                        You'll have the {spot.spotType.toLowerCase()} to
                        yourself.
                      </p>
                    </div>
                  </div>
                  <div className="ss-single-perk">
                    <IoSparklesOutline className="perk-icon" />
                    <div className="perk-inter">
                      <h3>Enhanced Clean</h3>
                      <p>
                        This Host committed to Tinybnb's 5-step enhanced
                        cleaning process.
                      </p>
                    </div>
                  </div>
                  <div className="ss-single-perk">
                    <BsChatSquare className="perk-icon" />
                    <div className="perk-inter">
                      <h3>Self check-in</h3>
                      <p>Check yourself in with the lockbox.</p>
                    </div>
                  </div>
                </div>
                <div className="ss-description">
                  <p>{spot.description}</p>
                </div>
              </div>
              <div className="ss-check-i">
                <CheckIn spot={spot} spotReviews={spotReviews} />
              </div>
            </div>
            <section id="reviewSection">
              <div className="ss-btm-wrapper">

                <div className="ss-btm-head-review">
                  <AiFillStar className="sp-star" />
                  <p className="headertxt">
                    {spotReviews.length > 0 && avgReview(spotReviews)}
                  </p>
                  <span> · </span>
                  <span className="headertxt">
                    {spotReviews.length} reviews
                  </span>
                </div>
                <div className="ss-rev-bars">
                  <div className="rev-bars-left">
                    <div className="single-rev-bar">
                      <p>Cleanliness</p>
                      <SSReviewSection
                        spotReviews={spotReviews}
                        revSec={"cleanRating"}
                      />
                    </div>
                    <div className="single-rev-bar">
                      <p>Communication</p>
                      <SSReviewSection
                        spotReviews={spotReviews}
                        revSec={"commRating"}
                      />
                    </div>
                    <div className="single-rev-bar">
                      <p>Check-in</p>
                      <SSReviewSection
                        spotReviews={spotReviews}
                        revSec={"checkInRating"}
                      />
                    </div>
                  </div>
                  <div className="rev-bars-right">
                    <div className="single-rev-bar">
                      <p>Accuracy</p>
                      <SSReviewSection
                        spotReviews={spotReviews}
                        revSec={"accurRating"}
                      />
                    </div>
                    <div className="single-rev-bar">
                      <p>Location</p>
                      <SSReviewSection
                        spotReviews={spotReviews}
                        revSec={"locationRating"}
                      />
                    </div>
                    <div className="single-rev-bar">
                      <p>Value</p>
                      <SSReviewSection
                        spotReviews={spotReviews}
                        revSec={"valueRating"}
                      />
                    </div>
                  </div>
                </div>
                <div className="ss-all-reviews">
                  {spotReviews &&
                    spotReviews.map((review) => (
                      <SingleReview user={user} review={review} />
                    ))}
                </div>
                {user && (
                  <div className="create-rev">
                    <h3 className="headertxt">Create a Review</h3>
                    <CreateReview madeReview={madeReview} spot={spot} />
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleSpot
