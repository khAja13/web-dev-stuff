var imageURL = '';

var Product = {     
        file : '',
        name : '',
        description : '',
        price : 0
  
}

products = {};

productCount = 0
function CreateProduct(even){
    
    document.querySelector(".main2").innerHTML += `<div style="display: inline-block; margin: 1%;">
                                                      <img src=${imageURL} class=${productCount}" style="height:250px;width:200px;object-fit:cover" /> <br>
                                                      <span class="box2"><label for="html">Name: </label></span> <span class="${productCount}">${document.querySelector('#productName').value}</span> <br>
                                                
                                                      <span class="box2"><label for="html">Description:</label></span> <span class="${productCount}">${document.querySelector('#productdescription').value}</span> <br>
                                                
                                                      <span class="box2"><label for="html">Price:</label></span> <span class="${productCount}">${document.querySelector('#productprice').value}</span> <br>
                                                
                                                      <button id="${productCount}" class="btn btn-primary my-3" onclick="AddProduct(this, event)">Add Product</button>
                                                    </div>`

                                                    productCount++

      even.preventDefault()
      document.getElementById("form").reset()

}
let cart_total = 0
let sum = 0
function AddProduct(it, even){
  if(!(it.getAttribute("id") in products)){
    let key = it.getAttribute("id")
    let product  = Array.from(document.getElementsByClassName(it.getAttribute("id")))
    products[key] = {
        file : it.parentElement.firstElementChild.src,
        name : product[0].innerHTML,
        description : product[1].innerHTML,
        price : product[2].innerHTML
    }  
    let list = document.querySelector("table");
    list.innerHTML += `<tr>
                        <td>${products[key].name}</td>
                        <td>${products[key].price}</td>
                        <td><input oninput="changePrice(this)" type="number"></td>
                        <td class="total">${products[key].price}</td>
                      </tr> `
    cart_total += Number(products[key].price)     
    document.getElementById("cart-total").innerHTML = "Cart Total : " + cart_total
    sum += cart_total
    document.getElementById("big-cart-total").innerHTML = "Cart Total : " + sum
  }else{
    alert("Product is already present in your cart")
  }

  
}

function changePrice(it){
  sum = 0
  it.parentElement.nextElementSibling.innerHTML = Number(it.value)*(it.parentElement.previousElementSibling.innerHTML)
  let arr = Array.from(document.querySelectorAll(".total"))
  for(let num of arr){
    sum += Number(num.innerHTML)

  }
  document.getElementById("big-cart-total").innerHTML = "Cart Total : " + sum 
  
}

function setImage(e){
  console.log(e.target.files[0]);
  imageURL = URL.createObjectURL(e.target.files[0]);
  console.log(imageURL);
}s