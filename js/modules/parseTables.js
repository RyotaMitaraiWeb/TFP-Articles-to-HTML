export function parseTables(article) {
    article = replaceElements(article, 'TABLE');
    article = replaceElements(article, 'TR');
    article = replaceElements(article, 'TH');
    article = replaceElements(article, 'TD');
    return article;
}
function replaceElements(article, tag) {
    const elements = article.match(RegExp(`\\[${tag}\\]`, 'gmi'));
    if (elements !== null) {
        for (const element of elements) {
            article = article
                .replace(element, `<${tag.toLocaleLowerCase()}>`)
                .replace(RegExp(`\\[\\/${tag}.*?\\]`, 'gmi'), `</${tag.toLocaleLowerCase()}>`);
        }
    }
    return article;
}
//# sourceMappingURL=parseTables.js.map