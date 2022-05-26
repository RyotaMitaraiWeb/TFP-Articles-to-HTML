import { addBigSprites } from './modules/addBigSprites.js';
import { addSmallSprites } from './modules/addSmallSprites.js';
import { removeUnneededMarkup } from './modules/removeUnneededMarkup.js';
import { replaceLinks } from './modules/replaceLinks.js';
window.addEventListener('load', () => {
    const inputField = document.querySelector('#article');
    const spotlightCheckbox = document.querySelector('#spotlight');
    const heldItemCheckbox = document.querySelector('#heldItem');
    const twoSetsCheckbox = document.querySelector('#twoSets');
    const threeSetsCheckbox = document.querySelector('#threeSets');
    const scriptCheckbox = document.querySelector('#script');
    const statsCheckbox = document.querySelector('#stats');
    let script, article, style;
    const result = document.querySelector('#result');
    const convertBtn = document.querySelector('#convert');
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
    });
});
//# sourceMappingURL=script.js.map