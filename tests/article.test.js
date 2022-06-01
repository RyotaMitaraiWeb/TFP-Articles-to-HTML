import { sampleArticleInput, sampleArticleOutput, sampleArticleOutputWithNoCheckboxes } from "./sampleArticle.js";
import { expect } from "../node_modules/chai/index.mjs";
import { main } from '../js/main.js';

describe('Sample article test', () => {
    it('parses article correctly with all checkboxes unchecked', () => {
        expect(main(sampleArticleInput, false, false, false, false, false)).to.equal(sampleArticleOutputWithNoCheckboxes);
    });

    it('parses article correctly with all checkboxes checked', () => {
        expect(main(sampleArticleInput, true, true, true, true, true, true)).to.equal(sampleArticleOutput);
    });

})