//reverse link list


function reversesingle(llist){
  
  let head = llist;
  let currentNode = head;
  let previous = null;

while(currenntNode){
   let nextNode = currentNode.next
   currentNode.next = previous;
   previous = currentNode;
   currentNode = nextNode;
   nextNode = null
}
return previous

}

function reverseDouble(llist){
  let head = llist;
  let prev = null;
  let current = head;

  while(current){
    let nextNode = current.next;
        current.next = prev;
        current.prev = nextNode;
        prev = current;
        current = nextNode
  }
  return prev;
}

function insertNode(llist, data, position){
  let current = llist;

  let i = 1
  while(current){
    if(i == position){
      let node = new SinglyLinklist(data, null)
      node.next = current.next;
      current.next = node
      return head
    }
    current = current.next;
    i++
  }
}

function mergeLinklist(head1, head2){
    let dummyHead = new SinglyLinklist(-1)
    let dummyNode = dummyHead;

    while(head1 !==null && head2 !==null){
      if(head1.data <= head2.data){
        dummyNode.next = head1;
        head1 = head1.next;
        dummyNode = dummyNode.next;
      }else if(head1.data >= head2.data){
        dummyNode.next = head2;
        head2 = head2.next;
        dummyNode = dummyNode.next
      }
    }

    if(!head1){dummyNode.next = head2}
    if(!head2){dummyNode.next = head1}

    return dummyHead.next;

}


// bst
class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null
  }
}

class bfs {
    constructor(value){
      this.root = new Node(value);
      this.count = 0;
    }


    size(){
      return this.count;
    }

    min(){
      let currenntNode = this.root;

      while(currenntNode.left){
        currenntNode = currenntNode.left
      }
      return currenntNode.value
    }

    max(){
      let current = this.root
      while(current.right){
        current = current.next
      }
      return current.value
    }

    contains(value){
      
      let currentNode = this.root;
      while(currentNode){
        if(value == currentNode.value){
          return true
        }
        else if(value < currentNode.value){
          currentNode = currentNode.left
        }
        else if(value > currentNode.value){
          currentNode = currentNode.right
        }

      }
      return false
    }

    //insert
    insert(value){
      let newNode = new Node(value);

       const searchTree = node => {
           if(value < node.value){
             if(!node.left){ node.left = newNode}
             else{ searchTree(node.left)}
           }else if( value > node.value){
             if(!node.right){ node.right = newNode}
             else{searchTree(node.right)}
           }
       }

       searchTree(this.root)

    }
 
    //left-root-right
    dfsInOrder(){
       
      let result = [];

      const traverse = node => {
       if(node.left){ traverse(node.left)}

       result.push(node.value)

       if(node.right){ traverse(node.right)}
      }
      traverse(this.root)
      return result
    }

    //root - left - right
    dfsPreOrder(){
      let result = []

      const traverse = node => {
        result.push(node.value)
        if(node.left){traverse(node.left)}
        if(node.right){traverse(node.right)}
      }
      
      traverse(this.root)
      return result;
    }

    dfsPostOrder(){
      let result = [];

      const traverse = n => {
        if(n.left){ traverse(n.left)}
        if(n.right){ traverse(n.right)}
        result.push(n.value)
      }

       traverse(this.root)
      return result
    }


    bfs(){
      let result = [];
      let queue = [];

      queue.push(this.root)

      while(queue.length){
        let currentNode = queue.shift();
        return result.push(currentNode)
        if(currentNode.left){ queue.push(currentNode.left)}
        if(currentNode.right){ queue.push(currentNode.right)}
      }
    }
   
}