var twoSum = function (nums, target) {
  const alreadyAppeared = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (alreadyAppeared[diff] != undefined) {
      return [alreadyAppeared[diff], Number(i)];
    } else {
      alreadyAppeared[`${nums[i]}`] = Number(i);
    }
  }
};

nums = [2, 7, 11, 15];
target = 9;

console.log(twoSum(nums, target));
