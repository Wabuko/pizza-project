alert(123);
function getTotal() {
    let num1 = parseInt(document.getElementById("size").value)
    document.getElementById('sizea').innerHTML = num1
    alert(num1)
    let num2 = parseInt(document.getElementById("crust").value)
    document.getElementById('crusta').innerHTML = num2
    alert(num2)
    let num3 = parseInt(document.getElementById("amount").value)
    alert(num3)
    let num4 = parseInt(document.getElementById("toppings").value)
    alert(num4)
    document.getElementById('toppinga').innerHTML = num4
    let topping = document.getElementById("toppings").value
    let total = parseInt(((num1 + num2 + num4) * num3))
    document.getElementById("totala").innerHTML = total
    alert(total)
    if (num1 === 500 && num2 === 150 && num4 == 100) {
        alert("You have placed an order of" + " " + num3 + " " + "small" + " " + "crispy" + " " + "crust" + " " + "pepperoni" + " " + "pizza")

    } else if (num1 === 500 && num2 === 150 && num4 == 150) {
        alert("You have placed an order of" + " " + num3 + " " + "small" + " " + "crispy" + " " + "crust" + " " + "mushroom" + " " + "pizza")
    }
    else if (num1 === 500 && num2 === 150 && num4 == 200) {
        alert("You have placed an order of" + " " + num3 + " " + "small" + " " + "crispy" + " " + "crust" + " " + "sausage" + " " + "pizza")
    }
    else if (num1 === 500 && num2 === 250 && num4 == 100) {
        alert("You have placed an order of" + " " + num3 + " " + "small" + " " + "stuffed" + " " + "crust" + " " + "pepperoni" + " " + "pizza")
    }
    else if (num1 === 500 && num2 === 250 && num4 == 150) {
        alert("You have placed an order of" + " " + num3 + " " + "small" + " " + "stuffed" + " " + "crust" + " " + "mushrooms" + " " + "pizza")
    }
    else if (num1 === 500 && num2 === 250 && num4 == 200) {
        alert("You have placed an order of" + " " + num3 + " " + "small" + " " + "stuffed" + " " + "crust" + " " + "sausage" + " " + "pizza")
    }
    else if (num1 === 500 && num2 === 200 && num4 == 100) {
        alert("You have placed an order of" + " " + num3 + " " + "small" + " " + "gluten-free" + " " + "crust" + " " + "pepperoni" + " " + "pizza")
    }
    else if (num1 === 500 && num2 === 200 && num4 == 150) {
        alert("You have placed an order of" + " " + num3 + " " + "small" + " " + "gluten-free" + " " + "crust" + " " + "mushrooms" + " " + "pizza")
    }
    else if (num1 === 500 && num2 === 200 && num4 == 200) {
        alert("You have placed an order of" + " " + num3 + " " + "small" + " " + "gluten-free" + " " + "crust" + " " + "sausage" + " " + "pizza")
    }
    else if (num1 === 900 && num2 === 150 && num4 == 150) {
        alert("You have placed an order of" + " " + num3 + " " + "medium" + " " + "crispy" + " " + "crust" + " " + "mushroom" + " " + "pizza")
    }
    else if (num1 === 900 && num2 === 150 && num4 == 200) {
        alert("You have placed an order of" + " " + num3 + " " + "medium" + " " + "crispy" + " " + "crust" + " " + "sausage" + " " + "pizza")
    }
    else if (num1 === 900 && num2 === 250 && num4 == 100) {
        alert("You have placed an order of" + " " + num3 + " " + "medium" + " " + "stuffed" + " " + "crust" + " " + "pepperoni" + " " + "pizza")
    }
    else if (num1 === 900 && num2 === 250 && num4 == 150) {
        alert("You have placed an order of" + " " + num3 + " " + "medium" + " " + "stuffed" + " " + "crust" + " " + "mushrooms" + " " + "pizza")
    }
    else if (num1 === 900 && num2 === 250 && num4 == 200) {
        alert("You have placed an order of" + " " + num3 + " " + "medium" + " " + "stuffed" + " " + "crust" + " " + "sausage" + " " + "pizza")
    }
    else if (num1 === 900 && num2 === 200 && num4 == 100) {
        alert("You have placed an order of" + " " + num3 + " " + "medium" + " " + "gluten-free" + " " + "crust" + " " + "pepperoni" + " " + "pizza")
    }
    else if (num1 === 900 && num2 === 200 && num4 == 150) {
        alert("You have placed an order of" + " " + num3 + " " + "medium" + " " + "gluten-free" + " " + "crust" + " " + "mushrooms" + " " + "pizza")
    }
    else if (num1 === 900 && num2 === 200 && num4 == 200) {
        alert("You have placed an order of" + " " + num3 + " " + "medium" + " " + "gluten-free" + " " + "crust" + " " + "sausage" + " " + "pizza")
    }
    else if (num1 === 900 && num2 === 150 && num4 == 100) {
        alert("You have placed an order of" + " " + num3 + " " + "medium" + " " + "crispy" + " " + "crust" + " " + "pepperoni" + " " + "pizza")
    }
    else if (num1 === 1200 && num2 === 150 && num4 == 100) {
        alert("You have placed an order of" + " " + num3 + " " + "large" + " " + "crispy" + " " + "crust" + " " + "pepperoni" + " " + "pizza")

    } else if (num1 === 1200 && num2 === 150 && num4 == 150) {
        alert("You have placed an order of" + " " + num3 + " " + "large" + " " + "crispy" + " " + "crust" + " " + "mushroom" + " " + "pizza")
    }
    else if (num1 === 1200 && num2 === 150 && num4 == 200) {
        alert("You have placed an order of" + " " + num3 + " " + "large" + " " + "crispy" + " " + "crust" + " " + "sausage" + " " + "pizza")
    }
    else if (num1 === 1200 && num2 === 250 && num4 == 100) {
        alert("You have placed an order of" + " " + num3 + " " + "large" + " " + "stuffed" + " " + "crust" + " " + "pepperoni" + " " + "pizza")
    }
    else if (num1 === 1200 && num2 === 250 && num4 == 150) {
        alert("You have placed an order of" + " " + num3 + " " + "large" + " " + "stuffed" + " " + "crust" + " " + "mushrooms" + " " + "pizza")
    }
    else if (num1 === 1200 && num2 === 250 && num4 == 200) {
        alert("You have placed an order of" + " " + num3 + " " + "large" + " " + "stuffed" + " " + "crust" + " " + "sausage" + " " + "pizza")
    }
    else if (num1 === 1200 && num2 === 200 && num4 == 100) {
        alert("You have placed an order of" + " " + num3 + " " + "large" + " " + "gluten-free" + " " + "crust" + " " + "pepperoni" + " " + "pizza")
    }
    else if (num1 === 1200 && num2 === 200 && num4 == 150) {
        alert("You have placed an order of" + " " + num3 + " " + "large" + " " + "gluten-free" + " " + "crust" + " " + "mushrooms" + " " + "pizza")
    }
    else if (num1 === 1200 && num2 === 200 && num4 == 200) {
        alert("You have placed an order of" + " " + num3 + " " + "large" + " " + "gluten-free" + " " + "crust" + " " + "sausage" + " " + "pizza")
    }
}
function delivery(){
    let jina = document.getElementById("jina").value
    alert (jina)
    let mahali = document.getElementById("mahali").value
    alert(mahali)
}
function chekout() {
    if (document.getElementById('sizea').innerHTML == 1200) {
        document.getElementById("size-result").innerHTML = 'large'
    }
    if (document.getElementById('sizea').innerHTML == 900) {
        document.getElementById("size-result").innerHTML = 'medium'
    }
    if (document.getElementById('sizea').innerHTML == 500) {
        document.getElementById("size-result").innerHTML = 'small'
    }
    if (document.getElementById("crusta").innerHTML == 150) {
        document.getElementById("crusty").innerHTML = 'crispy'
    }
    if (document.getElementById("crusta").innerHTML == 250) {
        document.getElementById("crusty").innerHTML = 'stuffed'
    }
    if (document.getElementById("crusta").innerHTML == 200) {
        document.getElementById("crusty").innerHTML = 'glutten-free'
    }
    if (document.getElementById('toppinga').innerHTML == 100) {
        document.getElementById('toppingb').innerHTML = 'pepperoni'
    }
    if (document.getElementById('toppinga').innerHTML == 150) {
        document.getElementById('toppingb').innerHTML = 'mushrooms'
    }
    if (document.getElementById('toppinga').innerHTML == 200) {
        document.getElementById('toppingb').innerHTML = 'sausage'
    }
    
}
function delivery(){
   let myLoc= prompt('Please enter your location ')
   let myNam = prompt('Please enter your name ')
   
   
    

}
