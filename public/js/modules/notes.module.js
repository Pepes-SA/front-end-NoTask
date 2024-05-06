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
}

export default new notesModule();
