const men = document.querySelector(".men");
const women = document.querySelector(".women");
const kids = document.querySelector(".kid");
const homeliv = document.querySelector(".home");
const beauty = document.querySelector(".beauty");
const studio = document.querySelector(".studio");
const men_sec_item = document.querySelector(".men-section-items");
const women_sec_item = document.querySelector(".women-section-items");
const kid_sec_item = document.querySelector(".kids-section-items");
const home_sec_item = document.querySelector(".home-section-items");
const beauty_sec_item = document.querySelector(".beauty-section-items");
const container_ele = document.querySelector(".container");


var body = document.getElementsByTagName("body")
men.onmouseover = ()=>{
    men_sec_item.classList.remove('visibility');
}
men.onmouseout = ()=>{
    men_sec_item.classList.add('visibility');
}
women.onmouseover = ()=>{
    women_sec_item.classList.remove('visibility');
}
women.onmouseout = ()=>{
   women_sec_item.classList.add('visibility');
}

// women.addEventListener("click",()=>{
//     women_sec_item.classList.remove('visibility');
//    document.body.backgroundColor = "black";
//    document.body.opacity = "0.6";
// })
// women.addEventListener("click",()=>{
//     women_sec_item.classList.add('visibility');
// })

kids.onmouseover = ()=>{
    kid_sec_item.classList.remove('visibility');
}
kids.onmouseout = ()=>{
    kid_sec_item.classList.add('visibility');
}
homeliv.onmouseover = ()=>{
    home_sec_item.classList.remove('visibility');
}
homeliv.onmouseout =()=>{
    home_sec_item.classList.add('visibility');
}
beauty.onmouseover =()=>{
    beauty_sec_item.classList.remove('visibility');
}
beauty.onmouseout =()=>{
    beauty_sec_item.classList.add('visibility');
}

