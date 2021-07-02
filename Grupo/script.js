function startTime() {
    var tempo = new Date();
    var d = tempo.getDay()
    var h = tempo.getHours();
    var m = tempo.getMinutes();
    var s = tempo.getSeconds();
    
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("texto").innerHTML = d + ":" + h + ":" + m + ":" + s;
    tempo = setTimeout("startTime()",500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}