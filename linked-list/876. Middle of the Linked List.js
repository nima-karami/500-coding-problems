// https://leetcode.com/problems/middle-of-the-linked-list/

// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:


// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

// Constraints:

// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 var middleNode = function(head) {
    
    // keep track of the index and the node
    let current = head;
    let arr = [];
    
    // iteratre through linkedList
    while(current) {
        arr.push(current)
        current = current.next;
    }
    
    // check for odd or even number of elements
    let index = arr.length%2 === 0 ? arr.length/2 : Math.floor(arr.length/2);
        
    return arr[index];
    
};