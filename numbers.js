var addTwoNumbers = function(l1, l2) {
  let sum
  let rem = 0
  let newList = new ListNode()
  let tempNode = newList

  while(l1 || rem == 1){
              tempNode.next = new ListNode()
      tempNode = tempNode.next
      sum = l1.val + l2.val + rem

      rem =(sum > 9) ? 1 : 0

      tempNode.val = (sum > 9) ? (sum) % 10 : sum
                              console.log( tempNode.val);


      l1 = l1.next
      l2 = l2.next
      sum = 0
  }
  return newList.next
};


var lengthOfLongestSubstring = function(s) {
    let repeat = new Set()
    let arr = []
    let temp = []
    for(let i =0; i< s.length; i++){
        if (repeat.has(s[i])){
            repeat = new Set()
            console.log(arr[arr.length -1])
                        console.log("arr.length")
                        console.log(arr.length)

            if(arr.length === 0 || (temp.length > arr[arr.length -1].length)) arr.push(temp)
            temp = []
        }else {
            temp.push(s[i])
            repeat.add(s[i])
        }
    }
    return arr[-1].join()
};
