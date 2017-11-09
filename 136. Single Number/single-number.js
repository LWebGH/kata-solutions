/**
 * @param {number[]} nums
 * @return {number}
 */

// Time complexity : O(n * 1) = O(n). Time complexity of forEach loop is O(n).Time complexity of hash table operation is O(1).


const singleNumber = (nums) => {
  const hash = new Set();
  nums.forEach(item => {
    if (hash.has(item)) hash.delete(item);
    else hash.add(item);
  });
  for (let value of hash) return value;
};