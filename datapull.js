var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("api.coincap.io/v2/assets", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
$.ajax(settings).done(function(response) {
    console.log(response);
});


const api_url = 'api.coincap.io/v2/assets';

let firstTime = true;

async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();



}

getISS();

setInterval(getISS, 1000);
console.log(response);
