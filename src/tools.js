/* eslint-disable */
import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import spock from "./images/icon-spock.svg";
import lizard from "./images/icon-lizard.svg";
export default [
  {
    name: "rock",
    position: 3,
    color1: "hsl(349, 71%, 52%)",
    color2: "hsl(349, 70%, 56%)",
    path: `url(${rock})`,
  },
  {
    name: "paper",
    position: 2,
    color1: "hsl(230, 89%, 62%)",
    color2: "hsl(230, 89%, 65%)",
    path: `url(${paper})`,
  },
  {
    name: "scissors",
    position: 1,
    color1: "hsl(39, 89%, 49%)",
    color2: "hsl(40, 84%, 53%)",
    path: `url(${scissors})`,
  },
  {
    name: "lizard",
    position: 4,
    color1: "hsl(261, 73%, 60%)",
    color2: "hsl(261, 72%, 63%)",
    path: `url(${lizard})`,
  },
  {
    name: "spock",
    position: 5,
    color1: "hsl(189, 59%, 53%)",
    color2: "hsl(189, 58%, 57%)",
    path: `url(${spock})`,
  },
];
