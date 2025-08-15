let apiData=null;

  // Count
let displayCount = ()=>{
let count = document.querySelector('.cart-count');
  let cart =JSON.parse(localStorage.getItem("savedData")) ;
  if(cart == null) return ;
 if(cart.length > 0 ){
    count.innerHTML=cart.length;
    count.style.display='inline-block'
 }else{
     count.style.display='none'
 }
}
// generate product
let displayProducts = async () => {
displayCount();
try{
    let response = await axios.get("https://fakestoreapi.com/products");
   let loader = document.querySelector('.loader').style.display='none';
  let data = response.data.reverse();
  apiData = data;
  let productContainer = document.querySelector(".product-container");

  data.forEach((item) => {
   
    productContainer.innerHTML += `
   <div class="card" id=${item.id}>
  
   <div class="img-container">
       <img src="${item.image}" alt="item">
   </div>
            <div class="card-des">
                <h3>${item.category.toUpperCase()} </h3>
                <p>${returnTwentyWords(item.description)}</p>
                <h3 class="star-container"> <span class="stars">★★★★</span>&nbsp;${item.rating.rate}</h3>
                <h4 class="price">Price: ${item.price} $/-</h4>
              <div class="btn-container">
                <button id="addToCart" onclick="getAddToCartId(${item.id})"}>Add To Cart</button>
                <a href="./productDetailPage.html?id=${item.id}"><button    id="addToCart" >View more</button></a>
              </div> .
            </div>
  </div>`;
  });
}catch(err){
alert('Server Problem Move to back');
   let loader = document.querySelector('.loader').style.display='none';
}
};
displayProducts();

// saved data to local storage or database
let database = JSON.parse(localStorage.getItem("savedData")) || [];

// get add to cart id
function getAddToCartId(id) {
  let itemExistsInDatabase = database.find((item) => item.id === id);
  if (itemExistsInDatabase) {
    itemExistsInDatabase.quantity++;
    alert(`${itemExistsInDatabase.category} is added to cart`);
      localStorage.setItem("savedData", JSON.stringify(database));
  } else {
    let item = apiData.find((item) => item.id === id);
    item.quantity=1;
    database = [...database, item];
    alert(`${item.category} is added to cart`);
    localStorage.setItem("savedData", JSON.stringify(database));
  }
displayCount()
}

// return 120 words
function returnTwentyWords(str){
let sliceStr= str.slice(0,120)
return sliceStr
}



