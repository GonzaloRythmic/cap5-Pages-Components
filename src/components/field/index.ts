export function initFieldComponent (){

    class FieldComponent extends HTMLElement {
        constructor (){
            super();
            this.render();
        }
        render (){
            const label = this.getAttribute("label");
            const shadow = this.attachShadow({ mode: "open"});
            const div = document.createElement("div");
            const style = document.createElement("style");

            style.innerHTML = `
            *{
                box-sizing: border-box;
            }
            .label { 
                display: block;
            }
            .input { 
                width: 100%;
                font-size: 18px;
                border:solid 2px;
                border-radius: 4px;
                padding: 17px 13px;
            }`;

            div.innerHTML = `
            <label class="label">
                <text-component variant="body">${label}</text-component>
            </label>
            <input type="text" class= "input"/>`;

            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define ("field-component", FieldComponent)
}