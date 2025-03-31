const apinewslink="https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
fetch(apinewslink)
      .then(response => response.json())
      .then(json => showapi(json))

let div=document.querySelector(".div")

function showapi(json) {
    console.log(json)
    for (let x = 0; x < json.length; x++) {
        const element = json[x];
        console.log(element)
        // console.log(element.brand)
        div.innerHTML+=
        `
        <p>${element.brand}</p>
        <p>${element.description}</p>
        <p>${element.name}</p>
        `
    }
}
