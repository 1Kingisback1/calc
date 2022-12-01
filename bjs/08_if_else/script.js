let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
if (minValue <= -1000) {
    minValue = -999;
}

if (maxValue >= 1000) {
    maxValue = 999;
}
minValue = minValue || 0;
maxValue = maxValue || 100;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;



const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    if (gameRun == false) {
        minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
        maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
        alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю снова`);
        orderNumber = 1;
        answerNumber  = Math.floor((minValue + maxValue) / 2);
        gameRun = true;

        orderNumberField.innerText = orderNumber;
        answerField.innerText = `Вы загадали число ${answerNumber }?`;
    }
    return minValue, maxValue, answerNumber, gameRun;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ? 
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (answerNumber <= 20) {
        answerField.innerText = `Вы загадали: ${numberToWords.toWords(answerNumber)}`;
        gameRun = false;
    };
    const randomPhrases = Math.round(Math.random() * 5);
    if (gameRun){
        const answerPhrase = (randomPhrases === 1) ?
                `Я всегда угадываю\n\u{1F60E}` :

                (randomPhrases === 2) ?
                `Ха - было легко! Твое число: ${answerNumber}\n\u{1F616}` :

                (randomPhrases === 3) ?
                `Дааа, я крут как никогда! Твое число: ${answerNumber}\n\u{1F451}` :

                (randomPhrases === 4) ?
                `Рили? Ты же загадал: ${answerNumber}\n\u{1F626}` :

                (randomPhrases === 5) ?
                `Как думаешь, я могу этим зарабатывать? Твое число: ${answerNumber}\n\u{1F914}`:
                `ты Крут!`;
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})