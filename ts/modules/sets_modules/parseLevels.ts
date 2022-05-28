export function parseLevels(article: string): string {
    const levels: RegExpMatchArray | null = article.match(/^Level: [0-9]*?.*?(?=\n)/gm);

    if (levels !== null) {
        for (const level of levels) {
            article = article.replace(RegExp(`^${level}$`, 'gm'), `\t<li>${level}</li>placeholder`);
        }
    }

    return article;
}