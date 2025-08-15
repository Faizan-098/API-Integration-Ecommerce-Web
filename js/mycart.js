// Variables
let myCartContainer = document.querySelector(".my-cart-container");
let mainSection = document.querySelector(".main-section");
let summaryBag = document.querySelector(".summary-bag");
let getSavedDataId;
// onload
displayData();
  // Count
function displayCount(){
let count = document.querySelector('.cart-count');
  let cart =JSON.parse(localStorage.getItem("savedData")).length;
 if(cart > 0){
    count.innerHTML=cart;
    count.style.display='inline-block'
 }else{
     count.style.display='none'
 }
}

 //  fetchdata
 function fetchData() {
   return JSON.parse(localStorage.getItem("savedData"))||[];
 }
      // display add to cart items
      function displayData() {

        let getSavedData = fetchData();  // fetch data from local storage
        if (getSavedData == 0) {
          mainSection.innerHTML ='<h1 class="my-cart-error-msg">No Products in cart</h1>';
          mainSection.classList.add('error')
        } else {
          myCartContainer.innerHTML=''
          getSavedData.forEach((item) => { // display data
            myCartContainer.innerHTML += `
      <div class="cart-item" id=${item.id}>
          <div class="cart-img">
            <img src=${item.image} alt="" />
          </div>
          <div class="cart-name">${item.category}</div>
   <div class="cart-controller"><button onclick="decrement(${item.id})">-</button><span>${item.quantity}</span> <button onclick="increment(${item.id})">+</button></div>
          <div class="cart-price">${item.price}$</div>
          <div class="remove-cart" onclick="removeCart(${item.id})">Remove</div>
        </div>`;
          });
          displaySummary(getSavedData); //display summary 
        }
    
        displayCount();
        
      }

      // remove cart function
      function removeCart(id) {
        let getSavedData = fetchData();
        let updatedData = getSavedData.filter((item) => {
          return item.id !== id;
        });
        localStorage.setItem("savedData", JSON.stringify(updatedData));

        displayData();
      }

      // summary function
      function displaySummary(getSavedData) {
     
     summaryBag.innerHTML = `
 <h2>Selected Offer Summary</h2>
   <div class="sub-total">Quantity :  &nbsp<span>${countQuantity(getSavedData)}</span></div>
        <div class="sub-total">Sub Total :  &nbsp<span>${totalFun(getSavedData).toFixed(2)}$</span></div>
        <div class="tax">Tax (5%) : <span> &nbsp 5.0$</span></div>
        <div class="final-amount">Final Amount : <span> &nbsp${(Number(totalFun(getSavedData)) + Number((totalFun(getSavedData)*5/100))).toFixed(2)}$</span></div>
        <div class="checkout-btn" onclick=" checkout()">Checkout</div>
`;
      }

      //  total
      function totalFun(data) { 
      return data.reduce((prev,curr)=> (prev + (curr.price * curr.quantity)),0);
      }
 
      // Checkout
      function checkout(){
        window.location.href='./checkout.html';
      }

      // count quantity
      function countQuantity(data){
          return data.reduce((prev,curr) => (prev+curr.quantity),0);
      
      }
    

      // Decrement Quantity
      function decrement(id){
          let data=fetchData();
          let obj=data.find(item => item.id === id)
          if(obj.quantity>1){
            obj.quantity--;
          }
          localStorage.setItem('savedData',JSON.stringify(data))
          displayData()
      }
       // Increment Quantity
      function increment(id){
          let data=fetchData();
          let obj=data.find(item => item.id === id)
          obj.quantity++;
          localStorage.setItem('savedData',JSON.stringify(data))
          displayData()
      }
