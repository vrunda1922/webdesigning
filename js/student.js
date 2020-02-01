m1 = parseInt(m1);
for (var i = 1; i <= 6; i++) {
    var sum = document.getElementById('sum' + i);
    let ans = 0;
    var elementSLIDE = document.getElementById('slide' + i);
    for (var j = 1; j <= 3; j++) {
        var m1 = parseInt(document.getElementById("m" + i + j).innerHTML);
        var elementM1 = document.getElementById('m' + i + j);
        ans += m1;
        //for m1                
        if (m1 >= 0 && m1 <= 35) {
            elementM1.classList.add('range6');
        } else if (m1 > 35 && m1 <= 50) {
            elementM1.classList.add('range5');
        } else if (m1 > 50 && m1 <= 60) {
            elementM1.classList.add('range4');
        } else if (m1 > 60 && m1 <= 70) {
            elementM1.classList.add('range3');
        } else if (m1 > 70 && m1 <= 90) {
            elementM1.classList.add('range2');
        } else if (m1 > 90 && m1 <= 100) {
            elementM1.classList.add('range1');
        }
    }
    sum.innerHTML = ans;
    if (ans >= 0 && ans <= 105) {
        elementSLIDE.classList.add('slide6');
    } else if (ans > 105 && ans <= 150) {
        elementSLIDE.classList.add('slide5');
    } else if (ans > 150 && ans <= 180) {
        elementSLIDE.classList.add('slide4');
    } else if (ans > 180 && ans <= 210) {
        elementSLIDE.classList.add('slide3');
    } else if (ans > 210 && ans <= 270) {
        elementSLIDE.classList.add('slide2');
    } else if (ans > 270 && ans <= 300) {
        elementSLIDE.classList.add('slide1');
    }
}