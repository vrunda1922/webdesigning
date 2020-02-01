var sum = 0;
var tabledata = document.getElementById('info');
tabledata.innerHTML = "";

var data = "<tr class='trow'><th class=' light-gray thead toggle'>Roll no.</th>";
for (let i = 1; i <= 6; i++) {
    data += "<td class=' tdata dark-gray toggle'>" + i + "</td>";
}
data += "</tr>";
for (let j = 1; j <= 5; j++) {
    sum = 0;
    data += "<tr class='trow'><th class='thead'>" + document.getElementById('sub' + j).innerHTML + "</th>";
    for (let i = 1; i <= 6; i++) {
        if (i < 6) {
            sum += parseInt(document.getElementById("m" + j + i).innerText);
        }
        data += "<td class='tdata'>" + document.getElementById('m' + i + j).innerHTML + "</td>";
    }
    data += "</tr>";
}
data += "<tr class='trow'><th class='thead toggle'>Total</th>";
for (let i = 1; i <= 6; i++) {
    data += "<td class='trow tdata toggle green'>" + sum + "</td>";
}
tabledata.innerHTML += data;