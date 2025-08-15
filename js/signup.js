 // Variables
  let username=document.querySelector('#name');
  let useremail=document.querySelector('#email');
  let userpassword=document.querySelector('#apss');
  let signUpBtn=document.querySelector('#submit');



  // sign up function
  signUpBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(username.value==='' || useremail.value==='' || userpassword.value===''){
      alert('Fill All The Field!')
    }else if(userpassword.value.length < 8){
      alert('minimum length should be 8')
    }else{
      let authentication={
        name: username.value,
        email: useremail.value,
        password: userpassword.value,
      }
      localStorage.setItem('auth',JSON.stringify(authentication));
      username.value='';
      useremail.value='';
      userpassword.value='';
      window.location.href='../html/login.html';
    }
  })