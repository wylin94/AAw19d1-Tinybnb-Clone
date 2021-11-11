import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { NavLink } from "react-router-dom";
import { fetchAllSpots } from "../../store/allSpots"
import { fetchProfile, updateProfile } from '../../store/currProfile'
import { avgReview, checkIfImageExists, onlyWhiteSpace } from "../utils"
import { RiMedalLine } from 'react-icons/ri'
import { IoShieldCheckmarkOutline } from 'react-icons/io5'
import { AiFillStar, AiOutlineEdit } from "react-icons/ai";

import "./ProfilePage.css"
import { fetchAllReviews } from "../../store/reviews";

function ProfilePage() {
  const dispatch = useDispatch()
  const { userId } = useParams()
  const { user } = useSelector(state => state.session)
  const currProfile = useSelector(state => state.currProfile)
  const listings = useSelector(state => state.allSpots)
  const reviews = useSelector(state => state.reviews)
  const userReviews = reviews.filter(review => review.userId === currProfile.id)
  const userListings = listings.filter(listing => listing.user.id === currProfile.id)
  // console.log(currProfile)
  // console.log(user)
  const [bio, setBio] = useState(user ? user.bio : currProfile.bio)
  const [profilePic, setProfilePic] = useState(user ? user.profile_pic : currProfile.profile_pic)
  const [openUpdate, setOpenUpdate] = useState(false)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    dispatch(fetchProfile(userId))
    dispatch(fetchAllSpots())
    dispatch(fetchAllReviews());
  }, [dispatch, userId, openUpdate])

  useEffect(() => {
    dispatch(fetchAllSpots())
  }, [dispatch])

  const handleUpdate = () => {
    if (bio.length > 0 && onlyWhiteSpace(bio)) {
      setErrors(["Bio cannot be only whitespace."])
      setBio(user.bio);
    } else if (bio.length > 3000) {
      setErrors(["Bio must be less than 3000 characters."])
      setBio(user.bio)
    } else if (bio !== '' && profilePic !== '') {
      dispatch(updateProfile({ id: user.id, bio, profilePic }))
      setOpenUpdate(false);
    } else if (bio !== '' && profilePic === '') {
      dispatch(updateProfile({ id: user.id, profilePic }))
      setOpenUpdate(false);
    } else {
      dispatch(updateProfile({ id: user.id, bio }))
      setOpenUpdate(false);
    }

  }

  const ppImg = checkIfImageExists(currProfile.profile_pic)

  return (
    <>
      {currProfile && (
        <div className="pp-container">
          <div className="pp-left">
            <div
              className="profile-pic pp-pic"
              style={{
                backgroundImage: `url('${
                  ppImg
                    ? currProfile.profile_pic
                    : "https://a0.muscache.com/defaults/user_pic-50x50.png?v=3"
                  }')`,
              }}
            ></div>
            {user && openUpdate && (
              <div className="ppimg-edit">
                <p>Profile image url</p>
                <input
                  type="text"
                  value={profilePic}
                  onChange={(e) => setProfilePic(e.target.value)}
                  placeholder="Profile Image Url"
                  className="edit-pp"
                />
              </div>
            )}

            <div className="pp-stats">
              {currProfile.is_superhost && (
                <div className="pp-stat">
                  <RiMedalLine className="pp-symbols" />
                  {currProfile.is_superhost && <p>Superhost</p>}
                </div>
              )}
              <div className="pp-stat">
                <IoShieldCheckmarkOutline className="pp-symbols" />
                <p>Identity verified</p>
              </div>
            </div>
          </div>
          <div className="pp-right">
            <h2 className="headertxt pp-head">Hi, I'm {currProfile.name}</h2>
            {currProfile?.id === user?.id && (
              <div className="pp-edit-btns">
                <AiOutlineEdit
                  className="pp-edit"
                  onClick={() => setOpenUpdate(!openUpdate)}
                />
                {openUpdate && (
                  <button onClick={handleUpdate} className="ss-btns ppbtn">
                    Update
                  </button>
                )}
              </div>
            )}
            {openUpdate &&
              errors &&
              errors.map((error) => <p className="login-err">{error}</p>)}
            <div>
              <div className="pp-about">
                <h3 className="headertxt">About</h3>
                {user && openUpdate ? (
                  <input
                    type="text"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Bio"
                  ></input>
                ) : (
                  <p>{currProfile.bio}</p>
                )}
              </div>
              <div className="pp-listing">
                <div className="pp-listing-head">
                  <h3>{currProfile.name}'s listings</h3>
                </div>
                <div className="pp-spots1">
                  {userListings.length > 0 ? (
                    userListings.map((listing) => (
                      <div className="pp-list-box">
                        <NavLink
                          className="inactive pp-spots"
                          to={`/rooms/${listing.id}`}
                        >
                          <div
                            className="profile-listing-pics"
                            style={{
                              backgroundImage: `url('${listing.spotPics[0]}')`,
                            }}
                          ></div>
                          <div className="pp-spot-rev">
                            <AiFillStar className="sp-star" />
                            <p>
                              {listing.reviews.length > 0
                                ? avgReview(listing.reviews)
                                : ""}
                              ({listing.reviews.length})
                            </p>
                          </div>
                          <div className="pp-spot-stat">
                            <p>{listing.spotType}</p>
                            <p className="pp-spot-name">{listing.name}</p>
                          </div>
                        </NavLink>
                      </div>
                    ))
                  ) : (
                    <p>
                      {user?.id === currProfile.id
                        ? "You do not have any listings"
                        : `${currProfile.name} does not have any listings`}
                    </p>
                  )}
                </div>
              </div>
              <div className="pp-rev">
                <div className="pp-rev-head">
                  <h3>Reviews</h3>
                </div>
                <div className="pp-rev-section">
                  {userReviews.length > 0 ? (
                    userReviews.map((review) => {
                      const spot = listings.filter(
                        (listing) => listing.id === review.spotId
                      )[0];
                      // console.log(spot)
                      return (
                        <div className="pp-rev-box">
                          <div className="pp-rev-top">
                            <div className="pp-srev-head">
                              <p className="headertxt">{spot?.name}</p>
                              <div className="pp-srev-starrate">
                                <AiFillStar className="sp-star" />
                                <p className="pp-srev-rate">
                                  {review.avgRating}
                                </p>
                              </div>
                            </div>
                            <NavLink
                              className="inactive"
                              to={`/rooms/${spot?.id}`}
                            >
                              <div
                                className="rev-spot-pics"
                                style={{
                                  backgroundImage: `url('${spot?.spotPics[0]}')`,
                                }}
                              ></div>
                            </NavLink>
                          </div>
                          <p>{review.reviewText}</p>
                        </div>
                      );
                    })
                  ) : (
                    <p>
                      {user?.id === currProfile.id
                        ? "You have not left any reviews"
                        : `${currProfile.name} has not left any reviews`}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfilePage
