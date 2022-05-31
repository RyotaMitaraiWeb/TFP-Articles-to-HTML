export function generateArticle(article, spotlight, twoSets, threeSets, script, stats) {
    let style = '', scriptSrc = '';
    if (spotlight) {
        style += `

    ul.set > li:first-child {
        letter-spacing: 1.2pt;
    }`;
    }
    if (twoSets) {
        style += `

    div.two-sets {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }`;
    }
    if (threeSets) {
        style += `

    div.three-sets {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }`;
    }
    if (script) {
        scriptSrc = `
\<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"\>\<\/script\>
\<script type="text/javascript"\>
/* code here */
\<\/script\>`;
    }
    if (stats) {
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
    return `[title]
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
${scriptSrc}
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
//# sourceMappingURL=generateArticle.js.map