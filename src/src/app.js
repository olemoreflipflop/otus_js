/**
 * Подсчёт суммы значений свойств объекта
 *
 * @param {Object} scores - The object that keeps scores for every person.
 * @returns {number}
 * @example getScore({ Anna: 11, Ivan: 5,}) // 16
 **/
function getScore(scores) {
    let sum = 0
    for (const key in scores) {
        sum += scores[key]
    }
    return sum;
}

const scores = {
    Anna: 10,
    Olga: 1,
    Ivan: 5,
}
console.log(getScore(scores));
