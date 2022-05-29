# Convert The Flying Press articles to HTML code
Link to application: [https://ryotamitaraiweb.github.io/TFP-Articles-to-HTML/](https://ryotamitaraiweb.github.io/TFP-Articles-to-HTML/)

## Important things to keep in mind before using the tool
This tool is not aimed at replacing HTMLers, but rather to help them code articles faster and with less hassle, allowing them to focus more on the design or other aspects of the articles. Furthermore, the tool is imperfect and is bound to commit mistakes and/or not generate production-ready code. Due to this, you are still expected to know how to work with HTML and CSS in order to finish what the tool couldn't do.

Another thing to note is that __I do not hold any responsibility whatsoever for any faulty code or design you may submit or that makes its way to the Smogon website__. As stated, the tool is imperfect and you still need to validate, verify, or ensure through other means that the code and design work as intended.

## Usage
To convert your desired article, get the BBCode and paste it in the first text field. To take the BBCode, click "Reply" on the desired post, click the gear (if needed) and then copy the relevant part of the reply. Click the "Convert" button and copy the output from the next field (to copy the entire output, click into the field and hit `Ctrl` + `A` or, on Mac, `Cmd` + `A`).

Below the input field, you have some checkboxes which can be used to (slightly) customize the output.

## How to validate your code
To validate your article, you need to have a live preview from the SCMS (which you can only use if you are badged).

### Getting the code

Open your live preview. There's a link "Preview" next to each HTML file, which you can click to open the preview. Access the code of the whole page through "View Source". You can right-click and then select "View page source" or similar or press `Ctrl` + `U` or (on Mac) `Option` + `Cmd` + `U` on most browsers. Copy the entire code of the source.

### Validating the code

Open the [W3 Validator (validate by direct input)](https://validator.w3.org/#validate_by_input) and paste your code. In most cases, that tool should detect the DOCTYPE, but if it's not enabled, you can enable it through "More Options". Check the errors and see what you can fix. If the only errors are ones that you cannot fix (as in, you don't have access to this part of the code), then you are good. If there are errors that you can fix, fix them in a descending order and fix them one at a time. Some errors are caused directly by another, so fix the first ones so that later ones get fixed as well. 

## What is converted and how the tool converts it
### Skeleton
The tool generates the standard skeleton for articles. This includes a `[title]` (which you have to fill yourself), `[head]` with stylesheets and some CSS code and potentially some `<script>` tags, and `[page]` with the navigation bars, a placeholder for the author, placeholder for the artist, and credits to me for HTMLing (you can download the project and change the credentials locally if you want the tool to credit you as the HTMLer).

### Markup code 
#### Headings
All blocks of text that are entirely bolded are converted to `<h2>`. There's no way to detect context, so it's up to you to add subheadings

#### Bold, italic, strikethrough, and underline (`[B]`, `[I]`, `[S]`, and `[U]`)
All of those are replaced, respectively, with `<strong>`, `<em>`, `<span style="text-decoration: line-through;">`, and `<span style="text-decoration: underline;">`. Bold is added after headings have been parsed. The closing tags are also appropriately parsed. `<u>` is not used here, as it means "unarticulated annotation" in HTML5.

#### Tables
Tables are converted to their appropriate HTML equivalent; `[TABLE]` to `<table>`, `[TR]` to `<tr>`, `[TH]` to `<th>` and `[TD]` to `<td>`. In addition, rows, headers, and cells are all tabbed appropriately. No `<thead>`, `<tbody>`, or `<tfoot>` is generated.

#### Lists
Lists (`[LIST]`) are converted to `<ol>` (numbered) or `<ul>` (bullet points); they are converted to numbered if their BBCode markup has "=" and to bullet points if otherwise. List items are indented properly. The `[INDENT]` tag is not supported and is simply removed.

Nested lists currently do not get parsed correctly, so you have to fix them yourself

#### Hyperlinks
`[URL]` tags are converted to `<a>` tags with their respective URLs. All of them also have a `target` attribute set to `_blank`. In addition, "http:" and "https:" are removed from the hyperlinks and all Smogon URLs are relative (aka they do not feature "www.smogon.com"). The tool also parses user tags by converting them to hyperlinks.

#### Other markup tags
Most of the tags that were not mentioned are simply removed (the content is kept, just the tags themselves are removed). The list of those is: `[FONT]`, `[SPOILER]`, `[ISPOILER]`, `[SIZE]`, `[QUOTE]`, `[CENTER]`,  `[LEFT]`,  `[RIGHT]`,  `[CODE]`,  `[ICODE]`,  `[INDENT]`,  `[EMAIL]`,  `[PLAIN]`,  `[HIDE]`, and `[ATTACH]`. Any other tag is purposely kept (but not converted), but may be subject to be removed in the future if I decide they do not serve any good purpose.

### Sprites

#### Big sprites
Sprites defined through the formatting `:generaton/pokemon:` are converted to `<img>` tags with a `src` pointing to their files on Pokemon Showdown!'s sprite directory and an `alt` attribute correctly (in most cases) naming the Pokemon. If `generation` is "rb", "gs", "rs", or "dp", the `src` will have a `.png` extension, otherwise, it will have a `.gif` extension. In addition, "rb" points to the `gen1` directory, "gs" to the `gen2` directory, "rs" to the `gen3` directory, "dp" to the `gen4` directory, 'bw' to the `gen5ani` directory, and anything else to the `ani` directory.

This functionality also implements special cases for some Pokemon whose Smogon name is not consistent with PS's file names. Those are Nidoran-M, Nidoran-F, Mr. Mime, Galarian Mr. Mime, the Jangmo-o line, Ho-Oh Tapu Koko/Lele/Bulu/Fini, Mega Pokemon, Alolan Pokemon, and Galarian Pokemon. There may be few cases (like Zen Mode Galarian Darmanitan) that are not handled correctly (either in `src` or `alt`), so you have to fix those yourself. I may implement those too if there's a popular demand for that.

The tool does not care about whether spaces or dashes are used as separators and will parse both correctly.

`src` appropriately lacks "http:" and "https:".

If you need sprites from other directories, use your text editor or IDE's find and replace function to replace those yourself.

#### Small sprites
Sprites defined through the formatting `:generaton/pokemon:` are converted to `<img>` tags with a `src` pointing to their files on Smogon's own sprite directory and an `alt` attribute correctly (in most cases) naming the Pokemon. All of them are with a `.png` extension.

Unlike the big sprites, the small sprites functionality doesn't implement any special cases. In addition, this module only parses small sprites that use dashes and not spaces as separators, as the tool needs to make sure that it does not catch entire sentences between two colons.

It is important to note that items can also be displayed with the `:item:` formatting. __If you have a case like this, change the `xyicons` directory to `xyitems`__. I am planning on scrapping all the item names in the future and fix that, but for now, you have to fix this manually.

### Escaping
The tool will escape any ampersand (&) that has a space behind and in front of it (so it essentially escapes " & ") and convert it to `&amp;`. This means that the ampersand in "Ryota&Mitarai" won't be escaped, but the one in "Ryota & Mitarai" will be.

Accented letters (é, á, ó, í, ú) and their capital equivalents are escaped to the respective `&acute;` HTML entity.

"Poke" is converted to `Pok&eacute;`. The match is case sensitive. The words "Poker", "Poked", and "Pokes" (case sensitive) are excluded and won't be escaped. However, other variations of those (like "Pokers") will be caught in this.

Em dashes (—) are converted to `&mdash;` in case they still make it to the HTML phase.

Curly quotation marks and apostrophes (`‘`, `’`, `“`, `”`) are converted to their ASCII equivalents.

### Pokemon sets
The tool tries its best to convert Pokemon sets to their respective HTML equivalent. Keep in mind that this functionality may, at times, be somewhat fragile, although it should work for most articles.

The tool first removes all bracket squares from Hidden Power (they are still valid in the teambuilder). Afterwards, the tool catches all lines that start with "-" and wraps them in `<li>` tags. The tool adds "placeholder" at the end of each line for better precision in matching later on. Afterwards, every relevant line from the set is also wrapped in `<li>` tags. Once all of them are parsed, the set is wrapped in an `<ul>` tag with class `set` and removes the "placeholders".

The tool may also add extra details to the set with customization, as explained later on.

### Sample teams
For sample teams, copy the team and input it into the text field of the "Sample teams" section and manually add the output to your HTML code.

### Paragraphs
After most of the article has been parsed, the tool will insert a `<p>` tag at the beginning of each block of text that starts with a letter (case insensitive) or number. The last paragraph has special styling to remove the extra bottom margin. All blocks of texts are also appropriately closed with `</p>`.

The tool won't parse correctly any text of block that starts with another tag like `<strong>`.

## Customization
You can customize to an extent the final output through the checkboxes provided after the first text field. Each does the following, in that order:
- Add a "spotlight" styling to sets. This means that the Pokemon name of the set is bolded and you get some extra CSS code for letter spacing of the first line.
- Add `<img` tag(s) before the Pokemon name, if there are items in the set. The tool detects the item via @, so make sure the set doesn't have a nickname that includes the symbol.
- Generate CSS code for a `two-sets` class, which is a grid with ``template-columns: 1fr 1fr` if you want to spread two sets across the same line.
- Generate CSS code for a `three-sets` class, which is a grid with ``template-columns: 1fr 1fr 1fr` if you want to spread three sets across the same line.
- Generate `<script>` tags to be used later on. The tool will generate a CDN to jQuery and an empty `<script` tag for you to fill later.
- Generate CSS code for colored stats bars. [Here's an example](https://www.smogon.com/articles/lgpeou-modern-intro)

## Suggestions and requests
You can contact me if you think I should implement something to make the tool better. Keep in mind that some things are simply not implementable (e.g. "detecting the context for headings"). I am also open to changing the way something is outputted, provided there's a popular demand for it.

Another thing to keep in mind is that even if something is implementable, that does not mean I am going to do it. In general, if it's too much of a work to implement something and its impact would be minimal, I am most likely not going to implement it. Remember that the goal of the tool is to help you code articles more efficiently, rather than do the entire work for you.

## Contributing
You are free to contribute to this tool.

Changes to the CSS code must be done through the `.scss` file. This project uses `sass` downloaded via `npm`.

## Crediting
This tool is entirely free and you do not have pay to use it. You do not need to have permission or anything similar to use it either. In addition, no creditting is required, but it would be appreciated nevertheless (linking to this repository should suffce).

## License
[MIT](https://choosealicense.com/licenses/mit/)