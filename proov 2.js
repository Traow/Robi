rahakott = Math.random()*50 //$  // random rahakotti summa
tootehind = Math.random()*55 //$ // random tootehinna summa
rahaarv = rahakott - tootehind //
if (rahakott < tootehind){
    alert("Te ei saa seda osta, raha jääb puudu "+rahaarv+" € " )
}
if (rahakott > tootehind){
    confirmAction = confirm ("Kas te soovite seda osta see maksab kõigest "+tootehind+" € ")

 if(confirmAction==false){
     alert("Te ei ostnud seda, teil on alles"+rahaarv+" € ")
}
else
    alert("Te ostsite selle asja teil jäi üle " +rahaarv+" € ")
}
alert("Aitäh, et külastasite meie poodi. Külastage meid jälle.")