/*
Katlal on kolm temperatuurivahemikku
0-20 on liiga külm         tagastab -1
21-40 on paras temperatuur tagastab 0
41-60 on liiga kuum        tagastab 1
GitHubi: homework/checkTemp.js
*/ 

function checkTemp (temp) {
    //let temp = Math.floor(Math.random ()*50);
    let tempcold = 0
    let tempnoice = 20.9
    let temphot = 40.9
    if (temp>temphot){
        alert("temperatuur on liiga kõrge " +temp + " C")
        return 1
    }
    else if(temp>tempnoice){
        alert("Temperatuur on paras " +temp + " C°")
        return 0
    }
    else if(temp>tempcold){
        alert("Temperatuur on liiga madal " +temp + " C°")
        return -1
    }
}
