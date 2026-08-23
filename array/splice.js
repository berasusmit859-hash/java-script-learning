let a=[1,2,45,67,5];//change original array(add,remove,replace)
a.splice(2,2,3,4);
console.log(a);
//add
a.splice(2,0,3,4);
console.log(a);
//replace
a.splice(4,1,5);
console.log(a);