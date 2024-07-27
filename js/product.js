const API__URL = "https://dummyjson.com"
const content = document.querySelector(`.content`)


async function fetchSingleData(api) {
    let query = new URLSearchParams(window.location.search)
    let id = query.get("id")


    let response = await fetch (`${api}/products/${id}`)
    response 
            .json()
            .then(res => createContent(res))
            .catch(err => console.log(err))
}

fetchSingleData(API__URL)


function createContent(data) {
    console.log("ok");
    console.log(data);
    content.innerHTML = `
<div class="container"> 
<div class="content__presentation"><p>Account</p>/<p>${data.sku}</p>/<h3>${data.brand}</h3></div>
    <div class="content__box"> 
        <div class="content__img">
            <div>
            <img class = "big__img" width = "100%" src= ${data.images[0]} alt="">
            </div>
            <div class="little__img">
            ${
                data.images.map((item)=>(
                    `<img width="100px" src=${item} alt=""></img>`
                ))
             }
            </div>
        </div>
        <div class="content__info">
                <h2 class ="content__title">${data.title}</h2>
                <div class="content__review">
                <img src="../assets/Vector (1).svg" alt="">
                <img src="../assets/Vector (1).svg" alt="">
                <img src="../assets/Vector (1).svg" alt="">
                <img src="../assets/Vector (3).svg" alt="">
                <img src="../assets/Vector (3).svg" alt="">
                <p class = "rating" title = "${data.rating}">(${data.rating}  reviews)</p> <p class ="stick">|</p> <p class = "green">In Stock</p>
                </div>
                <p class ="content__price">$${data.price}</p>
                <p class = "content__data">${data.description}</p>
                <hr>
                <div class="content__colours">
                <p>Colours:</p>
                <div class="red"></div>
                <div class="blue"></div>
                </div>
                <div class="size">
                <p>Size:</p>
                 <div class="size__type">XS</div>
                 <div class="size__type">S</div>
                 <div class="size__type">M</div>
                 <div class="size__type">L</div>
                 <div class="size__type">XL</div>
                </div>
                <div class="content__shop">
                <div class="content__counter">
                    <button class="symbol">-</button>
                    <button class="number">2</button>
                    <button class="symbol">+</button>
                </div>
                <button class="now">Buy Now</button>
                <button class="heart"><i class="fa-regular fa-heart"></i></button>
            </div>
            <div class="content__service">
                <div class="content__delivery">
                    <div class="content__card">
                        <img src="../assets/icon-delivery.svg" alt="">
                    </div>
                    <div class="content__them">
                        <p class="return">Free Delivery</p>
                        <a class="content__desc" href="#">Enter your postal code for Delivery Availability</a>
                    </div>
                </div>
                <hr>
                <div class="content__delivery">
                    <div class="content__card">
                         <img src="../assets/Icon-return.svg" alt="">
                    </div>
                    <div class="content__them">
                        <p class="return">Return Delivery</p>
                        <a class="content__desc" href="#">Enter your postal code for Delivery Availability</a>
                    </div>
                </div>
       </div>
    </div>
</div>
    `
}



function showSidebar(){
    const sidebar = document.querySelector(`.sidebar`)
    sidebar.style.display = `flex`
}
function hideSidebar() {
    const sidebar = document.querySelector(`.sidebar`)
    sidebar.style.display = `none`
}