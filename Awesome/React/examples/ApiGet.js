function UserAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "Your Rest URL Here", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
}

var xhr = new XMLHttpRequest();
xhr.open("GET", "https...", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);

var xhr = new XMLHttpRequest();
xhr.open("GET", "https...", false);

xhr.send();
console.log(xhr.status);
console.log(xhr.statusText);

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/files/samples/javascript_learn_apis.xml", false);

xhr.setRequestHeader('Content-Type', 'text/xml');
xhr.send();

xmlDocument = xhr.responseXML;
console.log(xmlDocument.childNodes['0'].textContent);

var demo = '{"pets": { "name": "Jeffrey", "species": "Giraffe"}}';

var json = JSON.parse(demo);
console.log(json);

https://github.com/jpillora/jquery.rest