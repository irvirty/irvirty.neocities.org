// Main.js v.1.0.3

var conf = [];
conf["confDomainName"] = "irvirty";

conf["confWrapperNavWidth"] = 900;
conf["confMenuItemAverageWidth"] = 120;
conf["confMenuItemAverageWidth"] = 80;

let mFooter = `
<span id="style"></span>

<div class="margin2 padding2"></div>
<div class="margin2 padding2"></div>

<footer class="tCenter margin3List small">
<a class="inlineFlex margin shadow light2 padding1Px border2 borderRadius2 op" title="Hosting platform Neocities" href="https://neocities.org/"><img class="reduceLight border2 borderRadius2" src="https://irvirty.neocities.org/neocities.png" style="max-height: 31px;" alt="neocities"></a>

<div class="padding margin"></div>

<nav>
<div class="wrapper3 margin2List small tCenter">


<div class="wrapper2 small tLeft">
<span class="gray">Nav:</span> <span id="footerNav"></span><hr>
</div>

<a class="brand inlineBlock padding" style="padding-left: 0;" title="About the site" href="/pages/about.html">About</a>
<a class="brand inlineBlock padding" title="Social network" href="https://irvirty.bsky.social">Bluesky</a>
<a class="brand inlineBlock padding" title="RSS Site update" href="https://neocities.org/site/irvirty.rss">RSS</a>
<a class="brand inlineBlock padding" title="Another home page" href="https://irvirty.pages.dev/">Other Home</a>
<a class="brand inlineBlock padding" title="Source Code (repository)" href="https://github.com/irvirty/irvirty.neocities.org">Source Code</a>
<a rel="license" class="brand inlineBlock padding" title="Main license" href="https://creativecommons.org/licenses/by-sa/4.0/">License: CC BY-SA 4.0</a>
<span title="Updated" class="op small inlineBlock padding gray" style="padding-right: 0;"><!--2024-->2024</span>

</div>
</nav>

`;

if (document.getElementById("footer") != null){
document.getElementById("footer").innerHTML = mFooter;
}

 let mFooterNavLinksPrint = `<a class="brand" href="/">start</a> `;
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

fuMPrintText("footerNav", mFooterNavLinksPrint, '');

// end footer






// CSS
// random bg image (background img with random position)
function fuMBg(val){

let mBg = fuMRandomItem("bg-binary.svg bg-circle.svg bg-line-chaotic.svg bg-deco-paper.svg bg-wood.svg");
let mBgDark = fuMRandomItem("bg-binary-d.svg bg-circle-d.svg bg-line-chaotic-d.svg bg-deco-paper-d.svg bg-wood-d.svg");
let mRandBgPos = fuMRandom(0, 100);
let mRandBgPos2 = fuMRandom(0, 100);

fuMPrintText('style', `
<style>
@media (prefers-color-scheme: light) {
body{
background-image: url("/img/${mBg}");
background-repeat: repeat;
background-position: ${mRandBgPos}% ${mRandBgPos2}%;
background-attachment: fixed;
}
}

@media (prefers-color-scheme: dark) {
body{
background-image: url("/img/${mBgDark}");
background-repeat: repeat;
background-position: ${mRandBgPos}% ${mRandBgPos2}%;
background-attachment: fixed;
}
}
</style>
`, 'plus');


}
// random bg image

fuMBg()



function fuMPrintText(id, text, option){
if (document.getElementById(id) != null){
if (option == 'plus'||option == '+'){
document.getElementById(id).innerHTML += text;
} else if (option == 'plusTop'||option == 'top'){
document.getElementById(id).innerHTML = text + document.getElementById(id).innerHTML;
} else {
document.getElementById(id).innerHTML = text;
}
} else {
// console.log(id+' not fount');
}
}


// Navigation JS part v.1.3.1

if (conf == undefined){
var conf = [];
// wrapper size for navigation, number in px from your CSS
conf["confWrapperNavWidth"] = 900;
conf["confMenuItemAverageWidth"] = 120;
}

// nav v.2.0.0 in test
// count links
var countMenuItem = document.querySelectorAll('.countMenuItem');
if (document.getElementsByTagName("nav")[0] != null){

var mNavItemsAverageWidth = conf["confMenuItemAverageWidth"];
// Average: 66 
var mNavItemsCount = (countMenuItem.length / 2);
// /2 - dublicate items (links)
var mNavWhenDropdownWidth = (mNavItemsAverageWidth * mNavItemsCount) / 2;
// /2 - for 2 rows links
// auto based on item
var cssMedia = `@media(width <= ${mNavWhenDropdownWidth}px)`;
var cssMedia2 = `@media(width >= ${mNavWhenDropdownWidth}px)`;

// if nav (items) more width then wrapper (forece dropdown)
if ((mNavWhenDropdownWidth) >= conf["confWrapperNavWidth"]){
cssMedia = '@media(width >= 1px)';
// cancel
cssMedia2 = `@media(width <= 0px)`; 
}

// embed style
document.getElementsByTagName("nav")[0].innerHTML += `

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

`;

}

// button
const dropdownButton = document.getElementById("dropdownMenuButton");
let dropdownMenu = document.getElementById("dropdownMenu");
const topNav = document.getElementById("topNav");

function fuMDropdownButton(){
//https://stackoverflow.com/questions/64487640/javascript-show-hide-div-onclick
if (dropdownMenu.style.display === "block") {
dropdownMenu.style.display = "none";
if (dropdownButton != null){
dropdownButton.innerHTML = `☰ Menu`;
}
} else {
dropdownMenu.style.display = "block";
if (dropdownButton != null){
dropdownButton.innerHTML = `☶ Menu`;
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
} else {
dropdownMenu.style.display = "none";
//dropdownMenu.classList.remove("showDropdownMenu");
if (dropdownButton != null){
dropdownButton.innerHTML = `☰ Menu`;
}
}
});
// end Navigation JS version











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


