export function initPageWelcome (params){ //Inicializa/crea el componente.
    const div = document.createElement("div");
    div.innerHTML = `
    <div>
    <header-component class="header">Header</header-component>
    </div>

    <div class="titulo">
    <text-component variant = "title">
        Te damos la bienvenida a esta página
    </text-component>
    </div>

    <div class="subtitulo">
    <text-component variant = "body">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?
    </text-component>
    </div>

    <div class="label-titulo">
    <text-component variant = "subtitle">
    Para continuar ingresá tu nombre
    </text-component>
    </div>

    <field-component label ="nombre"></field-component>
    </div>

    <div class="boton-1">
    <button-component id="but" variant ="button">Comenzar</button-component>
    </div>
    
    <div class="foot">
    <footer-component class="footer">Footer</footer-component>
    </div>`;
    
    const but = div.querySelector(".boton-1");
    console.log(but);
    but.addEventListener("click", ()=>{
        params.goTo("/step-1");
    }) 
    return div;
}