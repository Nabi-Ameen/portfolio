import Review from './Review.jsx'

const MainReview = () => {
  return (
    <div className='w-1/3 mx-auto pt-2 bg-white space-y-5'>
        <div className='flex flex-col items-center space-y-1'>
            <h2 className='text-lg font-bold'>Our Reviews</h2>
            <div className='w-24 h-1 bg-blue-700 rounded '></div>
        </div>
        <Review />
    </div>
  )
}

export default MainReview