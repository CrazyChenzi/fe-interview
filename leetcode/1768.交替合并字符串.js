/*
 * @lc app=leetcode.cn id=1768 lang=javascript
 *
 * [1768] 交替合并字符串
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let word = '';
    let word1Len = word1.length;
    let word2Len = word2.length;
    for (let i = 0; i < word1Len || i < word2Len; i++) {
      if (word1[i] == undefined) {
        word += word2.slice(i);
        break;
      } else if (word2[i] == undefined) {
        word += word1.slice(i);
        break;
      } else {
        word += word1[i]+word2[i];
      }
    }
    return word;
};

// @lc code=end

