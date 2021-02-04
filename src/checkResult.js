/* eslint-disable */
export default (user, comp) => {
  const difference = user - comp;
  switch (difference) {
    case -1:
    case -3:
    case 2:
    case 4:
      return [0, "YOU WIN"];

    case -2:
    case -4:
    case 1:
    case 3:
      return [1, "YOU LOSE"];

    case 0:
      // currentScore = editScore(); //same score i.e. no increment & decrement
      return [2, "TIE"];
  }
};
