// Object literals :
const user = {
    user:"Vivek",
    pass:"abcd",
    getDetails:function(){
        // console.log(`user : ${this.user}`);
        console.log(this)
    }


}
// user.getDetails()
// console.log(this)


// _________________CONSTRUCTOR FUNCTION____________________

// const promiseOne = new Promise()
// const date = new Date()

function user1(username,id,pass){
    this.username = username,
    this.id = id,
    this.pass = pass
    return this
}
// new --> gives new instance rather than overwriting in previous ones
//       Steps :
//       1.new empty object is creating
//       2.a constructor function is called because of 'new' keyword
//       3.arguments are injected in 'this' keyword
//       4.we get new instances



const newUser1 = new user1("vivek",12,1234)
const newUser2 = new user1("tom",2,4653)

// console.log(newUser1)
// console.log(newUser2.constructor)



// ______________instanceof()________________

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true
