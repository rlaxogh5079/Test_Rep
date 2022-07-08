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

const toggleErrorMessage = (error) => {
    error.innerText = (error.innerText === "") ? "숫자만 입력하세요" : "";
}

number1.addEventListener("change", (event) => {
    console.log(event)
    if (checkNumber(event.target.value)) {
        error1.InnerText = "";
        event.target.value = event.target.value.padStart(4, "0");
    } else {
        runError(number1)
        runError(error1)
        error1.innerText = "숫자만 입력하세요.";
    }
})

btn1.addEventListener("click", (event) => {
    event.preventDefault();
    number1.innerText="";
})
