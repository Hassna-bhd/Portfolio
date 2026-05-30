function login() {

  const password =
    document.getElementById("password").value;

  if(password === "admin123") {

    localStorage.setItem(
      "isAdmin",
      "true"
    );

    window.location.href =
      "dashboard.html";

  } else {

    alert("Wrong password");

  }

}
