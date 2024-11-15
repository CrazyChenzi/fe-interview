/*
 * @lc app=leetcode.cn id=605 lang=javascript
 * @lcpr version=30204
 *
 * [605] 种花问题
 *
 * https://leetcode.cn/problems/can-place-flowers/description/
 *
 * algorithms
 * Easy (32.23%)
 * Likes:    744
 * Dislikes: 0
 * Total Accepted:    245.2K
 * Total Submissions: 760.9K
 * Testcase Example:  '[1,0,0,0,1]\n1'
 *
 * 假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
 * 
 * 给你一个整数数组 flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。另有一个数 n
 * ，能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：flowerbed = [1,0,0,0,1], n = 1
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 输入：flowerbed = [1,0,0,0,1], n = 2
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= flowerbed.length <= 2 * 10^4
 * flowerbed[i] 为 0 或 1
 * flowerbed 中不存在相邻的两朵花
 * 0 <= n <= flowerbed.length
 * 
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      /** 左边为 0 */
      let left = i === 0 || flowerbed[i - 1] === 0;
      /** 右边为 0 */
      let right = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;
      if (left && right) {
        flowerbed[i] = 1;
        count++;
        i++;
      }
    }
    if (count >= n) {
      return true;
    }
  }
  return count >= n;
};
// @lc code=end

/*
// @lcpr case=start
// [1,0,0,0,1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,0,0,0,1]\n2\n
// @lcpr case=end

 */


// @lcpr-after-debug-begin
module.exports = canPlaceFlowers;
// @lcpr-after-debug-end