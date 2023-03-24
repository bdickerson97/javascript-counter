
function btnClick(target){
    let change = val;
    
    if (target.innerHTML === "+1"){
        change = parseInt(val.innerHTML) + 1;
    }
    if (target.innerHTML === "-1") {
        change = parseInt(val.innerHTML) - 1;
    }
    if (target.innerHTML === "Reset") {
        change = "0";
    }

    val.innerHTML = deltaVal.toString();
    return target.innerHTML;
 
}
    

const BTNS = document.getElementById("btn-container");
let val = document.querySelector("#value")

BTNS.addEventListener("click",(e) => { // Create button specific event
    btnClick(e.target);
})












