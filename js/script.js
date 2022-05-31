import { addBigSprites } from './modules/addBigSprites.js';
import { addHeadings } from './modules/addHeadings.js';
import { addLists } from './modules/addLists.js';
import { addParagraphs } from './modules/addParagraphs.js';
import { addSmallSprites } from './modules/addSmallSprites.js';
import { escape } from './modules/escape.js';
import { generateArticle } from './modules/generateArticle.js';
import { parseBBCodeFormatting } from './modules/parseBBCodeFormatting.js';
import { parseSets } from './modules/parseSets.js';
import { parseTables } from './modules/parseTables.js';
import { parseUserTags } from './modules/parseUserTags.js';
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
        article = parseUserTags(article);
        article = addBigSprites(article);
        article = addSmallSprites(article);
        article = escape(article);
        article = addHeadings(article);
        article = addLists(article);
        article = parseBBCodeFormatting(article);
        article = parseSets(article, spotlightCheckbox.checked, heldItemCheckbox.checked);
        article = parseTables(article);
        article = addParagraphs(article);
        article = article.replace(/<\/li><\/li>/gmi, '</li>');
        article = article.replace(/<li>	<li>/gmi, '<li>');
        result.value = generateArticle(article, spotlightCheckbox.checked, twoSetsCheckbox.checked, threeSetsCheckbox.checked, scriptCheckbox.checked, statsCheckbox.checked);
    });
    const sample = document.querySelector('#sample');
    const sampleOutput = document.querySelector('#sampleOutput');
    const convertSample = document.querySelector('#convertSample');
    convertSample.addEventListener('click', function () {
        const outputArray = [];
        const input = sample.value;
        const team = input.split('\n\n');
        team.forEach(member => {
            if (member) {
                member = '<p>' + member;
                member = member.replace(/$/gm, '<br />') + '\n</p>';
                outputArray.push(member);
            }
        });
        const output = outputArray.join('\n\n<br />\n\n');
        sampleOutput.value = output;
    });
});
//# sourceMappingURL=script.js.map