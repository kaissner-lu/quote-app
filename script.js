/*Create a quote app using HTML, CSS and JavaScript.

Use the Quote API to get quotes for your app.

Requirements

The Quote App will display quotes together with the quote author - that's the app 😎

 Display a static default quote and quote author upon start of the app
 Add a button which will get a random quote from the API

 1. API um die Daten zu laden ist vorgegeben, um diese vom backend zu laden 
    brauchen wir 
    eine fetch funktion und eine umwandlung in json-format. 
    Dabei sollte man nicht vergessen, den status des fetchs zu überprüfen. 

 2. wir brauchen einen button, bei dessen Klick -> eventlistener die Daten geladen werden. 

 3. Die Daten sollen dem html element <section> bzw. <p> angeheftet werden 
 
 */

const quote = document.querySelector(".quote");
const authorname = document.querySelector(".authorname");
const button = document.querySelector("button");

button.addEventListener("click", loadquote);

function loadquote() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      console.log(response.status); // 200
      console.log(response.ok); // true
      return response.json();
    })
    .then((data) => {
      console.log(data);
      quote.innerText = data.quote;
      authorname.innerText = data.author;
    });
}

/*

let p = fetch("https://dummy-apis.netlify.app/api/quote");
p2 =p.then((response) => {
  console.log(response.status); // 200
  console.log(response.ok);
  return response.json(); // true
});

p2.then((data) => {
  console.log(data);
});
*/

// wieso zeigt er mir nur die Daten an, wenn es mit einer zweiten variablen geht?
//data.adjective oder data.noun - von nico nicht verstanden...
// wie splitte ich die daten in author und quote - sodass eins der ol/ul und eins dem p angehängt wird?
