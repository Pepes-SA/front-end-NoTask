let urlBase = "http://localhost:5028/api";
class notesModule {
  async getNotes() {
    let notes = "";
    await fetch(`${urlBase}/Notes`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        notes = data;
      })
      .catch((err) => console.error(err));
    return notes;
  }
}

export default new notesModule();
