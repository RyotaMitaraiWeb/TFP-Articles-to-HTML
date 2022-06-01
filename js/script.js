import { main } from './main.js';
import { generateTeam } from './modules/generateTeam.js';
window.addEventListener('load', () => {
    const convertBtn = document.querySelector('#convert');
    const result = document.querySelector('#result');
    convertBtn.addEventListener('click', event => {
        event.preventDefault();
        result.value = main();
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