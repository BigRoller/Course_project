let array = ["row", "snacks", "cheases", "drinks", "meat", "fish", "milk"];

const xhr = new XMLHttpRequest();
xhr.open('GET', '../data.xml', true);

function xml(string) {
if (xhr.readyState === 4 && xhr.status === 200) {
const xmlDoc = xhr.responseXML;
const items = xmlDoc.getElementsByClassName(string);
const el = document.getElementsByClassName("element");
for (let i = 0; i < 16; i++) {
    if (items[i] != undefined) {
    const name = items[i].querySelector("product").textContent;
    const price = items[i].querySelector("price").textContent;
    const discount = items[i].querySelector("discount").textContent;
    const img = items[i].querySelector("imgSource").textContent;
    el[i].getElementsByClassName("name")[0].innerHTML = name;
    el[i].getElementsByClassName("price")[0].innerHTML = price;
    el[i].getElementsByClassName("discount")[0].innerHTML = discount;
    el[i].getElementsByClassName("img")[0].src = img;
    el[i].getElementsByClassName("discountPrice")[0].innerHTML = Math.round((Number(price) - Number(discount.slice(0,-1)) * Number(price) / 100) * 100) / 100;
    el[i].classList.add('active');
    }
    else {
        el[i].classList.remove('active');
    }
}
}
}

xhr.onreadystatechange = function() {
    xml(array[0]);
  };
xhr.send();

document.getElementsByClassName("row")[0].addEventListener('click', function() {
    xml(array[0]);
  });

document.getElementsByClassName("snacks")[0].addEventListener('click', function() {
    xml(array[1]);
  });

document.getElementsByClassName("cheases")[0].addEventListener('click', function() {
    xml(array[2]);
});

document.getElementsByClassName("drinks")[0].addEventListener('click', function() {
    xml(array[3]);
  });

  document.getElementsByClassName("meat")[0].addEventListener('click', function() {
    xml(array[4]);
  });

  document.getElementsByClassName("fish")[0].addEventListener('click', function() {
    xml(array[5]);
  });

  document.getElementsByClassName("milk")[0].addEventListener('click', function() {
    xml(array[6]);
  });



  document.querySelector(".catalog").addEventListener("click", function() {
    document.querySelector(".categories").classList.toggle('open');
    document.querySelector(".buffer").classList.toggle('open');
})

document.querySelector(".buffer").addEventListener("click", function() {
    document.querySelector(".categories").classList.toggle('open');
    document.querySelector(".buffer").classList.toggle('open');
})