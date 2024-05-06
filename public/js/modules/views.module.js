import notesModule from "./notes.module.js";

class viewGeneratorModule {
  async viewAllNotes() {
    let notes = await notesModule.getNotes();
    let view = document.getElementById("ContainerNotes");
    view.innerHTML = "";
    for (let n = 0; n < notes.length; n++) {
      if (notes[n].status == "Activo") {
        let date = notes[n].creationDate.split("-");
        notes[n].creationDate = date[0];
        let month = date[1];
        let day = date[2].split("T")[0];
        var nameMonth = new Date(0, month - 1, day).toLocaleString("default", { month: "short" });
        view.innerHTML += `        
        <div class="col-3 mb-2 p-3">
        <div class="cardM mb-2 ms-2">
          <div class="date-time-container">
            <time class="date-time" datetime="${notes[n].creationDate}">
              <span>${notes[n].creationDate}</span>
              <span class="separator"></span>
              <span>${nameMonth} ${day}</span>
            </time>
          </div>
          <div class="content">
            <div class="infos">
              <a href="#">
                <span class="title">${notes[n].title}</span>
              </a>
              <p class="description">
                ${notes[n].text}
              </p>
            </div>
            <a class="action w-100 selectD" data-id="${notes[n].id}" data-bs-toggle="modal" data-bs-target="#ModalNoteEdit" >Ver nota</a>
          </div>
        </div>
    </div>`;
    document.querySelectorAll(".selectD").forEach((button) => {
      button.addEventListener("click", (event) => {
        let id = event.currentTarget.getAttribute("data-id");
        this.viewCategory();
        this.viewNote(id);
      });
    });
      }
    }
  }

  async searchList(searchTerm) {
    let notes = await notesModule.getNotesByTitle(searchTerm);

    if (!notes[0]) {
      Swal.fire({
        position: "Center",
        icon: "info",
        title: "No hay coincidencias",
        showConfirmButton: false,
        timer: 1000,
      });
      this.viewAllNotes();
    }
    let view = document.getElementById("ContainerNotes");
    view.innerHTML = " ";
    for (let n = 0; n < notes.length; n++) {
      if (notes[n].status == "Activo") {
        let date = notes[n].creationDate.split("-");
        notes[n].creationDate = date[0];
        let month = date[1];
        let day = date[2].split("T")[0];
        var nameMonth = new Date(0, month - 1, day).toLocaleString("default", { month: "short" });
        view.innerHTML += `        
        <div class="col-3 mb-2 p-3">
        <div class="cardM mb-2 ms-2">
          <div class="date-time-container">
            <time class="date-time" datetime="${notes[n].creationDate}">
              <span>${notes[n].creationDate}</span>
              <span class="separator"></span>
              <span>${nameMonth} ${day}</span>
            </time>
          </div>
          <div class="content">
            <div class="infos">
              <a href="#">
                <span class="title">${notes[n].title}</span>
              </a>
              <p class="description">
                ${notes[n].text}
              </p>
            </div>
            <a class="action w-100 selectD" data-id="${notes[n].id}" data-bs-toggle="modal" data-bs-target="#ModalNoteEdit">Ver nota</a>
          </div>
        </div>
    </div>`;
        document.querySelectorAll(".selectD").forEach((button) => {
          button.addEventListener("click", (event) => {
            let id = event.currentTarget.getAttribute("data-id");
            this.viewCategory();
            this.viewNote(id);
          });
        });
      }
    }
  }

  async viewCategory() {
    let categorys = await notesModule.getCategorys();
    let view = document.getElementById("categoryInpuntId");
    let vieww = document.getElementById("categoryInpuntId2");
    view.innerhtml = "";
    vieww.innerhtml = "";
    for (let n = 0; n < categorys.length; n++) {
      let options = `<option value="${categorys[n].id}">${categorys[n].name}</option>`;
      vieww.innerHTML += options;
      view.innerHTML += options;
    }
  }

  async viewNote(id) {
    let note = await notesModule.getNoteById(id);
    document.getElementById("titleInpuntId2").value = note.title;
    let categorySelect = document.getElementById("categoryInpuntId2");
    for (let i = 0; i < categorySelect.options.length; i++) {
      if (categorySelect.options[i].value === note.idNoteCategory) {
        categorySelect.options[i].selected = true;
        break;
      }
    }
    //setear el valor de el actualizar y por ende actualizar 
    document.getElementById("btnSaveUpdate").setAttribute("data-id", note.id);
    document.getElementById("ContentInpuntId2").value = note.text;
  }
}

export default new viewGeneratorModule();
