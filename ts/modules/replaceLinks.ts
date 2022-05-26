export function replaceLinks(article: string): string {
    const links: RegExpMatchArray | null = article.match(/\[URL.*?\].*?\[\/URL\]/gm);

    if (links !== null) {
        for (const link of links) {
            let anchor: string = link
            .replace('[URL', '<a href')
            .replace('=\'', '="')
            .replace('\']', '" target="_blank">')
            .replace('[/URL]', '</a>')
            .replace('https:', '')
            .replace('http:', '')
            .replace('//www.smogon.com', '');

            article = article.replace(link, anchor);
        }
    }

    return article;
}