export function initTextComponent (){

    class TextComponent extends HTMLElement {
        constructor (){
            super();
            this.render();
        }
        render (){
            const variant = this.getAttribute("variant") || "body";
            const shadow = this.attachShadow({ mode: "open"});
            const div = document.createElement("div");
            const style = document.createElement("style");
            style.innerHTML = `
            .title { 
                font-size: 53px;
                font-weight: bold;
                font-family: "Roboto";
            }
            .body { 
                font-size: 18px;
                font-family: "Roboto";
            }
            .subtitle {
                font-size: 22px;
                font-family: "Roboto";
                font-weight: bold;
            }`;
            
            div.className = variant;  
            div.textContent = this.textContent;
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define ("text-component", TextComponent)
}