//class and funtion
class App {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
getGreet(){
    console.log("Hi There!");

}
}
const user1 = new App("Binay" ,25);
console.log(user1);
user1.getGreet();