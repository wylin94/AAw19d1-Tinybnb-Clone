import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom"
import { deleteSingleReview } from '../../store/reviews'
import { BsTrash } from 'react-icons/bs'
import "./SingleReview.css"

function SingleReview({ review, user }) {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteSingleReview(review.id))
  }
  return (
    <div className="single-rev">
      <div className="sr-header">
        <NavLink to={`/users/${review.userId}`} className="inactive">
          <div className="ss-profile-pic" style={{ backgroundImage: `url('${review.user.profilePic}')` }}></div>
        </NavLink>
        <div className="rev-name">
          <p className="headertxt">{review.user.username}</p>
          {user?.id === review.userId &&
            <BsTrash className="trash-btn" onClick={handleDelete} />
          }
        </div>
      </div>
      <div className="rev-body">
        <p>{review.reviewText}</p>
      </div>
    </div>
  );
}

export default SingleReview
