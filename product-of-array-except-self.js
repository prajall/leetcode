var productExceptSelf = function (nums) {
  const zero_positions = [];
  const product = nums.reduce((a, c, i) => {
    if (c == 0) {
      zero_positions.push(i);
      return a;
    }
    return a * c;
  }, 1);

  let final_array = [];

  if (zero_positions.length > 1) {
    final_array = Array(nums.length).fill(0);
  } else if (zero_positions.length == 1) {
    for (let i = 0; i < nums.length; i++) {
      const number_to_append = i === zero_positions[0] ? product : 0;
      final_array.push(number_to_append);
    }
  } else {
    nums.forEach((num) => {
      final_array.push(product / num);
    });
  }
  return final_array;
};

const nums = [1, 2, 3, 0, 0, 4];
console.log(productExceptSelf(nums));
