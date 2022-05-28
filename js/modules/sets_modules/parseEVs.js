export function parseEVs(article) {
    let evs = article.match(/^EVs: .*?(?=\n\t<li>.*?<\/li>)/gm);
    if (evs !== null) {
        for (const ev of evs) {
            article = article.replace(RegExp(`^${ev}$`, 'gm'), `\t<li>${ev}</li>placeholder`);
        }
    }
    return article;
}
//# sourceMappingURL=parseEVs.js.map