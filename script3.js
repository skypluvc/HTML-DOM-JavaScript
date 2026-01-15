// getElementById
const judul = document.getElementById('judul')
judul.style.color = 'maroon';
judul.style.backgroundColor = 'khaki';
judul.innerHTML = 'Hai PPLG'; 
 
// getElementsByTagname()
const p = document.getElementsByTagName('p');
for( let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'khaki';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// getElementsByClassName
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini diubah dari JavaScript';