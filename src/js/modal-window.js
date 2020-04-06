let catalysts = document.querySelectorAll('.button--catalyst');
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.close');

catalysts.forEach(function (catalyst) {
    catalyst.addEventListener('click', function () {
        modal.style.display = 'block';
    })
})
    ;

closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});