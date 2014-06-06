import hello_world from "./secondary";

function MyLibrary(){

}

MyLibrary.prototype = Object.create(Object);
MyLibrary.prototype.constructor = MyLibrary;
MyLibrary.sayHello = hello_world;

export default MyLibrary;