const react = document.getElementById("react");
const vue = document.getElementById("vue");
const angular = document.getElementById("angular");
const h = document.querySelectorAll("h1");
const div = document.querySelector("div");
let el = document.querySelector("h1");

h.forEach((elem) => {
    elem.setAttribute('draggable', true);
    elem.addEventListener('dragstart', () => {
        console.log("Drag Done");
        el = document.getElementById(elem.id);
    })
})

div.addEventListener("dragover", (event) => {
    console.log("Drag over");
    event.preventDefault();
})


div.addEventListener("drop", () => {
    console.log("Droped");
    console.log(el.id);
    div.append(el);

})

// عمل درگ دراپ را با ویژگی datatransfer
// نیز میتوان انجام داد
// داخل فیلم با datatransfer
//انجام داده