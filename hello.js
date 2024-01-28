var ch = 0;

let grandtotal;
let Delegates = {};
let value, checkboxText;
const delegate = [];

$(document).ready(function () {
  $("#submit").click(function () {
    let allProduct = [];
    var noofdelegates =
      document.getElementById("delegate").value; /*Number Of Delegates*/
    for (let i = 1; i <= noofdelegates; i++) {
      $(`input[name="productandfees${i}"]:checked`).each(function () {
        debugger;
        value = Number($(this).val());
        checkboxText = $(`label[for="${value}"]`).text();
        allProduct.push(checkboxText);
        // allProduct.join(", ");
      });

      Delegates.salutation = document.getElementById("salute" + i).value;
      Delegates.delegatefirstname = document.getElementById("dfname" + i).value;
      Delegates.delegatelastname = document.getElementById("dlname" + i).value;
      Delegates.delegateEmail = document.getElementById("demail" + i).value;
      Delegates.delegatetelephone = document.getElementById(
        "dtelephone" + i
      ).value;
      Delegates.delegatejobtitle = document.getElementById("djob" + i).value;
      Delegates.delegatepassportnumber = document.getElementById(
        "dpass" + i
      ).value;
      Delegates.products = allProduct.join(", ");
      delegate.push(Delegates);
      console.log(Delegates);
      allProduct = [];
    }
  });
});

// $(document).ready(function () {
//   let value, checkboxText;
//   let allProduct = [];
//   let add = 0;
//   $("#submit").click(function () {
//     $('input[name="productandfees"]:checked').each(function () {
//       value = Number($(this).val());
//       checkboxText = $(`label[for="${value}"]`).text();
//       allProduct.push(checkboxText);
//     });
//     console.log(allProduct.join(", "));
//   });
// });

// function myFunction(res) {
//   if (document.getElementById(res).checked == true) {
//     ch = ch + parseInt(document.getElementById(res).value);
//   } else if (document.getElementById(res).checked == false) {
//     ch = ch - parseInt(document.getElementById(res).value);
//   } else {
//     ch = 0;
//   }
//   document.getElementById("total").innerHTML = ch;
//   grandtotal = ch;
//   console.log(grandtotal);
// }

/* Mapping */
// function datacollect() {
//   const companyname = document.getElementById("company").value;
//   const street = document.getElementById("comstr").value;
//   const towncity = document.getElementById("town").value;
//   const country = document.getElementById("country").value;
//   const zipcode = document.getElementById("zip").value;
//   const state = document.getElementById("state").value;
//   const vatnumber = document.getElementById("vatnum").value;

//   console.log(companyname);
//   /*Company Info Object*/
//   const CompanyInfoes = {};
//   CompanyInfoes.companyname = companyname;
//   CompanyInfoes.street = street;
//   CompanyInfoes.towncity = towncity;
//   CompanyInfoes.country = country;
//   CompanyInfoes.zipcode = zipcode;
//   CompanyInfoes.state = state;
//   CompanyInfoes.vatnumber = vatnumber;
//   console.log(CompanyInfoes);

//   /* Billing Contact */
//   const blsalutation = document.getElementById("salute").value;
//   const blfirstname = document.getElementById("Cfname").value;
//   const bllastname = document.getElementById("clname").value;
//   const blemail = document.getElementById("cemail").value;
//   const bltelephone = document.getElementById("ctelephone").value;
//   /*Billing Contact Info Object*/
//   const BillingContactInfoes = {};
//   BillingContactInfoes.salutation = blsalutation;
//   BillingContactInfoes.firstname = blfirstname;
//   BillingContactInfoes.lastname = bllastname;
//   BillingContactInfoes.email = blemail;
//   BillingContactInfoes.telephone = blsalutation;
//   console.log(BillingContactInfoes);
//   /* Delegates */
//   var a = document.getElementById("delegate").value; /*Number Of Delegates*/
//   const delegate = [];
//   let value, checkboxText;
//   let allProduct = [];
//   for (let i = 1; i <= a; i++) {
//     const Delegates = {};
//     Delegates.salutation = document.getElementById("salute" + i).value;
//     Delegates.delegatefirstname = document.getElementById("dfname" + i).value;
//     Delegates.delegatelastname = document.getElementById("dlname" + i).value;
//     Delegates.delegateEmail = document.getElementById("demail" + i).value;
//     Delegates.delegatetelephone = document.getElementById(
//       "dtelephone" + i
//     ).value;
//     Delegates.delegatejobtitle = document.getElementById("djob" + i).value;
//     Delegates.delegatepassportnumber = document.getElementById(
//       "dpass" + i
//     ).value;
//     delegate.push(Delegates);
//   }
//   console.log(delegate);
//   let createdatdate = new Date();
//   createdatdate =
//     +createdatdate.getMonth() +
//     1 +
//     "/" +
//     createdatdate.getDate() +
//     "/" +
//     createdatdate.getFullYear();
//   console.log(createdatdate);
// }

function buttondelchange() {
  var x = document.getElementById("Container1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function radiochange() {
  var x = document.getElementById("Container3");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
}

function radiochangeno() {
  var x = document.getElementById("Container3");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
}

// function displaytotal() {
//   var x = document.getElementById("Container");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

function repeat() {
  var a = document.getElementById("delegate").value; /*Number Of Delegates*/
  console.log(a);
  document.getElementById("Repeat").innerHTML = ``;
  for (let i = 1; i <= a; i++) {
    document.getElementById(
      "Repeat"
    ).innerHTML += `<h2>DELEGATE - REGISTRATION DETAILS - ${i}</h2>
            <h3 style="font-size: 20px;">Please enter the details of the delegate that you wish to register</h3>
                <div class="fields">

                    <div class="input-field">
                        <label class="DSalutation" for="Salutations${i}">Salutation</label>
                        <select name="salute${i}" id="salute${i}" value="">
                        <option value="select">Please Select...</option>
                            <option value="Mr">Mr</option>
                            <option value="Dr">Dr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Er">Er</option>
                        </select>
                    </div>

                <div class="input-field">
                        <label for="dfname${i}">Delegate First name:</label>
                        <input type="text" id="dfname${i}" value="" name="dfname${i}" placeholder="Delegate First Name" required>
                </div>

                <div class="input-field">
                    <label for="dlname${i}">Delegate Last name:</label>
                    <input type="text" id="dlname${i}" name="dlname${i}" placeholder="Delegate Last Name" required>
                </div>

                <div class="input-field">
                    <label for="demail${i}">Delegate Email:</label>
                    <input type="email" id="demail${i}" name="demail${i}" placeholder="Enter Email" required>
                </div>

                <div class="input-field">
                    <label for="dtelephone${i}">Delegate Telephone:</label>
                    <input type="Number" id="dtelephone${i}" name="dtelephone${i}" placeholder="Enter Telephone number" required>
                </div>

                <div class="input-field">
                    <label for="djob${i}">Delegate Job Title:</label>
                    <input type="text" id="djob${i}" name="djob${i}" placeholder="Enter Job Title" required>
                </div>

                <div class="input-field">
                    <label for="dpass${i}">Delegate Passport Number :</label>
                    <input type="text" id="dpass${i}" name="dpass${i}" placeholder="Enter your Passport Number" required>
                </div>
                </div>
            <div class="product">
                <h2>PRODUCT AND FEES</h2>
                <table style="width:100%">
        <tr>
            <td>
                <input name="productandfees${i}" type="checkbox" value="5900">
                <label for="5900">All Access (Delegate)</label>
            </td>
            <td>
                USD 5900
            </td>
        </tr>
        <tr>
            <td>
                <input name="productandfees${i}" type="checkbox" value="5100">
                <label for="5100">Strategic Conference (Delegate)</label>
            </td>
            <td>
                USD 5100
            </td>
        </tr>
        <tr>
            <td>
                <input name="productandfees${i}" type="checkbox" value="1858">
                <label for="1858">Technical Conference Pass - 4 days (Delegate)</label>
            </td>
            <td>
                USD 1858
            </td>
        </tr>
        <tr>
            <td>
                <input name="productandfees${i}" type="checkbox" value="1485" placeholder="">
                <label for="1485">Technical Conference Pass - 2 days (Delegate)</label>
            </td>
            <td>
                USD 1485
            </td>
        </tr>
        <tr>
            <td>
                <input name="productandfees${i}" type="checkbox" value="1100">
                <label for="1100">Downstream Technical Conference Pass (Delegate)</label>
            </td>
            <td>
                USD 1100
            </td>
        </tr>
    </table>`;
  }
}
