export function finalParse(article, spotlight, heldItem) {
    const setName = article.match(/^[a-z0-9].*?(?=\n\t<li>.*?<\/li>placeholder)/gmi);
    if (setName !== null) {
        for (let set of setName) {
            const name = set.replace(/\(/gmi, '\\(').replace(/\)/gmi, '\\)');
            let spotlightSet = name;
            if (spotlight) {
                const pokemon = name.match(/^.*?(?= @)/gmi);
                if (pokemon !== null) {
                    spotlightSet = name.replace(/\\/g, '').replace(RegExp(pokemon[0], 'gmi'), `<strong>${pokemon[0]}</strong>`);
                }
                else {
                    spotlightSet = `<strong>${name}</strong>`;
                }
            }
            article = article.replace(RegExp(`^${name}(?=$\n\t<li>.*?<\/li>placeholder)`, 'mi'), `<ul class="set">\n\t<li>${spotlightSet}</li>`);
        }
    }
    if (heldItem) {
        let items = article.match(/(?<=<li>.*? @ ).*?(?=<\/li>$\n)/gmi);
        let setItems = [];
        let itemUrl = '';
        if (items !== null) {
            for (const item of items) {
                itemUrl = '';
                setItems = item.split(' / ');
                for (let el of setItems) {
                    itemUrl += `<img src="/dex/media/sprites/xyitems/${el.toLocaleLowerCase().replace(/ /gmi, '-')}.png" alt="${el}" />`;
                }
                itemUrl = itemUrl.split('/><img').join('/> / <img') + ' ';
                article = article.replace(/<li>(?!<img)(?=.*? @ .*?<\/li>)/m, `<li>${itemUrl}`);
            }
        }
    }
    return article;
}
//# sourceMappingURL=finalParse.js.map