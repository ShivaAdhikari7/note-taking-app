showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
    
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  console.log(addTxt.value);
  console.log(addTitle.value);
  let notes = localStorage.getItem("notes");

  
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
                <div class="notecards mx-2 my-2" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.text}</p>
                        <button class=" btn btn-danger" id="${index}" onclick="deleteNote(this.id)">Delete Note</button>
                    </div>
                </div>

                `
    });

    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Add some notes to show here `
    }
}

function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search=document.getElementById("searchTxt");
search.addEventListener("input", function(){
    
    let inputVal=search.value.toLowerCase();
    let notecards=document.getElementsByClassName('notecards');
    Array.from(notecards).forEach(function(element){
        let ptext= element.getElementsByTagName('p')[0].innerText;
        
            if(ptext.includes(inputVal)){
                element.style.display ="block";
            }
            else{ 
                element.style.display="none";
        }
    })
   
});