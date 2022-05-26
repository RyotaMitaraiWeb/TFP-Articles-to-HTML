export function parseBBCodeFormatting(article: string): string {
    return article
        .replace(/\[B\]/gmi, '<strong>').replace(/\[\/B\]/gmi, '</strong>') // bold
        .replace(/\[I\]/gmi, '<em>').replace(/\[\/I\]/gmi, '</em>') // italic
        .replace(/\[U\]/gmi, '<span style="text-decoration: underline;">').replace(/\[\/U\]/gmi, '</span>') // underline
        // ^^NOTE: <u> does NOT mean underlined text, it means unarticulated annotation in HTML5, so use text-decoration here
        .replace(/\[S\]/gmi, '<span style="text-decoration: line-through;">').replace(/\[\/S\]/gmi, '</span>'); // strikethrough

    // NOTE: I am aware strong and em don't mean bold and italic, but it's what's used in the HTMLs commonly, so *shrug*
}