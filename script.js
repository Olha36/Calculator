//  TO DO
// создать переменную, в которую будет помещено 1-е число;
// создать переменную, в которую будет помещено 2-е число;
// создать переменную, в которую будет помещен знак;
//получить ссылку на кнопку очищения
// создать функцию для работы кнопки очищения
// создать клик по кнопке

let a = "";
let b = "";
let sign = "";

let finish = false;

let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
// console.log(digits);

let action = ['+', '-', '*', '/'];
// console.log(action);

let out = document.querySelector('input');
// console.log(out.value);

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}


document.querySelector("#ce").onclick = clearAll;

document.querySelector('.calc-table').onclick = (event) => {
    //отследить была ли нажата кнопка или пустое пространство
    if (!event.target.classList.contains('btn')) return;
    //проверить была ли нажата кнопка очистки
    if (event.target.classList.contains('clear')) return;

    //если нажата кнопка, очищаю экран
    out.textContent = '';

    //получаю нажатую кнопку: считываю текст из нажатой кнопки и заношу в переменную key
    const key = event.target.textContent;

    //проверяю нажата ли цифровая кнопка
    if (digits.includes(key)) {
        //заношу цифровую кнопку в переменную
    }

}








