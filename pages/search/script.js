// Search v.1.1.1

var lQButtonPrint = ``;

var geturl = location.href;
var url = new URL(geturl);
var q = url.searchParams.get("q");
var q2 = url.searchParams.get("q2");


if (q == null){ q = ""; }
if (q2 == null){ q2 = ""; }

var qPrint = "";

let sUrlText = String(url);
const myArray = sUrlText.split("q=");
sUrlText = myArray[0];

if (q != ''){
document.getElementById("q").value = q;
document.getElementsByTagName('title')[0].innerText = q + " - Search / irvirty - Neocities page";
}

if (q == ''&&q != 'null'){ q = ''; } // ?
if (q2 == "l"){ q = q + " l"; }
//if (q == ""){ q = "q"; }

// web redirect
if (q != ""&&q != undefined&&q != "undefined"&&q != 'null'&&q != null&&q != ''&&sUrlText.indexOf("cache") == -1){

q = q.trim();

var urlList = [];

// for the command at the end of the search query
let qTmpNoPlus = q.replaceAll('%23', '+', ' ');
var strArray = qTmpNoPlus.split(" ");
var qCom = strArray[strArray.length - 1] + "#";
var q3 = q + "#";



switch (qCom) {


case 'l#':  case 'll#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);

urlList = [
"https://www.google.com/search?btnI=1&q=site:*.neocities.org " + q,
//"https://www.google.com/search?btnI=1&q=" + q,
//url = "https://you.com/search?q=!" + q;
//url = "https://duckduckgo.com/?q=! " + q;
];
if (q == ''){
urlList = [
"https://www.google.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;

location.href = sRedirectUrl;
location.href = location.href + '#!StopRedirect'; 
break;


case 'q#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);

urlList = [
"https://www.google.com/search?q=" + q,
"https://www.bing.com/search?q=" + q + "&form=site",
"https://www.ecosia.org/search?q=" + q,
//"?q=" + q + " o",
];
if (q == ''){
urlList = [
"https://www.google.com/",
"https://www.bing.com/",
"https://www.ecosia.org/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;

location.href = sRedirectUrl;
location.href = location.href + '#!StopRedirect'; 
break;

default:

}

}



if (q != ""){
qPrint = encodeURIComponent(q);
}

lQButtonPrint = `

<div class="wrapper tCenter small" style="margin-top: 7px;">
<div class="tagList2 hotLinks">
<!--<span class="tag op">Tag:</span>-->
<a class="tag light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?tag=${qPrint}">Special</a>
<a class="tag light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=random&tag=${qPrint}">Random</a>
<a class="tag light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=most_followed&tag=${qPrint}">Followers</a>
<a class="tag light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=last_updated&tag=${qPrint}">Update</a>
<a class="tag light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=views&tag=${qPrint}">Views</a>
<a class="tag light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=tipping_enabled&tag=${qPrint}">Tipping</a>
<a class="tag light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=newest&tag=${qPrint}">New</a>
<a class="tag light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=oldest&tag=${qPrint}">Old</a>
<a class="tag light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/activity?tag=${qPrint}">Activity</a>
</div>
</div>

`;

document.getElementById("seachButtons").innerHTML = `${lQButtonPrint}`;


if (document.getElementById("q") != null){

const input = document.getElementById("q");
input.addEventListener("input", updateValueButton);

function updateValueButton(e) {

qPrint = e.target.value;
qPrint = qPrint.trim();
//q = q.replaceAll(' ', '');
//document.getElementById("q").value = qPrint.trim();

qPrint = encodeURIComponent(qPrint);

lQButtonPrint = `

<div class="wrapper tCenter small" style="margin-top: 7px;">
<div class="tagList2 hotLinks">
<!--<span class="tag op">Tag:</span>-->
<a class="tag light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?tag=${qPrint}">Special</a>
<a class="tag light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=random&tag=${qPrint}">Random</a>
<a class="tag light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=most_followed&tag=${qPrint}">Followers</a>
<a class="tag light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=last_updated&tag=${qPrint}">Update</a>
<a class="tag light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=views&tag=${qPrint}">Views</a>
<a class="tag light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=tipping_enabled&tag=${qPrint}">Tipping</a>
<a class="tag light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=newest&tag=${qPrint}">New</a>
<a class="tag light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=oldest&tag=${qPrint}">Old</a>
<a class="tag light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/activity?tag=${qPrint}">Activity</a>
</div>
</div>

`;

document.getElementById("seachButtons").innerHTML = `${lQButtonPrint}`;

}

}


// Google search result
if (q != ""&&q2 == ""){

// v.1.1.0

var script = document.createElement('script');
script.type='text/javascript';
script.async = true;
script.charset = 'utf-8';
script.src = 'https://cse.google.com/cse.js?cx=a3a8da84c5ed74909';      
document.getElementsByTagName('head')[0].appendChild(script);

}
// end Google search result

