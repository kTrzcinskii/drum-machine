import React from "react";
import { pad } from "../pads";

interface PadProps {
  pad: pad;
  handlePlay: (letter: string) => void;
}

const Pad: React.FC<PadProps> = ({ pad, handlePlay }) => {
  return (
    <button
      id={pad.id}
      className='drum-pad text-center border-4 border-slate-900 bg-gradient-to-tr text-slate-900 from-indigo-400 to-rose-500 px-4 py-6 text-2xl font-bold  hover:cursor-pointer hover:border-white hover:text-white hover:from-indigo-500 hover:to-rose-600 focus:outline-none active:outline-none  transition-all duration-300 ease-in-out'
      onClick={() => handlePlay(pad.letter)}
    >
      {pad.letter}
      <audio src={pad.audioURL} id={pad.letter}></audio>
    </button>
  );
};

export default Pad;
