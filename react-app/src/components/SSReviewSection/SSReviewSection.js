import ProgressBar from 'react-bootstrap/ProgressBar'
import { specRevAvg } from '../utils'

import "bootstrap/dist/css/bootstrap.min.css";
import './SSReview.css'

function SSReviewSection({ spotReviews, revSec }) {
  // console.log("REVIEW",spot)
  const avg = specRevAvg(spotReviews, revSec)
  // console.log("avg",avg)
  // console.log("spot rev", spotReviews)
  return (
    <div className="progress-bar-wrapper">
      <ProgressBar now={spotReviews.length > 0 ? avg : 0} max={5} />
      {spotReviews.length > 0 ? <p className="prog-num">{avg}</p> : <p className="prog-num">0</p>}
    </div>
  )
}

export default SSReviewSection
