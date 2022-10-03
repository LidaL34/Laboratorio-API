var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getQuotes } from './card/Quotes.js';
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const quotes = yield getQuotes();
            this.render(quotes);
        });
    }
    render(quote) {
        if (!this.shadowRoot)
            return;
        const compts = quote === null || quote === void 0 ? void 0 : quote.map(({ category, gender, name, real_name, status }) => `
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
                ${compts === null || compts === void 0 ? void 0 : compts.join("")}
            </section>
        `;
    }
}
customElements.define("app-container", AppContainer);
