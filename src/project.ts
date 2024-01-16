import { makeProject } from "@motion-canvas/core";

import mungarumale from "./audio/mungaruMale.mp3";

import example from "./scenes/example?scene";
import bitkotbitte from "./scenes/mungaluMale/bitkotbitte?scene";
import textReveal from "./scenes/textReveal/textReveal?scene";

// comment/un-comment scene which you want to see the browser editor
export default makeProject({
  // scenes: [example],
  scenes: [bitkotbitte],
  // scenes: [textReveal],
  audio: mungarumale,
});
