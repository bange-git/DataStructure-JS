
// reverse a singly linklist

function reverseLinklist(llist){
  let head = llist;
  let current = head;
  //let nextNode = null;
  let previous = null;

   while(currentNode){
      let nextNode = currentNode.next;
       currentNode.next = previous;
       previous = currentNode;
       currentNode = nextNode;
       nextNode = null
   }

   return previous;

}

function reverseDLinklist(llist){
  let head = llist;
  let currentNode = head;
  let prev = null;

  while(currentNode){
    let nextNode = currentNode.next;
        currentNode.next = prev
        currentNode.prev = nextNode
        previous = currentNode;
        currentNode = nextNode;

  }

  return previous;
}

function mergeLinklist(head1,head2){
   let dummyHead = new SinglyLinkedList(-1)
   let dummyNode = dummyHead
   while(head1 !== null && head2 !== null){
    if(head1.data <= head2.data){
        dummyNode.next = head1
        head1 = head1.next
        dummyNode = dummyNode.next
    }else if(head1.data >= head2.data){
      dummyNode = head2
      head2 = head2.next
      dummyNode = dummyNode.next
    }
   }

   if(!head1){dummyNode.next = head2}
   if(!head2){dummyNode.next = head1}
   return dummyNode.next;
}

function insertatPostion(llist, data, position){
   let head = llist;
   let current = head;
   if(!head || position == 0){
     head = new SinglyLinkedList(data, null)
     return head
   }

  let i = 1
  while (current){
    if(i == position){
      let newNode = new SinglyLinkedList(data, null);
      newNode.next = current.next;
      current.next = newNode
      return head
    }
    current = current.next;
    i++
  }



}


