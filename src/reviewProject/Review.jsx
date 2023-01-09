import React from "react";
import reviews from "./ReviewData";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const Review = () => {
    const [index, setIndex] = React.useState(0)
    const { name, job, image, text } = reviews[index]

    const checkNumber= (number) =>{
        if(number > reviews.length-1){
            return 0;
        }
        if(number < 0){
            return reviews.length-1
        }
        return number
    }

    const randomPerson= ()=>{
        let randomNumber= Math.floor(Math.random() * reviews.length)
        if(randomNumber === index){
            randomNumber= index - 1
            setIndex(checkNumber(randomNumber))
        }
    }

    const prevReview = () =>{
        setIndex((index)=>{
            let newIndex= index + 1
            return checkNumber(newIndex);
        })
    }

    const nextReview = () =>{
        setIndex((index)=>{
            let newIndex= index - 1
            return checkNumber(newIndex);
        })
    }

    return (
        <div className="text-center">
            <div className="flex justify-center">
                <div className=" relative">
                    <img src={image} alt={name} className="rounded-md ring-[4px] ring-blue-700 " />
                    <div className=" absolute top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center text-sm bg-blue-700 text-white"><FaQuoteRight /></div>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-sm tracking-[1px] font-bold text-gray-500">{name}</p>
                <p className="text-sm font-semibold uppercase text-blue-500">{job}</p>
            </div>
            <div className="px-6 py-2">
                <p className="text-gray-500">{text}</p>
            </div>
            <div className="flex space-x-4 justify-center mt-2">
                <button onClick={nextReview} className="w-6 h-6 rounded flex items-center justify-center bg-blue-700 text-white text-sm"><FaChevronLeft/></button>
                <button onClick={prevReview} className="w-6 h-6 rounded flex items-center justify-center bg-blue-700 text-white text-sm"><FaChevronRight/></button>
            </div>
            <button onClick={randomPerson} className=" bg-blue-700 text-white rounded-sm py-1 px-4 mt-4">Surprise me</button>
        </div>
    )
}

export default Review