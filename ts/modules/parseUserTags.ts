export function parseUserTags(article: string): string {
    const userTags: RegExpMatchArray | null = article.match(/\[USER='?[0-9]+'?\].*?\[\/USER\]/gmi);
    if (userTags !== null) {
        for (const tag of userTags) {
            const username: RegExpMatchArray | null = tag.match(/(?<=\]).*?(?=\[\/USER\])/gmi);
            const id: RegExpMatchArray | null = tag.match(/(?<=\[USER=)[0-9]+/gmi);
            if (username !== null && id !== null) {
                article = article.replace(tag, `<a href="/forums/members/${id}/" target="_blank">${username}</a>`);
            }
        }
    }

    return article;
}