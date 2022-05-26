export function addLists(article: string): string {
    const list: RegExpMatchArray | null = article.match(/\[LIST.*?\]/gmi);

    if (list) {
        let type: string;

        for (const listItem of list) {
            if (listItem.includes('=')) {
                type = 'ol';
            } else {
                type = 'ul';
            }

            const li: RegExpMatchArray | null = article.match(/\[\*\].*?\n/gmi);
            article = article.replace(listItem, `<${type}>`).replace(/\[\/LIST\]/i, `</${type}>`);
            if (li) {
                li.forEach(item => {
                    const content: string = item.replace('[*]', '').replace('\n', '');
                    article = article.replace(item, `\t<li>${content}</li>\n`);
                });
            }
        }
    }

    return article;
}