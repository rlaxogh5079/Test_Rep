const number1 = document.querySelector("#number1")
const btn1 = document.querySelector("#btn1");
const error1 = document.querySelector("#error1");

const isPositiveInteger = (number) => {
    return 0 === number % (!isNaN(parseFloat(number)) && 0 <= ~~number);
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

var value = "";

number1.addEventListener("keypress", (event) => {
    event.preventDefault();
    if (checkNumber(event.target.value) || event.target.value == "") {
        if (event.target.value < 999){
            error1.InnerText = "";
            value += event.key
            event.target.value = value.padStart(4, "0");
        } else {
            alert("4글자 이하로 입력하세요!")
        }
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
})
