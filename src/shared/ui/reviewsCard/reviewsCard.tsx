import "./reviewsCard.scss"
import type { Review } from "../../config/reviews"

function ReviewsCard({review}: {review: Review}){

    return(
<>
        <div key={review.id} className="reviews-card__card-wrapper">
<span className="reviews-card__reting">{review.rating}/5</span>
<p className="reviews-card__author">{review.author}</p>
<p className="reviews-card__text">{review.text}</p>

        </div>
      
</>
    )
}

export default ReviewsCard