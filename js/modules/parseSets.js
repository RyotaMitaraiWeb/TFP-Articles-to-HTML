import { parseAbilities } from './sets_modules/parseAbilities.js';
import { parseEVs } from './sets_modules/parseEVs.js';
import { parseIVs } from './sets_modules/parseIVs.js';
import { parseLevels } from './sets_modules/parseLevels.js';
import { parseMoves } from './sets_modules/parseMoves.js';
import { parseNatures } from './sets_modules/parseNatures.js';
import { finalParse } from './sets_modules/finalParse.js';
export function parseSets(article, spotlight, heldItem) {
    article = parseMoves(article);
    article = parseIVs(article);
    article = parseNatures(article);
    article = parseLevels(article);
    article = article.replace(/^Shiny: Yes.*?(?=\n)/gm, '\t<li>Shiny: Yes</li>placeholder');
    article = parseEVs(article);
    article = parseAbilities(article);
    article = finalParse(article, spotlight, heldItem);
    article = article
        .replace(/>placeholder/gmi, '>')
        .replace(/  <\/li>/gmi, '</li>')
        .replace(/ <\/li>/gmi, '</li>')
        .replace(/\\\(/gmi, '(')
        .replace(/\\\)/gmi, ')');
    return article;
}
//# sourceMappingURL=parseSets.js.map