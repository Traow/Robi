rahakott = Math.random()*50 //$  // random rahakotti summa
tootehind = Math.random()*75 //$ // random tootehinna summa
rahaarv = (rahakott - tootehind) //
if (rahakott > tootehind){
    console.log("Sul on piisavalt raha, kas te olete nõus jätkama?")
    confirmAction = confirm("Kas sa tahad seda osta")

if(confirmAction==false) 
    console.log("Sa ei ostnud seda, sul on"); console.log(rahakott)
    console.log("sa ostsid selle")


if (rahakott < tootehind)
    console.log("Sul pole piisavalt raha, raha jääb puudu")
console.log(rahakott - tootehind)