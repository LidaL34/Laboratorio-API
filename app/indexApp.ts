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

        const compts = quote?.map ((_ , author) => author);
        this.shadowRoot.innerHTML = `
            <section>
                ${compts?.join("")}
            </section>
        `;
    }
}

customElements.define("app-container", AppContainer);