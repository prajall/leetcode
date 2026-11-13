var smallerNumbersThanCurrent = function (nums) {
  const sorted = nums.toSorted((a, b) => a - b);
  const map = {};

  sorted.forEach((n, i) => {
    if (map[n] == undefined) {
      map[n] = i;
    }
  });
  const result = [];

  nums.forEach((n) => {
    result.push(map[n]);
  });

  return result;
};

const nums = [5, 0, 10, 0, 10, 6];
console.log(smallerNumbersThanCurrent(nums));
