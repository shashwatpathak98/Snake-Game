const arr = [];



arr[0] = "sp";
arr[1] = 1001;
arr[2] = false;


//delete arr[1];
// remove and replace
arr.splice(1,1);
// add at index 1 ---- > 40
arr.splice(1,0,40);
// add at index 2

arr.splice(2,0,"nameis")
console.log(arr);
console.log(arr[1]);
console.log(arr[0]);

//Arrays slice

const myARR = ["a","B","C","D"];
const newar  = myARR.slice(2,myARR.length-1);
console.log(newar);

const newarr= ["1",2,"p","payakan"];

const n = newarr.reverse(newarr);
console.log(n);

