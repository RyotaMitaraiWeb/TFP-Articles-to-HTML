import { addBigSprites } from './modules/addBigSprites.js';
import { addHeadings } from './modules/addHeadings.js';
import { addSmallSprites } from './modules/addSmallSprites.js';
import { escape } from './modules/escape.js';
import { removeUnneededMarkup } from './modules/removeUnneededMarkup.js';
import { replaceLinks } from './modules/replaceLinks.js';

window.addEventListener('load', () => {
    const inputField: HTMLTextAreaElement = <HTMLTextAreaElement>document.querySelector('#article');
    const spotlightCheckbox: HTMLInputElement = <HTMLInputElement>document.querySelector('#spotlight');
    const heldItemCheckbox: HTMLInputElement = <HTMLInputElement>document.querySelector('#heldItem');
    const twoSetsCheckbox: HTMLInputElement = <HTMLInputElement>document.querySelector('#twoSets');
    const threeSetsCheckbox: HTMLInputElement = <HTMLInputElement>document.querySelector('#threeSets');
    const scriptCheckbox: HTMLInputElement = <HTMLInputElement>document.querySelector('#script');
    const statsCheckbox: HTMLInputElement = <HTMLInputElement>document.querySelector('#stats');

    let script: string, article: string, style: string;

    const result: HTMLTextAreaElement = <HTMLTextAreaElement>document.querySelector('#result');
    const convertBtn: HTMLInputElement = <HTMLInputElement>document.querySelector('#convert');

    convertBtn.addEventListener('click', event => {
        event.preventDefault();
        result.value = '';
        style = '';
        script = '';
        article = inputField.value;
        
        article = removeUnneededMarkup(article);
        article = replaceLinks(article);
        article = addBigSprites(article);
        article = addSmallSprites(article);
        article = escape(article);
        article = addHeadings(article);
        console.log(article);
                        
    });
});