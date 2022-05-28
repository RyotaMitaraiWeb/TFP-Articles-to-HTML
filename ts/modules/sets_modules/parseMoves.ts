export function parseMoves(article: string): string {
    article = article.replace(/(?<=^- Hidden Power )\[/gmi, ''); // gets around an issue with some Hidden Power formattings
    const moves: RegExpMatchArray | null = article.match(/^-.*?\n/gmi);

    if (moves !== null) {
        for (let move of moves) {
            move = move.replace('\n', '');
            article = article
            .replace(RegExp(`^${move}$`, 'gmi'), `\t<li>${move}</li>placeholder`)
            // adds "placeholder" so that the rest of the set is matched with more precision
            .replace(' </li>', '</li>') // ^ first three moves
            .replace(/(?<=^\t<li>-.*?<\/li>)placeholder\n(?=\n|[a-z0-9])/gmi, '\n</ul>placeholder\n') // last move
            .replace(/\]<\/li>/gmi, '</li>'); // Hidden Power right bracket
        }
    }

    return article;
}