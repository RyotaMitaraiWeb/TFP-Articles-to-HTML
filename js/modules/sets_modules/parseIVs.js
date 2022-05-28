export function parseIVs(article) {
    const ivs = article.match(/^IVs: .*?(?=\n\t<li>-.*?<\/li>)/gmi);
    if (ivs !== null) {
        for (const iv of ivs) {
            article = article.replace(RegExp(`^${iv}$`, 'gmi'), `\t<li>${iv}</li>placeholder`);
        }
    }
    return article;
}
//# sourceMappingURL=parseIVs.js.map