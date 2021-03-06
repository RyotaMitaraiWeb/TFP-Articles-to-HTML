export function escape(article: string): string {
    return article
        .replace(/ & /gm, ' &amp; ')
        .replace(/é/gm, '&eacute;')
        .replace(/á/gm, '&aacute;')
        .replace(/í/gm, '&iacute;')
        .replace(/ó/gm, '&oacute;')
        .replace(/ú/gm, '&uacute;')
        .replace(/É/gm, '&Eacute;')
        .replace(/Á/gm, '&Aacute;')
        .replace(/Í/gm, '&Iacute;')
        .replace(/Ó/gm, '&Oacute;')
        .replace(/Ú/gm, '&Uacute;')
        .replace(/Poke(?!(r|d|s)\b)/gm, 'Pok&eacute;')
        .replace(/—/gmi, '&mdash;')
        .replace(/[“”]/gmi, '"')
        .replace(/[‘’]/gmi, '\'');
}