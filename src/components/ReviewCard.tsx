

const ReviewCard = ({thumbnail,changeBigReviewImage,bigReviewImg}:{thumbnail:any,
    changeBigReviewImage:any,bigReviewImg:any
}) => {
    const handleClick = () => {
        if(bigReviewImg !== thumbnail)
        {
            changeBigReviewImage(thumbnail)
        }
    }
  return (
    <div className={`border-2 rounded-xl
        ${bigReviewImg === thumbnail ? 'border-blue-600' : 'border-transparent'}
         cursor-pointer max-sm:flex1
        `}
        onClick={handleClick}
        >
        <div className="flex justify-center items-center bg-card bg-center bg-cover
        sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img
                src={thumbnail}
                width={127}
                height={103}
            />
        </div>
        ReviewCard</div>
  )
}

export default ReviewCard

