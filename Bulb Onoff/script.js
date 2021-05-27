function func1() {
    let bulb = document.getElementById('box').firstElementChild;
    if (bulb.src.match('off')) {
        bulb.src = 'on.jpg'
    }


}

function func2() {
    let bulb = document.getElementById('box').firstElementChild;
    if (bulb.src.match('on')) {
        bulb.src = 'off.jpg';
    }

}