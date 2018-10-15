export default {
  normalizeUserPosition: e => {
    return e.changedTouches
      ? {
          x: e.changedTouches[0].clientX,
          y: e.changedTouches[0].clientY,
        }
      : {
          x: e.clientX,
          y: e.clientY,
        };
  },
};
