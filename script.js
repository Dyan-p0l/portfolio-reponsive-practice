var icon = document.getElementById("icon");

var curve = document.querySelector('.curve');

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.png";
        curve.style.backgroundImage = 'url(/svgs/black-curve.svg)';
    }else {
        icon.src = "images/moon.png";
        curve.style.backgroundImage = 'url(/svgs/curve.svg)';
    }
}

let percent_num;

let num1 = document.getElementById('number1');
let num2 = document.getElementById('number2');
let num3 = document.getElementById('number3');

function percentage(percent_num, num){
    let counter = 0;
    setInterval(()=>{
        if(counter === percent_num){
            clearInterval();
        }else{
            counter += 1;
            num.innerHTML = counter + "%";
        }
    }, 30);
}

percentage(80, num1);
percentage(76, num2);
percentage(70, num3);




