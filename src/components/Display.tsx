import React from "react";

interface DisplayProps {
  currentSound: string;
}

const Display: React.FC<DisplayProps> = ({ currentSound }) => {
  return (
    <h1
      id='display'
      className='min-h-[48px] text-center text-white text-5xl mt-24 sm:mt-8 font-semibold'
    >
      {currentSound}
    </h1>
  );
};

export default Display;
