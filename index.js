function greetHead(){
    console.log("Hello World");
}
function outHead(){
    console.log("Bye World");
}
document.addEventListener("DOMContentLoaded", function(){
    let btnHeader = document.getElementById("myBtn");
    btnHeader.addEventListener("mouseenter", function(){
        greetHead();
        btnHeader.style.color = "red";
    })
    btnHeader.addEventListener("mouseleave", function(){
        outHead();
        btnHeader.style.color = "green";        
    })
});