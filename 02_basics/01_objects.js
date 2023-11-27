const mySym = Symbol("key1");

const JsUser = {
    name : "Vivek",
    "full name" : "Vivek Potdar",
    [mySym] : "mykey1Val",
    age : 28,
    email : "vivekpotdar@google.com",
    location : "pune",
    state : "maharashtra",
    lastLoggedIn : "90",
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "vivekpotdar@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "vivekpotdar@microsoft.com"
//console.log(JsUser);


JsUser.greetings = function() {
    console.log("hello js user");
}

JsUser.greetings2 = function() {
    console.log(`hello js user, ${this.name}`);
}
console.log(JsUser.greetings());
console.log(JsUser.greetings2());
