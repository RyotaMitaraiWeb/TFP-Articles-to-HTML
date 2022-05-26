export function handleRegionalForme(pokemon) {
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
const formeAdjectives = {
    'mega': 'Mega',
    'alola': 'Alolan',
    'galar': 'Galarian',
    'default': 'default',
};
//# sourceMappingURL=handleRegionalFormes.js.map