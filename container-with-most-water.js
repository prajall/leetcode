/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let L = 0;
  let R = height.length - 1;
  let max = 0;

  const calculate_area = (L, R) => {
    const min_height = Math.min(height[L], height[R]);
    const base_length = R - L;
    return min_height * base_length;
  };

  for (let i = 0; i < height.length; i++) {
    const area = calculate_area(L, R);
    if (area > max) max = area;
    if (height[L] > height[R]) R--;
    else L++;
  }
  return max;
};

const height = [1, 1];
console.log(maxArea(height));
