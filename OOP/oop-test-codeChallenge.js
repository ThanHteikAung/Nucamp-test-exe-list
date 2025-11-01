const rabbit = {
    color: "white",
    checkWatch(){
        console.log(`A ${this.color} rabbit checks his watch and exclaims 'I'm late!`);
    }
}

const spaceShip ={
    name: "dragon",
    launch(name){
        alert(`You have launched the spaceship ${this.name}!`)
    }
}

const shoppingCart = {
    contents: new Array,
};

const lever ={
    stamp: "ACME",
    pull(){
        console.log(`An anvil stamped ${this.stamp} drops on your head.`)
    }
}

function main(){
    rabbit.checkWatch();
    //spaceShip.launch("Dragon");
    shoppingCart.contents.push("laptop")
    console.log("The cart contains:", shoppingCart.contents)
    lever.pull();
}

// 5 - Your object here
const fullName ={
  printName(fstName,lstName){
    console.log(`My name is ${fstName} ${lstName}`)
  }
}
fullName.printName("Than","Hteik Aung")

//Bonous challenge
shoppingCart.contents.push("laptop");
shoppingCart.contents.push("mouse");
shoppingCart.contents.push("pencil");
console.log(`current item list in the cart are ${shoppingCart.contents}`)

//delete laptop item from cart list items
const deleteItem = {
  delete(item){
    if(shoppingCart.contents.includes(item)){
        let indexToRemove = shoppingCart.contents.indexOf(item);
        shoppingCart.contents.splice(indexToRemove,1);
        console.log(`${this.item} is completely deleted`);
        console.log(`after deleted cart list items are ${shoppingCart.contents}`)
    }else{
        console.log(`The item is not in the cart`)
    };
  }
}

deleteItem.delete("aptappop")