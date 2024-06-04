document.querySelector(".searchform").style.display = "none";

document.querySelector(".searchBtn").addEventListener("click", () => {
    let cartmenu = document.querySelector(".searchform");
    let extended = cartmenu.style.display === "flex";
    cartmenu.style.display = extended ? "none" : "flex";
});
document.querySelector(".close").addEventListener("click", () => {
     let cartmenu = document.querySelector(".searchform");
     let extended = cartmenu.style.display === "flex";
     cartmenu.style.display = extended ? "none" : "flex";
 });
 