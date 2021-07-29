function getTotal(){
let num1= parseInt(document.getElementById("size").value)
alert(num1)
let num2= parseInt(document.getElementById("crust").value)
alert(num2)
let num3= parseInt(document.getElementById("amount").value )
alert(num3)
let total= parseInt(((num1+num2)*num3))
alert(total)
let topping = document.getElementById("toppings").value
if (num1===500 && num2===150) {
    alert("You have placed an order of" + " " + num3 +" "+ "small" + " "+"crispy" +" "+"crust"+ " "+ topping+ " "+"pizza")
    
} else if(num1===500 && num2===250) {
    alert("You have placed an order of" + " " + num3 +" "+ "small" + " "+"stuffed" +" "+"crust"+ " "+topping+ " "+"pizza")
}
else if(num1===500 && num2===200) {
    alert("You have placed an order of" + " " + num3 +" "+ "small" + " "+"gluten-free" +" "+"crust"+ " "+topping+ " "+"pizza")
}
else if(num1===900 && num2===150) {
    alert("You have placed an order of" + " " + num3 +" "+ "medium" + " "+"crispy" +" "+"crust"+ " "+topping+ " "+"pizza")
}
else if(num1===900 && num2===250) {
    alert("You have placed an order of" + " " + num3 +" "+ "medium" + " "+"stuffed" +" "+"crust"+ " "+topping+ " "+"pizza")
}
else if(num1===900 && num2===200) {
    alert("You have placed an order of" + " " + num3 +" "+ "medium" + " "+"gluten-free" +" "+"crust"+ " "+topping+ " "+"pizza")
}
else if(num1===1200 && num2===150) {
    alert("You have placed an order of" + " " + num3 +" "+ "large" + " "+"crispy" +" "+"crust"+ " "+topping+ " "+"pizza")
}
else if(num1===1200 && num2===250) {
    alert("You have placed an order of" + " " + num3 +" "+ "large" + " "+"stuffed" +" "+"crust"+ " "+topping+ " "+"pizza")
}
else if(num1===1200 && num2===200) {
    alert("You have placed an order of" + " " + num3 +" "+ "large" + " "+"gluten-free" +" "+"crust"+ " "+topping+ " "+"pizza")
}

}