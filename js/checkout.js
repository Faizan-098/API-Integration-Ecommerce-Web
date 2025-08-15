  let number = document.querySelector('#phoneNumber');
  // Count
let displayCount = ()=>{
let count = document.querySelector('.cart-count');
  let cart =JSON.parse(localStorage.getItem("savedData")).length;
 if(cart > 0){
    count.innerHTML=cart;
    count.style.display='inline-block'
 }else{
     count.style.display='none'
 }
}
displayCount();
  function submitOrder(e) {
      e.preventDefault();
      if(number.value.length == '11' && number.value.slice(0,2) == '03'){
console.log(number.value.slice(0,2));
localStorage.removeItem('savedData')
      alert("Order placed successfully!");
      window.location.href = "../index.html";
      }else{
        alert('enter valid number')
      }

    }