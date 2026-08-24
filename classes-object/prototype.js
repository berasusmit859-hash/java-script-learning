const employee={
    calcTax: function(){
        let taxamount=this.salary * 0.10;
        console.log("tax rate is 10% amountt is",taxamount);
    },
};

const firstemp={
    salary: 50000,
    
};

firstemp.__proto__=employee;

firstemp.calcTax();
console.log(firstemp.salary);