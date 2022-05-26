export function addLists(article) {
    const list = article.match(/\[LIST.*?\]/gmi);
    if (list) {
        let type;
        for (const listItem of list) {
            if (listItem.includes('=')) {
                type = 'ol';
            }
            else {
                type = 'ul';
            }
            const li = article.match(/\[\*\].*?\n/gmi);
            article = article.replace(listItem, `<${type}>`).replace(/\[\/LIST\]/i, `</${type}>`);
            if (li) {
                li.forEach(item => {
                    const content = item.replace('[*]', '').replace('\n', '');
                    article = article.replace(item, `\t<li>${content}</li>\n`);
                });
            }
        }
    }
    return article;
}
//# sourceMappingURL=addLists.js.map