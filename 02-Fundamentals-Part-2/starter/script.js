'use strict';
/* function logger(name) {
    console.log(`My name is ${name}`);
}
logger('test');

//function declaration - hoisted- can be called before it is declared
function calcAge1(birthYear) {
    return 2021 - birthYear;
}
const age1 = calcAge1(1983);

//function expression
const calcAge2 = function(birthYear) {
    return 2021 - birthYear;
}
const age2 = calcAge2(1989);

console.log(age1, age2);

//arrow function

const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1992);
console.log(age3);

const yearsUntilResurement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilResurement(1991, 'Divyendra')); */

//Coding challenge 2
/* const calcAvg = scores => {
    return (scores[0] + scores[1] + scores[2])/3;
}
function Team(name, scores) {
    this.name = name;
    this.scores = scores;
    this.average = calcAvg(scores);
}
const dolphins = new Team('Dolphins', [44,23,71]);
const koalas = new Team('Koalas', [1,2,2]);

const checkWinner = function(avgDolphins, avgKoalas) {
    let winnerLog = `Nobody wins ${dolphins.name}(${avgDolphins}) v ${koalas.name} (${avgKoalas})`;
    if(avgDolphins !== avgKoalas) {
        if(avgDolphins >= avgKoalas * 2) {
            winnerLog = `${dolphins.name} win 👑 (${avgDolphins} v ${avgKoalas})`;
        } else if(avgKoalas >= avgDolphins * 2) {
            winnerLog = `${koalas.name} win 👑 (${avgKoalas} v ${avgDolphins})`;
        }
    } return winnerLog;
}
const winnerLog = checkWinner(dolphins.average, koalas.average);
console.log(winnerLog); */
/* 
const calcTip = function(billAmount) {
    const tipPercent = (billAmount >= 50 && billAmount <= 300)? 0.15 : 0.20;
    return billAmount * tipPercent;
}
const bills = [100,100,100];
const tips = [];
const total = [];
bills.forEach(bill => {
    let tip = calcTip(bill)
    tips.push(tip);
    total.push(bill + tip);
});

console.log(`Bills = ${bills};
Tips = ${tips};
Total = ${total}`);
 */
//arry.push(a) - add element a at the end of the array
//array.unshift(a) - add element at the beginning of the array
//array.pop() - removes the last element - returns the popped element
//array.shift() - remove the first element - returned the removed element
//array.indexOf(a) - returns an int value with index number of element a in the array
//array.includes(a) - returns true if a is in the array else returns false. Uses strict equality

/* 
const divyendra = {
    firstName: 'Divyendra',
    lastName: 'Naidu',
    birthYear: 1983,
    job: 'Architect',
    friends: ['Hemant', 'Juhi', 'Chitra'],
    hasDriversLicense : false,
    /* calcAge : function(birthYear) {
        return 2020 - birthYear;
    } 
    calcAge: function () {
        this.age = 2020 - this.birthYear;
        return this.age;
    },

    getSummary : function() {
        return `${this.firstName} is a ${this.calcAge()} year old ${divyendra.job} 
        and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`;

    }
}
//divyendra.calcAge();

//console.log(divyendra.calcAge(1983));
//console.log(divyendra['calcAge'](1983));
//const exp = (divyendra.hasDriversLicense)? 'a' : 'no';
//const output = `${divyendra.firstName} is a ${divyendra.age} year old ${divyendra.job}, and he has ${exp} drivers license`;
//console.log(output);

console.log(divyendra.getSummary()); */

/* const person = {
    name : this.name,
    mass : this.mass,
    height : this.height,
    calcBMI : function() {
        this.bmi = this.mass/(this.height ** 2);
        return this.bmi;
    }
}
const john = new person(name = 'John', mass =  92, height = 1.95);
const mark = new person(name = 'Mark', mass =  78, height = 1.69);

console.log(john.bmi + '' + mark.bmi); */

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const total = [];

// const calcTip = function(billAmount) {
//     const tipPercent = (billAmount >= 50 && billAmount <= 300)? 0.15 : 0.20;
//     return billAmount * tipPercent;
// }

// for(let i = 0; i < bills.length; i++) {
//     let tip = calcTip(bills[i]);
//     tips.push(tip);
//     total.push(tip + bills[i]);
// }
// const calcAverage = function(numArray) {
//     let total = 0;
//     for(let element of numArray) {
//         total += element;
//     }
//     return total/numArray.length;
// }
// //
// console.log(tips);
// console.log(total);
// console.log(total);

const printForecast = function(forecastedMaxTempArray) {
    let output = '';
    for(let temp of forecastedMaxTempArray) {
        output += `${temp}°C in ${forecastedMaxTempArray.indexOf(temp) + 1} days${forecastedMaxTempArray.indexOf(temp) + 1 === forecastedMaxTempArray.length ? '': ', '}`
    }
    return output;
}
const printThis1 = printForecast([17, 21,23]);
const printThis2 = printForecast([12, 5, -5, 0, 4]);

console.log(printThis1);
console.log(printThis2);