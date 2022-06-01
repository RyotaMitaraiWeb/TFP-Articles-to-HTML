import { main } from './main.js';
import { generateTeam } from './modules/generateTeam.js';
window.addEventListener('load', () => {
    const inputField = document.querySelector('#article');
    const convertBtn = document.querySelector('#convert');
    const result = document.querySelector('#result');
    const spotlightCheckbox = document.querySelector('#spotlight');
    const heldItemCheckbox = document.querySelector('#heldItem');
    const twoSetsCheckbox = document.querySelector('#twoSets');
    const threeSetsCheckbox = document.querySelector('#threeSets');
    const scriptCheckbox = document.querySelector('#script');
    const statsCheckbox = document.querySelector('#stats');
    convertBtn.addEventListener('click', event => {
        event.preventDefault();
        const input = inputField.value;
        result.value = main(input, spotlightCheckbox.checked, heldItemCheckbox.checked, twoSetsCheckbox.checked, threeSetsCheckbox.checked, scriptCheckbox.checked, statsCheckbox.checked);
    });
    const sample = document.querySelector('#sample');
    const sampleOutput = document.querySelector('#sampleOutput');
    const convertSample = document.querySelector('#convertSample');
    convertSample.addEventListener('click', function () {
        const input = sample.value;
        sampleOutput.value = generateTeam(input);
    });
});
//# sourceMappingURL=script.js.map