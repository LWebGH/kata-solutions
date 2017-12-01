/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Complexity : O(n)
// Runtime: 92 ms

const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    let diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    else map.set(nums[i], i);
  }
};


// Complexity : O(n ^ 2)
// Runtime: 186 ms

// const twoSum = (nums, target) => {
//   const iter = (array) => {
//     let coreNumber = array.pop();
//     let coreIndex = array.length;
//     let numberToFind = target - coreNumber;
//     let indexToFind = array.indexOf(numberToFind);
//     return indexToFind !== -1 ? [indexToFind, coreIndex] : iter(array);
//   };
//   return iter(nums);
// };

export default twoSum;