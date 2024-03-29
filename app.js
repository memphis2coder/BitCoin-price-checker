var btn = document.querySelector("button");
var amount = document.querySelector("#price");
var currency = "USD"

btn.addEventListener("click", function() {
  var XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function() {
    if(XHR.readyState == 4 && XHR.status == 200) {
      var data = JSON.parse(XHR.responseText);
      var price = data.bpi[currency].rate;
      amount.innerText = price + " " + currency;
    } 
  }
  
  var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  XHR.open("GET", url);
  XHR.send();
});