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
let article;
export function main(input, spotlight, heldItem, twoSets, threeSets, script, stats) {
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
    article = parseSets(article, spotlight, heldItem);
    article = parseTables(article);
    article = addParagraphs(article);
    article = article.replace(/<\/li><\/li>/gmi, '</li>');
    article = article.replace(/<li>	<li>/gmi, '<li>');
    return generateArticle(article, spotlight, twoSets, threeSets, script, stats);
}
//# sourceMappingURL=main.js.map