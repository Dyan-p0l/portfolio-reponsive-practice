

const circle1 = document.getElementById('rounded1');
const circle2 = document.getElementById('rounded2');
const circle3 = document.getElementById('rounded3');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            if (entry.target.classList.contains('container3')) {
                document.getElementById('rounded1').classList.add('circ1');
                document.getElementById('rounded2').classList.add('circ2');
                document.getElementById('rounded3').classList.add('circ3');
            }
        } else {
            entry.target.classList.remove('show');
            if (entry.target.classList.contains('container3')) {
                document.getElementById('rounded1').classList.remove('circ1');
                document.getElementById('rounded2').classList.remove('circ2');
                document.getElementById('rounded3').classList.remove('circ3');
            }
            percentage(80, num1);
            percentage(76, num2);
            percentage(70, num3);
        }
    });
});

const cont3 = document.querySelector('.container3');
const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));
observer.observe(cont3);

function scrollToEl (ElSelector){
    
    const el = document.querySelector(ElSelector);

    el.scrollIntoView({behavior:'smooth'}, alignToTop = true);
    if (!el.classList.contains('container3')) {
        circle1.classList.remove('circ1');
        circle2.classList.remove('circ2');
        circle3.classList.remove('circ3');
    }
    
}

const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');
const link4 = document.querySelector('.link4');

link1.addEventListener('click', () => scrollToEl('.logonijp'));
link2.addEventListener('click', () => scrollToEl('.container2'));
link3.addEventListener('click', () => scrollToEl('.container3'));
link4.addEventListener('click', () => scrollToEl('.container'));



