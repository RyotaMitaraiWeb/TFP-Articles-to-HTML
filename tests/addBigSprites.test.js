import { expect } from "../node_modules/chai/index.mjs";
import { addBigSprites } from '../js/modules/addBigSprites.js';

describe('addBigSprites tests', () => {
    it('parses current gen sprites successfully', () => {
        expect(addBigSprites(':ss/rotom:')).to.equal('<img src="//play.pokemonshowdown.com/sprites/ani/rotom.gif" alt="Rotom" />');
        expect(addBigSprites(':sm/rotom:')).to.equal('<img src="//play.pokemonshowdown.com/sprites/ani/rotom.gif" alt="Rotom" />');
        expect(addBigSprites(':xy/rotom:')).to.equal('<img src="//play.pokemonshowdown.com/sprites/ani/rotom.gif" alt="Rotom" />');
    });

    it('parses correctly caps-letter sprites', () => {
        expect(addBigSprites(':SS/ROTOM:')).to.equal('<img src="//play.pokemonshowdown.com/sprites/ani/rotom.gif" alt="Rotom" />');
    })

    it('parses Mega, Alola, and Galar Pokemon with dashes successfully', () => {
        expect(addBigSprites(':ss/glalie-mega:')).to.equal('<img src="//play.pokemonshowdown.com/sprites/ani/glalie-mega.gif" alt="Mega Glalie" />');
        expect(addBigSprites(':ss/grimer-alola:')).to.equal('<img src="//play.pokemonshowdown.com/sprites/ani/grimer-alola.gif" alt="Alolan Grimer" />');
        expect(addBigSprites(':ss/slowbro-galar:')).to.equal('<img src="//play.pokemonshowdown.com/sprites/ani/slowbro-galar.gif" alt="Galarian Slowbro" />');
    });

    it('parses Mega, Alola, and Galar Pokemon with spaces successfully', () => {
        expect(addBigSprites(':ss/glalie mega:')).to.equal('<img src="//play.pokemonshowdown.com/sprites/ani/glalie-mega.gif" alt="Mega Glalie" />');
        expect(addBigSprites(':ss/grimer alola:')).to.equal('<img src="//play.pokemonshowdown.com/sprites/ani/grimer-alola.gif" alt="Alolan Grimer" />');
        expect(addBigSprites(':ss/slowbro galar:')).to.equal('<img src="//play.pokemonshowdown.com/sprites/ani/slowbro-galar.gif" alt="Galarian Slowbro" />');
    });

    it('parses correctly sprites of past generations', () => {
        expect(addBigSprites(':bw/rotom:')).to.equal('<img src="//play.pokemonshowdown.com/sprites/gen5ani/rotom.gif" alt="Rotom" />');
        expect(addBigSprites(':dp/rotom:')).to.equal('<img src="//play.pokemonshowdown.com/sprites/gen4/rotom.png" alt="Rotom" />');
        expect(addBigSprites(':rs/mew:')).to.equal('<img src="//play.pokemonshowdown.com/sprites/gen3/mew.png" alt="Mew" />');
        expect(addBigSprites(':gs/mew:')).to.equal('<img src="//play.pokemonshowdown.com/sprites/gen2/mew.png" alt="Mew" />');
        expect(addBigSprites(':rb/mew:')).to.equal('<img src="//play.pokemonshowdown.com/sprites/gen1/mew.png" alt="Mew" />');
    });

    it('handles edge cases successfully', () => {
        expect(addBigSprites(':ss/ho-oh:')).to.equal('<img src="//play.pokemonshowdown.com/sprites/ani/hooh.gif" alt="Ho-Oh" />');
        expect(addBigSprites(':ss/mr-mime:')).to.equal('<img src="//play.pokemonshowdown.com/sprites/ani/mrmime.gif" alt="Mr. Mime" />');
        expect(addBigSprites(':ss/mr-mime-galar:')).to.equal('<img src="//play.pokemonshowdown.com/sprites/ani/mrmime-galar.gif" alt="Galarian Mr. Mime" />');
        expect(addBigSprites(':ss/jangmo-o:')).to.equal('<img src="//play.pokemonshowdown.com/sprites/ani/jangmoo.gif" alt="Jangmo-o" />');
        expect(addBigSprites(':ss/tapu-koko:')).to.equal('<img src="//play.pokemonshowdown.com/sprites/ani/tapukoko.gif" alt="Tapu Koko" />');
        expect(addBigSprites(':ss/nidoran-m:')).to.equal('<img src="//play.pokemonshowdown.com/sprites/ani/nidoranm.gif" alt="Nidoran-M" />');
    });
});