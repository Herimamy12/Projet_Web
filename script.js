const text = "Bonjour, je suis Herimamy Naval";
const helloElement = document.getElementById('hello');

const appearanceDelay = 100;
const disappearanceDelay = 200;
const resetDelay = 1000;


for (let char of text) {
    const span = document.createElement('span');
    span.className = 'character';
    span.textContent = char === ' ' ? '\u00A0' : char;
    helloElement.appendChild(span);
}

const characters = document.querySelectorAll('.character');
let index = 0;


function animateCharacters() {
    if (index < characters.length) {
        characters[index].style.opacity = 1; 
        characters[index].style.transform = 'translateX(0)';
        index++;
        setTimeout(animateCharacters, appearanceDelay);
    } else {
        setTimeout(disappearCharacters, resetDelay);
    }
}


function disappearCharacters() {
    let reverseIndex = characters.length - 1;

    function hideCharacter() {
        if (reverseIndex >= 0) {
            characters[reverseIndex].style.transform = 'translateX(150px)';
            characters[reverseIndex].style.opacity = 0; 
            reverseIndex--;
            setTimeout(hideCharacter, disappearanceDelay);
        } else {
            resetAnimation();
        }
    }

    hideCharacter();
}


function resetAnimation() {
    index = 0;
    characters.forEach(char => {
        char.style.opacity = 0;
        char.style.transform = 'translateX(-150px)';
    });
    setTimeout(animateCharacters, resetDelay);
}

animateCharacters();

