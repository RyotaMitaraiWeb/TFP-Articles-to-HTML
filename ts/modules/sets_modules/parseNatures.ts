export function parseNatures(article: string): string {
    const natures: RegExpMatchArray | null = article.match(/^.*?Nature(?=\n\t\<li\>)/gm);

    if (natures !== null) {
        for (const nature of natures) {
            article = article.replace(RegExp(`^${nature}`, 'gm'), `\t<li>${nature}</li>placeholder`);
        }
    }
    
    return article;
}