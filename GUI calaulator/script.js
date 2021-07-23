let screen = document.querySelector('input[type="text"]');
let screenVal = '';
let btns = document.querySelectorAll('button');
console.log(btns);
for (btn of btns) {
    btn.addEventListener('click', (e) => {
        btnTxt = e.target.innerText;
        screen.value += btnTxt;
        if (btnTxt == 'X') {
            btnTxt = '*';
            screenVal += btnTxt;
            screen.value = screenVal;
        } else if (btnTxt == 'C') {
            screenVal = "";
            screen.value = screenVal;
        } else if (btnTxt == '=') {
            screen.value = eval(screenVal);
        } else {
            screenVal += btnTxt;
            screen.value = screenVal;
        }
    })
}