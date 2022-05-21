// applying styled boxes on the navbar items with purple border buttom 

const applyBox = document.querySelectorAll(".item");

const changeBgColor = () => {
    for (let i = 0; i < applyBox.length; i++) {
        applyBox[i].classList.remove("orange-box");
    }
}

for (let j = 0; j < applyBox.length; j++) {
    let el = applyBox[j];
    el.addEventListener("click", () => {
        changeBgColor();
        el.classList.add("orange-box")
    })
}
 
// making the smaller images on the main page blur and changing pictures on the main page by clicking on the desired smaller images 

const applyBox2 = document.querySelectorAll(".pic");

const changeBgColor2 = () => {
    for (let y = 0; y < applyBox2.length; y++) {
        applyBox2[y].classList.remove("orange-box2");
    }
}

for (let x = 0; x < applyBox2.length; x++) {
    let el2 = applyBox2[x];
    el2.addEventListener("click", () => {
        changeBgColor2();
        el2.classList.add("orange-box2")
        document.querySelector(".large-img").setAttribute("src", ("images/image-product-" + (x+1) + ".jpg"))
    })
}

// making the smaller images on the light Box page blur and changing pictures on the light Box page by clicking on the de

const applyBox3 = document.querySelectorAll(".lightBox-pic");

const changeBgColor3 = () => {
    for (let m = 0; m < applyBox3.length; m++) {
        applyBox3[m].classList.remove("orange-box2");
    }
}

for (let n = 0; n < applyBox3.length; n++) {
    let el3 = applyBox3[n];
    el3.addEventListener("click", () => {
        changeBgColor3();
        el3.classList.add("orange-box2")
        document.querySelector(".lightBox-shoe1").setAttribute("src", ("images/image-product-" + (n+1) + ".jpg"))
    });
};


const itemNum = document.querySelector(".item-num");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const cart = document.querySelector(".cart");
const zero = document.querySelector(".zero");
const multipliedPrice = document.querySelector(".multiplied-price");
const addCart = document.querySelector(".add-cart");
const checkOut = document.querySelector(".checkout");
const checkCart = document.querySelector(".check-cart");
const mainCart = document.querySelector(".main-cart");

let count = 0;

function displayCart() {
    if (count === 0) {
        checkOut.style.display = "none"
        checkCart.style.display = "block"
        itemNum.style.display = "none"
    } else {
        itemNum.style.display = "flex"
        checkOut.style.display = "block"
        checkCart.style.display = "none"
    }

}

plus.addEventListener('click', ()=> {
    count++;
    zero.textContent = count;
});

minus.addEventListener('click', ()=> {
    count--;
    if (count <= 0) {count = 0};
    zero.textContent = count;
});

cart.addEventListener('click',()=> {
    mainCart.classList.toggle("display-block");
    displayCart();
});

addCart.addEventListener('click', ()=> {
  itemNum.textContent = count;
  multipliedPrice.textContent = count + " " + 125 * count;
  displayCart();
})

//  viewing the light Box by viewing on the large image 

document.querySelector(".large-img").addEventListener("click", function(){
    document.querySelector(".lightBox-images").style.display ="flex"
})

// exiting the light Box 

document.querySelector(".exit-lightBox").addEventListener("click", function(){
    document.querySelector(".lightBox-images").style.display = "none";
})
 

// Slide Show

var slideIndex = 1;
showSlides(slideIndex);

// Next/Previous controls

function plusSlides(n) {
     showSlides(slideIndex += n);
}

function currentSlide(n) {
     showSlides(slideIndex = n);
}

function showSlides(n) {

     const slides = document.querySelectorAll(".slide");
     if (n > slides.length) {
          slideIndex = 1
     }
     if (n < 1) {
          slideIndex = slides.length
     }

     slides.forEach((slide)=> {
         slide.style.display = "none"
     })
     
     slides[slideIndex-1].style.display = "block";

}


// open side bar
const openSideBar = document.querySelector(".menu");
const slideLinks = document.querySelectorAll(".slide-link");
const deem = document.querySelector(".deem");
const sideBar = document.querySelector(".slide-bar");
const closeMenu = document.querySelector("#close-menu");

openSideBar.addEventListener('click', ()=> {
    sideBar.classList.add("slide-bar-open");
    slideLinks.forEach((link)=> link.classList.add("open-navlinks"));
    deem.classList.add("deem_page");
});

// close side bar
closeMenu.addEventListener('click', ()=> {
    sideBar.classList.remove("slide-bar-open");
    deem.classList.remove("deem_page");
});
