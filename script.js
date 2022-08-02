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

let out = document.querySelector('.calc-screen p');
// console.log(out);

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
        //условие, при котором при первом клике будет наполняться переменная "а", а при втором клике - переменная "в"
        if (b === '' && sign === '') {
            //заношу цифровую кнопку в переменную
            a += key;
        //    console.log(a, b, sign); 
            out.textContent = a;
        } else if(a !== '' && b !== '' && finish) {
            //обнуляю переменную b и переменную finish
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            //наполняю переменную b
            b += key;
            out.textContent = b;
        }
        // console.log(a, b, sign);
        return;
    }

    //проверяю нажат ли знак
    if (action.includes(key)) {
        //заношу знак в переменную
        sign = key; //(если true, нажала знак)

        //вывожу знак на экран
        out.textContent = sign;
        return;
    }

    //если нажато "="
    if (key === '=') {
        if (b === '') b = a;
        //выполнить подсчеты
        switch (sign) { 
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case '*':
                a = a * b;
                break;
            case '/': 
            if (b === '0') {
                out.textContent = 'Ошибка';
                a = '';
                b= '';
                sign = '';
                return;
            }
                a = a / b;
                break;
        }
        //вычисления закончены
        finish = true;
        //вывожу все вычисления в калькулятор
        out.textContent = a;
        console.log(a, b, sign);
    }

}








