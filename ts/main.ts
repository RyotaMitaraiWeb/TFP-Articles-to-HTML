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

const inputField: HTMLTextAreaElement = <HTMLTextAreaElement>document.querySelector('#article');
const spotlightCheckbox: HTMLInputElement = <HTMLInputElement>document.querySelector('#spotlight');
const heldItemCheckbox: HTMLInputElement = <HTMLInputElement>document.querySelector('#heldItem');
const twoSetsCheckbox: HTMLInputElement = <HTMLInputElement>document.querySelector('#twoSets');
const threeSetsCheckbox: HTMLInputElement = <HTMLInputElement>document.querySelector('#threeSets');
const scriptCheckbox: HTMLInputElement = <HTMLInputElement>document.querySelector('#script');
const statsCheckbox: HTMLInputElement = <HTMLInputElement>document.querySelector('#stats');

let article: string;

const result: HTMLTextAreaElement = <HTMLTextAreaElement>document.querySelector('#result');

export function main(): void {
    result.value = '';
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

    // patch some errors
    article = article.replace(/<\/li><\/li>/gmi, '</li>');
    article = article.replace(/<li>	<li>/gmi, '<li>');

    result.value = generateArticle(article, spotlightCheckbox.checked, twoSetsCheckbox.checked, threeSetsCheckbox.checked,
        scriptCheckbox.checked, statsCheckbox.checked);
}