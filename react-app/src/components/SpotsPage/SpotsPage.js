import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { useParams } from "react-router"
import { avgReview } from "../utils"
import GoogleMaps from "../GoogleMaps/GoogleMaps"
import { AiFillStar } from 'react-icons/ai'
import { fetchAllSpots } from "../../store/allSpots";

import './SpotsPage.css'
import { useEffect } from "react";


function SpotsPage() {
  const { location } = useParams()
  const dispatch = useDispatch()
  const spots = useSelector(state => state.allSpots)
  const filterdSpots = spots.filter(spot => spot.city === location)

  useEffect(() => {
    dispatch(fetchAllSpots())
  }, [dispatch])


  return (
    <>
      {filterdSpots.length > 0 &&
        <div className="spot-page-wrapper">
          <div className="spot-left-container">
            <div className="sp-header">
              <p>{filterdSpots.length}+ stays</p>
              <h4 className="headertxt sp-stay-loc">Stays in {location}</h4>
            </div>
            {filterdSpots &&
              filterdSpots.map((spot) => (
                <NavLink
                  className="inactive sp-list-cont"
                  to={`/rooms/${spot.id}`}
                  exact={true}
                >
                  <div
                    className="main-spot-pic"
                    style={{ backgroundImage: `url('${spot.spotPics[0]}')` }}
                  ></div>
                  <div className="sp-spot-info">
                    <div className="sp-spot-header">
                      <p className="sp-spot-text">{spot.spotType}</p>
                      <p className="sp-spot-name">{spot.name}</p>
                    </div>
                    <div className="sp-spot-stats">
                      <div className="sp-spot-stat-top">
                        <p className="sp-spot-text">{spot.totalGuests} guests</p>
                        <span> · </span>
                        <p className="sp-spot-text">
                          {spot.numBedrooms} bedrooms
                        </p>
                        <span> · </span>
                        <p className="sp-spot-text">{spot.numBeds} bed</p>
                        <span> · </span>
                        <p className="sp-spot-text">{spot.numBaths} bath</p>
                      </div>
                      <div className="sp-spot-stat-btm">
                        <p className="sp-spot-text">Wifi</p>
                        <span> · </span>
                        <p className="sp-spot-text">Kitchen</p>
                        <span> · </span>
                        <p className="sp-spot-text">Air conditioning</p>
                        <span> · </span>
                        <p className="sp-spot-text">Heating</p>
                      </div>
                    </div>
                    <div className="sp-info-btm">
                      <div className="sp-review">
                        <AiFillStar className="sp-star" />
                        <p>
                          {spot.reviews.length > 0 && avgReview(spot.reviews)}
                        </p>
                        <span className="sp-spot-text sp-spot-reviews">
                          ({spot.reviews.length} reviews)
                        </span>
                      </div>
                      <div className="sp-price-cont">
                        <p className="sp-price">${spot.price}</p>{" "}
                        <span> / night</span>
                      </div>
                    </div>
                  </div>
                </NavLink>
              ))}
          </div>
          <div className="map-wrapper">
            <GoogleMaps spot={filterdSpots[0]} />
          </div>
        </div>
      }
    </>
  );
}

export default SpotsPage
