export function initPageThankYou (params){
    const div = document.createElement("div");
    div.innerHTML = `
    <div>
    <header-component class="header">Header</header-component>
    </div>

    <div class="titulo">
    <text-component variant = "title">
        Gracias
    </text-component>
    </div>
    
    <div class="subtitulo">
    <text-component variant = "body">
    Toda la información que nos brindaste es muy importante
    </text-component>
    </div>
    
    <div class="boton-1">
    <button-component id="but" variant ="button">De nada</button-component>
    </div>
    
    <div class="foot">
    <footer-component class="footer">Footer</footer-component>
    </div>`;

    const but = div.querySelector(".boton-1");
    but.addEventListener("click", ()=>{
        params.goTo("/welcome");
    })

    
    return div;
}