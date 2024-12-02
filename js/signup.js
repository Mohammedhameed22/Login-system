var userName = document.getElementById('username');
var password = document.getElementById('password');
var email = document.getElementById('email');
var btn = document.getElementById('btn');
var formAlert = document.getElementById('formAlert');
var formmAlert = document.getElementById('formAlert');
var users;

if(localStorage.getItem('users') != null){
    users=JSON.parse(localStorage.getItem('users'))
    
}else{
    users=[];

  

}

function addUser(){
    if(userName.value =='' || email.value =='' || password.value ==''){
        formAlert.classList.remove('d-none');

    }else{
        var user = {
            name:userName.value,
            email:email.value,
            password:password.value
        }
        users.push(user);
        console.log(users);
        formmAlert.classList.remove('d-none');
        location.href='../index.html';
       localStorage.setItem('users',JSON.stringify(users));
       console.log(users);

    

    }
    
   
    

}



btn.addEventListener("click", addUser);
   
