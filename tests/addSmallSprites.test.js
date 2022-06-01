import { expect } from "../node_modules/chai/index.mjs";
import { addSmallSprites } from "../js/modules/addSmallSprites.js";

describe('addSmallSprites tests', () => {
    it('parses sprite successfully', () => {
        expect(addSmallSprites(':rotom:')).to.equal('<img src="/dex/media/sprites/xyicons/rotom.png" alt="Rotom" />');
    });

    it('parses sprite with caps letters successfully', () => {
        expect(addSmallSprites(':ROTOM:')).to.equal('<img src="/dex/media/sprites/xyicons/rotom.png" alt="Rotom" />');
    });

    it('parses Mega, Alola, and Galar Pokemon successfully', () => {
        expect(addSmallSprites(':glalie-mega:')).to.equal('<img src="/dex/media/sprites/xyicons/glalie-mega.png" alt="Mega Glalie" />');
        expect(addSmallSprites(':grimer-alola:')).to.equal('<img src="/dex/media/sprites/xyicons/grimer-alola.png" alt="Alolan Grimer" />');
        expect(addSmallSprites(':slowbro-galar:')).to.equal('<img src="/dex/media/sprites/xyicons/slowbro-galar.png" alt="Galarian Slowbro" />');
    });
})