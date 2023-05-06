burger = document.querySelector(".burger")
navbar1 = document.querySelector(".navbar")
uli = document.querySelector(".ul")
// logo = document.querySelector("#logo")

burger.addEventListener("click", ()=>{
    navbar1.classList.toggle("h-nav-resp");
    uli.classList.toggle("v-class-resp");
    // console.log("the listener is working");
})

// nav class navbar
// ul class nav-list
// logo class logo
//right nav have a search bar and a button and this nav is inline & outside of ul 
// and his burger is inline & outside of rigthnav & ul, but inside "nav" tag i.e. navbar class


//in css he makes .burger and .line above & outisde media query 1140px with burger display none

// then to make the display block of burger he uses media query by putting it inside media query


//now whenever the media query fires make the ul elements invisible and height of navbar smaller

// .h-nav-resp is for height func , he adds it after .navbar class in nav
// .v-class-resp for visibility/opacity = 0 adds after the nav-list class in ul


// harrys js code
// burger = document.querySelector(".burger")
// navbar = document.querySelector(".navbar")
// navList= document.querySelector(".nav-list")
// rightNav = document.querySelector(".rightNav")

// burger.addEventListener("click", ()=>{
//     navbar.classList.toggle("h-nav-resp");
//     navList.classList.toggle("v-class-resp");
//     rightNav.classList.toggle("v-class-resp");
// })
