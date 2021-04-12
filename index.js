let buttons = document.getElementsByTagName('button');

let activeButton = 'rounded-pill btn border border-white active-button';

let inactiveButton = 'rounded-pill btn btn-light ';

console.log('buttons', buttons);
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', (event) => {
        event.preventDefault();
        buttons[i].setAttribute('class', activeButton);
    });

    buttons[i].addEventListener('mouseleave', (event) => {
        event.preventDefault();
        buttons[i].setAttribute('class', inactiveButton + buttons[i].getAttribute('id'));
    });

}


function buttonHoverIn(event) {


}