const markupToBeRemoved = ['SPOILER', 'ISPOILER', 'FONT', 'SIZE', 'QUOTE', 'CENTER',
    'LEFT', 'RIGHT', 'CODE', 'ICODE', 'INDENT', 'EMAIL', 'PLAIN', 'HIDE', 'ATTACH'];
export function removeUnneededMarkup(article) {
    for (const markup of markupToBeRemoved) {
        article = removeMarkup(article, markup);
    }
    return article;
}
function removeMarkup(article, markup) {
    return article
        .replace(RegExp(`\\[${markup}.*?\\]`, 'gmi'), '')
        .replace(RegExp(`\\[/${markup}.*?\\]`, 'gmi'), '');
}
//# sourceMappingURL=removeUnneededMarkup.js.map