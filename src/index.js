import _ from 'lodash';
import "./styles.css";
import "tailwindcss/tailwind.css"
import json from './menu.json5';

function component() {
    const element = document.createElement('div');
    const h1 = document.createElement('h1');

    h1.innerHTML = 'Titre';
    h1.classList.add('text-2xl');
    element.appendChild(h1);

    console.log(json.title); // output `JSON5 Example`
    console.log(json.owner.name); // output `Tom Preston-Werner`

    return element;
}

document.body.appendChild(component());

// if (module.hot) {
//     module.hot.accept('./print.js', function () {
//         console.log('Accepting the updated printMe module!');
//         printMe();
//     })
// }