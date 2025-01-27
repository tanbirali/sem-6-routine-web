import { colors } from "@/data/colors";
import React from "react";

type Props = {
  id: string;
  code: string;
  name: string;
  teacher: string;
  time: string;
};

const Cards = (props: Props) => {
  const randomColorKey = [
    "#ff5763",
    "#33dd57",
    "#33aa57",
    "#cc3357",
    "#57bb33",
    "#5733ee",
  ];
  const randomColor =
    randomColorKey[Math.floor(Math.random() * randomColorKey.length)];
  //   console.log(randomColor);
  return (
    <div
      style={{ backgroundColor: randomColor }}
      className={`bg-[${randomColor}] mt-5 mb-5 rounded-md mx-auto p-4 border-2 border-black`}
    >
      <h1 className="text-white text-xl font-bold">{props.name}</h1>
      <p className="text-white text-md font-semibold">{props.code}</p>
      <p className="text-white text-md font-semibold">{props.teacher}</p>
      <p className="text-white text-md font-semibold">{props.time}</p>
    </div>
  );
};

export default Cards;
