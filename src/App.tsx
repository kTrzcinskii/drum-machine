import React, { useCallback, useEffect, useState } from "react";
import Display from "./components/Display";
import Pad from "./components/Pad";
import { pads } from "./pads";

function App() {
  const [currentSound, setCurrentSound] = useState("");

  const handlekeyDown = useCallback((e: KeyboardEvent) => {
    handlePlay(e.code[e.code.length - 1]);
  }, []);

  const handlePlay = (letter: string) => {
    const audio = document.getElementById(letter) as HTMLAudioElement;
    const div = audio.parentElement;

    const clickedClasses = [
      "!border-white",
      "!text-white",
      "!from-indigo-500",
      "!to-rose-600",
      "scale-90",
    ];

    div?.classList.add(...clickedClasses);
    setTimeout(() => {
      div?.classList.remove(...clickedClasses);
    }, 200);

    pads.forEach((pad) => {
      if (pad.letter === letter) {
        setCurrentSound(pad.id);
      }
    });

    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0;
      audio.play();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handlekeyDown);
    return () => document.removeEventListener("keydown", handlekeyDown);
  }, [handlekeyDown]);

  return (
    <div
      id='drum-machine'
      className='bg-gradient-to-tr from-violet-400 to-rose-400 sm:shadow-xl sm:shadow-violet-400 sm:rounded-lg px-6 py-4 w-screen h-screen sm:max-w-md sm:max-h-[500px] sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2'
    >
      <Display currentSound={currentSound} />
      <div className='grid grid-cols-3 gap-3 mt-12'>
        {pads.map((pad) => {
          return <Pad key={pad.id} handlePlay={handlePlay} pad={pad} />;
        })}
      </div>
    </div>
  );
}

export default App;
