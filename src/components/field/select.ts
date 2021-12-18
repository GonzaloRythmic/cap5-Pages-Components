export function initFieldSelectComponent (){

    class SelectComponent extends HTMLElement {
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
            <select class="input" name="select">
            <option value="piedra">Piedra</option>
            <option value="papel" selected>Papel</option>
            <option value="tijera">Tijera</option>
            </select>`;

            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define ("select-component", SelectComponent)
}