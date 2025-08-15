// declare variable
let sideContainer=document.querySelector('.side-bar');
let extraScreen=document.querySelector('.extra-screen');
let sidbar=document.querySelector('.side-bar nav');
let crossIcon=document.querySelector('.side-bar .cross-icon');
   let toggleIcon=document.querySelector('.toggle-icon');
    toggleIcon.addEventListener('click',()=>{
        sideContainer.classList.add('show')
    })

    sideContainer.addEventListener('click',(e)=>{
if(e.target.className==='extra-screen' || e.target.className==='.side-bar nav ul li a' || e.target.tagName==='svg' || e.target.tagName==='path' ){
  sideContainer.classList.remove('show');
}
    })