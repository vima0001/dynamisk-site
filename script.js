fetch("https://kea-alt-del.dk/t7/api/products")
  .then((response) => response.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  // Looper og kalder show product
  products.forEach((product) => showProduct(product));
}

function showProduct(product) {
  console.log(product);
  // fang template
  const template = document.querySelector("#smallProductTemplate").content;

  // lav en kopi
  const copy = template.cloneNode(true);
  // ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector("a").href = `produkt.html?id=${product.id}`;
  copy.querySelector(".produktListe_img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".produktListe_img").alt = product.productdisplayname;
  copy.querySelector(".normal_price").textContent = "DKK " + product.price + ",-";
  

  if (product.soldout > 0) {
    // produktet er udsolgt
    copy.querySelector(".udsolgttag").classList.remove("hide");
    copy.querySelector("article img").classList.add("soldout");

  } 

// Produktet er på udsalg
if (product.discount){
    // procent boks
    copy.querySelector(".rabattag2").classList.remove("hide");
    copy.querySelector(".rabattag_span").textContent = product.discount;
    copy.querySelector(".price").textContent = "DKK " + product.price + ",-";
    
    // pris
    copy.querySelector(".normal_price").classList.add("hide");
    copy.querySelector(".price").classList.remove("hide");
    copy.querySelector(".price_after").classList.remove("hide");
    copy.querySelector(".price_after").textContent = "DKK " + (product.price*(100- product.discount))/100+",-";
} 



  // appende
  document.querySelector(".grid_1_1_1").appendChild(copy);
}

// sinlge view js (det enkelte produkt)

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

function getProduct() {
  console.log("vis");
  fetch(url)
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
  document.querySelector(".purchaseBox h3").textContent = produkt.productdisplayname;
  document.querySelector(".modelNavn").textContent = produkt.productdisplayname;
  document.querySelector(".season").textContent = produkt.season;
  document.querySelector(".normal_price").textContent = "DKK " + produkt.price + ",-";
  document.querySelector(".usagetype").textContent = produkt.usagetype;
  document.querySelector(".produkt_img").src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
  document.querySelector(".produkt_img").alt = produkt.productdisplayname;

  if (produkt.discount){
    // procent boks
    copy.querySelector(".rabattag2").classList.remove("hide");
    copy.querySelector(".rabattag_span").textContent = produkt.discount;
    copy.querySelector(".price").textContent = produkt.price;
    
    // pris
    copy.querySelector(".normal_price").classList.add("hide");
    copy.querySelector(".price").classList.remove("hide");
    copy.querySelector(".price_after").classList.remove("hide");
    copy.querySelector(".price_after").textContent = "DKK " + (produkt.price*(100- produkt.discount))/100+",-";
} 
}

getProduct();


