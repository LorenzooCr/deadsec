function saveNickname() {
  var nickname = document.getElementById("nicknameInput").value;
  // Puoi fare qualcosa con il nickname qui, come inviarlo al server
  alert("Nickname salvato con successo: " + nickname);
  // Puoi anche aprire il negozio qui se necessario
  window.location.href = `../shop/index.html?id=${nickname}`;
}
