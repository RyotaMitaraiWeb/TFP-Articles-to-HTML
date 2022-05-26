export function addHeadings(article) {
    const headings = article.match(/^\[B\].*?\[\/B\]\n/gmi);
    if (headings !== null) {
        for (const text of headings) {
            const h2 = text.replace(/\[b\]/i, '').replace(/\[\/b\]\n/i, '');
            article = article.replace(text, `<h2>${h2}</h2>\n`);
        }
    }
    return article;
}
//# sourceMappingURL=addHeadings.js.map