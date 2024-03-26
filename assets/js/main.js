var accounts = [
  { username: "DEADSEC", password: "KILLIT" },
  { username: "admin", password: "admin" },
  { username: "deadsec", password: "killit" },
  { username: "ADMIN", password: "ADMIN" },
  { username: "adm", password: "adm" },
];
//window.onLoad(inviaWebhook())
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var validCredentials = accounts.some(function (account) {
    return account.username === username && account.password === password;
  });

  if (validCredentials) {
    window.location.href = "./nick/index.html";
  } else {
    alert("Questo account non è associato alla nostra rete.");
  }
}
