/* let js = 'amazing';
let country = 'India';
let continent = 'Asia';
let population = 120;
console.log('Country : ' + country + '; Continent : ' + continent + '; Population : ' + population);
let isIsland = true;
console.log("Country : " + typeof(country) + '; Continent : ' + typeof(continent) + '; Population : ' + typeof(population) + '; isIsland : ' + typeof(isIsland)); */

/* let markMass, johnMass, markHeight, johnHeight;
markMass = 95;
johnMass = 85;
markHeight = 1.88;
johnHeight = 1.76;
function bmiCalc(mass, height) {
    return mass/(height**2);
}
let markHigherBMI = bmiCalc(markMass, markHeight) > bmiCalc(johnMass, johnHeight);
let winnerName = markHigherBMI ? 'Mark' : 'John';
let loserName = markHigherBMI ? 'John' : 'Mark';
let winnerBMI = markHigherBMI ? bmiCalc(markMass, markHeight) : bmiCalc(johnMass, johnHeight);
let loserBMI = markHigherBMI ? bmiCalc(johnMass, johnHeight) : bmiCalc(markMass, markHeight);
let outputMsg = `${winnerName}'s BMI (${winnerBMI}) is higher than ${loserName}'s BMI (${loserBMI}) by ${winnerBMI - loserBMI}`;
console.log(outputMsg); */

let dolphinScores = [96, 200, 89];
let koalaScores = [88, 91, 130];
let winner, loser, winnerAvg, loserAvg, outputMsg;
function avg(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return Math.round(total / scores.length);
}
if ((avg(dolphinScores) !== avg(koalaScores))) {
    if (avg(dolphinScores) >= 100 || avg(koalaScores) >= 100) {
        winner = (avg(dolphinScores) > avg(koalaScores)) ? 'Dolphins' : 'Koalas';
        loser = (avg(dolphinScores) > avg(koalaScores)) ? 'Koalas' : 'Dolphins';
        winnerAvg = (winner === 'Dolphins') ? avg(dolphinScores) : avg(koalaScores);
        loserAvg = (winner === 'Dolphins') ? avg(koalaScores) : avg(dolphinScores);
        outputMsg = `The ${winner} have won against the ${loser} with ${winnerAvg} against ${loserAvg}`;
    } else {
        outputMsg = `No result (Average Score of winner < 100)! Average score of Dolphins is ${avg(dolphinScores)} and Average score of Koalas is ${avg(koalaScores)}`;
    }

} else {
    if (avg(dolphinScores) >= 100) {
        outputMsg = `It's a draw! (Average Score >= 100) Average score of both teams is ${avg(dolphinScores)}`;
    } else {
        outputMsg = `No result (Average Score < 100)! Average score of both teams is ${avg(dolphinScores)}`;
    }
}
console.log(outputMsg);