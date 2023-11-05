var In = document.getElementById('In');
var Up = document.getElementById('Up');
var signIn = document.getElementById('signIn');
var signUp = document.getElementById('signUp');
var formUp = document.getElementById('formUp');
var formIn = document.getElementById('formIn');
signIn.onclick = function () {
    In.style.display = 'none';
    Up.style.display = 'block';
    formUp.style.display = 'none';
    formIn.style.display = 'block';
}
signUp.onclick = function () {
    In.style.display = 'block';
    Up.style.display = 'none';
    formUp.style.display = 'block';
    formIn.style.display = 'none';
}
var myFormSignUp = document.getElementById('myFormSignUp');
var myFormSignIn = document.getElementById('myFormSignIn');
var userInfoFromLocalStorage=JSON.parse(localStorage.getItem('userInfo'));
myFormSignUp.addEventListener('submit', function (e) {
    e.preventDefault();
    var userEmailC = document.getElementById('userEmailC').value;
    userEmailC=userEmailC.toLowerCase();
    var userPwdC = document.getElementById('userPwdC').value;
    var userC=document.getElementById('userC').value;
    var NewUser={
        name:userC,
        email:userEmailC,
        password:userPwdC
    }
    if(userInfoFromLocalStorage==null){
        var userInfo=[];
        userInfo.push(NewUser);
        localStorage.setItem('userInfo',JSON.stringify(userInfo));
        location.assign("./AmaKartProducts.html");
    }else{
        var existingUser=false;
        for(var i of userInfoFromLocalStorage){
            if(i.email==userEmailC){
                existingUser=true;
            }
        }
        if(existingUser==true){
            alert("entered mail id already registered , login  or create new user")
        }else{
            userInfoFromLocalStorage.push(NewUser);
            localStorage.setItem('userInfo',JSON.stringify(userInfoFromLocalStorage));
            location.assign("./AmaKartProducts.html");
        }
    }
})

myFormSignIn.addEventListener('submit', function (e) {
    e.preventDefault();
    var userEmailS = document.getElementById('userEmailS').value;
    userEmailS=userEmailS.toLowerCase();
    var userPwdS = document.getElementById('userPwdS').value;
    if(userInfoFromLocalStorage!=null){
        var userLogged=false;
        for(var i of userInfoFromLocalStorage){
            if(userEmailS == i.email.toLowerCase() && userPwdS == i.password){
                userLogged=true;
            }
        }
        if(userLogged==true){
            location.assign("./AmaKartProducts.html");
        }else{
            alert("Wrong Password/Email entered");
        }
    }else{
        alert("Hello, Please Your Create Account !! ")
    }
})

