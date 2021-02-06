/* eslint-disable */
export default {
  up(breakpoint) {
    const sizes = {
      md: "760px",
      lg: "1100px",
    };
    return `@media(min-width:${sizes[breakpoint]})`;
  },
};
