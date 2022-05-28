export function parseAbilities(article) {
    const abilities = article.match(/^Ability: .*?$/gm);
    if (abilities !== null) {
        for (const ability of abilities) {
            article = article.replace(RegExp(`^${ability}$`, 'gmi'), `\t<li>${ability}</li>placeholder`);
        }
    }
    return article;
}
//# sourceMappingURL=parseAbilities.js.map