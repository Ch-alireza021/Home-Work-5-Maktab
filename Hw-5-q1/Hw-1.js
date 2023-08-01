let user = {
  name: "John",
  age: 30,
  // sayHello:function(){
  //     alert(`Hello ${this.name}`)
  // }
  sayHello() {
    alert(`Hello ${this.name}`);
  }
};
user.sayHello();
