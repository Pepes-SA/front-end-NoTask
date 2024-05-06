let urlBase = "http://localhost:5028/api";
class notesModule {
  async getNotes() {
    let fetchResponse = "";
    await fetch(`${urlBase}/Notes`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        fetchResponse = data;
      })
      .catch((err) => console.error(err));
    return fetchResponse;
  }
  async getNotesByTitle(searchTerm) {
    let fetchResponse = "";
    await fetch(`${urlBase}/Notes/SearchByTitle/${searchTerm}`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        fetchResponse = data;
      })
      .catch((err) => console.error(err));
    return fetchResponse;
  }
  async createNote() {
    let fetchResponse = "";
    await fetch(`${urlBase}/Notes/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Title: document.getElementById("titleInpuntId").value,
        Text: document.getElementById("ContentInpuntId").value,
        IdNoteCategory: document.getElementById("categoryInpuntId").value,
        Status: "Activo",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        fetchResponse = data;
      })
      .catch((err) => console.error(err));
    return fetchResponse;
  }
  async getCategorys(){
    let fetchResponse = "";
    await fetch(`${urlBase}/NoteCategorys`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        fetchResponse = data;
      })
      .catch((err) => console.error(err));
    return fetchResponse;
  }

  createCategory(){
    let fetchResponse = "";
    fetch(`${urlBase}/NoteCategorys/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: document.getElementById("nameCategoryInpuntId").value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        fetchResponse = data;
      })
      .catch((err) => console.error(err));
    return fetchResponse;
  }
  
  async getNoteById(id) {
    let fetchResponse = "";
    await fetch(`${urlBase}/Notes/${id}`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        fetchResponse = data;
      })
      .catch((err) => console.error(err));
    return fetchResponse;
  }

  async updateNote(id,status) {
    let fetchResponse = "";
    await fetch(`${urlBase}/Notes/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Id: id,
        Title: document.getElementById("titleInpuntId2").value,
        Text: document.getElementById("ContentInpuntId2").value,
        IdNoteCategory: document.getElementById("categoryInpuntId2").value,
        Status: status,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        fetchResponse = data;
      })
      .catch((err) => console.error(err));
    return fetchResponse;
  }

     //Metodo para filtrar 
     searchNotes(filter) {
      var url = `${urlBase}/Notes/`;
      if (filter === 'recent') {
          url += 'SearchByDate/Recent';
      } else if (filter === 'old') {
          url += 'SearchByDate/Old';
      }
  
      fetch(url, { method: "GET" })
          .then(response => response.json())
          .then(data => {
              console.log(data); // Imprimir la respuesta en la consola
              this.displayNotes(data);
          })
          .catch(err => console.error(err));
  }
  
  displayNotes(notes) {
      var notesList = document.getElementById("notesList");
      notesList.innerHTML = ''; // Limpiar el contenido anterior
  
      if (notes.length === 0) {
          notesList.innerHTML = '<p>No se encontraron notas para el filtro especificado.</p>';
          return;
      }
  
      var html = '<ul>';
      notes.forEach(function(note) {
          html += '<li>Title: ' + note.title + ', Text: ' + note.text + '</li>';
      });
      html += '</ul>';
      notesList.innerHTML = html;
  }
  

}


export default new notesModule();
