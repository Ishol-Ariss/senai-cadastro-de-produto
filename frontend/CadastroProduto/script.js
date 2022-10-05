/*
function post(url, body, header) {
        fetch(url, 
        {
            method: "POST",
            headers: header,
            body: JSON.stringify(body),
        }
    )
    .then((response) => response.json())
    .then((body) => console.log(`Sucesso ${body}`))
    .catch((err) => console.log(`Erro de solicitação ${err}`));
}

function createProduct() {
  let url = "http://localhost:3333/product";
  let productName = document.getElementById("product").value;
  let stock = document.getElementById("stock").value;
  let amount = document.getElementById("amount").value;

  const body = {
    "productName": productName,
    "stock": stock,
    "amount": amount,
  };
  const header = {
    "Content-Type": "application/json",
  };
  
  post(url, body, header);
}
*/

function post(url,body,header){
    fetch(url,
        {
            method: "POST",
            headers: header,//{"Content-type": "application/json;charset=UTF-8"}
            body: JSON.stringify(body),
        }
    )
    // Tratamento do sucesso
    .then((response) => response.json())  // converter para json
    .then((body) => console.log("Success:", body))//imprimir dados no console
    .catch((err) => console.log('Erro de solicitação', err));
}

function createProduct(){
    const url = "http://localhost:3333/product"
    const productName = document.getElementById("product").value
    const stock = document.getElementById("stock").value
    const amount = document.getElementById("amount").value

    if(productName == "" || stock == "" || amount == ""){
        alert("Preencha os campos!")
    }else{
        const body = {
            "productName" : productName,
            "stock" : stock,
            "amount" : amount
        }
        const header = {
            "Content-Type": "application/json"
        }
        post(url,body,header)
    }
   
}