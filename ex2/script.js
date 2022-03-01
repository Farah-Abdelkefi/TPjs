var nod1 = document.getElementById("couleur");
var nod2 = document.getElementById("size");
var nod3 = document.getElementById("police");

nod1.addEventListener("change", function(e){
        document.getElementById("test").style.color= nod1.value;
})

nod2.addEventListener("change", function(){
    document.getElementById("test").style.fontSize = nod2.value + "px";
})

nod3.addEventListener("change", function(){
    var result=nod3.options[nod3.selectedIndex].text;
    document.getElementById("test").style.fontFamily = result + ",Charcoal,sans-serif";
})