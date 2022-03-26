
function addToCart(idtag,price) {
    var select = document.getElementById(idtag);
    var value = select.options[select.selectedIndex].value;
    console.log(value);
    var totalPrice = price * value;
    console.log(totalPrice);
  
    var checkoutPrice = document.getElementById('total-price').innerHTML;
    var totalcheckoutPrice = parseFloat(checkoutPrice);
    console.log(totalcheckoutPrice);
  
    totalcheckoutPrice = totalcheckoutPrice + totalPrice;
    document.getElementById('total-price').innerHTML = totalcheckoutPrice;
  }
  