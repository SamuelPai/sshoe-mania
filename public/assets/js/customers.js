let customer_form = document.getElementById("customer_form");
let customer_name = document.getElementById("userName");
let customer_email = document.getElementById("userEmail");
let customer_phone = document.getElementById("userPhone");

customer_form.addEventListener("submit", e => {
    e.preventDefault();
    let name = customer_name.value;
    let email = customer_email.value;
    let phone = customer_phone.value;

    let data = {
        name,
        email,
        phone
    }
    
    fetch("/api/customer", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => {
        console.log(response);
        customer_form.reset();
    })

    
})