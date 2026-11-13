/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();

  nums.forEach((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });

  const sorted_map = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  console.log({ map, sorted_map });

  return sorted_map.slice(0, k).map((value) => value[0]);
};

console.log(topKFrequent([3, 0, 1, 0], 1));
