import React from 'react';
import Tab from './Tab';

interface Props {
    
}

const Tabs = (props: Props) => {
    return (
      <div className="flex justify-center bg-purple-tabs rounded-full h-14 p-2 text-sm">
        <Tab>pomodoro</Tab>
        <span className="flex items-center font-semibold px-14 cursor-pointer">
          short break
        </span>
        <span className="flex items-center text-gray-400 font-semibold px-14 cursor-pointer">
          long break
        </span>
      </div>
    );
}

export default Tabs
