import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="Customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="info-text mt-6 max-w-sm text-center">{feedback}</p>
      <div className="flex mt-6 gap-1 justify-center items-center">
        <img
          width={24}
          height={24}
          className="object-contain m-0"
          src={star}
          alt=""
        />
        <p className="text-xl font-montserrat text-slate-gray ">{rating}</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
