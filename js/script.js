// A: задание
name = prompt('Введите свое имя', 'Петя');
age = +prompt('Введите свой возраст', '19');
year = +prompt('Введите нынешний год', '2022');

function ColumnStringReturner(x, y, z){
    return `1. ${x} (имя)\n2. ${z-y} (год рождения)\n3. ${z} (нынешний год)`;
}

function RowStringReturner(x, y){
    return `${x}, Ваш возраст ${y}`;
}

alert(ColumnStringReturner(name, age, year));
alert(RowStringReturner(name, age));

// B: Рандомные примеры
function taskCreater(amount) {
    for (let i = 1; i <= amount; i++) {
        let x = Math.floor(Math.random() * 21)
        let y = Math.floor(Math.random() * 21)
        let mathTeg = Math.floor(Math.random() * 5);
        let result = 0;
        switch (mathTeg) {
            case 1:
                mathTeg = '+';
                result = x + y;
                break;

            case 2:
                mathTeg = '-';
                result = x - y;
                break;

            case 3:
                mathTeg = '*';
                result = x * y;
                break;

            default:
                mathTeg = '/';
                result = Math.round(x / y);
                break;
        }
        ask = +prompt(`${i}. ${x} ${mathTeg} ${y}`);
        if (ask == result) {
            alert(`Ваш ответ верный - ${ask}`);
            console.log(`${i}. ${x} ${mathTeg} ${y} = ${result} (✓)`);
        } else {
            alert(`Ваш ответ не верный - ${ask}. Правильный ответ - ${result}`);
            console.log(`${i}. ${x} ${mathTeg} ${y} = ${result} (✕)`);
        }
    }
}

let amount = +prompt('Введите количество решаемых математических примеров', 3);
taskCreater(amount);