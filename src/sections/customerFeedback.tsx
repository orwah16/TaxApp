import { useState } from "react";
import { statistics, reviews } from "../constants"
import {tax1} from "../assets/images"
import ReviewCard from "../components/ReviewCard";
const customerFeedback = () => {
  const [bigReviewImg, setBigReviewImg] = useState(tax1);

  return (
    <section>
    <div className="flex-col">
      <div className="justify-center items-center sm:mt-20 xl:min-h-screen max-xl:py-40">
        <div className="relative flex justify-center items-center h-full">
          <img
            src={bigReviewImg}
            width={800}
            height={600}
            className="object-contain relative z-10"
          />
        </div>
        <div className="relative flex justify-center sm:gap-6 gap-4 -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {reviews.map((review,index) => (
            <div key={index}>
              <ReviewCard
               thumbnail={review.thumbnail}
               changeBigReviewImage={(Areview) => setBigReviewImg(Areview)}
               bigReviewImg={bigReviewImg}
               />
            </div>
          ))}
        </div>
        </div>
        </div>

    </section>
  )
}

export default customerFeedback