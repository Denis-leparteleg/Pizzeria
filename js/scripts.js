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
})