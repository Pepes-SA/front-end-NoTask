import viewNotesModule from "./modules/views.module.js";
import notesModule from "./modules/notes.module.js";

viewNotesModule.viewAllNotes();

`  
<li style="--i:-2;--clr:#141414"  >
    <a href="#" id="selectionNavItem1"></a>
</li>
<li style="--i:-1;--clr:#141414"  >
    <a href="#" id="selectionNavItem2"></a>
</li>
<li style="--i:0;--clr:#141414" >
<a  href="#" id="selectionNavItem3"></a>
</li>
`
const htmlContent = `
<div class="toggle"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#141414" d="M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12"/></svg></div>

  <li style="--i:1;--clr:#141414">
  <a href="#" id="selectionNavItem4" data-bs-toggle="modal" data-bs-target="#ModalCategoryCreate"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#000000" d="M11 11V2H2v9m2-2V4h5v5m11-2.5C20 7.9 18.9 9 17.5 9S15 7.9 15 6.5S16.11 4 17.5 4S20 5.11 20 6.5M6.5 14L2 22h9m-3.42-2H5.42l1.08-1.92M22 6.5C22 4 20 2 17.5 2S13 4 13 6.5s2 4.5 4.5 4.5S22 9 22 6.5M19 17v-3h-2v3h-3v2h3v3h2v-3h3v-2Z"/></svg></a>
  </li>
  <li style="--i:2;--clr:#141414" >
      <a href="#" id="selectionNavItem5" data-bs-toggle="modal" data-bs-target="#ModalNoteCreate"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#000000" d="M5 19V5h7v7h7v1c.7 0 1.37.13 2 .35V9l-6-6H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h8.35c-.22-.63-.35-1.3-.35-2zm9-14.5l5.5 5.5H14zM23 18v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"/></svg></a>
  </li>
`;
//esto va de arriba a abajo osea 5 es el de arriba y 1 el de abajo oki?

// Menu toggle
//if(user && user.rol != 1){
const menuToggleElement = document.getElementById("menuToggle");
if (menuToggleElement) {
  menuToggleElement.innerHTML = htmlContent;
} else {
  console.log('No se encontró el elemento con el id "menuToggle".');
}
//}

const menu = document.querySelector(".menu");
const toggle = document.querySelector(".toggle");
toggle?.addEventListener("click", () => {
  menu.classList.toggle("active");
});

document.getElementById("selectionNavItem1")?.addEventListener("click", () => {});

document.getElementById("selectionNavItem2")?.addEventListener("click", () => {});
document.getElementById("selectionNavItem3")?.addEventListener("click", () => {});
document.getElementById("selectionNavItem4")?.addEventListener("click", () => {});
document.getElementById("selectionNavItem5")?.addEventListener("click", async () => {
//falta cambiar el id de las categorys del html
  await viewNotesModule.viewCategory();
});


document.getElementById("idCreateNote")?.addEventListener("click", async () => {

  await notesModule.createNote();
  var modal = document.getElementById('ModalNoteCreate');
  modal.classList.remove('show');
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');

  var modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
  modalBackdrop.parentNode.removeChild(modalBackdrop);
  //location.reload();
  viewNotesModule.viewAllNotes();
});

document.getElementById("btnSaveNewCategory")?.addEventListener("click", () => {

  notesModule.createCategory();
  var modal = document.getElementById('ModalCategoryCreate');
  modal.classList.remove('show');
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');

  var modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
  modalBackdrop.parentNode.removeChild(modalBackdrop);
});


document.getElementById("search").addEventListener("keyup", async () => {
  // Obtener el valor del campo de búsqueda
  const searchTerm = document.getElementById("search").value;
  await viewNotesModule.searchList(searchTerm);
});

document.getElementById("searchNotes")?.addEventListener("click", () => {
  const filter = document.getElementById("filter").value;
  notesModule.searchNotes(filter);
});


document.getElementById("btnSaveUpdate")?.addEventListener("click",async (event) => {
  let id = event.currentTarget.getAttribute("data-id");
    await notesModule.updateNote(id,"Activo");
  //configure el select de la catefory y el status hay que agg en caso de k desactiven las notas
  //faltan los filtros 
  var modal = document.getElementById('ModalNoteEdit');
  var modal = document.getElementById('ModalNoteEdit');
  modal.classList.remove('show');
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');

  var modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
  modalBackdrop.parentNode.removeChild(modalBackdrop);

  viewNotesModule.viewAllNotes();
});


let filterby = document.getElementById("filterby")
filterby.addEventListener("click", (e) => {

if(filterby.value != 0){
  viewNotesModule.loadNotesByFilter(filterby.value)
}else{
  viewNotesModule.viewAllNotes();
}


});