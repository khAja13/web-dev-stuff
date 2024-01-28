"use strict"

let date1 = new Date(); // now
let input = document.getElementById("cardexpiry");
input.valueAsDate = new Date(Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate()));
console.log(date1)

function change(){
    document.getElementById("div1").style.display="block"
    console.log("rehan")
    
}

let isCredit = ""
let isUPI = ""
let isAccount = ""
function form1(){
    document.getElementById("form1").style.display = "block"
    document.getElementById("form2").style.display = "none"
    document.getElementById("form3").style.display = "none"
    isCredit = true
    isUPI = false
    isAccount = false   
    document.getElementById("list").style.display="block"                
}

function form2(){
    document.getElementById("form1").style.display = "none"
    document.getElementById("form2").style.display = "block"
    document.getElementById("form3").style.display = "none"
    isCredit = false
    isUPI = true
    isAccount = false
    document.getElementById("list").style.display="block"
}

function form3(){
    document.getElementById("form1").style.display = "none"
    document.getElementById("form2").style.display = "none"
    document.getElementById("form3").style.display = "block"
    isCredit = false
    isUPI = false
    isAccount = true
    document.getElementById("list").style.display="block"
}

console.log(localStorage['total']);
document.getElementById('priceHeading').innerHTML = `Total price: ${localStorage['total']}`

let cv = ""
function checkAllField(event){
    cv = (Math.floor(Math.random()*8)+1) + "" + (Math.floor(Math.random()*8)+1) + "" + (Math.floor(Math.random()*8)+1)    
    let isSuccess = false

    if(isCredit){
        document.getElementById("card-error").classList.remove("card_success")
        if(document.getElementById("cardnumber").value.length != 16 || !document.getElementById("cardnumber").value.match(/^[0-9]+$/)){
            document.getElementById("card-error").innerHTML = "Card Number must contain 16 numberic equal number"
            
        }else if(document.getElementById("cardname").value == "" || !document.getElementById("cardname").value.match(/^[A-Za-z]+$/)){
            document.getElementById("card-error").innerHTML = "Card Name must contain letters and must not be blank!"

        }else if(document.getElementById("cardtype").value == "Choose"){
            document.getElementById("card-error").innerHTML = "Select card type"
        } else{
            
            document.getElementById("card-error").innerHTML = "Successfully Validate, Your CVV is " + cv
            document.getElementById("card-error").classList.add("card_success")
            isSuccess = true
        }
    }
    
    if(isUPI){
        document.getElementById("upi-error").classList.remove("card_success")
        let arr = [8254637019, 9043681072, 7531208496, 6079356418, 2897503461, 4563872109, 3974610825, 7382965041, 2540187693,  9682735041]
        if(!arr.includes(Number(document.getElementById("upinumber").value))){
            document.getElementById("upi-error").innerHTML = "Please fill the correnct number"
        }else if(document.getElementById("upiname") == "" || !document.getElementById("upiname").value.match(/^[A-Za-z ]+$/)){
            document.getElementById("upi-error").innerHTML = "Please fill the correct Name"
        }else{
            document.getElementById("upi-error").innerHTML = "Successfully Validate, Your CVV is " + cv
            document.getElementById("upi-error").classList.add("card_success")
            isSuccess = true
        }
    }
    
    if(isAccount){
        document.getElementById("account-error").classList.remove("card_success")
        if(!document.getElementById("accountname").value  || !document.getElementById("accountname").value.match(/^[A-Za-z ]+$/)){
            document.getElementById("account-error").innerHTML = "Please fill the correnct Name"
            
        }else if(!document.getElementById("accountnumber").value  || document.getElementById("accountnumber").value.length != 16 || !document.getElementById("accountnumber").value.match(/^[0-9]+$/)){
            document.getElementById("account-error").innerHTML = "Please fill the correnct Account Number"
            
        }else if(document.getElementById("reaccountnumber").value != document.getElementById("accountnumber").value){
            document.getElementById("account-error").innerHTML = "Please reenter the correct Account Number"
            
        }else if(!document.getElementById("IFSC").value  || !document.getElementById("IFSC").value.match(/^[A-Za-z0-9]+$/)){
            document.getElementById("account-error").innerHTML = "Please enter the correct IFSC"
        }else if(!document.getElementById("branchName").value  || !document.getElementById("branchName").value.match(/^[A-Za-z ]+$/)){
            document.getElementById("account-error").innerHTML = "Please enter the correct Branch Name"
        }else{
            document.getElementById("account-error").innerHTML = "Successfully Validate, Your CVV is " + cv
            document.getElementById("account-error").classList.add("card_success")
            isSuccess = true
        }
    } 
    event.preventDefault()
    if(isSuccess){
        return isSuccess
    }
}
let count = 0
function checkCV(event){
    if(isCredit){
        let cvNumber = document.getElementById("cv").value
        if(cvNumber != cv){
            document.getElementById("card-error").innerHTML = "CV Number must be match"
            document.getElementById("card-error").classList.remove("card_success")
        }else if(checkAllField(event)){

            createData("cardname", "Credit", count);
            
            let arr = Array.from(document.querySelectorAll(".form1"))
            document.querySelector("div").innerHTML += `<div class="all count${count}" style="display: none;">
                                                            Card Number : ${arr[0].value} <br>
                                                            Name : ${arr[1].value} <br>
                                                            Selected Card Type : ${arr[3].value} <br>
                                                            Card Expiry : ${arr[2].value} <br>
                                                            Payment Type : ${document.getElementById("Credit").innerHTML} 
                                                        </div>`

            count++
            document.getElementById("card-error").innerHTML = "Your card has been saved after CVV validation"
            document.getElementById("form1").firstElementChild.reset()
        }
    }
    if(isUPI){
        let cvNumber = document.getElementById("cv2").value
        if(cvNumber != cv){
            document.getElementById("upi-error").innerHTML = "Please fill the correct cv number"
            document.getElementById("upi-error").classList.remove("card_success")
        }else if(checkAllField(event)){
            createData("upiname", "UPI", count);
            
            let arr = Array.from(document.querySelectorAll(".form2"))
            document.querySelector("div").innerHTML += `<div class="all count${count}" style="display: none;">
                                                            UPI Number : ${arr[0].value} <br>
                                                            Name : ${arr[1].value} <br>
                                                            Payment Type : ${document.getElementById("UPI").innerHTML} 
                                                        </div>`
            count++
            document.getElementById("upi-error").innerHTML = "Your payment has made successfully"     
            document.getElementById("form2").firstElementChild.reset()
        }
    }

    if(isAccount){
        let cvNumber = document.getElementById("cv3").value
        if(cvNumber != cv){
            document.getElementById("account-error").innerHTML = "Please fill the correct cv number"
            document.getElementById("account-error").classList.remove("card_success")
        }else if(checkAllField(event)){

            createData("accountname", "account", count);
            
            let arr = Array.from(document.querySelectorAll(".form3"))
            document.querySelector("div").innerHTML += `<div class="all count${count}" style="display: none;">
                                                            Name : ${arr[0].value} <br>
                                                            Account Number : ${arr[1].value} <br>
                                                            IFSC : ${arr[3].value} <br>
                                                            Branch Name : ${arr[4].value} <br>
                                                            Payment Type : ${document.getElementById("account").innerHTML} 
                                                        </div>`
            count++
            document.getElementById("account-error").innerHTML = "Your payment has made successfully"
            document.getElementById("form3").firstElementChild.reset()
        }    
    } 
    event.preventDefault()
    let date1 = new Date(); // now
    let input = document.getElementById("cardexpiry");
    input.valueAsDate = new Date(Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate()));
    console.log(date1)   
}

function rem(it){  
    let className =it.parentElement.previousElementSibling.firstElementChild.getAttribute("id")
    document.getElementsByClassName(className)[0].remove()
    it.parentElement.parentElement.remove()
}


function detail(it){ 
    let arr = Array.from(document.getElementsByClassName("all"))
    for(let el of arr){
        el.style.display = "none"
    }
    let className =  it.getAttribute("id")
    document.getElementsByClassName(className)[0].style.display = "Block";
}

function createData(name, method, sum){
    document.getElementById("list").style.display = "block"
    let row = document.createElement("tr")
    let td1 = document.createElement("td")
    td1.innerHTML = document.getElementById(name).value 
    row.append(td1)
    let td2 = document.createElement("td")
    td2.innerHTML = document.getElementById(method).innerHTML
    row.append(td2)
    row.innerHTML += `<td><button onclick="detail(this)" id="count${sum}" class="btn btn-sm btn-secondary">Full Detail</button class="btn btn-secondary">
    </td>`
    row.innerHTML += `<td><button onclick="rem(this)" class="btn btn-sm btn-secondary">Remove</button class="btn btn-secondary"></td>`
    document.getElementById("table").append(row)
}









