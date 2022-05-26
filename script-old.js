function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function () {
    let textarea = document.querySelector('#article');
    let spotlight = document.querySelector('#spotlight');
    let heldItem = document.querySelector('#heldItem');
    let twoSets = document.querySelector('#twoSets');
    let threeSets = document.querySelector('#threeSets');
    let scriptCheckbox = document.querySelector('#script');
    let stats = document.querySelector('#stats');
    let script = '';
    let article = '';
    let style = '';

    let result = document.querySelector('#result');
    let convert = document.querySelector('#convert');

    convert.onclick = function () {
        result.value = '';
        style = '';
        script = '';
        article = textarea.value;

        function removeUnneededMarkup() {

            function removeMarkup(markup) {
                article = article
                .replace(new RegExp(`\\[${markup}.*?\\]`, 'gmi'), '')
                .replace(new RegExp(`\\[/${markup}.*?\\]`, 'gmi'), '')
            }
        
            removeMarkup('SPOILER');
            removeMarkup('ISPOILER');
            removeMarkup('FONT');
            removeMarkup('SIZE');
            removeMarkup('QUOTE');
            removeMarkup('CENTER');
            removeMarkup('LEFT');
            removeMarkup('RIGHT');
            removeMarkup('CODE');
            removeMarkup('ICODE');
            removeMarkup('INDENT');
            removeMarkup('EMAIL');
            removeMarkup('PLAIN');
            removeMarkup('HIDE');
            removeMarkup('ATTACH');

            /* Some markups are purposelly not removed */

        }

        function replaceLinks() {
            let links = article.match(/\[URL.*?\].*?\[\/URL\]/gm);

            let anchor = '';

            if (links) {
                links.forEach(item => {
                    anchor = item
                        .replace('[URL', '<a href')
                        .replace('=\'', '="')
                        .replace('\']', '" target="_blank">')
                        .replace('[/URL]', '</a>')
                        .replace('https:', '')
                        .replace('http:', '')
                        .replace('//www.smogon.com', '');

                    article = article.replace(item, anchor);
                });
            }
        }

        function addBigSprites() {
            let sprites = article.match(/:[a-z][a-z]\/.*?:/gi);
            let gen = '';
            let pokemon = '';
            let capitalizedPokemon = '';
            let directory = '';
            let extension = '';

            // edge cases regarding some inconsistencies with names between Smogon and PS
            // also puts in the alt attribute "Alolan / Galarian / Mega / Tapu [Pokemon]"
            let tapu = '';
            let mega = '';
            let alola = '';
            let galar = '';
            let moo = ''; // Jangmo-o line


            if (sprites) {
                sprites.forEach(item => {
                    gen = item[1] + item[2];
                    pokemon = (item.replace(`:${gen}/`, '').replace(':', '')).toLowerCase();
                    capitalizedPokemon = pokemon.replace(pokemon[0], pokemon[0].toUpperCase());
                    extension = 'png';

                    if (gen === 'bw') {
                        directory = 'gen5ani';
                        extension = 'gif';
                    } else if (gen === 'dp') {
                        directory = 'gen4';
                    } else if (gen === 'rs') {
                        directory = 'gen3';
                    } else if (gen === 'gs') {
                        directory = 'gen2'
                    } else if (gen === 'rb') {
                        directory = 'gen1'
                    } else {
                        directory = 'ani';
                        extension = 'gif';
                    }

                    if (pokemon === 'nidoran-m') {
                        article = article.replace(item, `<img src="//play.pokemonshowdown.com/sprites/${directory}/nidoranm.${extension}" alt="Nidoran-M" />`);
                    } else if (pokemon === 'nidoran-f') {
                        article = article.replace(item, `<img src="//play.pokemonshowdown.com/sprites/${directory}/nidoranf.${extension}" alt="Nidoran-F" />`);
                    } else if (pokemon === 'mr-mime') {
                        article = article.replace(item, `<img src="//play.pokemonshowdown.com/sprites/${directory}/mrmime.${extension}" alt="Mr. Mime" />`)
                    } else if (pokemon === 'mr-mime-galar') {
                        article = article.replace(item, `<img src="//play.pokemonshowdown.com/sprites/${directory}/mrmime-galar.${extension}" alt="Galarian Mr. Mime" />`)
                    } else if (pokemon.startsWith('tapu')) {
                        tapu = /-.*?[a-z][a-z][a-z][a-z]/.exec(pokemon)[0];
                        tapu = tapu.replace('-', '');
                        article = article.replace(item, `<img src="//play.pokemonshowdown.com/sprites/${directory}/tapu${tapu}.${extension}" alt="Tapu ${tapu[0].toUpperCase() + tapu.slice(1)}" />`);
                    } else if (pokemon.endsWith('mo-o')) { // Jangmo-o line
                        moo = pokemon.replace('-', '');
                        article = article.replace(item, `<img src="//play.pokemonshowdown.com/sprites/${directory}/${pokemon}.${extension}" alt="${capitalizedPokemon}" />`);
                    } else if (pokemon.includes('-alola')) {
                        position = pokemon.indexOf('-alola');
                        alola = capitalizedPokemon.slice(0, position);
                        article = article.replace(item, `<img src="//play.pokemonshowdown.com/sprites/${directory}/${pokemon}.${extension}" alt="Alolan ${alola}" />`);
                    } else if (pokemon.includes('-galar')) {
                        position = pokemon.indexOf('-galar');
                        galar = capitalizedPokemon.slice(0, position);
                        article = article.replace(item, `<img src="//play.pokemonshowdown.com/sprites/${directory}/${pokemon}.${extension}" alt="Galarian ${galar}" />`);
                    } else if (pokemon.includes('-mega')) {
                        position = pokemon.indexOf('-mega');
                        mega = capitalizedPokemon.slice(0, position);
                        article = article.replace(item, `<img src="//play.pokemonshowdown.com/sprites/${directory}/${pokemon}.${extension}" alt="Mega ${mega}" />`);
                    } else {
                        article = article.replace(item, `<img src="//play.pokemonshowdown.com/sprites/${directory}/${pokemon}.${extension}" alt="${capitalizedPokemon}" />`);
                    }
                });
            }
        }

        function addSmallSprites() {
            let minisprites = article.match(/:[a-z]+:/gmi);
            if (minisprites) {
                minisprites = minisprites.filter(item => !item.includes(' '));
                minisprites.forEach(item => {
                    pokemon = item.replace(/:/gmi, '').toLowerCase();
                    capitalizedPokemon = pokemon.replace(pokemon[0], pokemon[0].toUpperCase());
                    article = article.replace(new RegExp(item, 'gmi'), `<img src="/dex/media/sprites/xyicons/${pokemon}.png" alt="${capitalizedPokemon}" />`);
                });
            }
        }

        function escape() {
            article = article
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
                .replace(/Poke/gm, 'Pok&eacute;')
                .replace(/—/gmi, '&mdash;')
                .replace(/[“”]/gmi, '"')
                .replace(/[‘’]/gmi, '\'');
        }

        function addHeadings() {
            let h2 = article.match(/^\[B\].*?\[\/B\]\n/gmi); // doesn't match paragraphs starting with [B] (unless the whole paragraph is bolded)

            if (h2) {
                h2.forEach(item => {
                    pokemon = item.replace('[B]', '').replace('[/B]\n', '');
                    article = article.replace(item, `<h2>${pokemon}</h2>\n`);
                });
            }
        }

        function addLists() {
            let list = article.match(/\[LIST.*?\]/gmi);
            let type = '';
            let li = article.match(/\[\*\].*?\n/gmi);
            let content = '';

            if (list) {
                list.forEach(item => {
                    if (item.includes('=')) {
                        type = 'ol';
                    } else {
                        type = 'ul'
                    }

                    article = article.replace(item, `<${type}>`).replace(/\[\/LIST\]/i, `</${type}>`);
                    if (li) {
                        li.forEach(item => {
                            content = item.replace('[*]', '').replace('\n', '');
                            article = article.replace(item, `\t<li>${content}</li>\n`);
                        });
                    }
                });
            }
        }

        function parseBBCodeFormatting() {
            article = article
                .replace(/\[B\]/gmi, '<strong>').replace(/\[\/B\]/gmi, '</strong>') // bold
                .replace(/\[I\]/gmi, '<em>').replace(/\[\/I\]/gmi, '</em>') // italic
                .replace(/\[U\]/gmi, '<span style="text-decoration: underline;">').replace(/\[\/U\]/gmi, '</span>') // underline
                // ^^NOTE: <u> does NOT mean underlined text, it means unarticulated annotation in HTML5, so use text-decoration here
                .replace(/\[S\]/gmi, '<span style="text-decoration: line-through;">').replace(/\[\/S\]/gmi, '</span>'); // strikethrough

            // NOTE: I am aware strong and em don't mean bold and italic, but it's what's used in the HTMLs commonly, so *shrug*
        }

        function addColors() {
            let colors = article.match(/\[COLOR=.*?\]/gmi);
            if (colors) {
                colors.forEach(item => {
                    let color = item.match(/(?<=\=).*?(?=\])/gmi)[0];
                    article = article
                    .replace(new RegExp(`\\[COLOR=${color}\\]`, 'gmi'), `<span style="color: ${color}";>`)
                    .replace(/\[\/COLOR\]/gmi, '</span>');
                })
            }
        }

        function parseSets() {
            
            /* Moves */

            article = article.replace(/(?<=^- Hidden Power )\[/gmi, ''); // gets around an issue with some Hidden Power formattings
            let moves = article.match(/^-.*?\n/gmi);
            let move = '';

            if (moves) {
                moves.forEach(item => {
                    move = item.replace('\n', '');
                    article = article
                        .replace(new RegExp(`^${move}$`, 'gmi'), `\t<li>${move}</li>placeholder`)
                        // adds "placeholder" so that the rest of the set is matched with more precision
                        .replace(' </li>', '</li>') // ^ first three moves
                        .replace(/(?<=^\t<li>-.*?<\/li>)placeholder\n(?=\n|[a-z])/gmi, '\n</ul>placeholder\n') // last move
                        .replace(/\]<\/li>/gmi, '</li>'); // Hidden Power right bracket
                });
            }

            /* IVs */

            let ivs = article.match(/^IVs: .*?(?=\n\t<li>-.*?<\/li>)/gmi);

            if (ivs) {
                ivs.forEach(item => {
                    article = article.replace(new RegExp(`^${item}$`, 'gmi'), `\t<li>${item}</li>placeholder`);
                });
            }

            /* Nature */

            let natures = article.match(/^.*?Nature.*?(?=\n)/gm);
            let slashedNature = [];

            if (natures) {
                slashedNature = natures.filter(item => item.includes(' / '));
            }

            if (slashedNature) {
                slashedNature.forEach(item => {
                    article = article.replace(new RegExp(`^${item}`, 'gm'), `\t<li>${item}</li>placeholder`)
                })
            }

            if (natures) {
                natures.forEach(item => {
                    article = article.replace(new RegExp(`^${item}`, 'gm'), `\t<li>${item}</li>placeholder`);
                });
            }

            /* Level */

            let levels = article.match(/^Level: [0-9]*?.*?(?=\n)/gm);

            if (levels) {
                levels.forEach(item => {
                    article = article.replace(new RegExp(`^${item}$`, 'gm'), `\t<li>${item}</li>placeholder`);
                });
            }

            /* Shiny */

            article = article.replace(/^Shiny: Yes.*?(?=\n)/gm, '\t<li>Shiny: Yes</li>placeholder');

            /* EVs */

            let evs = article.match(/^EVs: .*?(?=\n\t<li>.*?<\/li>)/gm);

            if (evs) {
                evs.forEach(item => {
                    article = article.replace(new RegExp(`^${item}$`, 'gm'), `\t<li>${item}</li>placeholder`);
                });
            }

            /* Ability */

            let abilities = article.match(/^Ability: .*?$/gm);

            if (abilities) {
                abilities.forEach(item => {
                    article = article.replace(new RegExp(`^${item}$`, 'gmi'), `\t<li>${item}</li>placeholder`);
                });
            }

            /* Final Parsing */

            let setName = article.match(/^[a-z0-9].*?(?=\n\t<li>.*?<\/li>placeholder)/gmi);

            if (setName) {
                setName.forEach(item => {
                    item = item.replace(/\(/gmi, '\\(').replace(/\)/gmi, '\\)');
                    let set = item;
                    if (spotlight.checked) {
                        pokemon = item.match(/^.*?(?= @)/gmi);
                        if (pokemon) {
                            set = item.replace(new RegExp(pokemon, 'gmi'), `<strong>${pokemon}</strong>`);
                        } else {
                            set = `<strong>${item}</strong>`;
                        }
                    } 
                    article = article.replace(new RegExp(`^${item}(?=$\n\t<li>.*?<\/li>placeholder)`, 'mi'), `<ul class="set">\n\t<li>${set}</li>`);
                });
            }

            if (heldItem.checked) {
                let items = article.match(/(?<=<li>.*? @ ).*?(?=<\/li>$\n)/gmi);
                let setItems = [];
                let itemUrl = '';
                
                if (items) {
                    items.forEach(item => {
                        itemUrl = '';
                        setItems = item.split(' / ');
                        for (let el of setItems) {
                            itemUrl += `<img src="/dex/media/sprites/xyitems/${el.toLocaleLowerCase().replace(/ /gmi, '-')}.png" alt="${el}" />`
                        }
                        itemUrl = itemUrl.split('/><img').join('/> / <img') + ' ';
                        article = article.replace(/<li>(?!<img)(?=.*? @ .*?<\/li>)/m, `<li>${itemUrl}`);
                    });
                }
            }

            /* Trimming */

            article = article
                .replace(/>placeholder/gmi, '>')
                .replace(/  <\/li>/gmi, '</li>')
                .replace(/ <\/li>/gmi, '</li>')
                .replace(/\\\(/gmi, '(')
                .replace(/\\\)/gmi, ')')
        }

        function parseTables() {
            let tables = article.match(/\[TABLE.*?\]/gmi);
            let tr = article.match(/\[TR.*?\]/gmi);
            let th = article.match(/\[TH.*?\]/gmi);
            let td = article.match(/\[TD.*?\]/gmi);

            if (tables) {
                tables.forEach(item => {
                    article = article.replace(item, '<table>').replace(/\[\/TABLE.*?\]/gmi, '</table>');
                });
            }

            if (tr) {
                tr.forEach(item => {
                    article = article.replace(item, '\t<tr>').replace(/\[\/TR.*?\]/gmi, '\t</tr>');
                });
            }

            if (th) {
                th.forEach(item => {
                    article = article.replace(item, '\t\t<th>').replace(/\[\/TH.*?\]/gmi, '</th>');
                });
            }

            if (td) {
                td.forEach(item => {
                    article = article.replace(item, '\t\t<td>').replace(/\[\/TD.*?\]/gmi, '</td>');
                });
            }
        }

        function addParagraphs() {
            article = article.replace(/^(?=[a-z0-9])/gmi, '<p>');
            let paragraph = article.match(/^<p>/gmi);

            /* add special styling to last paragraph */
            if (paragraph) {
                let last = paragraph.length - 1;
                let count = 0;
                paragraph.forEach(item => {
                    article = article.replace(/^\<p\>/mi, `${count}<p>`);
                    count++;
                });

                count = 0;

                paragraph.forEach(item => {
                    if (count === last) {
                        article = article.replace(new RegExp(`^${count}<p>`, 'mi'), '<p style="margin-bottom: 1em;">');
                    } else {
                        article = article.replace(new RegExp(`^${count}<p>`, 'mi'), '<p>');
                        count++;
                    }
                });
            }

            /* add </p> */

            article = article.replace(/(?<=<p.*?>.*?)$/gmi, '</p>');

        }

        function patchErrors() { // terrible way to fix those, but w/e, will refactor them when I feel like it
            article = article.replace(/<\/li><\/li>/gmi, '</li>');
            article = article.replace(/<li>	<li>/gmi, '<li>');
        }

        removeUnneededMarkup();

        replaceLinks();

        addBigSprites();

        addSmallSprites();

        escape();

        addHeadings();

        addLists();

        parseBBCodeFormatting();

        addColors();

        parseSets();

        parseTables();

        addParagraphs();

        patchErrors();

        if (spotlight.checked) {
            style += `

    ul.set > li:first-child {
        letter-spacing: 1.2pt;
    }`;
        }

        if (twoSets.checked) {
            style += `

    div.two-sets {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }`;
        }

        if (threeSets.checked) {
            style += `

    div.three-sets {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }`;
        }

        if (scriptCheckbox.checked) {
            script = `
\<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"\>\<\/script\>
\<script type="text/javascript"\>
/* code here */
\<\/script\>`
        }

        if (stats.checked) {
            style += `

    ul.stats li {
        height: 15px;
        padding: 0px 3px;
        margin-bottom: 5px;
        color: white;
        text-align: right;
        font-style: italic;
        font-weight: bold;
        font-size: 11px;
    }

    ul.stats li.hp {
        background: #FC5B59;
    }

    ul.stats li.atk {
        background: #F7AB78;
    }

    ul.stats li.def {
        background: #FFDE7F;
    }

    ul.stats li.spa {
        background: #9BB7F6;
    }

    ul.stats li.spd {
        background: #A5DB90;
    }

    ul.stats li.spe {
        background: #F397B0;
    }`
        }

        result.value = `[title]
Insert title here (do not escape letters here, simply leave them as they are)

[head]
<link href="/articles/articles.css" type="text/css" rel="stylesheet" />
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" />
<style type="text/css">
    hr {
        margin-top: 3%;
        margin-bottom: 3%;
    }

    h2 {
        margin-bottom: 5px;
    }

    p {
        margin-bottom: 2em;
    }

    ul.set {
        padding-left: 0;
        margin-bottom: 2em;
    }${style}
</style>
${script}
[page]
<div class="author">By <a href="/forums/members/PLACEHOLDER.ID/" target="_blank">PLACEHOLDER</a>. Released: .</div>

<table id="articlehead">
    <tr>
        <td class="left"><a href="">&laquo; Previous Article</a></td>
        <td class="middle"><a href="/articles/"><i class="fa fa-home" aria-hidden="true"></i></a></td>
        <td class="right"><span class="inactive-link">Next Article &raquo;</span></td>
    </tr>
</table>

<div class="alignment">
    <img src="/articles/images/name-of-the-art.extension" alt="Brief description" />
    <p class="artist">Art by <a href="/forums/members/PLACEHOLDER.ID/" target="_blank">x</a>.</p>
</div>

${article}

<div class="author2">HTML by <a href="/forums/members/ryota-mitarai.318452/" target="_blank">Ryota Mitarai</a>.</div>

<table id="articlefoot">
    <tr>
        <td class="left"><a href="">&laquo; Previous Article</a></td>
        <td class="middle"><a href="/articles/"><i class="fa fa-home" aria-hidden="true"></i></a></td>
        <td class="right"><span class="inactive-link">Next Article &raquo;</span></td>
    </tr>
</table>`;
    }

    let sample = document.querySelector('#sample');
    let sampleOutput = document.querySelector('#sampleOutput');
    let convertSample = document.querySelector('#convertSample');
    let input = '';
    let team = [];
    let output = [];
    convertSample.addEventListener('click', function() {
        output = [];
        input = sample.value;
        team = input.split('\n\n');
        team.forEach(item => {
            if (item) {
                item = '<p>' + item;
                item = item.replace(/$/gm, '<br />') + '\n</p>';
                output.push(item)
            }
        });
        output = output.join('\n\n<br />\n\n');
        sampleOutput.value = output;
    });
});