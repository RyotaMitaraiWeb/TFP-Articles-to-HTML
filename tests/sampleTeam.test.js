import { expect } from "../node_modules/chai/index.mjs";
import { generateTeam } from "../js/modules/generateTeam.js";
import { sampleTeamInput, sampleTeamOutput, samplePokepasteInput, samplePokepasteOutput } from "./sampleTeamSample.js";

describe('Sample team generator tests', () => {
    it('Parses team copied from a Smogon post succesfully', () => {
        expect(generateTeam(sampleTeamInput)).to.equal(sampleTeamOutput);
    });

    it('Parses team copied from a Pokepaste successfully', () => {
        expect(generateTeam(samplePokepasteInput)).to.equal(samplePokepasteOutput);
    });
});