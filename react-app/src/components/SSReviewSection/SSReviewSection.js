import ProgressBar from 'react-bootstrap/ProgressBar'
import { specRevAvg } from '../multipurpose'

import "bootstrap/dist/css/bootstrap.min.css";
import './SSReview.css'

function SSReviewSection({ spotReviews, revSec }) {
  const avg = specRevAvg(spotReviews, revSec)
  return (
    <div className="progress-bar-wrapper">
      <ProgressBar now={spotReviews?.length > 0 ? avg : 0} max={5} />
      {spotReviews?.length > 0 ? <p className="prog-num">{avg}</p> : <p className="prog-num">0</p>}
    </div>
  )
}

export default SSReviewSection
