export function initButtonComponent (){

    class ButtonComponent extends HTMLElement {
        constructor (){
            super();
            this.render();
        }
        render (){
            const button = document.createElement ("button");
            const shadow = this.attachShadow({ mode: "open"});
            const style = document.createElement("style");
            button.className = "button";

            style.innerHTML = `
                .button { 
                    font-size: 18px;
                    border: solid 2px;
                    border-radius: 4px;
                    padding: 17px 13px;   
                }
            `;

            button.textContent = this.textContent;
            shadow.appendChild(button);
            shadow.appendChild(style);
            console.log(button);
        }
    }
    customElements.define ("button-component", ButtonComponent);
}