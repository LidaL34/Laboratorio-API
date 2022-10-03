import { getQuotes } from './card/Quotes.js';
import { Characters } from './type/index.js';

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    async connectedCallback(){
        const quotes = await getQuotes();
        this.render(quotes);
    }

    render(quote: Array<Characters>){
        if(!this.shadowRoot) return;

        const compts = quote?.map (({category,gender,name,real_name,status}) => `
        <link rel="stylesheet" href="./card/index.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200&display=swap" rel="stylesheet">
        
        <section class="cards">
            
            <div class="card">
            <div class="card__content">
            </div></div>
            <img src="./img/carnet.png" alt="carnet">
        </section>

        <section class="main">
            <p class= "name">${name}</p>
            <p class= "realName">${real_name}</p>
            <p class= "gender">${gender}</p>
            <p class= "id">${category}</p>
            <p class= "status">Status: ${status}</p>
        </section>

       
        
        `);
        this.shadowRoot.innerHTML = `
            <section>
                ${compts?.join("")}
            </section>
        `;
    }
}

customElements.define("app-container", AppContainer);