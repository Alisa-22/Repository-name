function myfunc() {
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b1 = document.getElementById("b2").value;
    b1 = document.getElementById("b3").value;
    b1 = document.getElementById("b4").value;
    b1 = document.getElementById("b5").value;
    b1 = document.getElementById("b6").value;
    b1 = document.getElementById("b7").value;
    b1 = document.getElementById("b8").value;
    b1 = document.getElementById("b9").value;

    if (b1.toLowercase() == "x" && b2.toLowercase() == "x" && b3.toLowercase() == "x") {
        window.alert("you are a winner");
        reset();
    } else if (b4.toLowercase() == "x" && b5.toLowercase() == "x" && b6.toLowercase() == "x") {
        window.alert("you are a winner");
        reset();
    } else if (b7.toLowercase() == "x" && b8.toLowercase() == "x" && b9.toLowercase() == "x") {
        window.alert("you are a winner");
        reset();
    } else if (b1.toLowercase() == "x" && b4.toLowercase() == "x" && b7.toLowercase() == "x") {
        window.alert("you are a winner");
        reset();
    } else if (b2.toLowercase() == "x" && b5.toLowercase() == "x" && b8.toLowercase() == "x") {
        window.alert("you are a winner");
        reset();
    } else if (b3.toLowercase() == "x" && b6.toLowercase() == "x" && b9.toLowercase() == "x") {
        window.alert("you are a winner");
        reset();
    } else if (b1.toLowercase() == "x" && b5.toLowercase() == "x" && b9.toLowercase() == "x") {
        window.alert("you are a winner");
        reset();
    } else if (b3.toLowercase() == "x" && b5.toLowercase() == "x" && b7.toLowercase() == "x") {
        window.alert("you are a winner");
        reset();
    } 
    if (b1.toLowercase() == "o" && b2.toLowercase() == "o" && b3.toLowercase() == "o") {
        window.alert("you are a winner");
        reset();
    } else if (b4.toLowercase() == "o" && b5.toLowercase() == "o" && b6.toLowercase() == "o") {
        window.alert("you are a winner");
        reset();
    } else if (b7.toLowercase() == "o" && b8.toLowercase() == "o" && b9.toLowercase() == "o") {
        window.alert("you are a winner");
        reset();
    } else if (b1.toLowercase() == "o" && b4.toLowercase() == "o" && b7.toLowercase() == "o") {
        window.alert("you are a winner");
        reset();
    } else if (b2.toLowercase() == "o" && b5.toLowercase() == "o" && b8.toLowercase() == "o") {
        window.alert("you are a winner");
        reset();
    } else if (b3.toLowercase() == "o" && b6.toLowercase() =="o" && b9.toLowercase() == "o") {
        window.alert("you are a winner");
        reset();
    } else if (b1.toLowercase() == "o" && b5.toLowercase() == "o" && b9.toLowercase() == "o") {
        window.alert("you are a winner");
        reset();
    } else if (b3.toLowercase() == "o" && b5.toLowercase() == "o" && b7.toLowercase() == "o") {
        window.alert("you are a winner");
        reset();
    } 
}
function reset() {
    location.reload();
    document.getElementById("b1").value = "";
    document.getElementById("b2").value = "";
    document.getElementById("b3").value = "";
    document.getElementById("b4").value = "";
    document.getElementById("b5").value = "";
    document.getElementById("b6").value = "";
    document.getElementById("b7").value = "";
    document.getElementById("b8").value = "";
    document.getElementById("b9").value = "";
}
let flag = 1;
function setValue() {
    if (flag == 1) {
        this.value = "X";
        this.disabled = true;
        flag = 0;
    } else {
        this.value = "O";
        this.disabled = true;
        flag = 1;
    }
}