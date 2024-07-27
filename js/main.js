const API__URL = "https://dummyjson.com"
const skeleton = document.querySelector(".skeleton")
const wrapper = document.querySelector(".wrapper")
const seemore = document.querySelector(".seemore");
const collection = document.querySelector(".collection");



for(let i = 0; i < 12; i++){
    let div = document.createElement("div")
    div.classList.add("skeleton__item")
    div.innerHTML = `
                <div class="skeleton__img skeleton__anime"></div>
                <div class="skeleton__line skeleton__anime"></div>
                <div class="skeleton__line skeleton__anime"></div>
                <div class="skeleton__line skeleton__anime"></div>
    `
    skeleton.append(div)
}



let perPageCount = 8;
let offset = 1;
let category = "";
async function fetchData(api,limit, category){
    let response = await fetch(`${api}/products${category}?limit=${limit}`);
    response
        .json()
        .then(res => createCard(res))
        .catch(err => console.log(err))
        .finally(() => {
            skeleton.style.display = "none";
        })
}

fetchData(API__URL, perPageCount, category);

function createCard(data) {
  while (wrapper.firstChild) {
    wrapper.firstChild.remove();
  }
  console.log(data.products[0]);
  data.products.forEach((product) => {
    let cardItem = document.createElement("div");
    cardItem.classList.add("card");
    cardItem.dataset.id = product.id
    cardItem.innerHTML = `
    <div class="box">
    <div class="photo">
         <img class = "card__img" src=${product.images[0]} alt="">
         <div class="icons">
         <i class="fa-regular fa-heart"></i>
         <i class="fa-regular fa-eye"></i></div>
         <div class= "hover"><p>Add to card</p></div>
        </div>
       
        <h3 class="info" title ="${product.title}">${product.title}</h3>
        <div class="stars">
        <p class = "star">$${product.price}</p> 
        <img src="./assets/Vector (1).svg" alt="">
        <img src="./assets/Vector (1).svg" alt="">
        <img src="./assets/Vector (1).svg" alt="">
        <img src="./assets/Vector (1).svg" alt="">
        <img src="./assets/Vector (3).svg" alt="">
        </div>
    </div>
        
        `;
    wrapper.appendChild(cardItem);
  });
}


seemore.addEventListener("click", () => {
    offset++;
    fetchData(API__URL, perPageCount * offset, category);
  });
  async function fetchCategory(api) {
    let response = await fetch(`${api}/products/category-list`);
    response
        .json()
        .then((res) => createCategory(res));
  }
  fetchCategory(API__URL);


  function createCategory(data) {
    data.forEach((category) => {
      let list = document.createElement("li");
      list.className = "type";
      list.innerHTML = `
          <data value="/category/${category}">${category}</data>
          `;
      collection.appendChild(list);
    });
  }
  collection.addEventListener("click", (e) => {
    if (e.target.tagName === "DATA") {
      let val = e.target.value;
      let category = val;
      fetchData(API__URL, perPageCount * offset, category);
    }
  });

  wrapper.addEventListener("click", e =>{
    if (e.target.className.includes("card__img")) {
      window.open(`/pages/product.html?id=${e.target.closest(".card").dataset.id}`,"_self")
    }
  })





function showSidebar(){
    const sidebar = document.querySelector(`.sidebar`)
    sidebar.style.display = `flex`
}
function hideSidebar() {
    const sidebar = document.querySelector(`.sidebar`)
    sidebar.style.display = `none`
}