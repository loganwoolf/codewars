const upArray = (arr) => {
  const out = arr;
  out[out.length - 1] += 1;

  function rollTen(index) {
    if (out[index] < 0) {
      return null;
    }
    if (index > 0) {
      if (out[index] === 10) {
        out[index] = 0;
        out[index - 1] += 1;
        return rollTen(index - 1);
      }
    }
    if (out[index] === 10) {
      out[index] = 0;
      out.unshift(1);
    }
    return true;
  }

  return rollTen(out.length - 1) ? out : null;
};

console.log(upArray([9, 9, 9]));
