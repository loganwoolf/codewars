const number = (stops) => {
  return stops.reduce((acc, stop) => {
    const [on, off] = stop
    return acc + (on - off)
  }, 0)
};

module.exports = { number };
