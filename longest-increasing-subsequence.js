var lengthOfLIS = function (nums) {
  const sol = Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) sol[i] = Math.max(sol[j] + 1, sol[i]);
    }
  }
  return Math.max(...sol);
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
// console.log(Math.max(...[3,2,5,1,5,6,7,2]))
