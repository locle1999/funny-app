const minMaxSum = arr => {
  let min = 0;
  let max = 0;
  let sum = 0;
  let sortArr = a.sort((a, b) => a - b);
  for (let i = 0; i < sortArr.length; i++) {
    sum += sortArr[i];
    max = sum - sortArr[0];
    min = sum - sortArr[sortArr.length - 1];
  }
  return [min, max];
};
