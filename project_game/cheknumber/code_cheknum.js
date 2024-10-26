/*  ПЛАН работы программы "Игры Угадай число"
1. Комп загадывает (случ) число в диапазоне 1 до 100
2. Комп выводит приглашение ПОЛЬЗОВАТЕЛЮ ВВести число
3. Комп сравнивает своё и число польз. 
        Если угадал 
                    - вывод поздравление, 
        иначе
                 вывод подсказку: число БОЛЬШЕ или моё число МЕНЬШЕ
*/

/* ВАЖНО: РАЗБИВАТЬ задачу на кусочки!!!!!!! */
/*  Часть 1 - загадывание числа */
let secretnum = 34; /* Погуглить как сгенерировать случайно!!!! */
/*  Часть 2 - Спросить число*/
let usernumber = 20; 
/* напишем  функцию получения  числа из поля ввода*/
function getValueFromInput(){
    console.log('функция сработала')
    usernumber =  document.getElementById('inputnumber').value;
    console.log(usernumber)
    /* вызываем функцию проверки числа и вывода сообщения */ 
    showHelper();
}
/*  Часть 3 - проверка числа */
/* функция вывода подсказок*/
/* ДОБАВЛЯЕТ на страницу текст */
function showHelper(){ /* вывод подчкачки */
    if (secretnum == usernumber) {
        /* Переведем вывод из консоли на веб-страницу  */
        /*console.log("Победа! вы угадали") */
        CreateElement("Вы угадали");
    }
    else if (secretnum < usernumber) {
        CreateElement('Моё число меньше')
    } else {
        CreateElement('Моё число больше')
    }
}

function CreateElement(textHelper){
    let p_helper = document.getElementById('helper');
    p_helper.innerHTML = textHelper;
    console.log(textHelper)
}



