export function addHeadings(article: string): string {
    const headings: RegExpMatchArray | null = article.match(/^\[B\].*?\[\/B\]\n/gmi); 
    // doesn't match paragraphs starting with [B] (unless the whole paragraph is bolded)

    if (headings !== null) {
        for (const text of headings) {
            const h2: string = text.replace(/\[b\]/i, '').replace(/\[\/b\]\n/i, '');
            article = article.replace(text, `<h2>${h2}</h2>\n`);
        }
    }

    return article;
}