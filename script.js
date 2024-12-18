const searchBtn = document.getElementById("searchBtn");
const searchForm = document.querySelector(".search-form");

const cartItems = document.getElementById("cartItems");
const cartItemsContainer = document.querySelector(".cart-items-container");

const menuBtn = document.querySelector(".bars");
const navbar = document.querySelector(".navbar");

searchBtn.addEventListener("click",()=>{
    searchForm.classList.toggle("active")
    document.addEventListener("click",(e)=>{
        if(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm)){
            searchForm.classList.remove("active")
        }
    })
})

cartItems.addEventListener("click",()=>{
    cartItemsContainer.classList.toggle("active")
    document.addEventListener("click",(e)=>{
        if(!e.composedPath().includes(cartItems) && !e.composedPath().includes(cartItemsContainer)){
            cartItemsContainer.classList.remove("active")
        }
    })
})
menuBtn.addEventListener("click",()=>{
    navbar.classList.toggle("active")
    document.addEventListener("click",(e)=>{
        if(!e.composedPath().includes(menuBtn) && !e.composedPath().includes(navbar)){
            navbar.classList.remove("active")
        }
    })
})

