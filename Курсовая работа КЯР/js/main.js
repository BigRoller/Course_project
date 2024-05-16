var indexValue = 0;
function SlideShow(){
    setTimeout(SlideShow, 3500);
    let x;
    const img = document.getElementById("slideShow").querySelectorAll("img");
    const texts = document.getElementsByClassName("text3");
    for (x = 0; x < img.length; x++) {
        img[x].style.display = "none";
        texts[x].style.visibility = "hidden";
    }
    indexValue++;
    if (indexValue > img.length) {
        indexValue = 1;
    }
    img[indexValue - 1].style.display = "block";
    texts[indexValue - 1].style.visibility = "visible";
}
SlideShow();




const xhr = new XMLHttpRequest();
xhr.open('GET', '../data.xml', true);

xhr.onreadystatechange = function() {
if (xhr.readyState === 4 && xhr.status === 200) {
const xmlDoc = xhr.responseXML;
const items = xmlDoc.getElementsByTagName('row');
const rows = document.getElementById("products").getElementsByClassName("row");
let counter = 0;
for (let j = 0; j < rows.length; j++) {
    let el = rows[j].getElementsByClassName("element");
for (let i = 0; i < el.length; i++, counter++) {
    const name = items[counter].querySelector("product").textContent;
    const price = items[counter].querySelector("price").textContent;
    const discount = items[counter].querySelector("discount").textContent;
    const img = items[counter].querySelector("imgSource").textContent;
    el[i].getElementsByClassName("name")[0].innerHTML = name;
    el[i].getElementsByClassName("price")[0].innerHTML = price;
    el[i].getElementsByClassName("discount")[0].innerHTML = discount;
    el[i].getElementsByClassName("img")[0].src = img;
    el[i].getElementsByClassName("discountPrice")[0].innerHTML = Math.round((Number(price) - Number(discount.slice(0,-1)) * Number(price) / 100) * 100) / 100;
    }
}
}
};

xhr.send();