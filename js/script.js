import { addBigSprites } from './modules/addBigSprites.js';
import { addHeadings } from './modules/addHeadings.js';
import { addLists } from './modules/addLists.js';
import { addParagraphs } from './modules/addParagraphs.js';
import { addSmallSprites } from './modules/addSmallSprites.js';
import { escape } from './modules/escape.js';
import { parseBBCodeFormatting } from './modules/parseBBCodeFormatting.js';
import { parseSets } from './modules/parseSets.js';
import { parseTables } from './modules/parseTables.js';
import { parseUserTags } from './modules/parseUserTags.js';
import { removeUnneededMarkup } from './modules/removeUnneededMarkup.js';
import { replaceLinks } from './modules/replaceLinks.js';
window.addEventListener('load', () => {
    const inputField = document.querySelector('#article');
    const spotlightCheckbox = document.querySelector('#spotlight');
    const heldItemCheckbox = document.querySelector('#heldItem');
    const twoSetsCheckbox = document.querySelector('#twoSets');
    const threeSetsCheckbox = document.querySelector('#threeSets');
    const scriptCheckbox = document.querySelector('#script');
    const statsCheckbox = document.querySelector('#stats');
    let script, article, style;
    const result = document.querySelector('#result');
    const convertBtn = document.querySelector('#convert');
    convertBtn.addEventListener('click', event => {
        event.preventDefault();
        result.value = '';
        style = '';
        script = '';
        article = inputField.value;
        article = removeUnneededMarkup(article);
        article = replaceLinks(article);
        article = parseUserTags(article);
        article = addBigSprites(article);
        article = addSmallSprites(article);
        article = escape(article);
        article = addHeadings(article);
        article = addLists(article);
        article = parseBBCodeFormatting(article);
        article = parseSets(article, spotlightCheckbox.checked, heldItemCheckbox.checked);
        article = parseTables(article);
        article = addParagraphs(article);
        article = article.replace(/<\/li><\/li>/gmi, '</li>');
        article = article.replace(/<li>	<li>/gmi, '<li>');
        if (spotlightCheckbox.checked) {
            style += `

    ul.set > li:first-child {
        letter-spacing: 1.2pt;
    }`;
        }
        if (twoSetsCheckbox.checked) {
            style += `

    div.two-sets {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }`;
        }
        if (threeSetsCheckbox.checked) {
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
\<\/script\>`;
        }
        if (statsCheckbox.checked) {
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
    }`;
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
    });
    const sample = document.querySelector('#sample');
    const sampleOutput = document.querySelector('#sampleOutput');
    const convertSample = document.querySelector('#convertSample');
    convertSample.addEventListener('click', function () {
        const outputArray = [];
        const input = sample.value;
        const team = input.split('\n\n');
        team.forEach(member => {
            if (member) {
                member = '<p>' + member;
                member = member.replace(/$/gm, '<br />') + '\n</p>';
                outputArray.push(member);
            }
        });
        const output = outputArray.join('\n\n<br />\n\n');
        sampleOutput.value = output;
    });
});
//# sourceMappingURL=script.js.map