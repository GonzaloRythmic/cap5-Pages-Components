import {initPageWelcome} from "./pages/welcome";
import {initPageStep1} from "./pages/step-1";
import {initPageThankYou} from "./pages/thank-you";

//objeto de rutas.
const routes = [
    {
    path: /\/welcome/,
    component :initPageWelcome,
    },
    {
    path: /\/step-1/,
    component: initPageStep1,
    },
    {
    path: /\/thank-you/,
    component: initPageThankYou,
    }
]

export function initRoute (container: Element){ //<< Donde voy a montar las rutas

    function goTo(path){  //dispara el cambio en la URL
        history.pushState({}, "", path);
        handleRoute(path);
    }

    function handleRoute (route){ //decide que hacer
        console.log("Me encargo de hacer algo con", route);
        for(const r of routes){
            if (r.path.test(route)){
                const el = r.component({goTo:goTo});    
                if (container.firstChild){
                    container.firstChild.remove();
                }
                container.appendChild(el);
            }
        }
    }
            
    if(location.pathname == "/"){
        goTo("/welcome")
    } else {
        handleRoute(location.pathname);
    } 

    window.onpopstate = function ( event ) {  //<< Sirve para que cuando haga back o foward, se actualize la página.    
        handleRoute(location.pathname);
    };
}


