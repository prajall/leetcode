var longestMountain = function (arr) {
  if (arr.length < 3) return 0;
  let L = 0;
  let R = 0;
  let P = 0;
  let i = 0;
  let longestMountainLength = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[L] >= arr[L + 1]) {
      L = P = R = i + 1;
    } else if (arr[P + 1] > arr[P]) {
      P = R = i + 1;
    } else if (arr[R] > arr[R + 1]) {
      R = i + 1;
    } else {
      if (
        R - L + 1 >= 3 &&
        R - L + 1 > longestMountainLength &&
        L < P &&
        P < R
      ) {
        longestMountainLength = R - L + 1;
        L = P = R = i;
        i--;
      }
    }
  }

  return longestMountainLength;
};

arr = [875, 884, 239, 731, 723, 685];

console.log(longestMountain(arr));
