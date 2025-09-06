// shopping carts

// (...) ---> Rest , Spread operator

function ShoppingCartPrice(...num1){
    return num1;
}
function ShoppingCartPrice2(val1 ,val2,...num1){
    return num1;
}

// console.log(ShoppingCartPrice(100,200,300));

const user = {
    username:"Vivek",
    price:1000  
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    username:"Shambhu",
    price:299
})

const myNewArray = [200,300,400,500];

function returnSecValue(getArray){
    return getArray[2];
}
// console.log(returnSecValue(myNewArray));
console.log(returnSecValue([200,400,600]));
