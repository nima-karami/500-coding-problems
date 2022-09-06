// https://leetcode.com/problems/is-subsequence/

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
 

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.
 

// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?

var isSubsequence = function(s, t) {
    let isSub = false;
      
    // special cases
    if (s === t) return isSub = true;
    if (s === '') return isSub = true;
       
    
    // every char in s and check if t includes char
    let index1 = 0;
    let index2 = 0;
    let str = '';
    
    while (index1 < t.length & index2 < s.length) {
        if (s[index2] !== t[index1]) {
            index1++;
        } else if (s[index2] === t[index1]) {
            str += t[index1];
            index1++;
            index2++;
        }
        
        if (s === str) {
            isSub = true;
            return isSub;
        }
    }
    
    
    return isSub;
    
};
