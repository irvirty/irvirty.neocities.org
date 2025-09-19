// v.1.0.0
// 800 * 600

var geturl = location.href;
var url = new URL(geturl);
var q = url.searchParams.get("q");


var print = "";
var image = "";
var buttons = "";
var myWorldMode = "index";

if (q != null&&q != ""){
myWorld(q);
} else {
myWorld();
}

function myWorld(mode){

switch (mode) {

case 'room.png':
img = mode;
buttons = `
<a class="worldClick" style="top: calc(27% - (var(--worldClickHeight) / 2)); left: calc(55% - (var(--worldClickHeight) / 2));" href="./?q=index.png" title="link"></a>
<a class="worldClick" style="top: calc(61% - (var(--worldClickHeight) / 2)); left: calc(5% - (var(--worldClickHeight) / 2));" href="./?q=index.png" title="link"></a>
<a class="worldClick" style="top: calc(52% - (var(--worldClickHeight) / 2)); left: calc(37% - (var(--worldClickHeight) / 2));" target="blank" href="https://www.youtube.com/watch?v=59Q_lhgGANc" title="link"></a>
`;
printMyWorld(img, buttons);
break;

case 'space.png':
img = mode;
buttons = `
<a class="worldClick" style="top: calc(83% - (var(--worldClickHeight) / 2)); left: calc(57% - (var(--worldClickHeight) / 2));" href="./?q=index.png" title="link"></a>
<a class="worldClick" style="top: calc(35% - (var(--worldClickHeight) / 2)); left: calc(50% - (var(--worldClickHeight) / 2));" href="./?q=mars.png" title="link"></a>
<a class="worldClick" style="top: calc(15% - (var(--worldClickHeight) / 2)); left: calc(77% - (var(--worldClickHeight) / 2));" href="./?q=sun.png" title="link"></a>
`;
printMyWorld(img, buttons);
break;

case 'sun.png':
img = mode;
buttons = `
<a class="worldClick" style="top: calc(21% - (var(--worldClickHeight) / 2)); left: calc(96% - (var(--worldClickHeight) / 2));" href="./?q=index.png" title="link"></a>
<a class="worldClick" style="top: calc(80% - (var(--worldClickHeight) / 2)); left: calc(15% - (var(--worldClickHeight) / 2));" href="./?q=space.png" title="link"></a>
`;
printMyWorld(img, buttons);
break;

case 'mars.png':
img = mode;
buttons = `
<a class="worldClick" style="top: calc(18% - (var(--worldClickHeight) / 2)); left: calc(64.6% - (var(--worldClickHeight) / 2));" href="./?q=index.png" title="link"></a>
<a class="worldClick" style="top: calc(15% - (var(--worldClickHeight) / 2)); left: calc(40% - (var(--worldClickHeight) / 2));" href="./?q=space.png" title="link"></a>

`;
printMyWorld(img, buttons);
break;

case 'tpl.png':
img = mode;
buttons = `
<a class="worldClick" style="top: calc(50% - (var(--worldClickHeight) / 2)); left: calc(50% - (var(--worldClickHeight) / 2));" href="./?q=index.png" title="link"></a>
`;
printMyWorld(img, buttons);
break;

default:
img = "index.png";
buttons = `
<a class="worldClick" style="top: calc(27% - (var(--worldClickHeight) / 2)); left: calc(50% - (var(--worldClickHeight) / 2));" href="./?q=space.png" title="link"></a>
<a class="worldClick" style="top: calc(73% - (var(--worldClickHeight) / 2)); left: calc(52.5% - (var(--worldClickHeight) / 2));" href="./?q=room.png" title="link"></a>
<a class="worldClick" style="top: calc(75% - (var(--worldClickHeight) / 2)); left: calc(65% - (var(--worldClickHeight) / 2));" href="./?q=room.png" title="link"></a>
<a class="worldClick" style="top: calc(27% - (var(--worldClickHeight) / 2)); left: calc(83% - (var(--worldClickHeight) / 2));" href="./?q=sun.png" title="link"></a>

<a class="worldClick" style="top: calc(95% - (var(--worldClickHeight) / 2)); left: calc(95% - (var(--worldClickHeight) / 2));" href="./?q=tpl.png" title="link"></a>
`;
/*buttons = `
<a class="worldClick" style="top: calc(65% - (var(--worldClickHeight) / 2)); left: calc(50% - (var(--worldClickHeight) / 2));" href="#" onclick="myWorld('room.png');return false;"></a>
`;*/
printMyWorld(img, buttons);
}

}



function printMyWorld(img, buttons){

print = `

<div class="world">
<img class="worldImg" src="./img/${img}" alt="img">
${buttons}
</div>

`;

document.getElementById("print").innerHTML = print;

}


