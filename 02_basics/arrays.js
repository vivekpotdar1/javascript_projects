const myArray = [0,1,2,3,4,5];
const myHeros = ["shaktiman","juniorG"];
//console.log(myArray[1]);

//Array Methods
myArray.push(6);

//console.log(myArray);
//myArray.push(7);
//myArray.pop();
//console.log(myArray);
//myArray.unshift(9);
//console.log(myArray);
// myArray.shift();
// console.log(myArray);

// console.log(myArray.includes(2));
// console.log(myArray.indexOf(9));

// const newArr = myArray.join();

// console.log(myArray);
// console.log(typeof newArr);


//slice, splice

console.log("A ", myArray);
const myn1 = myArray.slice(1,3)
console.log(myn1);


console.log("B ", myArray);
const myn2 = myArray.splice(1,3);
console.log(myn2);
