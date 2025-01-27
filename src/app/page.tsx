"use client";
import Cards from "@/components/cards";
import Loader from "@/components/loader";
import RealTime from "@/components/realtime";

import { routine } from "@/data/routine";
import Image from "next/image";
import { useEffect, useState } from "react";
type routineProps = {
  id: string;
  name: string;
  classes: {
    id: string;
    code: string;
    name: string;
    teacher: string;
    time: string;
  }[];
};

export default function Home() {
  const [currentDay, setCurrentDay] = useState<string | null>(null);
  const [currentRoutine, setCurrentRoutine] = useState<routineProps | null>(
    null
  );
  useEffect(() => {
    const day = new Date().toUTCString().slice(0, 3).toLowerCase();
    // console.log(day);
    setCurrentDay(day);

    const currRoutine = routine.find((r) => r.id === day);
    setCurrentRoutine(currRoutine || null);
  }, []);

  const toggleRoutine = (day: string) => {
    const selectedRoutine = routine.find((r) => r.id === day);
    setCurrentRoutine(selectedRoutine || null);
  };
  if (!currentRoutine || !currentDay) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 bg-gradient-to-r from-blue-400 to-green-400">
      <Image
        src={"/aliah_logo.png"}
        alt="CSE"
        width={500}
        height={100}
        className="mt-10 mb-10"
      />
      <h1 className="text-xl text-white font-extrabold"> Deparment Of CSE </h1>
      <h2 className="text-lg text-white font-bold">
        {" "}
        3rd Year - 6th Sem Routine{" "}
      </h2>
      <div className="flex gap-3">
        <p className="text-lg text-white font-bold">Today is </p>

        <RealTime />
      </div>
      <select
        onChange={(e) => toggleRoutine(e.target.value)}
        defaultValue={currentDay}
      >
        <option value="mon">Monday</option>
        <option value="tue">Tuesday</option>
        <option value="wed">Wednesday</option>
        <option value="thu">Thursday</option>
        <option value="fri">Friday</option>
      </select>
      <div className="bg-transparent rounded-md">
        {currentRoutine?.classes.map((c) => (
          <Cards key={c.id} {...c} />
        ))}
      </div>
      <footer>
        <div>
          <p className="text-white text-center font-bold">
            {" "}
            Developed by{" "}
            <a href="https://github.com/tanbirali" className="underline">
              Tanbir Ali
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
