// Random link v.1.0.0


function randomLink(myClassName, printId){

if (myClassName !== undefined&&myClassName != null&&myClassName != ""){

let result = [];
let randomLinkGo = "https://example.com";
 
//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
var randomLinksObject = document.getElementsByClassName(myClassName);
for (let i = 0; i < randomLinksObject.length; i++) {
result.push(randomLinksObject[i].href);
}
//console.table(result);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
randomLinkGo = Math.floor(Math.random() * (result.length - 1));
randomLinkGo = result[randomLinkGo]

//https://developer.mozilla.org/en-US/docs/Web/API/Location/href
//window.location.href = randomLinkGo;

if (document.getElementById(printId) != null){
document.getElementById(printId).innerHTML = `<a class="brand" href="${randomLinkGo}">${randomLinkGo}</a>`;
}
}
}


randomLink('randomLink', 'printRandomLink');
