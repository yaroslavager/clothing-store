import "./reviewsSlider.scss"
import ReviewsCard from "../reviewsCard/reviewsCard"
import { reviews } from "../../config/reviews"


function ReviewsSlider(){
    return(
        <div className="reviews-slider"> 
        <div className="reviews-slider__slider"> <p className="reviews-slider__title">OUR HAPPY CUSTOMERS</p> <img src="#" alt="" /></div>
        <div className="reviews-slider__wrapper">
          
            {reviews.map(review=>(
  <ReviewsCard review={review}/>

            ))
     
       }
        </div>
        </div>
    )
}
export default ReviewsSlider