// tags v.1.5.0

let tagBody = `
<!-- tag bcloud v.1.2.0 -->

<aside>
<div class="wrapper2 tCenter">

<div id="printTagsHeader"></div>

<div id="printTags" class="balance notUnderline"></div>

<div class="wrapperSmall small">
<div><span class="notUnderline" id="printMode"></span><span id="tagRandom"></span></div>
</div>
<div id="tagListEditForm"></div>

</div>
</aside>
`;

if (document.getElementById("tagBody") != null){
document.getElementById("tagBody").innerHTML = tagBody;
}


if (conf["confTagCloudlStatus"] == "on"){

document.getElementById("printTagsHeader").innerHTML = `

<div class="padding2 margin2"></div>
<div class="bold padding medium">
<a class="op brand notUnderline" href="https://neocities.org/browse">Neocities explore:</a>
</div>

`;

//window.addEventListener('load', function() {});
function tagListCloud(mode){

let tagModePrint = "";

if (mode == undefined||mode == ""){
mode = localStorage.getItem("tagModeData2");
} else if (mode != "edit"){
localStorage.setItem("tagModeData2", mode);
}

if (mode == null||mode == undefined){ mode = "Special"; }

let tagListSortConf = localStorage.getItem("tagListSortConf2");

let tagListColor = `red orange yellow green blue indigo violet`;

let tagList = localStorage.getItem("tagListData");
if (tagList == null||tagList == undefined){
tagList = `
Example, Keyword, Keyword,
`;
}

let arr = fuMSplit(tagList);

/*
if (tagListSortConf == "sort"){
arr = fuMSort(arr, "", "arr");
}*/


// new
let tagListLimit = "38";

tagCloudData = tagList;

let confSymbolForSplit = "confSymbolForSplit";
let color = fuMRandomItem(tagListColor);
let size = '';

//tagList = '';

tagCloudData = tagCloudData.replaceAll(`
`, confSymbolForSplit);
tagCloudData = tagCloudData.replace(/(?:\\[rn])+/g, confSymbolForSplit);

if (tagCloudData.indexOf(',') != -1){
tagCloudData = tagCloudData.replaceAll(',', confSymbolForSplit);
} else {
tagCloudData = tagCloudData.replaceAll(' ', confSymbolForSplit);
}

tagCloudData = tagCloudData.replaceAll('·', "");
tagCloudData = tagCloudData.replaceAll('.', " ");

tagCloudData = tagCloudData.split(confSymbolForSplit);

/*
//https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-array-of-string-in-javascript
tagCloudData.sort(function (a, b) {
return a.toLowerCase().localeCompare(b.toLowerCase());
});*/



var tagAverage = 0;
var tagTotal = 0;

// https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
// make uniq and count, object
var tagListCount = {};
tagCloudData.forEach(function (x) {
x = x.trim();
if (x != null&&x != ''){
tagListCount[x] = (tagListCount[x] || 0) + 1;
}
});



// Taglist limit
//https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
// sort object by value
let entries = Object.entries(tagListCount);
let tagListCountSorted = entries.sort((a, b) => a[1] - b[1]);
tagListCountSorted.reverse();


// Taglist limit (cut array) with sorted tag and convert to old object, sorted previos
tagListCountLimited = {};
tagListCountSorted.forEach(function (item, key) {
if (key <= tagListLimit){
tagListCountLimited[item[0]] = item[1];
}
});

if (tagListSortConf == "sort"){
// sort
// https://stackoverflow.com/questions/5467129/sort-javascript-object-by-key
tagListCount = {};
tagListCount = Object.keys(tagListCountLimited).sort().reduce(
  (obj, key) => { 
    obj[key] = tagListCountLimited[key]; 
    return obj;
  }, 
  {}
);
}

// end Taglist limit

/*tagAverage = (Math.min(...Object.values(tagListCount))+Math.max(...Object.values(tagListCount)))/2;
//console.log(tagAverage);*/
Object.values(tagListCount).forEach(function (x) {
tagTotal = tagTotal + x;
});
tagAverage = Math.floor(tagTotal / Object.values(tagListCount).length);

var tagSize = "";
var tagColor = "";
var tagPercentage = "";

function fuTag(tagCount){
//tagPercentage = (Math.floor((tagCount*100)/tagTotal)); // from 100%, need rebuild case from 100
tagPercentage = (Math.floor((tagCount * 100) / tagAverage)); // over 100%, used average if tag disproportion 1% and 90%
//console.log(tagPercentage);

// tag font-size and color
switch (true) {

case tagPercentage >= 500:
tagColor = "red";
tagSize = "xx-large";
break;

case tagPercentage >= 300:
tagColor = "yellow";
tagSize = "x-large";
break;

case tagPercentage >= 250:
tagColor = "orange";
tagSize = "large";
break;

case tagPercentage >= 100:
tagColor = "green";
tagSize = "medium";
break;

case tagPercentage >= 80:
tagColor = "blue";
tagSize = "1em";
break;

case tagPercentage >= 50:
tagColor = "indigo";
tagSize = "small";
break;

case tagPercentage >= 30:
tagColor = "violet";
tagSize = "smaller";
break;

default:
tagColor = "c2";
tagColor = fuMRandomItem(tagListColor)
tagSize = "x-small";
}

//console.log(tagColor);
//return tagColor;

}



let sortedTags = "";
//https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-array-of-string-in-javascript
if (tagListSortConf == "sort"){
sortedTags = Object.entries(tagListCount).sort(Intl.Collator().compare);
} else {
sortedTags = Object.entries(tagListCount);
// https://masteringjs.io/tutorials/fundamentals/foreach-object
}

//let sortedTags = Object.entries(tagListCount).sort(Intl.Collator().compare);
// end new


let tagListPrint = "";

sortedTags.forEach(entry => {
const [key, value] = entry;

tag = key.trim();
tagCount = value;

fuTag(tagCount);

if (tag != ""){
let printTag = tag;
let printTagRandom = sortedTags[fuMRandom(0, sortedTags.length - 1)][0];

//printTag = printTag.replaceAll(/#/g, "");
//printTag = printTag.replaceAll(' ', "");

// Neocities
if (
mode === "Special"||
mode === "Random"||
mode === "Update"||
mode === "Activity"||
mode === "New"
){
tag = tag.replaceAll(' ', "");
printTag = printTag.replaceAll(' ', "");
}

let printTagUrl = encodeURIComponent(tag.toLowerCase());
let printTagUrlRandom = encodeURIComponent(printTagRandom.toLowerCase());

printTag = fuMClearText(printTag);

switch (mode) {

case 'NeocitiesSearch':
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` ;" style="font-size: ` + tagSize + `; padding-right: 0;" href="./search/?q=` + printTagUrl + ` neo">` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="./search/?q=` + printTagUrlRandom + ` neo">randomTag</a>`);

break;

case 'RandomSearch':
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` ;" style="font-size: ` + tagSize + `; padding-right: 0;" href="./search/?q=` + printTagUrl + ` rse">` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="./search/?q=` + printTagUrlRandom + ` rse">randomTag</a>`);

break;

case 'Google':
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` ;" style="font-size: ` + tagSize + `; padding-right: 0;" href="./search/?q=` + printTagUrl + ` goo">` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="./search/?q=` + printTagUrlRandom + ` goo">randomTag</a>`);

break;

case 'Bing':
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` ;" style="font-size: ` + tagSize + `; padding-right: 0;" href="./search/?q=` + printTagUrl + ` bin">` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="./search/?q=` + printTagUrlRandom + ` bin">randomTag</a>`);

break;


case 'Global':
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` ;" style="font-size: ` + tagSize + `; padding-right: 0;" href="./search/?q=` + printTagUrl + ` q">` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="./search/?q=` + printTagUrlRandom + ` q">randomTag</a>`);

break;

case 'Random':
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` ;" style="font-size: ` + tagSize + `; padding-right: 0;" href="https://neocities.org/browse?sort_by=random&tag=` + printTagUrl + `">` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="https://neocities.org/browse?sort_by=random&tag=` + printTagUrlRandom + `">randomTag</a>`);

break;

case 'Update':
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` ;" style="font-size: ` + tagSize + `; padding-right: 0;" href="https://neocities.org/browse?sort_by=last_updated&tag=` + printTagUrl + `">` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="https://neocities.org/browse?sort_by=last_updated&tag=` + printTagUrlRandom + `">randomTag</a>`);

break;

case 'Activity':
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` ;" style="font-size: ` + tagSize + `; padding-right: 0;" href="https://neocities.org/activity?tag=` + printTagUrl + `">` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="https://neocities.org/activity?tag=` + printTagUrlRandom + `">randomTag</a>`);

break;

case 'Special':
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` ;" style="font-size: ` + tagSize + `; padding-right: 0;" href="https://neocities.org/browse?tag=` + printTagUrl + `">` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="https://neocities.org/browse?tag=` + printTagUrlRandom + `">randomTag</a>`);

break;

case 'New':
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` ;" style="font-size: ` + tagSize + `; padding-right: 0;" href="https://neocities.org/browse?sort_by=newest&tag=` + printTagUrl + `">` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="https://neocities.org/browse?sort_by=newest&tag=` + printTagUrlRandom + `">randomTag</a>`);

break;

case 'edit':
tagListPrint += `<span class="inlineBlock padding">` + printTag + `</span>`;
break;

default:
tagListPrint += `<a class="inlineBlock padding op ` + tagColor + ` ;" style="font-size: ` + tagSize + `; padding-right: 0;" href="./search/?q=` + printTagUrl + `">` + printTag + `</a><span class="gray">,</span>`;

printRandomTag ("tagRandom", `<a class="inlineBlock padding op brand small notUnderline" href="/search/?q=` + printTagUrlRandom + `">randomTag</a>`);

}

} else {
//tagListPrint += val;
}
});

document.getElementById("printTags").innerHTML = tagListPrint;


modeSwitch(mode, tagList, tagListSortConf);

}

tagListCloud("");

function tagListSortConfSet(item){
localStorage.setItem("tagListSortConf2", item);
tagListCloud("");
}

function modeSwitch(mode, tagList, tagListSortConf){
let tagModePrint = "";
let tagsModeList = `Special,Random,Update,Activity,New,RandomSearch,NeocitiesSearch,Google,Bing,Global`;
let arr = fuMSplit(tagsModeList, ",");
let tagListPrint = `<span class="op">mode:</span>`;
arr.forEach((val, index) => {
if (mode == val){
tagModePrint += `
<a class="inlineBlock padding op active2" href="#" onclick="tagListCloud('` + val +`'); return false;">` + val +`</a>
`;
} else {
tagModePrint += `
<a class="inlineBlock padding op brand" href="#" onclick="tagListCloud('` + val +`'); return false;">` + val +`</a>
`;
}
});

if (tagListSortConf == "sort"){
tagModePrint += `
<span class="op gray">/</span>
<a class="inlineBlock padding op gray" title="Close" href="#" onclick="tagListSortConfSet('unsort'); return false;">unsort</a>
`;
} else {
tagModePrint += `
<span class="op gray">/</span>
<a class="inlineBlock padding op brand" href="#" onclick="tagListSortConfSet('sort'); return false;">sort</a>
`;
}

if (mode == "edit"){
tagModePrint += `
<a class="inlineBlock padding op gray" title="Close" href="#" onclick="closeTagListData(''); return false;">edit</a>
`;
} else {
tagModePrint += `
<a class="inlineBlock padding op brand" href="#" onclick="tagListCloud('edit'); return false;">edit</a>
`;
}

document.getElementById("printMode").innerHTML = `<hr><span class="op gray">mode:</span> `;
document.getElementById("printMode").innerHTML += tagModePrint;

if (mode == "edit"){
document.getElementById("tagListEditForm").innerHTML = `
<form action="" method="get" class="form-example">
<textarea id="tagListEditData" rows="5">` + tagList + `</textarea>
<a class="submit block button padding2 op borderRadius2" href="#" onclick="saveTagListData(); return false;">Save</a>
<div class="tRight"><a class="tRight button submit padding2 op red borderRadius2" href="#" onclick="resetTagListData(); return false;">Reset</a></div>
  </div>
</form>
`;
}

}



function saveTagListData(){
let data = document.getElementById("tagListEditData").value;
localStorage.setItem("tagListData", data);
document.getElementById("tagListEditForm").innerHTML = ``;
tagListCloud("");
}

function resetTagListData(){
if (window.confirm("Are you sure?")) {
localStorage.removeItem("tagListData")
}
document.getElementById("tagListEditForm").innerHTML = ``;
tagListCloud("");
}

function closeTagListData(){
document.getElementById("tagListEditForm").innerHTML = ``;
tagListCloud("");
}


document.getElementById("tagListEditForm").innerHTML += `

<div class="margin2 padding2"></div>

`;


}


function printRandomTag(id, text){
if (document.getElementById("tagRandom") != undefined){
document.getElementById("tagRandom").innerHTML = text;
}
}
