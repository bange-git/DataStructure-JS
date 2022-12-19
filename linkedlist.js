
//REVERSE Singly LINKLIST

function reverseList(llist){
   let previous = null;
   let head = llist;
   let nextNode = null;
   let currentNode = head;

   while(currentNode){
      nextNode = currentNode.next;
      currentNode.next = previous;
      previous = currentNode;
      currentNode = nextNode;
      nextNode = null
   }

   return previous
}

//REVERSE Doubly LINKLIST
function reverseDoublyLinklist(llist){
  let head = llist;
  let prev = null;
  let currentNode =head;

  while(currentNode){
     let nextNode = currentNode.next;
     currentNode.next = prev;
     currentNode.prev = nextNode;
     prev = currentNode;
     currentNode = nextNode
  }
  return prev
}

//insert in a linkedlist
function insertNodeAtPosition(llist, data, position){
  let head = llist;
  let current = head;
  if(!head || position === 0){
    head = new SingleLinkList(data, null);
    return head
  }

  let i = 1;
  while(current){
    if(i === position){
    let node = new SingleLinkList(data, null);
    node.next = current.next;
    current.next = node;
    return head
    }
    current = current.next;
    i++
  }
  
}

//MERGE TWO LISTS

function mergeTwoList(head1, head2){
  let dummyHead = new SingleLinkList(-1);
  let dummyNode = dummyHead;
  while(head1 !=null && head2 !=null){
   if(head1.data <= head2.data){
    dummyNode.next = head1;
    head1 = head1.next;
    dummyNode = dummyNode.next
   }else if(head1.data >= head2.data){
     dummyNode.next = head2;
     head2 = head2.next;
     dummyNode = dummyNode.next
   }
  }

  if(!head1){dummyNode.next = head2}
  if(!head2){dummyNode.next = head1}

  return dummyNode.next

}

//DELETE NODE IN A LINKLIST WHEN HEAD IS NOT GIVEN

  function deleteNode(node){
      let next = node.next.next;
          node.value = node.next.val;
          node.next = next
  }


  