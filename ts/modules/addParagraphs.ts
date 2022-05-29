export function addParagraphs(article: string): string {
    article = article.replace(/^(?=[a-z0-9])/gmi, '<p>');
    const paragraph: RegExpMatchArray | null = article.match(/^<p>/gmi);

    /* add special styling to last paragraph */
    if (paragraph !== null) {
        const last: number = paragraph.length - 1;

        for (let count: number = 0; count <= last; count++) {
            article = article.replace(/^\<p\>/mi, `${count}<p>`);
        }

        for (let count: number = 0; count <= last; count++) {
            if (count === last) {
                article = article.replace(RegExp(`^${count}<p>`, 'mi'), '<p style="margin-bottom: 1em;">');
            } else {
                article = article.replace(RegExp(`^${count}<p>`, 'mi'), '<p>');
            }
        }
    }

    /* add </p> */

    return article.replace(/(?<=<p.*?>.*?)$/gmi, '</p>');
}