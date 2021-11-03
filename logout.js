function Input(){
login_ok = false;
name1 = "";
password1 = "";
name1 = prompt("Логин","");
name1 = name1.toLowerCase();
password1 = prompt("Пароль","");
password1 = password1.toLowerCase();
if (name1=="jamesgr001" && password1=="k0z9z8s888") {
 login_ok = true;
 window.location = "profile.html";
}
if (name1=="log" && password1=="123") {
 login_ok = true;
 window.location = "profile.html";
}

if (login_ok==false) alert("Неверный логин или пароль!");
}