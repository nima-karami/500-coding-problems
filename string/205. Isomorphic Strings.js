// https://leetcode.com/problems/isomorphic-strings/

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

var isIsomorphic = function(s, t) {
    let isIsomorphic = true;
    
    // check if lengths are equal
    if (s.length !== t.length) return isIsomorphic = false;
    
    
    // iterate over string and create two objects
    let map1 = {};
    let map2 = {};
    
    for (let i=0; i<s.length; i++) {
        
        // check if t maps to s
        if (map1[s[i]] === undefined) {
            map1[s[i]] = t[i];    
        }  else if (map1[s[i]] !== t[i]) {
            return isIsomorphic = false;
        }
        
        // check if s maps to t
        if (map2[t[i]] === undefined) {
            map2[t[i]] = s[i];    
        }  else if (map2[t[i]] !== s[i]) {
            return isIsomorphic = false;
        }
        
        
    }
    
    return isIsomorphic;
};