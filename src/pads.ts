export type pad = {
  id: string;
  audioURL: string;
  letter: string;
  code: string;
};

export const pads: pad[] = [
  {
    id: "Chord 1",
    audioURL: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    letter: "Q",
    code: "KeyQ",
  },
  {
    id: "Chord 2",
    audioURL: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    letter: "W",
    code: "KeyW",
  },
  {
    id: "Chord 3",
    audioURL: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    letter: "E",
    code: "KeyE",
  },
  {
    id: "Clap",
    audioURL: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    letter: "A",
    code: "KeyA",
  },
  {
    id: "Open HH",
    audioURL: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    letter: "S",
    code: "KeyS",
  },
  {
    id: "Closed HH",
    audioURL: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    letter: "D",
    code: "KeyD",
  },
  {
    id: "Punch",
    audioURL: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    letter: "Z",
    code: "KeyZ",
  },
  {
    id: "Kick n' hat",
    audioURL: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    letter: "X",
    code: "KeyX",
  },
  {
    id: "Kick",
    audioURL: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    letter: "C",
    code: "KeyC",
  },
];
