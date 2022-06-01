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
const spotlightCheckbox = document.querySelector('#spotlight');
const heldItemCheckbox = document.querySelector('#heldItem');
const twoSetsCheckbox = document.querySelector('#twoSets');
const threeSetsCheckbox = document.querySelector('#threeSets');
const scriptCheckbox = document.querySelector('#script');
const statsCheckbox = document.querySelector('#stats');
let article;
export function main(input) {
    article = input;
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
    return generateArticle(article, spotlightCheckbox.checked, twoSetsCheckbox.checked, threeSetsCheckbox.checked, scriptCheckbox.checked, statsCheckbox.checked);
}
//# sourceMappingURL=main.js.map