export function parseNatures(article) {
    const natures = article.match(/^.*?Nature(?=\n\t\<li\>)/gm);
    if (natures !== null) {
        for (const nature of natures) {
            article = article.replace(RegExp(`^${nature}`, 'gm'), `\t<li>${nature}</li>placeholder`);
        }
    }
    return article;
}
//# sourceMappingURL=parseNatures.js.map