const btnFeatures = document.querySelector("#features")
const btnCompany = document.querySelector("#company")

const dropdownFeatures = document.querySelector(".dropdown.features");
const dropdownCompany = document.querySelector(".dropdown.company");


const toggleContent = (item) =>  item.classList.toggle("active");




btnFeatures.addEventListener("click", () => toggleContent(dropdownFeatures))
btnCompany.addEventListener("click", () => toggleContent(dropdownCompany) )




