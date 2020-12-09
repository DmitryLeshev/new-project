import Kuz from "./kuznyechik";
import {q} from "./query"

let kuz = new Kuz(localStorage.getItem("cryptKey"));

window.q = q;
q("getjs").then(
    response => {

        eval(response);
        document.querySelector("#wrap").remove();
    }
)
