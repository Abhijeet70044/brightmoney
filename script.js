const appleImg = document.querySelector('.apple');
const playImg = document.querySelector('.play');

appleImg.addEventListener('click', () => {
    window.open('https://www.apple.com/app-store/', '_blank');
});

playImg.addEventListener('click', () => {
    window.open('https://play.google.com/store', '_blank');
});

