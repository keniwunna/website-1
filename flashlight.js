function lightson(){
    var onlight= document.getElementById("body");
    onlight.style.backgroundColor= "GreenYellow";
    onlight.style.color= "black";

    document.getElementById('myimage').src="img/bulbon.gif";
}
function lightsoff(){
    var offlight= document.getElementById("body");
    offlight.style.backgroundColor="black";
    offlight.style.color= "white";
    document.getElementById('myimage').src="img/bulboff.gif";
}