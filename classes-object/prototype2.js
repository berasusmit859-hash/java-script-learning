const employee={
    calcTax: function(){
        let taxamount=this.salary * 0.10;
        console.log("tax rate is 10% amountt is",taxamount);
    },
};

const firstemp={
    salary: 50000,
    calcTax: function(){
    let taxamount=this.salary * 0.20;
    console.log("tax rate is 20% amountt is",taxamount);
    },
};

firstemp.__proto__=employee;

firstemp.calcTax();//always object win if the function in protoype and in object
console.log(firstemp.salary);