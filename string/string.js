let str="Susmit";
let n=str.length;
console.log(n);
let str2=`This is template literal`;
console.log(typeof str2);
//template usage
let obj={
    price:10,
    item:"Pen"
};
console.log("the price of",obj.item,"is",obj.price);//without template
let output=`the price of ${obj.item} is ${obj.price}`;//with template
console.log(output);