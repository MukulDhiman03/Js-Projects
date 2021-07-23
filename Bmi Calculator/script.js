console.log("JAI SHREE RAM");


//To check category
function checkCategory(res) {
    // let elem = document.createElement('div');
    // let p = document.createElement('p');

    if (res <= 15) {
        // console.log("Starvation");
        return "Starvation";
    } else if (res >= 15.1 && res < 17.5) {
        // console.log("");
        return "Anorexic";
    } else if (res >= 17.6 && res < 18.5) {
        // console.log("Underweight");
        return "Underweight";
    } else if (res >= 18.6 && res < 24.9) {
        // console.log("Ideal");
        return "Ideal";
    } else if (res >= 25 && res < 30) {
        // console.log("Overweight");
        return "Overweight";
    } else if (res >= 30 && res < 30.9) {
        // console.log("Obese");
        return "Obese";
    } else {
        // console.log("Morbidly Obese");
        return "Morbidly Obese"
    }
}

//Calculate Butoon Handler
document.getElementById('calc').addEventListener('click', () => {
    let age = document.getElementById('age').value;
    let weight = document.getElementById('Weight').value;
    let height = document.getElementById('Height').value;
    let result = Math.round((weight / (height * height)));
    result = result.toFixed(2);
    // console.log(result);

    let category = checkCategory(result);
    // console.log("Return value is :" + category);

    let elem = document.getElementById('elem');
    elem.innerHTML = `<p> Your BMI is : ${result}</p> 
                      <span>OVERWEIGHT</span>`;
    elem.lastChild.classList = 'red';



})

//To clear the values
document.getElementById('clear').addEventListener('click', () => {
    let age = document.getElementById('age').value = "";
    let weight = document.getElementById('Weight').value = "";
    let height = document.getElementById('Height').value = "";
    var ele = document.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < ele.length; i++)
        ele[i].checked = false;

    let elem = document.getElementById('elem');
    elem.style.display = `none`;
})