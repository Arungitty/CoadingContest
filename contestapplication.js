// chapter 10 practise set
// Q1:- Use a free API from the internet & feed your application with live data
let url="https://kontests.net/api/v1/all";

let promise= fetch(url);
promise.then((value)=> {
    return value.json();
}).then((contests)=> {
    console.log(contests);
     // lets take one string variable(ihtml)
    let ihtml= "";
    let img_array=["https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg","https://www.cognizantsoftvision.com/wp-content/uploads/2019/09/30145947/Coding-Contest-e1569855612981.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqA9PIxfN7tyfECj2eqc1Y261iteXpQtkr3Q&usqp=CAU","https://www.cognizantsoftvision.com/wp-content/uploads/2019/09/30145947/Coding-Contest-e1569855612981.jpg","https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeRDvW4JnlJxE9wKHWPA0CD6o5ZTZZGmj0PA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-Y0Wr3RtzuKcBRXELL_2bYW-0zH8TjqV5w&usqp=CAU","https://s3.cointelegraph.com/uploads/2023-01/158029af-a86a-402f-a5b5-e915cc69f138.JPG","https://www.cognizantsoftvision.com/wp-content/uploads/2019/09/30145947/Coding-Contest-e1569855612981.jpg","https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg","https://www.cognizantsoftvision.com/wp-content/uploads/2019/09/30145947/Coding-Contest-e1569855612981.jpg","https://s3.cointelegraph.com/uploads/2023-01/158029af-a86a-402f-a5b5-e915cc69f138.JPG","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqA9PIxfN7tyfECj2eqc1Y261iteXpQtkr3Q&usqp=CAU","https://www.cognizantsoftvision.com/wp-content/uploads/2019/09/30145947/Coding-Contest-e1569855612981.jpg","https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeRDvW4JnlJxE9wKHWPA0CD6o5ZTZZGmj0PA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-Y0Wr3RtzuKcBRXELL_2bYW-0zH8TjqV5w&usqp=CAU","https://s3.cointelegraph.com/uploads/2023-01/158029af-a86a-402f-a5b5-e915cc69f138.JPG","https://www.cognizantsoftvision.com/wp-content/uploads/2019/09/30145947/Coding-Contest-e1569855612981.jpg","https://thumbs.dreamstime.com/b/coding-wallpaper-ai-robot-algorithms-future-warfare-cyber-attack-concept-155190388.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxhRZsqWEalSxBT-UmpHgMEN55PIA-ZiEe9w&usqp=CAU","https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeRDvW4JnlJxE9wKHWPA0CD6o5ZTZZGmj0PA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-Y0Wr3RtzuKcBRXELL_2bYW-0zH8TjqV5w&usqp=CAU","https://s3.cointelegraph.com/uploads/2023-01/158029af-a86a-402f-a5b5-e915cc69f138.JPG","https://www.cognizantsoftvision.com/wp-content/uploads/2019/09/30145947/Coding-Contest-e1569855612981.jpg","https://thumbs.dreamstime.com/b/coding-wallpaper-ai-robot-algorithms-future-warfare-cyber-attack-concept-155190388.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxhRZsqWEalSxBT-UmpHgMEN55PIA-ZiEe9w&usqp=CAU","https://www.forbes.com/advisor/wp-content/uploads/2022/06/Coder.jpeg.jpg","https://w0.codingame.com/work/wp-content/uploads/2021/05/coding-.jpg","https://bcu.imgix.net/coding-for-disabled-developers-primary-image-132379771463617666.jpg?auto=format&fm=jpg","https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg","https://www.cognizantsoftvision.com/wp-content/uploads/2019/09/30145947/Coding-Contest-e1569855612981.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-Y0Wr3RtzuKcBRXELL_2bYW-0zH8TjqV5w&usqp=CAU","https://s3.cointelegraph.com/uploads/2023-01/158029af-a86a-402f-a5b5-e915cc69f138.JPG","https://www.cognizantsoftvision.com/wp-content/uploads/2019/09/30145947/Coding-Contest-e1569855612981.jpg","https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeRDvW4JnlJxE9wKHWPA0CD6o5ZTZZGmj0PA&usqp=CAU","https://i.insider.com/601441dd6dfbe10018e00c25?width=700"]
    for(index in contests){
        console.log(contests[index]);
        ihtml += `
        <div class="card mx-2 my-2" style="width: 22rem;">
                <img src= ${img_array[index]} style="height:14rem" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${contests[index].name}</h5>
                  <p> status is: ${contests[index].status} & site is ${contests[index].site}</p>
                  <p> In 24 hours? : ${contests[index].in_24_hours}</p>
                  <p> starts at: ${contests[index].start_time}</p>
                  <p>end at: ${contests[index].end_time}</p>
                  <a href="${contests[index].url}" class="btn btn-primary">Visit contest</a>
                </div>
              </div>
        `
    }
    cardContainer.innerHTML= ihtml;
})

// Q2:- Create a note saving application which stores your note to local storage
// let value= prompt("Enter the note value");
// if(value){
//     localStorage.setItem("note",value);
// }

// Q3:- Repeat the last question & fetch the note which was saved
// let noteValue= localStorage.getItem("note");
// alert(noteValue);

// Q4:- Delete the note in previous question
// let response= confirm("Do you want to delete the note");
// if(response){
//     localStorage.removeItem("note");
//     alert("note deleted successfully from localStorage");
// }

// prototypes and prototypal inheritance
// let a= {
//     name1: "harry",
//     run1: ()=> {
//         alert("self run");
//     },
//     language: "JavaScript",
// }

// console.log(a);

// let p= {
//     run: ()=> {
//         alert("run")
//     }
// }

// a. __proto__ = p;
// console.log(a.run());

// let z= {
//     name:"suraj",
// }

// p.__proto__= z;

// console.log(a.name);

// classes and objects in javascript
// class RailwayForm{
//     submit(){
//         alert("form submitted by " +this.name +" & the train number for " +this.name +" is " +this.trainNumber);
//     }
//     cancel(){
//         alert("form cancelled by " +this.name +" & the train number for " +this.name +" was " +this.trainNumber);
//     }
//     fill(givenName, trainNumber){
//         this.name= givenName;
//         this.trainNumber= trainNumber;
//     }
// }

// // create a form for harry
// let harryForm= new RailwayForm();
// // create a forms for suraj
// let surajForm1= new RailwayForm();
// let surajForm2= new RailwayForm();
// // fill the forms with suraj's deatils
// surajForm1.fill("suraj", 12345);
// surajForm2.fill("suraj",56733)
// // fill the form with harry's deatils
// harryForm.fill("harry", 56789);
// // submit the form of harry
// harryForm.submit();
// // submit the forms of suraj
// surajForm1.submit();
// surajForm2.submit();
// // cancel the form of harry
// harryForm.cancel();
// // cancel the form1 of suraj
// surajForm1.cancel();

// Constructors in javascript
// class RailwayForm {
//     constructor(givenname, trainnumber, address){
//         this.name= givenname;
//         this.trainnumber= trainnumber;
//         this.address= address;
//     }

//     preview(){
//         alert(this.name +" your train number is " +this.trainnumber +" and your address is " +this .address)
//     }

//     submit(){
//         alert(this.name +" your form is submitted for train number: " +this.trainnumber);
//     }

//     cancel(){
//         alert(this.name +" your form is cancelled for train number " +this.trainnumber);
//         // now there is no train allocated for object, so we take one convention
//         this.trainnumber=0;
//     }
// }

// let harry= new RailwayForm("harry", 3456, "sikanderpur");
// harry.preview();
// harry.submit();
// harry.cancel();
// harry.preview();

// Inheritance & extends keyword
// class Animal{
//     constructor(givenname, color){
//         this.name= givenname;
//         this.color= color;
//     }

//     run(){
//         console.log(this.name +" is running");
//     }

//     shout(){
//         console.log(this.name +" is shouting");
//     }
// }

// class Monkey extends Animal{
//     eatBanana(){
//         console.log(this.name +" is eating banana");
//     }

//     hide(){
//         console.log(`${this.name} is hiding`)
//     }

//     jump(){
//         console.log(`${this.name} is jumping`)
//     }
// }

// let a= new Animal("tiger", "orange");
// console.log(a.run());
// let m= new Monkey("chinki", "brown");
// console.log(m.eatBanana());
// console.log(m.run());
// // we can't do like this it will throw an error
// console.log(a.hide());

// Method overriding with super keyword
// class Employee {
//     login(){
//         console.log("Employee has logged");
//     }

//     logout(){
//         console.log("Employee has logged out")
//     }

//     requestLeaves(leaves){
//         console.log(`Employee has requested ${leaves} leaves`)
//     }
// }

// class programmer extends Employee {
//     requestCoffee(x){
//         console.log(`Employee has requested ${x} coffees`)
//     }

//     requestLeaves(leaves){
//         super.requestLeaves(5);
//         console.log("One extra is granted");
//     }
// }

// let e= new Employee();
// e.login();
// e.requestLeaves(3);

// let p= new programmer();
// p.requestLeaves(3);

// Method overriding with constructors
// class Employee {
//     constructor(givenName){
//         console.log(`${givenName} Employee's constructor is here`);
//         this.name= givenName;
//     }
//     login(){
//         console.log("Employee has logged");
//     }

//     logout(){
//         console.log("Employee has logged out")
//     }

//     requestLeaves(leaves){
//         console.log(`Employee has requested ${leaves} leaves`)
//     }
// }

// class Programmer extends Employee {
//     // If we dont create any constructor in child class then javascript engine will create automatically a constructor
//     // constructor(....args){
//     //     super(....args);
//     // }

//     constructor(givenName){
//         console.log(`This is a newly written constructor`);
//         super(givenName);
//         this.name= givenName;
//     }

//     requestCoffee(x){
//         console.log(`Employee has requested ${x} coffees`)
//     }

//     requestLeaves(leaves){
//         super.requestLeaves(5);
//         console.log("One extra is granted");
//     }
// }

// let e= new Employee();
// e.login();
// e.requestLeaves(3);

// let p= new Programmer("harry");
// p.requestLeaves(3);

// Static method
// class Animal {
//     constructor(givenName){
//         this.name= Animal.capitalize(givenName);
//     }

//     walk(){
//         alert(`Animal ${this.name} is walking`);
//         // we can also do like this
//         // alert(`Animal ${Animal.capitalize(this.name)} is walking`);
//     }

//     // we create this static method for to make capital letter of first character of string
//     static capitalize(name1){
//         return name1.charAt(0).toUpperCase() + name1.substr(1, name1.length)
//     }
// }

// let a= new Animal("jack");
// a.walk();

// Getters, Setters & instanceof opertaor
// class Animal {
//     constructor(givenName){
//         this._name= givenName;
//     }

//     fly(){
//         console.log(this.name +" is flying")
//     }

//     get name(){
//         return this._name
//     }

//     set name(givenName){
//         this._name= givenName;
//     }
// }

// class Employee extends Animal {
//     login(){
//         console.log("login successfully");
//     }
// }

// let a= new Animal("jack");
// a.fly();
// // calling getter function
// console.log(a.name);
// // calling setter function
// a.name= "bruno";
// console.log(a.name);

// // instanceof operator
// console.log(a instanceof Animal);
// let b= "sachin";
// console.log(b instanceof Animal);
// let e= new Employee();
// console.log(e instanceof Animal);























































































































