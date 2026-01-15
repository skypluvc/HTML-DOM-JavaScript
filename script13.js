const container = document.querySelector('.container');
const gambar = document.querySelector('.gambar')
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e)  {

    //cek apakah yang diklik adalah thumb
    if(e.target.className == 'thumb') {
        gambar.src = e.target.src;
        gambar.classList.add('fade');
        setTimeout(function() {
            jumbo.classList.remove('fade');
        }, 500)

        thumbs.forEach(function(thumb){
            //if(thumb.classList.contains('active) ){
            // thumb.classList.remove('active');
        //}
        thumb.className = 'thumb';

        });



        e.target.classList.add('active');
    }

})