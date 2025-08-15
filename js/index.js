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
displayCount();
// Loader
  let loader = document.querySelector('.loader');


// display data
let displayData = async()=>{
try{
let row = document.querySelector('.row')
let response = await axios.get('https://fakestoreapi.com/products');


loader.style.display='none';
let data = response.data.filter(item =>{
  return item.category != 'jewelery'
}).reverse();


for(let i = 0; i <=10; i++){
row.innerHTML+=`<div class="img-container"><img src=${data[i].image} alt="img"></div>`
}
}catch(err){
  alert('Server Problem! move to back.')
  loader.style.display='none';
}
}
displayData();