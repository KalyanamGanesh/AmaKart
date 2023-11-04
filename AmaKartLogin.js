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
    const userEmailC = document.getElementById('userEmailC').value;
    userEmailC=userEmailC.toLowerCase();
    const userPwdC = document.getElementById('userPwdC').value;
    const userC=document.getElementById('userC').value;
    var NewUser={
        name:userC,
        email:userEmailC,
        password:userPwdC
    }
    if(userInfoFromLocalStorage==null){
        var userInfo=[];
        userInfo.push(NewUser);
        localStorage.setItem('userInfo',JSON.stringify(userInfo));
    }else{
        userInfoFromLocalStorage.push(NewUser);
        localStorage.setItem('userInfo',JSON.stringify(userInfoFromLocalStorage));
    }
    location.assign("./AmaKartProducts.html");
})

myFormSignIn.addEventListener('submit', function (e) {
    e.preventDefault();
    var userEmailS = document.getElementById('userEmailS').value;
    userEmailS=userEmailS.toLowerCase();
    var userPwdS = document.getElementById('userPwdS').value;
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
})





























// var myFormSignUp = document.getElementById('myFormSignUp');
// var myFormSignIn = document.getElementById('myFormSignIn');
// myFormSignUp.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const userEmailC = document.getElementById('userEmailC').value;
//     const userPwdC = document.getElementById('userPwdC').value;
//     localStorage.setItem("Email", userEmailC);
//     localStorage.setItem("Password", userPwdC);
//     location.assign("http://127.0.0.1:5500/mainPage.html");
// })


// myFormSignIn.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const userEmailS = document.getElementById('userEmailS').value;
//     const userPwdS = document.getElementById('userPwdS').value;
//     if (userEmailS == localStorage.getItem('Email') && userPwdS == localStorage.getItem('Password')) {
//         location.assign("http://127.0.0.1:5500/mainPage.html");
//     } else {
//         alert("Wrong Password/Email entered");
//     }
// })

