export function parseUserTags(article) {
    const userTags = article.match(/\[USER='?[0-9]+'?\].*?\[\/USER\]/gmi);
    if (userTags !== null) {
        for (const tag of userTags) {
            const username = tag.match(/(?<=\]).*?(?=\[\/USER\])/gmi);
            const id = tag.match(/(?<=\[USER=)[0-9]+/gmi);
            if (username !== null && id !== null) {
                article = article.replace(tag, `<a href="/forums/members/${id}/" target="_blank">${username}</a>`);
            }
        }
    }
    return article;
}
//# sourceMappingURL=parseUserTags.js.map