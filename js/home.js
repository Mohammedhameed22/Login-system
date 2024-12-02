var userrname = document.getElementById('userrname');
userrname.innerHTML=localStorage.getItem('username');
document.getElementById('logbtn').addEventListener('click',function(){
    localStorage.removeItem('username')
})