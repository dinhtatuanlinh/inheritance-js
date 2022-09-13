//Tạo ra 1 hàm khởi tạo cơ sở
//parent
function Animal(age){
  this.age = age;
  this.showName=()=>{
    console.log("animal")
  }

}

//Có thể thêm thuộc tính vào thuộc tính prototype của hàm khởi tạo
Animal.prototype.showAge = function(){
  console.log( this.age );
};

//Tạo ra 1 hàm khởi tạo con (sẽ dùng để kế thừa hàm cơ sở)
// child
function Dog(color, age){
  Animal.call(this, age)
  this.color = color
  this.bark = ()=>{
    console.log("gau gau")
  }
}
//Thực hiện kế thừa, gán hàm khởi tạo của Animal cho prototype của Dog
Dog.prototype = new Animal();
Dog.prototype.showColor = function(){
  console.log( this.color );
};

// //Kiểm tra sự kế thừa

let phoc = new Dog("red", 4)

phoc.showAge()
phoc.showColor()
phoc.bark()