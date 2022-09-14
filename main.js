//Tạo ra 1 hàm khởi tạo cơ sở
//parent
function Animal(a){
  let age
  let constructor = ()=>{
    age = a
    console.log("Animal constructor!!!")
  }
  constructor()

  this.showAge = function(){
    console.log( age );
  };
}

//Có thể thêm thuộc tính vào thuộc tính prototype của hàm khởi tạo
Animal.prototype.showName= ()=>{
  console.log("Animal")
}

//Tạo ra 1 hàm khởi tạo con (sẽ dùng để kế thừa hàm cơ sở)
// child
function Dog(cl, a){
  let color

  Animal.call(this, a)// kế thừa constructor
  let constructor = ()=>{
    color = cl
    console.log("Dog constructor!!")
  }
  constructor()

  this.bark = ()=>{
    console.log("gau gau")
  }
  this.showColor = function(){
    console.log( color );
  }
}
//Thực hiện kế thừa, gán hàm khởi tạo của Animal cho prototype của Dog
Dog.prototype = new Animal();
console.log(Dog.prototype)
// //Kiểm tra sự kế thừa

let phoc = new Dog("red", 4)
console.log(phoc)
console.log(phoc.age)
phoc.showAge()
phoc.showColor()
phoc.bark()