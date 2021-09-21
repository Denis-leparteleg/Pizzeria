// User logic
var price, crustPrice, toppingPrice;
let total = 0;
function Getpizza(name, size, crust, topping, total) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
// Continue button
$(document).ready(function () {
  $("button.continue").click(function (event) {
    let pizzaName = $("#name option:selected").val();
    let pizzaSize = $("#size option:selected").val();
    let crustType = $("#crust option:selected").val();
    let pizzaTopping = [];
    $.each($("input[name='toppings']:checked"), function () {
      pizzaTopping.push($(this).val());
    });
    console.log(pizzaTopping.join(", "));

    // pizza size switch case statement
    switch (pizzaSize) {
      case "0":
        price = 0;
        break;
      case "large":
        price = 1000;
        console.log(price);
        break;
      case "medium":
        price = 500;
        console.log("The price is " + price);
        break;
      case "small":
        price = 250;
        console.log(price);
      default:
        console.log("error");
    }
    // Crust type switch case statement
    switch (crustType) {
      case "0":
        crustPrice = 0;
        break;
      case "Crispy":
        crustPrice = 200;
        break;
      case "Stuffed":
        crustPrice = 250;
        break;
      case "Gluten-free":
        crustPrice = 180;
        break;
      default:
        console.log("Nil");
    }
    let toppingValue = pizzaTopping.length * 50;
    console.log("toppings value" + toppingValue);

    // User input form validation
    if (pizzaSize == "0" && crustType == "0") {
      console.log("Nil selection");
      $("button.continue").show();
      $("#customerService").show();
      $("div.selection").hide();
      alert("Kindly select pizza size and crust type fields");
    } else {
      $("button.continue").hide();
      $("#customerService").hide();
      $("div.selection").slideDown(1200);
    }

    //   Total Bill
    totalBill = price + crustPrice + toppingValue;
    console.log(totalBill);
    let checkoutTotal = 0;
    checkoutTotal = checkoutTotal + totalBill;

    $("#pizzaName").html($(".name option:selected").val());
    $("#pizzaSize").html($("#size option:selected").val());
    $("#crustType").html($("#crust option:selected").val());
    $("#pizzaTopping").html(pizzaTopping.join(", "));
    $("#totals").html(total);

    // More pizza button
    $("button.morePizza").click(function () {
      let pizzaName = $(".name option:selected").val();
      let pizzaSize = $("#size option:selected").val();
      let crustType = $("#crust option:selected").val();
      let pizzaTopping = [];
      $.each($("input[name='toppings']:checked"), function () {
        pizzaTopping.push($(this).val());
      });
      console.log(pizzaTopping.join(", "));
      switch (pizzaSize) {
        case "0":
          price = 0;
          break;
        case "large":
          price = 1000;
          console.log(price);
          break;
        case "medium":
          price = 500;
          console.log(price);
          break;
        case "small":
          price = 250;
          console.log(price);
        default:
          console.log("error");
      }
      switch (crustType) {
        case "0":
          crustPrice = 0;
          break;
        case "Crispy":
          crustPrice = 200;
          break;
        case "Stuffed":
          crustPrice = 150;
          break;
        case "Gluten-free":
          crustPrice = 100;
          break;
        default:
          console.log("Nill");
      }
      let toppingValue = pizzaTopping.length * 50;
      console.log("toppings value" + toppingValue);
      totalBill = price + crustPrice + toppingValue;
      console.log(totalBill);

      checkoutTotal = checkoutTotal + totalBill;
      console.log(checkoutTotal);
      // Getpizza prototype function
      var newOrder = new Getpizza(
        pizzaName,
        pizzaSize,
        crustType,
        pizzaTopping,
        total
      );

      $("#ordersPlaced").append(
        '<tr><td id="pizzaName">' +
          newOrder.name +
          '</td><td id="pizzaSize">' +
          newOrder.size +
          '</td><td id="crustType">' +
          newOrder.crust +
          '</td><td id="pizzaTopping">' +
          newOrder.topping +
          '</td><td id="totals">' +
          newOrder.total +
          "</td></tr>"
      );
      console.log(newOrder);
    });

    // Checkout button
    $("button#checkout").click(function () {
      $("button#checkout").hide();
      $("button.morePizza").hide();
      $("button.requestDelivery").slideDown(1000);
      $("#addedPrice").slideDown(1000);
      console.log("Your total bills is sh. " + checkoutTotal);
      $("#pizzaTotal").append("Your bill is sh. " + checkoutTotal);
    });

    //  Delivery button
    $("button.requestDelivery").click(function () {
      $(".orderstable").hide();
      $(".selection h2").hide();
      $(".delivery").slideDown(1000);
      $("#addedPrice").hide();
      $("button.delivery").hide();
      $("#pizzaTotal").hide();
      let deliveryFee = checkoutTotal + 150;
      console.log("You will pay sh. " + deliveryFee + " upon delivery");
      $("#totalBill").append("Your bill plus delivery fee is: " + deliveryFee);
    });

    // when one clicks place order button
    $("button#finalOrder").click(function (event) {
      event.preventDefault();

      $("#pizzaTotal").hide();
      $(".delivery").hide();
      $("button#finalOrder").hide();
      let deliveryFee = checkoutTotal + 100;
      console.log("Final bill is: " + deliveryFee);
      let customerName = $("input#customerName").val();
      let phoneNumber = $("input#phoneNumber").val();
      let deliveryLocation = $("input#deliveryLocation").val();

      if (
        $("input#customerName").val() &&
        $("input#phoneNumber").val() &&
        $("input#deliveryLocation").val() != ""
      ) {
        $("#finalText").append(
          customerName +
            ", We have received your order and it will be delivered to you at " +
            deliveryLocation +
            ". Prepare sh. " +
            deliveryFee
        );
        $("#totalBill").hide();
        $("#finalText").slideDown(1000);
      } else {
        alert("Kindly fill in the details for delivery!");
        $(".delivery").show();
        $("button#finalOrder").show();
      }
    });
    event.preventDefault();
  });
});
