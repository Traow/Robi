rahakott = Math.random()*50 //$  // random rahakotti summa
tootehind = Math.random()*75 //$ // random tootehinna summa
rahaarv = rahakott - tootehind //
if (rahakott < tootehind){
    alert("Sa ei saa seda osta, raha jääb puud")
}
if (rahakott > tootehind){
    confirmAction = confirm ("Kas te soovite seda osta")
}

if (confirmAction==false){
    console.log("Sa ei ostnud seda, sul on");
    console.log(rahakott)
}
