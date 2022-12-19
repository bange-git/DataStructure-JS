
class Node {
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

class Bst {
  constructor(value){
    this.root = new Node(value)
    this.count = 0
  }

  size(){
    return this.count;
  }

  insert(value){
    this.count++;

    let newNode = new Node(value);

    const searchTree = (node) => {
      // if value < node.value, go left
       if(value < node.value){
         //if no left child, append new Node
         if(!node.left){
           node.left = newNode;
         }else{ //if it already has a  left child, look left again
           searchTree(node.left);
         }
       }else if(value > node.value){ // if value > node.value, go right
         if(!node.right){
           node.right = newNode;
         }else{
           searchTree(node.right);
         }

       }
    }

    searchTree(this.root);

  }

  min(){
    let currentNode = this.root;
    //continue traversing left until there is no more child nodes
    while(currentNode.left){
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  max(){
    let currentNode = this.root;
    while(currentNode.right){
      currentNode = currentNode.right
    }
    return currentNode.value
  }

  contains(value){
   let currentNode = this.root;
   while(currentNode){
     if(value === currentNode.value){
       return true;
     }
     else if(value < currentNode.value){
       currentNode = currentNode.left
     }else{
       currentNode = currentNode.right
     }
   }
   return false;
  }

  //depth first search - looking branch by branch
  //in-order
  //left, root, right
  //2,3,12,15,28,36,39
  dfsInOrder(){

    let result = [];
    const traverse = (node) => {
      if(node.left) traverse(node.left) //if left child exist, go left
      
      //capture the root node
      result.push(node.value);

      if(node.right) traverse(node.right) //if right child exist, go right
    }

    traverse(this.root);
    return result

  }

  //pre-order
  //root, left, right
  //15,3,2,36,28,39
  dfsPreOrder(){
    let result = [];

    const traverse = (node) => {
      result.push(node.value) // get the root note

      if(node.left) traverse(node.left) //if left node, go left

      if(node.right) traverse(node.right) //if right node, go right
    }
    
    traverse(this.root);
    return result;

  }

  //post-order
  //left, right, root
  //2,12,3,28,39,36,15
  dfsPostOrder(){
    let result = [];
    
    const traverse = (node) => {
      if(node.left) traverse(node.left)

      if(node.right) traverse(node.right)

      result.push(node.value)
    }

    traverse(this.root);
    return result

  }

  //Breadth first search - level by level
  //use queue
  //15,3,36,2,12,28,39
  bfs(){
    let result;
    let queue;

    queue.push(this.root)

    while(queue.length){
      let currentNode = queue.shift();
      result.push(currentNode);
      if(currentNode.left){ queue.push(currentNode.left)}
      if(currentNode.right){ queue.push(currentNode.right)}
    }

    return result;
  }
}

const bst = new Bst(15)
bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)
console.log(`i am go`);



bfs(){

  let result = [];
  let queue = [];

  queue.push(this.root);

  while(queue.length){
    let currentNode = queue.shift();
    result.push(currentNode);
    if(currentNode.left){ queue.push(currentNode.left)}
    if(currentNode.right){ queue.push(currentNode.right)}

  }

  return result;
}