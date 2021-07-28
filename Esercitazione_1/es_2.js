var corsi = "Metodologie di programmazione per il Web, Reti 1, Paradigmi di programmazione, Sistemi operativi, Basi di dati e sistemi informativi"
var acronimi = [];
var corsi_array = [];

for (var i of corsi.split(", ")) 
{
    var acronimo = "";
    for (var j of i.split(" "))
    {
        corsi_array.push(j);
        acronimo += j[0].toUpperCase();
    }
    acronimi.push(acronimo);
    console.log(i + " --> " + acronimo);
}
