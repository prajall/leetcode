var minimumAbsDifference = function (arr) {
  const sorted_array = arr.sort((a, b) => a - b);
  let minimum_difference = 9999999;
  const res = [];
  let i = 0;

  for (i = 0; i < sorted_array.length; i++) {
    const difference = sorted_array[i + 1] - sorted_array[i];
    if (difference < minimum_difference) {
      minimum_difference = difference;
    }
  }

  for (i = 0; i < sorted_array.length; i++) {
    const difference = sorted_array[i + 1] - sorted_array[i];

    if (difference == minimum_difference) {
      res.push([sorted_array[i], sorted_array[i + 1]]);
    }
  }

  return res;
};

const arr = [3, 8, -10, 23, 19, -4, -14, 27];

console.log(minimumAbsDifference(arr));
