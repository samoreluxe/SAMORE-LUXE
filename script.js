/*==================================

SAMORE LUXE
script.js

==================================*/

let cartCount = 0;

const cartCounter = document.getElementById("cart-count");

const cartButtons = document.querySelectorAll(".cart");

const wishlistButtons = document.querySelectorAll(".wishlist");

const quickButtons = document.querySelectorAll(".quick");

/*====================

ADD TO CART

====================*/

cartButtons.forEach(button=>{

button.addEventListener("click",()=>{

cartCount++;

cartCounter.innerText=cartCount;

button.innerHTML='<i class="fa-solid fa-check"></i> Added';

button.style.background="#2ecc71";

setTimeout(()=>{

button.innerHTML='<i class="fa-solid fa-cart-shopping"></i> Add to Cart';

button.style.background="";

},1500);

});

});

/*====================

WISHLIST

====================*/

wishlistButtons.forEach(button=>{

button.addEventListener("click",()=>{

const icon=button.querySelector("i");

icon.classList.toggle("fa-regular");

icon.classList.toggle("fa-solid");

button.style.color="#B76E79";

});

});

/*====================

QUICK VIEW

====================*/

quickButtons.forEach(button=>{

button.addEventListener("click",()=>{

const card=button.closest(".product-card");

const title=card.querySelector("h3").innerText;

const price=card.querySelector(".price").innerText;

const desc=card.querySelector("p").innerText;

alert(

title+

"\n\n"+

price+

"\n\n"+

desc

);

});

});
/*====================
SEARCH
====================*/

const searchInput = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box i");

function searchProducts() {

const value = searchInput.value.trim().toLowerCase();

document.querySelectorAll(".product-card").forEach(card => {

const text = card.innerText.toLowerCase();

if (text.includes(value) || value === "") {
card.style.display = "block";
} else {
card.style.display = "none";
}

});

}

searchInput.addEventListener("keyup", function(e){
if(e.key==="Enter"){
searchProducts();
}
});

searchBtn.addEventListener("click", searchProducts);
/*====================

PRODUCT FILTER

====================*/

const filterButtons=document.querySelectorAll(".filter-buttons button");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

});

});

/*====================

SMOOTH NAV ACTIVE

====================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-140;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
/*====================

HEADER SHADOW

====================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.style.background="rgba(10,10,10,.98)";

header.style.boxShadow="0 10px 35px rgba(0,0,0,.35)";

}else{

header.style.background="rgba(10,10,10,.92)";

header.style.boxShadow="none";

}

});

/*====================

SCROLL REVEAL

====================*/

const revealItems=document.querySelectorAll(

".product-card,.review-card,.about-container,.packaging-grid img,.brand-story,.section-heading"

);

const reveal=()=>{

const trigger=window.innerHeight*0.88;

revealItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<trigger){

item.style.opacity="1";

item.style.transform="translateY(0)";

}

});

};

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(60px)";

item.style.transition=".8s ease";

});

window.addEventListener("scroll",reveal);

window.addEventListener("load",reveal);

/*====================

CURRENT YEAR

====================*/

const copyright=document.querySelector(".copyright");

if(copyright){

copyright.innerHTML=`© ${new Date().getFullYear()} Samore Luxe. All Rights Reserved.`;

}

/*====================

END OF SCRIPT.JS

====================*/
