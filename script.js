var addd = document.getElementById("addd")
function work(){
    var note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML=` <div class="add">
            <i class='bx bxs-save' ></i>
        <i class='bx bxs-message-alt-x' onclick="remove()"></i>
          <textarea cols="53" rows="17"></textarea>
        </div>`
     addd.appendChild(note)
    }   
    
    function remove(){
        var notes = document.getElementById("notes")
       note.remove("add")
    }