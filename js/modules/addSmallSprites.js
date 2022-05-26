import { handleRegionalForme } from './handleRegionalFormes.js';
export function addSmallSprites(article) {
    const textSurroundedByColons = article.match(/:[a-z\-]+:/gmi);
    if (textSurroundedByColons !== null) {
        const minisprites = textSurroundedByColons.filter(text => !text.includes(' '));
        for (const minisprite of minisprites) {
            const pokemon = minisprite.replace(/:/g, '');
            const capitalizedPokemon = pokemon[0].toUpperCase() + pokemon.slice(1);
            const regionalForme = handleRegionalForme(pokemon);
            if (regionalForme.valid) {
                const adjective = `${regionalForme.adjective} ${capitalizedPokemon.replace(/(-mega|-alola|-galar)/gmi, '')}`;
                article = article.replace(RegExp(minisprite, 'gmi'), `<img src="/dex/media/sprites/xyicons/${pokemon}.png" alt="${adjective}" />`);
            }
            else {
                article = article.replace(RegExp(minisprite, 'gmi'), `<img src="/dex/media/sprites/xyicons/${pokemon}.png" alt="${capitalizedPokemon}" />`);
            }
        }
    }
    return article;
}
//# sourceMappingURL=addSmallSprites.js.map