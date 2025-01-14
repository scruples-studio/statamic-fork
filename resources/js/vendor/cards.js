/**
 * Link cards 
 */

// https://inclusive-components.design/cards/

const cards = document.querySelectorAll('.card');
Array.prototype.forEach.call(cards, card => {
    let down, up, link = card.querySelector('a');
    card.style.cursor = 'pointer';
    card.onmousedown = () => down = +new Date();
    card.onmouseup = () => {
        up = +new Date();
        if ((up - down) < 200) {
            link.click();
        }
    };
});