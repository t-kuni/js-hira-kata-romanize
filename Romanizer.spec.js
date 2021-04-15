const Service = require('./Romanizer');
const assert = require('chai').assert

describe('Romanizer', () => {
    it('りゅうぞうじ じょうたろう', async () => {
        const s = new Service();

        const actual = await s.romanize('りゅうぞうじ じょうたろう');
        const expect = 'Ryūzōji Jōtarō'
        assert.equal(actual, expect);
    })

    it('じゃ', async () => {
        const s = new Service();

        const actual = await s.romanize('じゃ');
        const expect = 'Ja'
        assert.equal(actual, expect);
    })

    it('おおしろ', async () => {
        const s = new Service();

        const actual = await s.romanize('おおしろ');
        const expect = 'Ōshiro'
        assert.equal(actual, expect);
    })

    it('せーらーむーん', async () => {
        const s = new Service();

        const actual = await s.romanize('せーらーむーん');
        const expect = 'Sērāmūn'
        assert.equal(actual, expect);
    })

    it('じゃっきーちぇん', async () => {
        const s = new Service();

        const actual = await s.romanize('じゃっきーちぇん');
        const expect = 'Jakkīchen'
        assert.equal(actual, expect);
    })

    it('ぴょーっん', async () => {
        const s = new Service();

        const actual = await s.romanize('ぴょーっん');
        const expect = 'Pyōn'
        assert.equal(actual, expect);
    })

    it('ぴょーん', async () => {
        const s = new Service();

        const actual = await s.romanize('ぴょーん');
        const expect = 'Pyōn'
        assert.equal(actual, expect);
    })

    it('めっ', async () => {
        const s = new Service();

        const actual = await s.romanize('めっ');
        const expect = 'Me'
        assert.equal(actual, expect);
    })
})