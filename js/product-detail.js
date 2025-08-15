// Product Detail
let productDetailContainer=document.querySelector('.product-detail');
let getId= new URLSearchParams(window.location.search).get('id');
  // Count
let displayCount = ()=>{
  let count = document.querySelector('.cart-count');
  let cart =JSON.parse(localStorage.getItem("savedData")).length;
 if(cart > 0){
    count.innerHTML=cart;
    count.style.display='inline-block'
 }else{
     count.style.display='none'
 }}
// display item
let displayDetailItem = async()=>{
  displayCount();
try{ let response = await axios.get(`https://fakestoreapi.com/products/${getId}`);
   let loader = document.querySelector('.loader').style.display='none';
   let data = response.data;
   console.log(data);
   
 productDetailContainer.innerHTML=` <div class="product-info-card">
     <div class="img-container"> <!-- Fixed spelling here -->
     <img src=${data.image} alt="">
    </div>
     <div class="detail">
    <h3>${data.category}</h3>
    <p>${sliceString(data.description)}</p>
       <h4 class="price">${data.price}$/-</h4>
      <h3 class="star-container"> <span class="stars">★★★★</span>&nbsp;${data.rating.rate}</h3>
      <button class="go-to-cart" onclick=" return window.location.href='./products.html'">Go  To Cart    </div>
  </div>
`   
}
catch{
  alert('Server Problem');
   let loader = document.querySelector('.loader').style.display='none';
     productDetailContainer.innerHTML='<h1>Product Not Found </h1>'
 }   
}
displayDetailItem()


// slice string words
function sliceString(str){
let sliceStr= str.slice(0,250)
return sliceStr
}



