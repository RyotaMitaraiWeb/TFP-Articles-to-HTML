export function replaceLinks(article) {
    const pureLinks = article.match(/\[URL\].*?\[\/URL\]/gm);
    if (pureLinks !== null) {
        for (const link of pureLinks) {
            const urlMatch = link.match(/(?<=\[URL\]).*?(?=\[\/URL\])/gmi);
            if (urlMatch !== null) {
                const url = transformURL(urlMatch[0]);
                article = article.replace(link, `<a href="${url}" target="_blank">${urlMatch[0]}</a>`);
            }
        }
    }
    const links = article.match(/\[URL=.*?\].*?\[\/URL\]/gm);
    if (links !== null) {
        for (const link of links) {
            const anchor = transformURL(link);
            article = article.replace(link, anchor);
        }
    }
    return article;
}
function transformURL(url) {
    return url.replace('[URL', '<a href')
        .replace('=\'', '="')
        .replace('\']', '" target="_blank">')
        .replace('[/URL]', '</a>')
        .replace('https:', '')
        .replace('http:', '')
        .replace('//www.smogon.com', '');
}
//# sourceMappingURL=replaceLinks.js.map