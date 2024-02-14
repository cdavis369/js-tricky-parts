function curriedAdd(total) {
  let sum = 0;

  function adder(nextNumber) {
    if (nextNumber === undefined) return sum;
    sum += nextNumber;
    return adder;
  }

  if (!total) {
    return sum;
  }

  return adder(total)
}

module.exports = { curriedAdd };
