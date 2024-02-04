fetch("https://kea-alt-del.dk/t7/api/products")
    .then(response=>response.json())
    .then(data=>showProducts(data))

function showProducts(products){
    // Looper og kalder show product
    products.forEach(product=>showProduct(product))
}

function showProduct(product){
    console.log(product)
// fang template
const template = document.querySelector("#smallProductTemplate").content;

// lav en kopi
const copy = template.cloneNode(true);
// ændre indhold
copy.querySelector("h3").textContent = product.productdisplayname;
if(product.soldout){
    // produktet er udsolgt
    copy.querySelector("article").classList.add("soldout");
    // copy.querySelector("article").classList.add("udsolgttag");
} else {
    copy.querySelector("article").classList.remove("soldout")
    copy.querySelector("article").classList.remove("udsolgttag");
}

// appende
document.querySelector("main").appendChild(copy);
}
// {
//   "id": 1531,
//   "gender": "Men",
//   "category": "Apparel",
//   "subcategory": "Topwear",
//   "articletype": "Tshirts",
//   "season": "Fall",
//   "productionyear": 2010,
//   "usagetype": "Casual",
//   "productdisplayname": "Grey Solid Round Neck T-Shirt",
//   "price": 799,
//   "discount": null,
//   "brandname": "Puma",
//   "soldout": 0
// }