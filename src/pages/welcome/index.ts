export function initPageWelcome (params){ //Inicializa/crea el componente.
    const div = document.createElement("div");
    div.innerHTML = `
    <h1>Welcome</h1>

    <div>
    <text-component variant = "title">
        Te damos la bienvenida a esta página
    </text-component>
    </div>

    <div>
    <text-component variant = "body">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?
    </text-component>
    </div>

    <div>
    <text-component variant = "subtitle">
    Para continuar ingresá tu nombre
    </text-component>
    </div>

    <div>
    <field-component label ="nombre"></field-component>
    </div>

    <div>
    <button-component class ="button">Comenzar</button-component>
    </div>`;

    // const button = document.querySelector(".button");
    // button.addEventListener("click", function (){
    //     params.goTo("/step-1");
    // });
    
    return div;
}