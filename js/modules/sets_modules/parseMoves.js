export function parseMoves(article) {
    article = article.replace(/(?<=^- Hidden Power )\[/gmi, '');
    const moves = article.match(/^-.*?\n/gmi);
    if (moves !== null) {
        for (let move of moves) {
            move = move.replace('\n', '');
            article = article
                .replace(RegExp(`^${move}$`, 'gmi'), `\t<li>${move}</li>placeholder`)
                .replace(' </li>', '</li>')
                .replace(/(?<=^\t<li>-.*?<\/li>)placeholder\n(?=\n|[a-z0-9])/gmi, '\n</ul>placeholder\n')
                .replace(/\]<\/li>/gmi, '</li>');
        }
    }
    return article;
}
//# sourceMappingURL=parseMoves.js.map