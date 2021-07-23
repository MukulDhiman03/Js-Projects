console.log("Jai hanuman");
showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');
    // console.log(addTxt.value);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        text: addTxt.value,
        title: addTitle.value
    }
    notesObj.push(myObj);
    // console.log(notesObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    let notesContainer = document.getElementById('notesContainer');
    notesObj.forEach((elem, index) => {
        html += `<div class="notes">
        <Button id="${index}" onclick="deleteHandler(this.id)">Delete</Button>
        <div class="note">
        <p>${elem.title}</p>
        <p>${elem.text}</p>
        </div>
    </div>`;
    })
    notesContainer.innerHTML = html;
}

function deleteHandler(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let searchTxt = document.querySelector('input[type="text"]');

searchTxt.addEventListener('input', (e) => {
        e.preventDefault();
        let searchValue = searchTxt.value.toLowerCase();
        console.log(searchValue);
        // console.log(searchTxt.value);
        let notes = document.getElementsByClassName('notes');
        // console.log(notes);
        Array.from(notes).forEach((elem) => {
            let cardTxt = elem.getElementsByTagName("p")[1].innerText;
            // console.log(cardTxt);
            if (cardTxt.includes(searchValue)) {
                elem.style.display = "block";
            } else {
                elem.style.display = "none";
            }
        })
    })
    // console.log(searchTxt)