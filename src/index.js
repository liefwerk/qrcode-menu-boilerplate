import _ from 'lodash';
import printMe from './print.js';
import "./styles.css";
import "tailwindcss/tailwind.css"

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    const h1 = document.createElement('h1');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    h1.innerHTML = 'Titre';
    h1.classList.add('text-2xl');
    element.appendChild(h1);

    return element;
}

document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}