import { initRoute } from "./router";
import { initTextComponent } from "./components/text";
import { initFieldComponent } from "./components/field";
import { initButtonComponent } from "./components/button";


function main (){
    initButtonComponent;
    initTextComponent();
    initFieldComponent();
    const root = document.querySelector(".root");
    initRoute(root);    
}

main();