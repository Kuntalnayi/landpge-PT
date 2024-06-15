const navlink = document.querySelectorAll(".nav-link");
console.log(navlink);

navlink.forEach(navlink =>{
     navlink.addEventListener('click',()=>{
        document.querySelector(".active").classList.remove("active");
        navlink.classList.add('active');

     })
})