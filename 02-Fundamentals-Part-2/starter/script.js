'use strict';
/* function logger(name) {
    console.log(`My name is ${name}`);
}
logger('Divyendra');

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