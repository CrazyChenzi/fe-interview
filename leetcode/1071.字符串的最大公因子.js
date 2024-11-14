/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  if (str1 + str2 !== str2 + str1) return '';
  /**
   * 两个数的最大公约数等于它们相除的余数与较小数的最大公约数
   * 当 b === 0 时，意味着我们已经找到最大公约数。因为任何数 a 和 0 的最大公约数就是 a 本身。所以，如果 b === 0，返回 a。
   * 当 b !== 0 时，我们继续递归，使用 b 和 a % b 来计算最大公约数。
   */
  const goc = (a, b) => b === 0 ? a : goc(b, a % b);
  return str1.substring(0, goc(str1.length, str2.length));
};
// @lc code=end
