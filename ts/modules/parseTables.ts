export function parseTables(article: string): string {
    // let tables = article.match(/\[TABLE.*?\]/gmi);
    // let tr = article.match(/\[TR.*?\]/gmi);
    // let th = article.match(/\[TH.*?\]/gmi);
    // let td = article.match(/\[TD.*?\]/gmi);

    article = replaceElements(article, 'TABLE');
    article = replaceElements(article, 'TR');
    article = replaceElements(article, 'TH');
    article = replaceElements(article, 'TD');

    return article;
}


function replaceElements(article: string, tag: string): string {
    const elements: RegExpMatchArray | null = article.match(RegExp(`\\[${tag}\\]`, 'gmi'));
    if (elements !== null) {
        for (const element of elements) {
            article = article
            .replace(element, `<${tag.toLocaleLowerCase()}>`)
            .replace(RegExp(`\\[\\/${tag}.*?\\]`, 'gmi'), `</${tag.toLocaleLowerCase()}>`);
        }
    }

    return article;
}