/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    const aux = m < n ? n : m
    const lastPosition = m + n - 1
    for (let i = 0; i < aux; i++ ) {
        if (nums2[i] !== undefined) nums1[lastPosition - i] = nums2[i]
    }
    nums1.sort((a, b) => a - b);
};