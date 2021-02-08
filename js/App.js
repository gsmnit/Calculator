let keys = document.querySelectorAll(".keys span");
let operators = ['+', '-', 'x', '÷'];
let decimalAdded = false;
let opr1 = "",
    opr2 = "";
let input = document.querySelector('.display');
for (let i = 0; i < keys.length; i++) {
    //console.log(keys[i]);
    keys[i].onclick = function(event) {
        if (keys[i].innerHTML === "+") {
            opr1 = input.innerHTML;
        }
        if (keys[i].innerHTML === 'AC') input.innerHTML = "";
        else input.innerHTML += keys[i].innerHTML;
        if (keys[i].innerHTML === "=") {
            let sum = (Number(opr1) + Number(opr2));
            console.log(typeof sum);
            console.log(sum);
            sum = sum.toString();
            console.log(typeof sum);
            console.log(sum);
            input.innerHTML = sum;
            opr2 = "";
            opr1 = "";
        }
        if (opr1 != "") {
            opr2 += keys[i].innerHTML;
        }


    }
}