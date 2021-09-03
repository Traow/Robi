rahakott = Math.random()*50 //$  // random rahakotti summa
tootehind = Math.random()*55 //$ // random tootehinna summa
rahaarv = rahakott - tootehind //
if (rahakott < tootehind){
    alert("Te ei saa seda osta, raha jääb puudu "+rahaarv+" € " )
}
if (rahakott > tootehind){
    confirmAction = confirm ("Kas te soovite seda osta see maksab kõigest "+tootehind+" € ")
    
}


if (confirmAction==false){
    alert("Te ei ostnud midagi teie rahakotis on "+rahakott+" € alles")
}
else if(confirmActio=confirm){
    alert("Te ostsite selle ja teie rahakotis on alles "+rahaarv+" € ")
}
alert("Külastage meid jälle!") // selle voib loppu juurde lisada aga vhpeal toob se mone vea sisse