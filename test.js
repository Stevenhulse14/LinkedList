class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
  // instantiation of linkedlist attributes
  constructor() {
    //setting the entire list to null
    this.head = null; //set head to null
  }
  // function to create a node
  //append
  append(value) {
    // Creates a node and adds a value to the node
    const newNode = new Node(value);
    //checking if the list is enoty
    if (this.head === null) {
      //seting a head to a frst node

      this.head = newNode;
      // returns at this specific point to stop the method
      return;
    }
    // saves head to a local variable to traverse
    let current = this.head;
    // starts a loop as long as there a continuation in the current
    while (current.next) {
      //current is being set to wtv the next node will be
      current = current.next;
    }
    //this sets the next node to the NEWEST  node
    current.next = newNode;
  }

  //prepend
  //delete
}

const linkedlist = new Linkedlist();

linkedlist.append(7);

linkedlist.append(8);

console.log(linkedlist);
