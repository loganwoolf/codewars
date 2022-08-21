const upArray = (arr) => {
  const out = arr;
  if (out[out.length - 1] < 0 || out[out.length - 1] > 9) {
    return null;
  }
  if (out.length === 0) {
    return null;
  }

  function rollTen(index, acted = false) {
    if (out[index] < 0 || out[index] > 9) {
      if (!acted && out[index] !== 10) {
        return null;
      }
    }

    if (index > 0) {
      if (out[index] === 10) {
        out[index] = 0;
        out[index - 1] += 1;
        return rollTen(index - 1, true);
      }
      return rollTen(index - 1);
    }

    if (out[index] === 10) {
      out[index] = 0;
      out.unshift(1);
    }
    return true;
  }

  out[out.length - 1] += 1;
  return rollTen(out.length - 1, true) ? out : null;
};

module.exports = upArray;
