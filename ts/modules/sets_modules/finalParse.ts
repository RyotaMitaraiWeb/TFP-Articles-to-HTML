export function finalParse(article: string, spotlight: boolean, heldItem: boolean): string {
    const setName: RegExpMatchArray | null = article.match(/^[a-z0-9].*?(?=\n\t<li>.*?<\/li>placeholder)/gmi);
    
    if (setName !== null) {
        for (let set of setName) {
            const name: string = set.replace(/\(/gmi, '\\(').replace(/\)/gmi, '\\)');
            
            let spotlightSet: string = name;
            if (spotlight) {
                const pokemon: RegExpMatchArray | null = name.match(/^.*?(?= @)/gmi);
                
                if (pokemon !== null) {       
                    spotlightSet = name.replace(/\\/g, '').replace(RegExp(pokemon[0], 'gmi'), `<strong>${pokemon[0]}</strong>`);
                } else {  
                    spotlightSet = `<strong>${name}</strong>`;
                }
            }

            article = article.replace(
                RegExp(`^${name}(?=$\n\t<li>.*?<\/li>placeholder)`, 'mi'),
                `<ul class="set">\n\t<li>${spotlightSet}</li>`);
        }
    }

    if (heldItem) {
        let items: RegExpMatchArray | null = article.match(/(?<=<li>.*? @ ).*?(?=<\/li>$\n)/gmi);
        let setItems: string[] = [];
        let itemUrl: string = '';

        if (items !== null) {
            for (const item of items) {
                itemUrl = '';
                setItems = item.split(' / ');
                for (let el of setItems) {
                    itemUrl += `<img src="/dex/media/sprites/xyitems/${el.toLocaleLowerCase().replace(/ /gmi, '-')}.png" alt="${el}" />`
                }

                itemUrl = itemUrl.split('/><img').join('/> / <img') + ' ';
                article = article.replace(/<li>(?!<img)(?=.*? @ .*?<\/li>)/m, `<li>${itemUrl}`);
            }
        }
    }

    return article;
}