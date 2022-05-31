export function replaceLinks(article: string): string {
    const pureLinks: RegExpMatchArray | null = article.match(/\[URL\].*?\[\/URL\]/gm);

    if (pureLinks !== null) {
        for (const link of pureLinks) {
            const urlMatch: RegExpMatchArray | null = link.match(/(?<=\[URL\]).*?(?=\[\/URL\])/gmi);
            if (urlMatch !== null) {
                const url: string = transformURL(urlMatch[0]);
                article = article.replace(link, `<a href="${url}" target="_blank">${urlMatch[0]}</a>`);
            }
        }
    }
    
    const links: RegExpMatchArray | null = article.match(/\[URL=.*?\].*?\[\/URL\]/gm);

    if (links !== null) {
        for (const link of links) {
            const anchor: string = transformURL(link);
            article = article.replace(link, anchor);
        }
    }

    return article;
}

function transformURL(url: string): string {
    return url.replace('[URL', '<a href')
        .replace('=\'', '="')
        .replace('\']', '" target="_blank">')
        .replace('[/URL]', '</a>')
        .replace('https:', '')
        .replace('http:', '')
        .replace('//www.smogon.com', '');
}