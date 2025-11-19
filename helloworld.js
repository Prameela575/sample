
console.log("Hello, World!");
console.log("i will smile 😀");//window+; for smile short cut
let bmiform = document.querySelector(".dmi-form");
bmiform.addEventListener("submit",function(e){
    e.preventDefault();
    const form =e.target;
    let names =form.querySelector("#name").value;
    let weight = parseFloat(form.querySelector("#weight").value);
    let height = parseFloat(form.querySelector("#height").value);
    let bmi = weight/(height*height);
    console.log(weight,height,bmi);
    form.querySelector("#result").textContent = `${name}, You are ${bmi.toFixed(2)}`;

});
