function transformElement(element, offsetX, offsetY) {
    element.style.transform = `translate(${offsetX}px, ${offsetY}px) rotateX(${offsetX}deg) rotateY(${offsetY}deg)`
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

        transformElement(card, offsetX, offsetY);
    })

    card.addEventListener('mouseleave', function (e) {
        transformElement(card, 0, 0);
    })
}