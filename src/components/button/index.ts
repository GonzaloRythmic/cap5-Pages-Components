export function initButtonComponent (){

    class ButtonComponent extends HTMLElement {
        constructor (){
            super();
            this.render();
        }
        render (){
            const variant = this.getAttribute("variant") || "body";
            const button = document.createElement ("button");
            const shadow = this.attachShadow({ mode: "open"});
            const style = document.createElement("style");
            
            style.innerHTML = `
            .button { 
                width: 100%;
                font-size: 18px;
                border: solid 2px;
                border-radius: 4px;
                padding: 17px 13px; 
                background-color: #9CBBE9; 
                display: flex;
                align-items: center;
                justify-content: center; 
            }
            .button-2 { 
                width: 100%;
                font-size: 18px;
                border: solid 2px;
                border-radius: 4px;
                padding: 17px 13px; 
                background-color: white; 
                display: flex;
                align-items: center;
                justify-content: center;
            }
            `;
            
            button.className = variant;
            button.textContent = this.textContent;
            shadow.appendChild(button);
            shadow.appendChild(style);
        }
    }
    customElements.define ("button-component", ButtonComponent);
}