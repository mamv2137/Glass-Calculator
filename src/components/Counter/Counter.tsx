import React from 'react';

interface Props {
  status: string;
  time: number;
  onStart(): void;
  onPause(): void;
}

const Counter = ({ onStart, status, time, onPause }: Props) => {
  return (
    <div
      onClick={status === 'idle' ? onStart : onPause}
      className="flex justify-center items-center rounded-full w-100 h-100 bg-gradient-to-br from-purple-tabs to-purple-shadow shadow-nm-press cursor-pointer">
      <div className="flex flex-col justify-end border-4 border-pink-tab rounded-full w-96 h-96 bg-purple-tabs text-gray-300 text-8xl font-semibold">
        <div className="flex flex-col justify-between items-center h-40 mb-20">
          <span>{time}:00</span>
          <span className="text-2xl tracking-widest text-gray-400">
            {status === 'idle' ? 'S T A R T' : 'P A U S E'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
