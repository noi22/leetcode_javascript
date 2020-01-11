class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const addTwoNumbers = function(l1, l2) {
   let resultNode = new ListNode(0);
   let carry = 0;
   let p = l1;
   let q = l2;
   let currentNode = resultNode;

   while(p !== null|| q !== null || carry > 0) {
      let x = (p !== null) ? p.val : 0;
      let y = (q !== null) ? q.val : 0;
      let sum = x + y + carry;
      carry = Math.trunc(sum / 10);
      currentNode.next = new ListNode(sum % 10);
      currentNode = currentNode.next;
      if (p !== null) p = p.next;
      if (q !== null) q = q.next;
   }

   return resultNode.next
};