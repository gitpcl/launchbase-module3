// Select modal overlay class
const modalOverlay = document.querySelector('.modal-overlay');

//Select cards - 6 cards total
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id");
        window.location.href = `/video?id=${videoId}`
    })
}