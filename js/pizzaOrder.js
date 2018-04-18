function updateRunning(runningPrice) {
  document.getElementById('runningTotal').innerHTML = "Total Price: $"+runningPrice.toString()+".00";
};
/* Record the pizza order */
function startOrder() {
  var runningPrice = 0;
  document.getElementById('orderHeading').innerHTML = "Your Pizza Order!";
  updateRunning(runningPrice);
  addSize(runningPrice);
};

/* Use the selected size */
function addSize(runningPrice) {
  var sizePrice = 0;
  var size = $("input[type='radio'][name='Size']:checked").val();
  if (size == "Personal Size") {
    sizePrice = 6;
  } else if (size == "Medium Size") {
    sizePrice = 10;
  } else if (size == "Large Size") {
    sizePrice = 14;
  } else if (size == "Extra Large Size") {
    sizePrice = 16;
  }
  document.getElementById('selectedSize').innerHTML = size + " $" + sizePrice.toString() + ".00";
  runningPrice += sizePrice;
  updateRunning(runningPrice);
  addMeat(runningPrice);
};
/* Base Pizza Prices:
Personal = $6.00
Medium = $10.00
Large = $14.00
XLarge = $16.00 */

/* Add the meat selections */
function addMeat(runningPrice) {
  var meatPrice = 0;
  var meatCount = 0;
  var meatText = "";
  var meatOptions = document.getElementsByClassName('meat');
  for (var i = 0; i < meatOptions.length; i++) {
    if (meatCount >= 1) {
      if (meatOptions[i].checked) {
        meatText += "<p>" + meatOptions[i].value + " +$1.00</p>";
        meatPrice += 1;
        meatCount += 1;
      }
    } else {
      if (meatOptions[i].checked) {
        meatText += "<p>" + meatOptions[i].value + "</p>";
        meatCount += 1;
      }
    }
  }
  document.getElementById('selectedMeat').innerHTML = meatText;
  runningPrice += meatPrice;
  updateRunning(runningPrice);
  addCheese(runningPrice);
};

/* Return the  cheese selection */
function addCheese(runningPrice) {
  var cheesePrice = 0;
  var cheeseChoice = $("input[type='radio'][name='Cheese']:checked").val();
  if (cheeseChoice == "Extra Cheese") {
    cheesePrice += 3;
    document.getElementById('selectedCheese').innerHTML = cheeseChoice + " +$3.00";
  } else {
    document.getElementById('selectedCheese').innerHTML = cheeseChoice;
  }
  runningPrice += cheesePrice;
  updateRunning(runningPrice);
  addCrust(runningPrice);
};

/* Return the crust selection */
function addCrust(runningPrice) {
  var crustPrice = 0;
  var crustChoice = $("input[type='radio'][name='crust']:checked").val();
  if (crustChoice == "Cheese Stuffed Crust") {
    crustPrice += 3;
    document.getElementById('selectedCrust').innerHTML = crustChoice + " +$3.00";
  } else {
    document.getElementById('selectedCrust').innerHTML = crustChoice;
  }
  runningPrice += crustPrice;
  updateRunning(runningPrice);
  addSauce(runningPrice);
};

/* Add the selected sauce */
function addSauce(runningPrice) {
  var sauceChoice = $("input[type='radio'][name='Sauce']:checked").val();
  document.getElementById('selectedSauce').innerHTML = sauceChoice;
  addVeggies(runningPrice);
};

/* Add the selected Veggies */
function addVeggies(runningPrice) {
  var veggiePrice = 0;
  var veggieCount = 0;
  var veggieText = "";
  var veggieOptions = document.getElementsByClassName('veggie');
  for (var i = 0; i < veggieOptions.length; i++) {
    if (veggieCount >= 1) {
      if (veggieOptions[i].checked) {
        veggieText += "<p>" + veggieOptions[i].value + " +$1.00</p>";
        veggieCount += 1;
        veggiePrice += 1;
      }
    } else {
      if (veggieOptions[i].checked) {
        veggieText += "<p>" + veggieOptions[i].value +"</p>";
        veggieCount += 1;
      }
    }
  }
  document.getElementById('selectedVeggies').innerHTML = veggieText;
  runningPrice += veggiePrice;
  updateRunning(runningPrice);
};

/* Mod pricing:
MeatQuantity > 1 = $1 per additional meat item
VeggieQuantity > 1 = $1 per additional veggie item
ExtraCheese = + $3 for any size
StuffedCrust = + $3 */
