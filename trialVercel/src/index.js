// let sum = require("./calc.js");
import { sum } from "./calc";
import "./index.css";
import phimg from "./decodingVishwa.png";
console.log("vishwa")
console.log(sum(0, 18))

let root = document.getElementById("root");
let h1 = document.createElement("h1");

let img = document.getElementById("im");
img.src = phimg;
img.classList.add("imgClass")


h1.innerText = "Input text will appear below";
h1.setAttribute("class", "redtext");

let btn = document.getElementById("btn");
btn.addEventListener("click", showtext);

function showtext() {
    let v = document.getElementById("mytext").value;
    console.log(v)
    let div = document.createElement("div");
    div.textContent = v;
    div.setAttribute("id", "display")
    root.append(div);
    document.getElementById("mytext").value = ""

}
root.append(h1) 