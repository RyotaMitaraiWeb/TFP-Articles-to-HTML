import { main } from './main.js';
import { generateTeam } from './modules/generateTeam.js';
window.addEventListener('load', () => {
    const convertBtn = document.querySelector('#convert');
    convertBtn.addEventListener('click', event => {
        event.preventDefault();
        main();
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