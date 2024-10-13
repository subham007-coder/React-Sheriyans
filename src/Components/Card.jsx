import React from "react";

const Card = (props) => {
  return (
    <div className="bg-zinc-800 w-64 h-64 flex flex-col items-center justify-center rounded">
      <img className="w-16 rounded-lg" src={props.photo} alt="" />
      <h1 className="text-white font-serif text-xl">{props.name}</h1>
      <p className="text-white font-serif text-xl">{props.age}</p>
      <p className="text-white font-serif text-xl">{props.city}</p>
      <p className="text-white font-serif text-xl">{props.profession}</p>
      <button className="bg-green-700 p-2 rounded mt-2">Add Friend</button>
    </div>
  );
};

export default Card;