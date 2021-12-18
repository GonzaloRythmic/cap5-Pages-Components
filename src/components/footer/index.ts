export function initFooterComponent (){

    class FooterComponent extends HTMLElement {
        constructor (){
            super();
            this.render();
        }
        render (){
            const footer = document.createElement("footer");
            const shadow = this.attachShadow({ mode: "open"});
            const style = document.createElement("style");
            footer.className = "footer"

            style.innerHTML = `
                .footer { 
                    width: 100% ;
                    height: 323px;
                    background-color:#FFA0EA;
                    font-family: "Roboto";
                    font-size: 22px;
                    display: flex;
                    align-items: center;
                    justify-content: center;


                }
            `;

            footer.textContent = this.textContent;

            shadow.appendChild(footer);
            shadow.appendChild(style);
            
        }
    }
    customElements.define ("footer-component", FooterComponent);
}