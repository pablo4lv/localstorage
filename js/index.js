let btn = document.getElementById("buttonText");

btn.addEventListener("click",() => {
    let text = document.getElementById("inputText").value;
    localStorage.setItem("text",text)
})