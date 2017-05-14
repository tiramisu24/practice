var addTwoNumbers = function(l1, l2) {
    let rem, sum, tempNode
    let newList = new ListNode()
    while(l1){
        tempNode = newList
        sum = l1.val + l2.val + rem
        rem = (sum) % 10
        tempNode.val = (sum > 9) ? 1 : sum

        tempNode.next = new ListNode()
        tempNode = tempNode.next
        l1 = l1.next
        l2 = l2.next
    }
    return newList
};
