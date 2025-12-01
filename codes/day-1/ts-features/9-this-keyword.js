//function global(){
var x = 100;
function call() {
  this.x = 34;
  //scope
  //x is an outer scope variable of call
}
//this property of call function is now connected to existing window (in brwoser) of global (in Node runtime) object created by JS engine at the beginning and that srores this.x value
//call()

//this property of call function is now connected to a new object created by JS engine and that srores this.x value
new call();

this.y = 1000;
this.z = 2000;

const obj = {
  data: 100,
  test: function () {
    var a = 314;
    console.log(this);
    console.log(this.data);
  },
};
//this property of test function is connected to obj itself
obj.test();

console.log(this);
console.log(this.data);
console.log(this.y, this.z);

//}
//global()
