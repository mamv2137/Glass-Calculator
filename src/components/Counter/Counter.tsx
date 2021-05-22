import React from "react";

interface Props {}

const Counter = (props: Props) => {
  return (
    <div className="flex justify-center items-center rounded-full w-100 h-100 bg-gradient-to-br from-purple-tabs to-purple-shadow shadow-nm-press">
      <div className="flex flex-col justify-end border-4 border-pink-tab rounded-full w-96 h-96 bg-purple-tabs text-gray-300 text-8xl font-semibold">
        <div className="flex flex-col justify-between items-center h-40 mb-20">
          <span>25:00</span>
          <span className="text-2xl tracking-widest text-gray-400">
            S T A R T
          </span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
