elements = document.getElementsByClassName("element");
for(let i = 0; i < elements.length; i++) {
elements[i].addEventListener("click", function() {
document.querySelector(".product").classList.add('open');
//document.querySelector("html").classList.toggle('scroll');

const imgSource = elements[i].getElementsByClassName("img")[0].src;
const name = elements[i].getElementsByClassName("name")[0].textContent;
const discount = elements[i].getElementsByClassName("discount")[0].textContent;
const discountPrice = elements[i].getElementsByClassName("discountPrice")[0].textContent;
const price = elements[i].getElementsByClassName("price")[0].textContent;

document.getElementsByClassName("tname")[0].innerHTML = name;
document.getElementsByClassName("tprice")[0].innerHTML += price;
document.getElementsByClassName("tdiscount")[0].innerHTML += discount;
document.getElementsByClassName("timg")[0].src = imgSource;
document.getElementsByClassName("tdiscountPrice")[0].innerHTML += discountPrice;
});
}

document.querySelector(".product").addEventListener("click", function() {
  document.querySelector(".product").classList.remove('open');
  //document.querySelector("html").classList.toggle('scroll');
  
document.getElementsByClassName("tprice")[0].innerHTML = "Цена по скидке: ";
document.getElementsByClassName("tdiscount")[0].innerHTML = "Скидка: ";
document.getElementsByClassName("tdiscountPrice")[0].innerHTML = "Цена по скидке: ";
})