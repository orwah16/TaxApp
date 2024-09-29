import { useState } from "react";
import Button from "../components/Button";
import  arrowRight  from "../assets/icons/arrow-right.svg";
import { statistics, reviews } from "../constants"
import {tax1} from "../assets/images"
import ReviewCard from "../components/ReviewCard";

const welcome = () => {
  const [bigReviewImg, setBigReviewImg] = useState(tax1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col 
      min-h-screen justify-center max-container"
      >
      <div className="relative  z-5 xl:w-2/5 flex flex-col 
      justify-center items-end w-full max-xl:padding-x pt-28">
        <p className="font-semibold text-2xl font-montserrat text-blue-600">השירותים שלנו</p>
        <h1 className="my-10 mx-0 text-8xl text-blue-600 font-palanquin max-sm:text-[72px]
        max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            שירות החזרי המס שלנו
          </span>
        </h1>
        <p className="mt-4 mb-14 font-semibold text-2xl font-montserrat text-blue-400 sm:max-w-sm">נשמח לעזור</p>
        <Button label="השאר פרטים" iconURL={arrowRight}
        />
        <div className=" flex justify-end items-end flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat,index) => (
            <div>
              <p className="font-bold font-palanquin text-4xl">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex-col justify-center items-center sm:mt-20 xl:min-h-screen max-xl:py-40
       bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigReviewImg}
          width={800}
          height={600}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 -bottom-[5%] sm:left-[10%] max-sm:px-6">
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
    </section>
  )
}

export default welcome