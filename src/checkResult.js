/* eslint-disable */

export default (user, comp) => {
  console.log(user, comp);
  const difference = user - comp;
  console.log(difference);
  switch (difference) {
    case -1:
    case -3:
    case 2:
    case 4:
      return "YOU WIN";
    case -2:
    case -4:
    case 1:
    case 3:
      return "YOU LOSE";
    case 0:
      return "It's TIE";
  }
};
