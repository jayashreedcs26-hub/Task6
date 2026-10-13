var items = [
  console.log("Name: Chips, price: 20"),
  console.log("Name: Chocolate, price: 30"),
  console.log("Name: ColdDrink, price: 40"),
  console.log("Name: Biscuits, price: 15"),
  console.log("Name: Juice, price: 50"),
 ];

 let Name = Number(prompt("Select an item from 1 to 5:"));

let item;
let price;

if (Name === 1){
  item = "Chips";
  price = 20;
}else if (Name === 2){
  item = "Chocolate";
  price = 30;
}else if (Name === 3){
  item = "ColdDrink";
  price = 40;
}else if (Name === 4){
  item = "Biscuits";
  price = 15;
}else if (Name === 5){
  item = "Juice";
  price = 50;
}else{
  console.log("wrong")
}

alert(item);



while(Name > 5 || Name <= 0 || isNaN(Name)){
  alert("Invalid Number! Please enter valid number.");
  Name = Number(prompt("Select an item from 1 to 5:"));
 }


let Money;
 Money = Number(prompt("Enter the amount you have:"));

while(Money <=0 || isNaN(Money) || Money < price){
  alert("Please enter valid amount");
  Money = Number(prompt("Enter the amount you have:"));
}


function change(){
  return Money-price ;
}
alert("Your balance amount is "+ change())


function countdown(){
  for(i=3; i>=1; i--){
  alert(i);
  }
}
countdown();

alert("Here is your purchase");


let msg=confirm("Do you want to make another purchase?");


alert("Refresh the screen. Thank you!");



