export function parseBBCodeFormatting(article) {
    return article
        .replace(/\[B\]/gmi, '<strong>').replace(/\[\/B\]/gmi, '</strong>')
        .replace(/\[I\]/gmi, '<em>').replace(/\[\/I\]/gmi, '</em>')
        .replace(/\[U\]/gmi, '<span style="text-decoration: underline;">').replace(/\[\/U\]/gmi, '</span>')
        .replace(/\[S\]/gmi, '<span style="text-decoration: line-through;">').replace(/\[\/S\]/gmi, '</span>');
}
//# sourceMappingURL=parseBBCodeFormatting.js.map