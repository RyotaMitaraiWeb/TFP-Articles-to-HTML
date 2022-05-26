export function addSmallSprites(article: string): string {
    const textSurroundedByColons: RegExpMatchArray | null = article.match(/:[a-z]+:/gmi);
    if (textSurroundedByColons !== null) {
        const minisprites: string[] = textSurroundedByColons.filter(text => !text.includes(' '));
        for (const minisprite of minisprites) {
            const pokemon: string = minisprite.replace(/:/g, '');
            const capitalizedPokemon: string = pokemon[0].toUpperCase() + pokemon.slice(1);
            article = article.replace(RegExp(minisprite, 'gmi'), `<img src="/dex/media/sprites/xyicons/${pokemon}.png" alt="${capitalizedPokemon}" />`);
        }
    }

    return article;
}