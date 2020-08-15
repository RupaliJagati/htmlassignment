function add(num) {
    let number = document.querySelector("#result");
    number.textContent += num;

}

function clr() {
    let clear = document.querySelector("#result");
    clear.textContent = "";

}
function final_result() {
    let x = document.querySelector("#result");
    let y = x.textContent;
    x.textContent = eval(y);
}

