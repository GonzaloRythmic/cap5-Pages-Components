export function initPageStep1 (params){
    const div = document.createElement("div");
    div.innerHTML = `
    <div>
    <header-component class="header">Header</header-component>
    </div>

    <div class="titulo">
    <text-component variant = "title">
        Necesitamos algunos datos mas.
    </text-component>
    </div>

    <div class="field-nombre">
    <field-component label ="Email"></field-component>
    </div>
    <div class="field-nombre">
    <field-component label ="Comida favorita"></field-component>
    </div>
    <div class="field-nombre">
    <select-component class="input" label ="Algunas de estas tres opciones"></select-component>
    </div>

    <div class="boton-1-1">
    <button-component variant ="button">Comenzar</button-component>
    </div>
    <div class="boton-2">
    <button-component variant ="button-2" class="but-2">Vovler</button-component>
    </div>
    
    <div class="foot">
    <footer-component class="footer">Footer</footer-component>
    </div>`

    const but = div.querySelector(".boton-2");
    but.addEventListener("click", ()=>{
        params.goTo("/welcome");
    })
    const but1 = div.querySelector(".boton-1-1");
    but1.addEventListener("click", ()=>{
        params.goTo("/thank-you");
    })

    return div;
}