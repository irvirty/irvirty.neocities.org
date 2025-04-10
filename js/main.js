// Main.js v.1.3.0

// Settings, config
var conf = [];

conf["confGoogleAnalyticsId"] = "G-RQJTJG7DF9";
conf["confUsername"] = "irvirty"; // only in some places
conf["confWebsiteUrl"] = "irvirty.neocities.org";

// wrapper size for navigation, number in px from your CSS
conf["confWrapperNavWidth"] = 900;
conf["confMenuItemAverageWidth"] = 120;
conf["confMenuItemAverageWidth"] = 70;

conf["confDomainNameInTitleStatus"] = "on"; // on, off
conf["confDomainName"] = String((location.hostname).split('.')[0]);
if (conf["confDomainName"][0] != undefined){
conf["confDomainName"] = conf["confDomainName"][0].toUpperCase() + conf["confDomainName"].slice(1);
} else { conf["confDomainName"] = ''; }
conf["confDomainNameInTitle"] = ' / ' + conf["confDomainName"];


//IndexedDB, DB list for clear (comma)
conf["confDbList"] = "example-todo-db";

conf["confSymbolForSplit"] = "SYMBOLFORSPLIT";
conf["confTagListLimit"] = 38;
conf["confLinkExtList"] = "index.html,.html,index.php,.php";
conf["confIdEmbedScript"] = "footer";

if (fuMComVar == undefined){ var fuMComVar = ""; }

const confData = [
{
"confTitle":"Allow Cookies For Third Parties?",
"confDescription":`- This is necessary to improve the site. (For Ads Services, Statistics).
- Auto: used the time zone or Browser settings.
- Site used Functionality cookies.
- Some services still collect visit information if cookie off.`,
"confName":"confDataCollection",
"confValueDefault":"not selected",
"confValueVariant":["on", "off", "auto", "not selected"],
},
{
"confTitle":"Theme",
"confDescription":`Choosing a theme for the site. More modes and themes: <a class="brand" href="/pages/themes/">/pages/themes/</a>`,
"confName":"confTheme",
"confValueDefault":"auto",
"confValueVariant":["light", "dark", "auto-time", "auto", "auto-t-rand-all", "auto-rand-all"],
},
{
"confTitle":"Start of the day (time)",
"confDescription":"For theme if selected auto time (auto-t) in themes option",
"confName":"confStartDay",
"confValueDefault":"7",
"confValueVariant":["6", "7", "8", "9"],
},
{
"confTitle":"Start of the night (time)",
"confDescription":"For theme if selected auto time (auto-t) in themes option",
"confName":"confStartNight",
"confValueDefault":"19",
"confValueVariant":["18", "19", "20", "21"],
},
{
"confTitle":"Background picture",
"confDescription":"Background picture.",
"confName":"confBg",
"confValueDefault":"on",
"confValueVariant":["on", "off"],
},
{
"confTitle":"Custom background image",
"confDescription":`Custom background image. Setting: <a class="brand" href="/pages/themes/">/pages/themes/</a>`,
"confName":"confBgImg",
"confValueDefault":"",
"confValueVariant":[""],
},
{
"confTitle":"Speed dial",
"confDescription":`Pin, unpin a page for speed dial or your own link. <a class="brand brand" href="/projects/speed-dial-58/">/projects/speed-dial-58/</a>`,
"confName":"confSpeedDialStatus",
"confValueDefault":"on",
"confValueVariant":["on", "off", "random"],
},
{
"confTitle":"Screen Wake Lock",
"confDescription":`Prevent devices from dimming or locking.`,
"confName":"confScreenWakeLock",
"confValueDefault":"off",
"confValueVariant":["on", "off"],
},
/*{
"confTitle":"Allow external fonts?",
"confDescription":`Load external fonts (privacy: may be used for analytics). Auto - based on third-party cookies settings.`,
"confName":"confExternalFonts",
"confValueDefault":"auto",
"confValueVariant":["on", "off", "auto"],
},*/
];

// generate var: conf['confName'];
confData.forEach((val) => {
conf[val.confName] = localStorage.getItem(val.confName);

if (conf[val.confName] == null||conf[val.confName] == undefined){
localStorage.setItem(val.confName, val.confValueDefault);
conf[val.confName] = val.confValueDefault; 
}

});
// generate var: conf['confName'];



// Device 1.0.0
conf["confDevice"] = 'none';
/*if (conf["confDataCollection"] != 'on'){
conf["confDevice"] = '(disabled, privacy)';
} else {}*/
if (navigator.userAgent.search("iPhone|Android|Mobile|Lumia|Phone") != -1){ conf["confDevice"] = 'mobile';  }
if (navigator.userAgent.search("PlayStation|Xbox|TV|Roku|SmartTV|BRAVIA") != -1){ conf["confDevice"] = 'tv';  }
if (conf["confDevice"] == 'none'){ conf["confDevice"] = 'pc'; }




// fu sorting v.1.0.0
function fuMSort(textOrArr, delimiter, mode){
//https://stackoverflow.com/questions/2802341/natural-sort-of-alphanumerical-strings-in-javascript
var collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
//return textOrArr.sort(collator.compare);

if (mode == 'text'){
let result = textOrArr.split(delimiter);
result.sort(collator.compare)
return result.join(delimiter);
}

if (mode == 'arr'){
var collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
return textOrArr.sort(collator.compare);
}

}
//alert(fuMSort(["772", " 3",  "6",  "7", "77"], "", "arr"));

// domain name in titile
if (conf["confDomainNameInTitleStatus"] == 'on'&&String(window.location.pathname) != "/"){
if (document.getElementsByTagName('title')[0] != null){
document.getElementsByTagName('title')[0].innerHTML += conf["confDomainNameInTitle"];
}
}

// css theme fix if save page
if (String(window.location.href).slice(0, 4) != 'http'){
document.getElementById('theme').id = 'themeDisable';
}


// Navigation JS part v.2.0.0

if (conf === undefined){
var conf = [];
// wrapper size for navigation, number in px from your CSS
conf["confWrapperNavWidth"] = 900;
conf["confMenuItemAverageWidth"] = 120;
}

// nav v.2.0.0 in test
// count links
//var countMenuItem = document.querySelectorAll('.countMenuItem');
if (document.getElementById("topNav") != null){
//var countMenuItem = document.querySelectorAll('.countMenuItem');
var countMenuItem = document.getElementById("topNav").querySelectorAll('a');
} else {
var countMenuItem = 2;
}
if (document.getElementsByTagName("nav")[0] != null){

var mNavItemsAverageWidth = conf["confMenuItemAverageWidth"];
// Average item width: 66px
//var mNavItemsCount = (countMenuItem.length / 2);
var mNavItemsCount = ((countMenuItem.length + 3) / 2);
// /2 - dublicate items (links)
var mNavWhenDropdownWidth = (mNavItemsAverageWidth * mNavItemsCount) / 2;
// /2 - for 2 rows links
// auto based on item
var cssMedia = `@media(width <= ${mNavWhenDropdownWidth}px)`;
var cssMedia2 = `@media(width > ${mNavWhenDropdownWidth}px)`;

// if nav (items) more width then wrapper (forece dropdown)
if ((mNavWhenDropdownWidth) >= conf["confWrapperNavWidth"]){
cssMedia = '@media(width >= 1px)';
// cancel
cssMedia2 = `@media(width <= 0px)`; 
}

// embed style
//document.getElementsByTagName("nav")[0].innerHTML += `
document.head.insertAdjacentHTML("beforeend", `

<style>
${cssMedia} {
.navMenu {
display: none;
}
.topNav .dropdownMenuButton { display: inline-block; }
}

/* when dynamic change*/
${cssMedia2} {
.dropdownMenu, .dropdownMenuCotent, .showDropdownMenu {
display: none !important;
}
}
</style>

`);

}

// button
const dropdownButton = document.getElementById("dropdownMenuButton");
let dropdownMenu = document.getElementById("dropdownMenu");
const topNav = document.getElementById("topNav");

function fuMDropdownButton(){
//https://stackoverflow.com/questions/64487640/javascript-show-hide-div-onclick
if (dropdownMenu.style.display === "block"){
dropdownMenu.style.display = "none";
if (dropdownButton != null){
dropdownButton.innerHTML = `☰ Menu`;
}
} else {
dropdownMenu.style.display = "block";
if (dropdownButton != null){
dropdownButton.innerHTML = `☶ Menu`;

//https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
topNav.addEventListener("keydown", fuMDropdownButtonLogKey);
function fuMDropdownButtonLogKey(e) {
//console.log(`${e.code}`);
if (e.code == "Escape"){
dropdownMenu.style.display = "none";
if (dropdownButton != null){
dropdownButton.innerHTML = `☰ Menu`;
}
}

}

}

//https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
//dropdownMenu.classList.toggle("showDropdownMenu");
}
}


// out area click
//https://stackoverflow.com/questions/36695438/detect-click-outside-div-using-javascript
window.addEventListener('click', function(e){
dropdownMenu = document.getElementById("dropdownMenu");
if (topNav.contains(e.target) == true){
// Clicked in box
//https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-links/
if (dropdownMenu.querySelectorAll("a")[0] != undefined){
dropdownMenu.querySelectorAll("a")[0].tabIndex = 0;
dropdownMenu.querySelectorAll("a")[0].focus();
}
} else {
dropdownMenu.style.display = "none";
//dropdownMenu.classList.remove("showDropdownMenu");
if (dropdownButton != null){
dropdownButton.innerHTML = `☰ Menu`;
}
}
});

// end Navigation JS version


// footer

fuMInsertHtml("#footer", 'beforeend', `

<div class="margin2 padding2"></div>
<div class="margin2 padding2"></div>

<div id="cookiePopup"></div>

<nav>
<div class="margin2List small tCenter">

<div class="wrapper2">
<div class="small tLeft">
<span class="gray">nav:</span> <span id="footerNav"></span><hr>
</div>
</div>

<div>
<!--<a class="brand" href="#goBack" onclick="history.back()">Go Back</a>-->
<span class="capitalize brand" title="Theme settings"><a id="fTheme" class="inlineBlock padding brand" href="/pages/themes/">Themes</a></span>
<span id="fEmbedFileUrl"></span>
<span id="fPinButton"></span>
</div>

<a class="brand inlineBlock padding" style="padding-left: 0;" title="Pages" href="/pages/">Pages</a>
<a class="brand inlineBlock padding" title="About" href="/pages/about/">About</a>
<a class="brand inlineBlock padding" title="RSS News" href="/rss.xml">RSS</a>
<a class="brand inlineBlock padding" title="Social Network" href="https://bsky.app/profile/${conf["confUsername"]}.bsky.social">Bluesky</a>
<!--<a class="brand inlineBlock padding" title="RSS News (Site update)" href="https://neocities.org/site/${conf["confUsername"]}.rss">RSS</a>-->
<a class="brand inlineBlock padding" title="Another home page" href="https://irvirty.pages.dev/">Other Home</a>
<a id="fSettings" class="brand inlineBlock padding2" title="Settings" href="/pages/settings/">Settings</a>
<a id="fPrivacy" class="brand inlineBlock padding" title="Cookie Settings" href="/pages/settings/#confDataCollection">Cookie: ${conf["confDataCollection"]}</a>
<a class="brand inlineBlock padding" title="Source code (repository)" href="https://github.com/${conf["confUsername"]}/${conf["confWebsiteUrl"]}">Source Code</a>
<span class="gray">License:</span>
<a class="brand inlineBlock padding" rel="license" title="Main license" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a><a class="brand inlineBlock padding" title="Other license" href="/pages/about/#license"><sup>*</sup></a>
<span class="op inlineBlock padding gray"><!--2024-->2025</span>
<br>
<span class="gray">Hosting:</span> <a class="brand inlineBlock padding" style="padding-right: 0;" title="Hosting Service" href="https://neocities.org/">Neocities</a>

</div>
</nav>

`);

 let mFooterNavLinksPrint = `<a class="brand" href="/" title="Home page">home</a> `;
 let mFooterNavLinksUrl = "";
 let mFooterNavLinks = location.href; 
//https://stackoverflow.com/questions/2540969/remove-querystring-from-url
mFooterNavLinks = mFooterNavLinks.split(/[?#]/)[0];
mFooterNavLinks = mFooterNavLinks.split('//');
mFooterNavLinks = mFooterNavLinks[1].split('/');

mFooterNavLinks.forEach((mFooterNavLinksItem, mFooterNavLinksIndex) => {
mFooterNavLinks[0] = "";
if (mFooterNavLinks[mFooterNavLinksIndex] != ""){
mFooterNavLinksUrl += `/` + mFooterNavLinks[mFooterNavLinksIndex];

mFooterNavLinksPrint += ` <span class="gray">/</span> <a class="brand" href="${mFooterNavLinksUrl}">${mFooterNavLinks[mFooterNavLinksIndex]}</a>`;
}
});

fuMInsertHtml("#footerNav", '', mFooterNavLinksPrint);
if(fuMComVar.indexOf('footer off') != -1){ document.getElementById("footer").innerHTML = ""; }
// end footer




function fuMReload(){ location.reload(true); }


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function fuMRandom(min, max){
//return Math.round(Math.random() * (max - min) + min);
const minCeiled = Math.ceil(min);
const maxFloored = Math.floor(max);
return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function fuMRandomItem(text) {
let randomItemsArrList = [];
let delimiter = ["|", ",", " ", "\r\n", "\r", "\n"];
let items = ""
delimiter.forEach((val) => {
text = String(text.replaceAll(val, "SYMBOLFORSPLIT"));
});

text = text.split("SYMBOLFORSPLIT");
let text2 = "";
text.forEach((val) => {
if (val.trim != ''&&val != undefined&&val != null){
randomItemsArrList.push(val);
}
});

return randomItemsArrList[fuMRandom(0, Number(randomItemsArrList.length - 1))];
}
//console.table(fuMRandomItem(",,,,1 2      ,,,"));

// Hide page extenstion v.1.0.0
// for fix PWA 404 page if no ext
function fuMHideFileNameExt(url){
var newUrl = url;
if (conf["confHideLinkExt"] == "on"){
if (newUrl != null&&newUrl != undefined){
if (url[0] == "/"||url[0] == "."/*||String(newUrl).indexOf(location.hostname) != -1*/){
if (String(newUrl).indexOf("=http") == -1){
var arr = (conf["confLinkExtList"]).split(',');
arr.forEach((element) => {
newUrl = String(newUrl).replaceAll(element, '');
});
return newUrl;
}
} else { return url; }
} else { return url; }
} else { return url; }
}
// fu hide file ext


//https://developer.mozilla.org/docs/Web/API/Element/insertAdjacentHTML


function fuMRandomItem(text){
let randomItemsArrList = [];
let delimiter = ["|", ",", " ", "\r\n", "\r", "\n"];
let items = "";
delimiter.forEach((val) => {
text = String(text.replaceAll(val, "SYMBOLFORSPLIT"));
});

text = text.split("SYMBOLFORSPLIT");
let text2 = "";
text.forEach((val) => {
if (val.trim != ''&&val != undefined&&val != null){
randomItemsArrList.push(val);
}
});

return randomItemsArrList[fuMRandom(0, Number(randomItemsArrList.length - 1))];
}
//console.table(fuMRandomItem(",,,,1 2      ,,,"));



function fuMInsertHtml(selector, option, text){
//https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
//option: beforebegin, afterbegin, beforeend, afterend

if (option == "head"){
if (document.head != null){
if (option != undefined&&option != ''){
document.head.insertAdjacentHTML(option, text);
//alert(opition + 'test');
} else {
document.head.insertAdjacentHTML("beforeend", text);
//alert(option + 'test2');
}
} else { console.log("fuMInsertHtml: document head probably null"); }

} else {

if (document.querySelector(selector) != null){
if (option != undefined&&option != ''){
document.querySelector(selector).insertAdjacentHTML(option, text);
//alert(opition + 'test');
} else {
document.querySelector(selector).insertAdjacentHTML('beforeend', text);
//alert(option + 'test2');
}
} else { console.log("fuMInsertHtml: querySelector probably null"); }

}

}



function fuMSplit(text, delimiter){
if (delimiter == null||delimiter == ""){
delimiter = ["|", ",", " ", "\r\n", "\r", "\n"];
} else {
delimiter = [delimiter];
}
delimiter.forEach((val) => {
text = String(text.replaceAll(val, "SYMBOLFORSPLIT"));
});
return text = text.split("SYMBOLFORSPLIT");
}



// Themes changer v.1.2.0
theme = conf["confTheme"];
if (conf["confTheme"] == null||theme == undefined||theme == 'auto'){
theme = "auto";
if (window.matchMedia &&window.matchMedia('(prefers-contrast: more)').matches == true){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
theme = 'h-contrast-d'; }
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
theme = 'h-contrast-l'; }
}
}

// confDeviceTheme
conf["confDeviceTheme"] = 'none';
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { conf["confDeviceTheme"] = 'dark'; }
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) { conf["confDeviceTheme"] = 'light'; }


// top bar color theme set
//<meta name="theme-color" content="#317EFB"/>
var meta = document.createElement('meta');
meta.name = "theme-color";
if (conf["confDeviceTheme"] == 'dark'){
meta.content = "#404040";
} else {
meta.content = "#F0F0F0";
}
document.getElementsByTagName('head')[0].appendChild(meta);


// insert color-theme.css in header
function fuMPrintTheme(theme){

if (document.getElementById('theme') != null){
document.getElementById('theme').href = '/css/' + theme + '.css';
}


// print theme mode and name in footer
if (document.getElementById('fTheme') != null){
document.getElementById("fTheme").text = conf["confTheme"] + ' (' + theme + ')';
}

// fix and dynamic
fuMThemeEmbed();
fuMBg(conf["confThemeEmbed"], conf["confBgImg"]);

// fix
if (conf["confThemeEmbed"] == 'dark'){
fuMInsertHtml("head", 'beforeend', `
<style>
.reduceLight { filter:brightness(70%); }
</style>
`);
} else {
//document.head.insertAdjacentHTML("beforeend", `
fuMInsertHtml("head", 'beforeend', `
<style>
.reduceLight { filter: brightness(100%); }
</style>
`);
}





}


//var theme = conf["confThemeMain"];
var themeListLight = [
"light",
"l-blue",
"l-green",
"l-merino",
"l-olive",
"l-orange",
"l-pink",
"l-purple",
"l-plum",
"l-red",
"l-sea",
"l-seashell",
"l-violet",
"l-yellow"
];

var themeListOther = [
"o-blue",
"o-green",
"o-lime",
"o-mint",
"o-olive",
"o-orange",
"o-pink",
"o-plum",
"o-purple",
"o-red",
"o-sea",
"o-silver",
"o-violet",
"o-yellow"
];

var themeListDark = [
"dark",
"d-green",
"d-blue",
"d-forest",
"d-orange",
"d-pink",
"d-plum",
"d-red",
"d-sea",
"d-slate",
"d-violet",
"d-yellow"
];

var themeListOtherDark = [
"od-blue",
"od-brown",
"od-green",
"od-gray",
"od-forest",
"od-pink",
"od-plum",
"od-purple",
"od-red",
"od-olive",
"od-sea",
"od-slate",
"od-violet",
"od-yellow",
];

var themeListHContrast = [
"h-contrast-l",
"h-contrast-d"
];

// fav from others
var themeListBest = [
"light",
"l-green",
"l-merino",
"l-olive",
"l-orange",
"l-yellow",

"dark",
"d-blue",
"d-forest",
"d-green",
"d-sea",
"d-slate",
"d-violet",

"o-yellow",
"o-lime",
"o-orange",
"o-olive",
"o-silver",

"od-blue",
"od-blue-2",
"od-green",
"od-gray",
"od-sea",
"od-slate",
"od-violet"
];



var themeListOption2 = [
"rand-l",
"rand-o",
"rand-d",
"rand-od",
//"rand-h-contrast",
"rand-best",

"rand-all-l",
"rand-all-d",
"rand-all",

"auto-time",
"auto-t-h-contrast",
"auto-t-rand",
"auto-t-rand-all",

"auto",
"auto-h-contrast",
"auto-rand",
"auto-rand-all",

];

// all light theme
var themeListAllLight = [];
themeListAllLight.push(...themeListLight);
themeListAllLight.push(...themeListOther);
themeListAllLight.push("h-contrast-l");

// all dark theme
var themeListAllDark = [];
themeListAllDark.push(...themeListDark);
themeListAllDark.push(...themeListOtherDark);
themeListAllDark.push("h-contrast-d");

// all theme
var themeList = [];
themeList.push(...themeListLight);
themeList.push(...themeListOther);
themeList.push(...themeListDark);
themeList.push(...themeListOtherDark);
themeList.push(...themeListHContrast);



var themeListOption = [];
themeListOption.push(...themeList);
themeListOption.push(...themeListOption2);




conf["confRealTmpTheme"] = '';
conf["confThemeEmbed"] = '';

    
function themeAuto(){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
conf["confRealTmpTheme"] = 'dark';
fuMPrintTheme(conf["confRealTmpTheme"]);
} else {
conf["confRealTmpTheme"] = 'light';
fuMPrintTheme(conf["confRealTmpTheme"]);
}
}

function themeAutoHContrast(){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
conf["confRealTmpTheme"] = 'h-contrast-d';
fuMPrintTheme(conf["confRealTmpTheme"]);
} else {
conf["confRealTmpTheme"] = 'h-contrast-l';
fuMPrintTheme(conf["confRealTmpTheme"]);
}
}

function themeAutoRandom(){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
conf["confRealTmpTheme"] = themeListDark[fuMRandom(0, themeListDark.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
} else {
conf["confRealTmpTheme"]  = themeListLight[fuMRandom(0, themeListLight.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
}
}

function themeAutoRandomAll(){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
conf["confRealTmpTheme"]  = themeListAllDark[fuMRandom(0, themeListAllDark.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
} else {
conf["confRealTmpTheme"]  = themeListAllLight[fuMRandom(0, themeListAllLight.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
}
}

function fuMSetTheme(mode){

/*if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
document.cookie = "theme=dark; SameSite=None; Secure; path=/";
} else {
document.cookie = "theme=light; SameSite=None; Secure; path=/";
}*/

/*themeList.forEach((element) => {
if (mode == element){
//document.getElementById('theme').href = '/css/'+mode+'.css';
fuMPrintTheme(conf["confRealTmpTheme"] );
}
})*/

var themeSelect;
if (themeList.includes(mode) == true){ themeSelect = mode; }


switch (mode) {

case 'auto-time':
if (new Date().getHours() < Number(conf["confStartDay"])||new Date().getHours() >= conf["confStartNight"]){
//if (new Date().getSeconds() % 2 == 0){
conf["confRealTmpTheme"]   = 'dark';
fuMPrintTheme(conf["confRealTmpTheme"]);
} else {
conf["confRealTmpTheme"]   = 'light';
fuMPrintTheme(conf["confRealTmpTheme"]);
}
//var interval1 = setInterval(themeAutoTime, 60000);
break;

case 'auto-h-contrast':
themeAutoHContrast();
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
themeAutoHContrast();
});
break;

case 'auto-t-h-contrast':
if (new Date().getHours() < Number(conf["confStartDay"])||new Date().getHours() >= conf["confStartNight"]){
//if (new Date().getSeconds() % 2 == 0){
conf["confRealTmpTheme"]   = 'h-contrast-d';
fuMPrintTheme(conf["confRealTmpTheme"] );
} else {
conf["confRealTmpTheme"]   = 'h-contrast-l';
fuMPrintTheme(conf["confRealTmpTheme"] );
}
//var interval1 = setInterval(themeAutoTime, 60000);
break;

case 'auto-t-rand':
if (new Date().getHours() < Number(conf["confStartDay"])||new Date().getHours() >= conf["confStartNight"]){
//if (new Date().getSeconds() % 2 == 0){
conf["confRealTmpTheme"]  = themeListDark[fuMRandom(0, themeListDark.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"] );
} else {
conf["confRealTmpTheme"]  = themeListLight[fuMRandom(0, themeListLight.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"] );
}
break;

case 'auto-t-rand-all':
if (new Date().getHours() < Number(conf["confStartDay"])||new Date().getHours() >= conf["confStartNight"]){
//if (new Date().getSeconds() % 2 == 0){
conf["confRealTmpTheme"]  = themeListAllDark[fuMRandom(0, themeListAllDark.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"] );
} else {
conf["confRealTmpTheme"]  = themeListAllLight[fuMRandom(0, themeListAllLight.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"] );
}
break;


/*case 'rand-all-blink':
themeRandomAllBlink();
//var interval2 = setInterval(themeRandomAllBlink, 4000);
break;*/

case 'auto-rand':
themeAutoRandom();
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
themeAutoRandom();
});
break;

case 'auto-rand-all':
themeAutoRandomAll();
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
themeAutoRandomAll();
});
break;

case 'rand-l':
conf["confRealTmpTheme"] = themeListLight[fuMRandom(0, themeListLight.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-d':
conf["confRealTmpTheme"] = themeListDark[fuMRandom(0, themeListDark.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-o':
conf["confRealTmpTheme"] = themeListOther[fuMRandom(0, themeListOther.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-od':
conf["confRealTmpTheme"] = themeListOtherDark[fuMRandom(0, themeListOtherDark.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-all-l':
conf["confRealTmpTheme"] = themeListAllLight[fuMRandom(0, themeListAllLight.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-all-d':
conf["confRealTmpTheme"] = themeListAllDark[fuMRandom(0, themeListAllDark.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-h-contrast':
conf["confRealTmpTheme"] = themeListHContrast[fuMRandom(0, themeListHContrast.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-best':
conf["confRealTmpTheme"] = themeListBest[fuMRandom(0, themeListBest.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-all':
conf["confRealTmpTheme"] = themeList[fuMRandom(0, themeList.length - 1)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;


case 'none':
case 'empty':
case 'bad':
case themeSelect:
conf["confRealTmpTheme"] = mode;
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

// auto  
default:
themeAuto();
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
themeAuto();
});
break;
}

let mForseStatus = '';
if (conf["confTheme"] != mode){ mForseStatus = "[force] "; }

// print theme mode and name in footer
if (document.getElementById('fTheme') != null){
document.getElementById("fTheme").innerHTML = `Theme: ${mForseStatus}${mode} (${conf["confRealTmpTheme"]})`;
}


}

fuMSetTheme(theme);

function fuMThemeEmbed(){
if (conf["confRealTmpTheme"].search("dark|d-|-d") != -1){
conf["confThemeEmbed"] = 'dark';
} else {
conf["confThemeEmbed"] = 'light';
}
}

/* // disabled for if not theme, Unexpected behavior
window.addEventListener('storage', () => {
if (theme != conf["confTheme"]){
fuMSetTheme(conf["confTheme"]);
}
});
*/
// end Themes changer



// CSS
// random bg image (background img with random position)
function fuMBg(com, bgImage){
if (conf["confBg"] == "on"){

bgImage = fuMClearText(bgImage);

if (bgImage == undefined||bgImage == null||bgImage == ""){
let mBg = fuMRandomItem("binary.svg circle.svg line-chaotic.svg deco-paper.svg wood.png grid.png flower.png flower-2.png");
let mBgDark = fuMRandomItem("binary-d.svg circle-d.svg line-chaotic-d.svg deco-paper-d.svg wood-d.png grid-d.png flower-d.png flower-2-d.png");
let mRandBgPos = fuMRandom(0, 100);
let mRandBgPos2 = fuMRandom(0, 100);
if (conf["confThemeEmbed"] == 'light'||com == "light"){
//document.head.insertAdjacentHTML("beforeend", `
fuMInsertHtml("head", 'beforeend', `
<style>
/*.reduceLight { filter: brightness(100%); }*/
body{
background-image: url("/img/bg/${mBg}");
background-repeat: repeat;
background-position: ${mRandBgPos}% ${mRandBgPos2}%;
background-attachment: fixed;
}
</style>
`);
} else {
//document.head.insertAdjacentHTML("beforeend", `
fuMInsertHtml("head", 'beforeend', `
<style>
/*.reduceLight { filter:brightness(70%); }*/
body{
background-image: url("/img/bg/${mBgDark}");
background-repeat: repeat;
background-position: ${mRandBgPos}% ${mRandBgPos2}%;
background-attachment: fixed;
}
</style>
`);
}
} else {
let reduceBgLight = "";
if (conf["confThemeEmbed"] == 'dark'||com == "dark"){
reduceBgLight = "filter:brightness(60%);";
}
//document.head.insertAdjacentHTML("beforeend", `
fuMInsertHtml("head", 'beforeend', `
<style>
body::before {
content: "";
display: block;
position: fixed;
top: 0;
left: 0;
z-index: -1;
overflow: hidden;

width: 100%;
height: 100%;
margin: 0;
padding: 0;
box-sizing: border-box;
${reduceBgLight}
}

body::before {
background-image: url("${bgImage}");
background-attachment: fixed;
background-repeat: no-repeat;
background-position: center center;
background-size: cover;
opacity: .06;
}
</style>
`);
}

}
}
// random bg image

// fonts, external fonts (privacy, data analytics)
if (conf["confDataCollection"] == 'on'&&conf["confExternalFonts"] == 'auto'||conf["confExternalFonts"] == 'on'){
//document.head.insertAdjacentHTML("beforeend", `
fuMInsertHtml("head", 'beforeend', `
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
</style>
`);
}

// CSS



// Cookie (auto) v.1.1.0
/*if (conf["confDataCollection"] == 'not selected'){
if (navigator.doNotTrack == 1||navigator.globalPrivacyControl == true){
conf["confDataCollection"] = "off";
document.getElementById('fPrivacy').innerHTML = `Cookie: not selected (${conf["confDataCollection"]})`;
}
}*/

if (conf["confDataCollection"] == 'auto'){
if (navigator.doNotTrack == 1||navigator.globalPrivacyControl == true){
conf["confDataCollection"] = "off";
} else {
// Auto select (timezone) v.1.2.0
//https://www.termsfeed.com/blog/cookie-consent-outside-eu/
//https://stackoverflow.com/questions/38399465/how-to-get-list-of-all-timezones-in-javascript
var timeZone = (Intl.DateTimeFormat().resolvedOptions().timeZone).toLowerCase();
if (
timeZone.indexOf('UTC'.toLowerCase()) != -1||
timeZone.indexOf('europe'.toLowerCase()) != -1||
timeZone.indexOf('mexico_city'.toLowerCase()) != -1||
timeZone.indexOf('argentina'.toLowerCase()) != -1||
timeZone.indexOf('brazil'.toLowerCase()) != -1||
timeZone.indexOf('lagos'.toLowerCase()) != -1||
timeZone.indexOf('japan'.toLowerCase()) != -1
){
conf["confDataCollection"] = 'off';
} else {
conf["confDataCollection"] = 'on';
}
}

//fuMInsertHtml('#fPrivacy', 'beforeend', `Cookie: auto (${conf["confDataCollection"]})`); 
if (document.getElementById('fPrivacy') != null){
document.getElementById('fPrivacy').innerHTML = `Cookie: auto (${conf["confDataCollection"]})`;
}

}
// end Cookie (auto)



// fu ClearText, fix print, fix input v.1.0.0
function fuMClearText(text){
if (text != undefined){

//text = text.replaceAll("'", '\'');
//text = text.replaceAll('"', '\"');
//text = text.replaceAll("/\\/", "\\\\");

//text = text.replaceAll("/\\/", "&#92;");
text = text.replaceAll("/\\/", "&bsol;");
text = text.replaceAll("<", '&lt;');
text = text.replaceAll(">", '&gt;');
text = text.replaceAll("`", '&#96;'); // Backtick
text = text.replaceAll(/"/g, '&quot;');
text = text.replaceAll(/'/g, '&apos;');
text = text.replaceAll(/'/g, '%27');
text = text.replaceAll('%', '&percnt;');
text = text.replaceAll("+", '&plus;');

return text;
}
}

// fu ClearText2, for click and to URL
function fuMClearText2(text){
if (text != undefined){
text = text.replaceAll(/"/g, '%22');
text = text.replaceAll(/'/g, '%27');
return text;
}
}



// Embed scripts. Script embed v.1.0.0
if (document.getElementById(conf["confIdEmbedScript"]) != null){

function fuMEmbedScript(embedUrl, embedId){

/*
//https://stackoverflow.com/questions/3646036/preloading-images-with-javascript
var link = document.createElement("link");
link.rel = "preload";
link.as = "script";
link.href = embedUrl;
document.head.appendChild(link);*/

let script = document.createElement('script');
script.type='text/javascript';
//script.async = true;
script.defer = true;
script.charset = 'utf-8';
script.src = embedUrl;

if (document.getElementById(embedId) != null){
document.getElementById(embedId).appendChild(script);
} else {
document.getElementsByTagName('head')[0].appendChild(script); 
}

}


// embed and run
if (conf["confSpeedDialStatus"] != "off"){
fuMEmbedScript(`/projects/speed-dial-58/script.js`, conf["confIdEmbedScript"]);
}

if (conf["confDataCollection"] == 'not selected'){
fuMEmbedScript(`/js/cookie-agree-popup.js`, conf["confIdEmbedScript"]);
}

if (conf["confDataCollection"] == 'on'){
fuMEmbedScript(`https://www.googletagmanager.com/gtag/js?id=${conf["confGoogleAnalyticsId"]}`, conf["confIdEmbedScript"]);
}


///////////////////////////
// Run:
//https://stackoverflow.com/questions/39155645/multiple-window-onload-functions-with-only-javascript
window.addEventListener('load', function() {
//https://stackoverflow.com/questions/7559520/determine-if-statically-named-javascript-function-exists-to-prevent-errors

if (conf["confSpeedDialtatus"] != "off"&&typeof fuLSpeedDial == 'function'){
fuLSpeedDial("speedDialPrint", "", "", "print");
}

if (conf["confDataCollection"] == 'on'){
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', conf["confGoogleAnalyticsId"]);
}

})

}
// end Embed scripts



// Screen Wake Lock (https only)
//https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API
if (conf["confScreenWakeLock"] == "on"){

async function fuMWakeLock(){
// Create a reference for the Wake Lock.
let mWakeLock = null;

// create an async function to request a wake lock
try {
mWakeLock = await navigator.wakeLock.request("screen");
//console.log("Wake Lock is active!");
} catch (err) {
// The Wake Lock request has failed - usually system related, such as battery.
//console.log(`${err.name}, ${err.message}`);
}

}
fuMWakeLock();
}
