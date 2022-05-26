const markupToBeRemoved: string[] = ['SPOILER', 'ISPOILER', 'FONT', 'SIZE', 'QUOTE', 'CENTER',
    'LEFT', 'RIGHT', 'CODE', 'ICODE', 'INDENT', 'EMAIL', 'PLAIN', 'HIDE', 'ATTACH'];

export function removeUnneededMarkup(article: string): string {
    for (const markup of markupToBeRemoved) {
        article = removeMarkup(article, markup);
    }

    return article;
}

function removeMarkup(article: string, markup: string): string {
    return article
        .replace(RegExp(`\\[${markup}.*?\\]`, 'gmi'), '')
        .replace(RegExp(`\\[/${markup}.*?\\]`, 'gmi'), '');
}