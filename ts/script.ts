import { main } from './main.js';
import { generateTeam } from './modules/generateTeam.js';

window.addEventListener('load', () => {
    const convertBtn: HTMLInputElement = <HTMLInputElement>document.querySelector('#convert');
    const result: HTMLTextAreaElement = <HTMLTextAreaElement>document.querySelector('#result');

    convertBtn.addEventListener('click', event => {
        event.preventDefault();
        result.value = main();
    });
        
    const sample: HTMLTextAreaElement = <HTMLTextAreaElement>document.querySelector('#sample');
    const sampleOutput: HTMLTextAreaElement = <HTMLTextAreaElement>document.querySelector('#sampleOutput');
    const convertSample: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#convertSample');
    
    convertSample.addEventListener('click', function() {
        const input: string = sample.value;
        sampleOutput.value = generateTeam(input);
    });
});