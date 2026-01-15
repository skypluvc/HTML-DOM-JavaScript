// queryselector()
const p4 = document.querySelector('#b p');
p4.style.color = 'maroon';
p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'khaki';

// querySelectorAll
const p = document.querySelectorAll('p');
for( let i = 0; 1 < p.length; i++ ) {
    p[i].style.backgroundColor = 'lightgray';
};

// ini untuk mempersempit pencarian p (saya ambil contoh paragraf ke 4)
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'Orange';