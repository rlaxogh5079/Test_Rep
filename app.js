const number1 = document.querySelector("#number1")
const btn1 = document.querySelector("#btn1");
const error1 = document.querySelector("#error1");

const isPositiveInteger = (target) => {
    return 0 === target % (!isNaN(parseFloat(target)) && 0 <= ~~target);
}

const checkNumber = (target) => {
    return isPositiveInteger(target) || target === "Enter" || target === "Backspace"
}

const runError = (className) => {
    className.classList.add("bounce");
    setTimeout(() => {
        className.classList.remove("bounce");
    }, 1000);
}

number1.addEventListener("keydown", (event) => {
    var value = event.target.value;
    event.preventDefault()
    if (checkNumber(event.key) || event.target.value == "") {
        if (event.key === "Backspace") {
            console.log(event.target.value)
            if (Number(event.target.value) == 0 || event.target.value == ""){
                alert("숫자를 먼저 입력하세요.")
            }
            value = Number.parseInt(Number(value) / 10).toString().padStart(4, "0");
            event.target.value = value;
        } else if (!checkNumber(event.key)) {
            runError(number1)
            runError(error1)
            error1.innerText = "숫자만 입력하세요.";
        } else if (event.target.value < 1000){
            error1.InnerText = "";
            value = Number(value) +  event.key
            event.target.value = value.padStart(4, "0");
        } else {
            alert("4글자 이하로 입력하세요!")
        }
    } else if (event.key === "Backspace") {
        console.log(event.target.value)
        if (Number(event.target.value) == 0 || event.target.value == ""){
            alert("숫자를 먼저 입력하세요.")
        }
        value = Number.parseInt(Number(value) / 10).toString().padStart(4, "0");
        event.target.value = value;
    } else {
        runError(number1)
        runError(error1)
        error1.innerText = "숫자만 입력하세요.";
    }
})

btn1.addEventListener("click", (event) => {
    console.log(number1.value);
    event.preventDefault();
    number1.value = "";
    value = "";
})
