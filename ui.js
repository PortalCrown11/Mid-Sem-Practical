const button = document.createElement("button");
button.innerText = "Click Me";

button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.backgroundColor = "#4CAF50";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";

button.addEventListener("click", () => {
    alert("New UI Feature Activated!");
});

document.body.appendChild(button);