import React from "react";
import { AiFillStar } from "react-icons/ai";


function Card({ img, title, star, reviews, prevPrice, newPrice}) {
  return (
   <>
      
        <div className="main flex flex-col w-full  border-2 border-gray-200 mt-2 gap-4 hover:scale-110 duration-200 ml-6 lg:ml-0 bg-white">
          <div className="img">
            <img
              src={img}
              alt=""
            />
          </div>
          <div className="head font-bold text-xl">
            <h1>{title}</h1>
          </div>
          <div className="stars flex dark:text-gray-500">
            <AiFillStar className="rating-star text-yellow-400" />
            <AiFillStar className="rating-star" />
            <AiFillStar className="rating-star" />
            {reviews}
          </div>
          <div className="price flex gap-2 dark:text-gray-500">
            <p className="line-through">{prevPrice}</p>
            <p>{newPrice}</p>
          </div>
        </div>
    </>
    
  );
}

export default Card;
