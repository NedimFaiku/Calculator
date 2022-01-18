//vlerat e shenuara nga perdoruesi
var vleraX = document.getElementById("x");
var vleraY = document.getElementById("y");

//operatori qe klikohet
var operatori = document.getElementById("operatori");

//rezultati qe shfaqet
var rez = document.getElementById("rez");

//operatoret
var fshij = document.getElementById("fshij");
var modulo = document.getElementById("modulo");
var rrenja = document.getElementById("rrenja");
var mbledh = document.getElementById("mbledh");
var zbrit = document.getElementById("zbrit");
var shumezo = document.getElementById("shumezo");
var pjesto = document.getElementById("pjesto");
var perqindje = document.getElementById("perqindje");
var nderroVendet = document.getElementById("nderroVendet");

//kthimi i vlerave te dhena ne numra

//funksionet e operatoerve
fshij.addEventListener('click' , function(){
    vleraX.value = "";
    vleraY.value = "";
    rez.innerText = "";
    operatori.innerText = "";
});

modulo.addEventListener('click' , function(){
    if(!vleraX.value || !vleraY.value)
        alert("Insertoni numrat!!!");
    else
        rez.innerText = vleraX.value % vleraY.value;
    
});

rrenja.addEventListener('click' , function(){
    if(!vleraX.value && !vleraY.value)
        alert("Insertoni vlera!!!");
    else if(vleraX.value && vleraY.value)
        alert("Plotesoni vetem njeren kuti!!!");
    else{
        if(vleraX.value){
        rez.innerText = Math.sqrt(vleraX.value);
        }
        else if(vleraY.value){
        rez.innerText = Math.sqrt(vleraY.value);
        } 
        operatori.innerText = "√";
    }    
    
});

mbledh.addEventListener('click' , function(){
    if(!vleraX.value || !vleraY.value)
        alert("Insertoni vlera!!!");
    else{
        var x = parseFloat(vleraX.value);
        var y = parseFloat(vleraY.value);
        rez.innerText = x + y;
        operatori.innerText = "+";
    }
});

zbrit.addEventListener('click' , function(){
    if(!vleraX.value || !vleraY.value)
        alert("Insertoni vlera!!!");
    else{
        rez.innerText = vleraX.value - vleraY.value;
        operatori.innerText = "-";
    }
});

shumezo.addEventListener('click' , function(){
    if(!vleraX.value || !vleraY.value)
        alert("Insertoni vlera!!!");
    else{
        rez.innerText = vleraX.value * vleraY.value;
        operatori.innerText = "*";
    }
});

pjesto.addEventListener('click' , function(){
    if(!vleraX.value || !vleraY.value)
        alert("Insertoni vlera!!!");
    else{
        rez.innerText = vleraX.value / vleraY.value;
        operatori.innerText = "/";
    }
});

perqindje.addEventListener('click' , function(){
    if(!vleraX.value || !vleraY.value)
        alert("Insertoni vlera!!!");
    else{
        rez.innerText = ((vleraX.value / vleraY.value) * 100) + "%";
        operatori.innerText = "%";
    }
});

nderroVendet.addEventListener('click' , function(){
    if(!vleraX.value && !vleraY.value)
        alert("Insertoni vlera!!!");
    else if(!vleraX.value || !vleraY.value){
        alert("Plotesoni te dy kutitë!!!")
    }
    else{
        var temp = vleraX.value;
        vleraX.value = vleraY.value;
        vleraY.value = temp;
    }
});
