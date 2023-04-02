import React from "react";
import Feature from "../Feature/Feature";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-indigo-400 mt-4 rounded-md p-5 flex flex-col">
      <h2 className="text-center">
        <span className="text-5xl font-extrabold text-purple-600">
          {price.price}
        </span>
        <span className="text-2xl text-white font-bold">/mon</span>
      </h2>
      <h5 className="text-center my-4 text-2xl font-bold">{price.name}</h5>
     
      <img className="rounded-md mx-auto" src={price.pictureUrl} alt="" />



      <p className="underline font-bold text-white">Features:</p>
      {
        price.features.map((feature, idx)=><Feature 
          feature={feature}
          key={idx}
          ></Feature>)
      }
      <button className="w-full mt-auto hover:bg-green-800 bg-green-500 py-2 rounded-md text-white font-bold">Buy Now</button>
    </div>
  );
};

export default PriceCard;
