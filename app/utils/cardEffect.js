function transformElement(element, offsetX, offsetY, scale) {
    element.style.transform = `translate(${offsetX}px, ${offsetY}px) rotateX(${offsetX}deg) rotateY(${offsetY}deg) scale(${scale})`
}

export default function cardEffect() {
    const card = document.getElementById('main-card');

    const rect = card.getBoundingClientRect(); 
    var cardX = rect.x + rect.width / 2;
    var cardY = rect.y + rect.height / 2;

    card.addEventListener('mousemove', function (e) {
        var offsetX = (cardX - e.pageX)/12;
        var offsetY = (cardY - e.pageY)/12;

        console.log(offsetX);

        transformElement(card, offsetX, offsetY, 1.03);
    })

    card.addEventListener('mouseleave', function (e) {
        transformElement(card, 0, 0, 1);
    })
}