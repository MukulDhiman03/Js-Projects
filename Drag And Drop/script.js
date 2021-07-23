console.log("Jai shree ram");

let img = document.getElementsByClassName('img')[0];
console.log(img);
let boxes = document.getElementsByClassName('box');
// console.log(boxes);
img.addEventListener('dragstart', (e) => {
    console.log("Started......");
    setTimeout(() => {
        e.target.className = " hide";
    }, 0);
})
img.addEventListener('dragend', (e) => {
    console.log("Ended......");
    e.target.className = "img";
})

for (box of boxes) {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log("dragover....");
    })
    box.addEventListener('dragenter', () => {
        console.log("dragenter....");
    })
    box.addEventListener('dragleave', () => {
        console.log("dragleave....");
    })
    box.addEventListener('drop', (e) => {
        console.log("Drop....");
        e.target.append(img);

    })
}