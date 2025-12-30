// v.1.0.0


var print = `
Lorem ipsum. Hello World! (from script)
`;

if (conf["confDataCollection"] == "on"||conf["confDataCollection"] == "allow embed"){
if (document.getElementById("result") != null){
document.getElementById("result").innerHTML = `<iframe width="852" height="479" src="https://www.youtube.com/embed/l3QQQu7QLoM" title="A Decade of Sun" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`; 
}
}
