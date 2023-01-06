const scores = {
    Anna: 10,
    Olga: 1,
    Ivan: 5,
}

function getScore(scores) {
    let sum = 0
    for (const key in scores) {
        sum += scores[key]
    }
    return sum;
}

console.log(getScore(scores));
