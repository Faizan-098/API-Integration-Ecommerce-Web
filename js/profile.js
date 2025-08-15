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

// profile logic
let auth = JSON.parse(localStorage.getItem('auth'))




// Display Profile
let profileContainer = document.querySelector(".profile-container");
if(auth){
   if (auth.isloggedIn) { 
  profileContainer.innerHTML = `
<div class="profile-card">
<div class="circle">
   ${generateUpperCase(auth.name)}
</div>
<div class="fullname">Name : <span id="username">${auth.name.toUpperCase()}</span></div>
<div class="email-address">
   Email : <span id="useremail">${auth.email}</span>
</div>
<div class="logout-btn">
   Logout
</div>
</div>
`;
// Logout
document.querySelector(".logout-btn").addEventListener("click", () => {
   delete auth.isloggedIn;
  localStorage.setItem("auth",JSON.stringify(auth));
  window.location.href = "../index.html";
});
}else{
     profileContainer.innerHTML =
    '<h1 class="profile-error-msg">Please Login to create your profile</h1>';
}
}else{
     profileContainer.innerHTML =
    '<h1 class="profile-error-msg">Please Create Your Account</h1>';
}

// generate uppercase of first letter
function generateUpperCase(str) {
  let spliteted = str.trim().split(" ");
  return spliteted.map((word) => word[0].toUpperCase()).join("");
}
