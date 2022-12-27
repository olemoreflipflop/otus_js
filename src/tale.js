//1st part
function kolobok(character) {
    switch(character) {
        case 'дедушка':
            return 'Я от дедушки ушёл';
        case 'заяц':
            return 'Я от зайца ушёл';
        case 'лиса':
            return 'Меня съели';
        default:
            return 'Tаких не встречал';
      }
}

console.log(kolobok('заяц'));
console.log(kolobok('тестировщик'));
console.log(kolobok('дедушка'));
console.log(kolobok('лиса'));

//2nd part
function newYear(character) {
    if(character === 'Дед Мороз' || character === 'Снегурочка') {
        return `"${character}! ${character}! ${character}!"`;
    }
    else {
        return "что?"
    }
};

console.log(newYear('Снегурочка'));
console.log(newYear('Дед Мороз'));


