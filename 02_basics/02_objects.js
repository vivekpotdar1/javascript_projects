//const tinderUser = new Object();   //Singleton object
const tinderUser = {}

tinderUser.id = "abc12"
tinderUser.name = "VivekPotdar"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "vivek",
            lastname : "potdar"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

const obj4 = Object.assign({},obj1,obj2,obj3)

console.log(obj4);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("i"));

