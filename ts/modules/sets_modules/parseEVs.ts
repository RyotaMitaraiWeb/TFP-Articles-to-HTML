export function parseEVs(article: string): string {
    let evs: RegExpMatchArray | null = article.match(/^EVs: .*?(?=\n\t<li>.*?<\/li>)/gm);

    if (evs !== null) {
        for (const ev of evs) {
            article = article.replace(RegExp(`^${ev}$`, 'gm'), `\t<li>${ev}</li>placeholder`);
        }
    }
    return article;
}