var price , crust_price, topping_price ;
let total = 0;
function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
// proceed button
$(document).ready(function(){
    // click event
    $("button.proceed").click(function(event){
        let pname = $(".name option:selected").val();
        let psize = $("#size option:selected").val();
        let pcrust = $("#crust option:selected").val();
        let ptopping = [];
        $.each($("input[name='toppings']:checked"), function(){            
            ptopping.push($(this).val());
        });
        console.log(ptopping.join(", "));

        // pizza size switch case statement
        switch(psize){
            case "0":
              price =0;
            break;
            case "large":
               price = 1200;
               console.log(price);
             break;
             case "medium":
               price = 850;
               console.log("The price is "+price);
             break;
             case "small":
               price = 600;
               console.log(price);
             default:
               console.log("error"); 
           }
           // Type of crust switch case statement
              switch(pcrust){
      case "0":
        crust_price = 0;
      break;
      case "Crispy":
        crust_price = 200;
      break;
      case "Stuffed":
        crust_price = 250;
      break;
      case "Gluten-free":
        crust_price = 180;
      break;
      default:
        console.log("No price"); 
    }
    let topping_value = ptopping.length*50;
    console.log("toppins value" + topping_value);
    
    // Form validation
    if((psize == "0") && (pcrust == "0")){
        console.log("nothing selected");
        $("button.proceed").show();
        $("#information").show();
        $("div.choise").hide();
        alert("Please select pizza size and crust"); 
      }
      else{
        $("button.proceed").hide();
        $("#information").hide();
        $("div.choise").slideDown(1000);
      }
      
    //   Total charge
    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(ptopping.join(", "));
    $("#totals").html(total);
    // Add pizza button
    $("button.addPizza").click(function(){
        let pname = $(".name option:selected").val();
        let psize = $("#size option:selected").val();
        let pcrust = $("#crust option:selected").val();
        let ptopping = [];
        $.each($("input[name='toppings']:checked"), function(){            
            ptopping.push($(this).val());
        });
        console.log(ptopping.join(", "));
        switch(psize){
          case "0":
            price =0;
          break;
          case "large":
             price = 1200;
             console.log(price);
           break;
           case "medium":
             price = 850;
             console.log("The price is "+price);
           break;
           case "small":
             price = 600;
             console.log(price);
           default:
             console.log("error"); 
         }
         switch(pcrust){
            case "0":
              crust_price = 0;
            break;
            case "Crispy":
              crust_price = 200;
            break;
            case "Stuffed":
              crust_price = 150;
            break;
            case "Gluten-free":
              crust_price = 180;
            break;
            default:
              console.log("No price"); 
          }
          let topping_value = ptopping.length*50;
        console.log("toppins value" + topping_value);
        total = price + crust_price + topping_value;
        console.log(total);

        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);
      // constractor function
      var newOrder = new Getpizza(pname, psize, pcrust,ptopping,total);

      $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
      console.log(newOrder);
})