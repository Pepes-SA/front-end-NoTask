
import notesModule from './notes.module.js'

class viewGeneratorModule {


    async generateNotes(){

    }

    async viewAllNotes(){
        let notes = await  notesModule.getNotes();
        let view = document.getElementById('ContainerNotes');
        view.innerhtml = ""
        for (let n = 0; n < notes.length; n++) {
            
          view.innerhtml += `        
            <div class="col-3 mb-2 p-3">
            <div class="cardM mb-2 ms-2">
              <div class="date-time-container">
                <time class="date-time" datetime="${n.CreationDate.slice(-4)}">
                  <span>${n.CreationDate.slice(-4)}</span>
                  <span class="separator"></span>
                  <span>Oct 10</span>
                </time>
              </div>
              <div class="content">
                <div class="infos">
                  <a href="#">
                    <span class="title"> How to make this blog card ? </span>
                  </a>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos. Molestias
                    explicabo corporis voluptatem?
                  </p>
                </div>
                <a class="action" href="#">Ver nota</a>
              </div>
            </div>
        </div>`;
         
        }

    }

}

export default new viewGeneratorModule();
