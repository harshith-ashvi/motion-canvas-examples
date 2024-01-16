import { makeProject } from "@motion-canvas/core";

import mungarumale from "./audio/mungaruMale.mp3";

import example from "./scenes/example?scene";
import bitkotbitte from "./scenes/mungaluMale/bitkotbitte?scene";

export default makeProject({
  // scenes: [example],
  scenes: [bitkotbitte],
  audio: mungarumale,
});
