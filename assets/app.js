// Demo storage system
if(!localStorage.getItem("users")){
    localStorage.setItem("users",JSON.stringify([{email:"demo@user.com",password:"123456",username:"Demo",referrals:[],wallet:100}])); 
}

// Register function
function registerUser(){
    let username=document.getElementById("username").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let referral=document.getElementById("referral").value;
    let users=JSON.parse(localStorage.getItem("users"));
    if(users.find(u=>u.email===email)){alert("User exists");return;}
    users.push({username,email,password,referrals:[],wallet:0,referralId:referral});
    localStorage.setItem("users",JSON.stringify(users));
    alert("Registered! Please login");window.location="login.html";
}

// Login function
function loginUser(){
    let email=document.getElementById("login_email").value;
    let password=document.getElementById("login_password").value;
    let users=JSON.parse(localStorage.getItem("users"));
    let u=users.find(u=>u.email===email && u.password===password);
    if(u){localStorage.setItem("currentUser",JSON.stringify(u));window.location="dashboard.html";}
    else alert("Invalid credentials");
}

// Logout
function logout(){localStorage.removeItem("currentUser");window.location="login.html";}

// Wallet withdraw (demo)
function requestWithdrawal(){
    let amt=document.getElementById("withdrawAmount").value;
    let user=JSON.parse(localStorage.getItem("currentUser"));
    if(amt>user.wallet){alert("Insufficient balance");return;}
    user.wallet-=amt;
    localStorage.setItem("currentUser",JSON.stringify(user));
    alert("Withdrawal Requested");window.location="wallet.html";
}

// Referral link
function copyReferral(){
    let user=JSON.parse(localStorage.getItem("currentUser"));
    let link="https://demo.com/register?ref="+user.email;
    document.getElementById("referralLink").value=link;
    navigator.clipboard.writeText(link);alert("Referral link copied!");
}
