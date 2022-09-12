// https://leetcode.com/problems/longest-palindrome/

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.

/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    let longest = 0;
    let seen = new Set();
    
    // Check to see if char is seen
    for (i in s) {
        let char = s[i];
        if (seen.has(char)) {
            longest += 2;
            seen.delete(char)
        } else {
            seen.add(char);
        }
    }
    
    longest = seen.size > 0 ? longest+1 : longest;
    
    return longest
};