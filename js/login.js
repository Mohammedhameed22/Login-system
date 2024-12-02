var userName = document.getElementById('username');
var password = document.getElementById('password');
var btn = document.getElementById('btn');
var formAlert = document.getElementById('formAlert');
var users =[];
users=JSON.parse(localStorage.getItem('users'));
btn.addEventListener('click',function(){
    if(userName.value=='' || password.value==''){
        formAlert.classList.remove('d-none');
    }else{
        checkUser();
    }
})

function checkUser(){
    for(var i=0 ;i<users.length ;i++){
        if(userName.value==users[i].name && password.value==users[i].password){
            var x =users[i].name;
            localStorage.setItem('username',x);
            window.location.href='home.html';
            break;
        }

    }
}

