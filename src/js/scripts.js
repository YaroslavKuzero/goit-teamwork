'use strict';
var catalysts = document.querySelectorAll('.button--catalyst');
var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('.close');

catalysts.forEach(function(catalyst){
    catalyst.addEventListener('click', function () {
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});