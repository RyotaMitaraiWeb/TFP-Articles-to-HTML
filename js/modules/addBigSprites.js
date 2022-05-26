export function addBigSprites(article) {
    const sprites = article.match(/:[a-z][a-z]\/.*?:/gi);
    let gen;
    let pokemon;
    let capitalizedPokemon;
    let directory;
    let extension;
    if (sprites !== null) {
        for (const sprite of sprites) {
            gen = sprite[1] + sprite[2];
            pokemon = (sprite.replace(`:${gen}/`, '').replace(':', '').replace(/ /g, '-')).toLowerCase();
            capitalizedPokemon = pokemon.replace(pokemon[0], pokemon[0].toUpperCase());
            directory = directories[gen] || 'ani';
            extension = determineExtension(directory);
            const edgeCase = edgeCaseNames[pokemon];
            if (edgeCase !== undefined) {
                article = article
                    .replace(sprite, `<img src="//play.pokemonshowdown.com/sprites/${directory}/${edgeCase.name}.${extension}" alt="${edgeCase.alt}" />`);
            }
            else {
                const regionalForme = handleRegionalForme(pokemon);
                if (regionalForme.valid) {
                    const adjective = `${regionalForme.adjective} ${capitalizedPokemon.replace(/(-mega|-alola|-galar)/gmi, '')}`;
                    article = article
                        .replace(sprite, `<img src="//play.pokemonshowdown.com/sprites/${directory}/${pokemon}-${regionalForme.forme}.${extension}" alt="${adjective}" />`);
                }
                else {
                    article = article.replace(sprite, `<img src="//play.pokemonshowdown.com/sprites/${directory}/${pokemon}.${extension}" alt="${capitalizedPokemon}" />`);
                }
            }
        }
    }
    return article;
}
function handleRegionalForme(pokemon) {
    const formeAdjectives = {
        'mega': 'Mega',
        'alola': 'Alolan',
        'galar': 'Galarian',
        'default': 'default',
    };
    let forme;
    if (pokemon.includes('-mega')) {
        forme = 'mega';
    }
    else if (pokemon.includes('-alola')) {
        forme = 'alola';
    }
    else if (pokemon.includes('-galar')) {
        forme = 'galar';
    }
    else {
        forme = 'default';
    }
    return {
        forme,
        adjective: formeAdjectives[forme],
        valid: forme !== 'default',
    };
}
function determineExtension(directory) {
    if (directory.includes('ani')) {
        return 'gif';
    }
    return 'png';
}
;
const directories = {
    'bw': 'gen5ani',
    'dp': 'gen4',
    'rs': 'gen3',
    'gs': 'gen2',
    'rb': 'gen1',
};
;
const edgeCaseNames = {
    'nidoran-m': {
        name: 'nidoranm',
        alt: 'Nidoran-M'
    },
    'nidoran-f': {
        name: 'nidoranf',
        alt: 'Nidoran-F',
    },
    'mr-mime': {
        name: 'mrmime',
        alt: 'Mr. Mime',
    },
    'mr-mime-galar': {
        name: 'mrmime-galar',
        alt: 'Galarian Mr. Mime',
    },
    'tapu-lele': {
        name: 'tapulele',
        alt: 'Tapu Lele',
    },
    'tapu-bulu': {
        name: 'tapubulu',
        alt: 'Tapu Bulu',
    },
    'tapu-koko': {
        name: 'tapukoko',
        alt: 'Tapu Koko',
    },
    'tapu-fini': {
        name: 'tapufini',
        alt: 'Tapu Fini',
    },
    'jangmo-o': {
        name: 'jangmoo',
        alt: 'Jangmo-o',
    },
    'hakamo-o': {
        name: 'hakamoo',
        alt: 'Hakamo-o',
    },
    'kommo-o': {
        name: 'kommoo',
        alt: 'Kommo-o',
    },
    'ho-oh': {
        name: 'hooh',
        alt: 'Ho-Oh',
    },
};
//# sourceMappingURL=addBigSprites.js.map