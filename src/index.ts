import { initRoute } from "./router";
import { initTextComponent } from "./components/text";
import { initFieldComponent } from "./components/field";
import { initButtonComponent } from "./components/button";
import { initHeaderComponent } from "./components/header";
import { initFooterComponent } from "./components/footer";
import { initFieldSelectComponent } from "./components/field/select"

function main (){
    initFieldSelectComponent();
    initFooterComponent();
    initHeaderComponent();
    initButtonComponent();
    initTextComponent();
    initFieldComponent();
    const root = document.querySelector(".root");
    initRoute(root);    
}

main();