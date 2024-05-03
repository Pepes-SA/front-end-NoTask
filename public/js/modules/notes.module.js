let urlBase = "http://localhost:5028/api/";
class notesModule {

    async getNotes() {
        let Notes = "";
        await fetch(`${urlBase}/Notes`, {method: "GET",})
        .then((response) => response.json())
        .then((data) => {Notes = data[0];})
        .catch((err) => console.error(err));
        return Notes;
    }
}

export default new notesModule();
