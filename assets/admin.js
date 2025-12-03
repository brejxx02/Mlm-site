function adminLogin(){
    let u=document.getElementById("adminUser").value;
    let p=document.getElementById("adminPass").value;
    if(u=="admin" && p=="admin123"){localStorage.setItem("adminLogged","true");window.location="admin_dashboard.html";}
    else alert("Invalid Admin credentials");
}
