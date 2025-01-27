"use client";
import React, { useEffect, useState } from "react";

const RealTime = () => {
  const [currentTime, setCurrentTime] = useState(null);
  useEffect(() => {
    setCurrentTime(new Date());

    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  if (!currentTime) {
    return null;
  }
  return (
    <span className="text-white font-bold">{currentTime.toUTCString()}</span>
  );
};

export default RealTime;
