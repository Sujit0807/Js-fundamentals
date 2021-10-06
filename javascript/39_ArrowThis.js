/* 
What i understood : 1.normal function madhe this keyword use kela ki method chya parent la refer karto
                    2.arrow function madhe this keyword use kela ki to object la refer karto
--------------------------------------------------------------------------------------------------------*/  

const obj = {
    name : 'Sam',
    lastName : 'Mali',
    myFunc : function(){
        console.log(this); // obj i.e refers to parent obj
        console.log(`${this.name} ${this.lastName}`);  // obj.name & obj.lastName
    }
};

console.log(obj.myFunc());

const myObj = {
    name : 'Sam',
    lastName : 'Mali',
    fullName : () => {
        console.log(this); // myobj i.e parent method chya object la 
        console.log(`${this.name} ${this.lastName}`);  // obj.name & obj.lastName
    }
};
console.log(obj.myFunc());

const myObj1 = {
    name : 'Sam',
    lastName : 'Mali',
    fullName : function(){
        setTimeout(function(){
            console.log(this); // window i.e Method cha parent obj
            console.log(`${this.name} ${this.lastName}`);  // window.name & window.lastName  --> undefined
        },3000);
    }
};

console.log(myObj1.fullName());

const myObj2 = {
    name : 'Sam',
    lastName : 'Mali',
    fullName : function(){
        setTimeout(() => {
            console.log(this); // myObj1
            console.log(`${this.name} ${this.lastName}`);  // myObj1.name & myObj1.lastName
        },4000);
    }
};

console.log(myObj2.fullName());


