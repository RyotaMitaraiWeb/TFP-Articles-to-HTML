export function handleRegionalForme(pokemon: string) {
    type adjectiveKey = keyof typeof formeAdjectives

    let forme: adjectiveKey;

    if (pokemon.includes('-mega')) {
        forme = 'mega';
    } else if (pokemon.includes('-alola')) {
        forme = 'alola';
    } else if (pokemon.includes('-galar')) {
        forme = 'galar';
    } else {
        forme = 'default';
    }

    return {
        forme,
        adjective: formeAdjectives[forme],
        valid: forme !== 'default',
    }
}

const formeAdjectives = {
    'mega': 'Mega',
    'alola': 'Alolan',
    'galar': 'Galarian',
    'default': 'default',
};