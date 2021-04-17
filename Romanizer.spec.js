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

    it('セーラームーン', async () => {
        const s = new Service();

        const actual = await s.romanize('セーラームーン');
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
        const expect = 'Me\''
        assert.equal(actual, expect);
    })

    it('っつ・・・', async () => {
        const s = new Service();

        const actual = await s.romanize('っつ・・・');
        const expect = 'Ttsu・・・'
        assert.equal(actual, expect);
    })

    it('ばっっっっっかじゃないの！？', async () => {
        const s = new Service();

        const actual = await s.romanize('ばっっっっっかじゃないの！？');
        const expect = 'Bakkajanaino！？'
        assert.equal(actual, expect);
    })

    it('とうきょう', async () => {
        const s = new Service();

        const actual = await s.romanize('とうきょう');
        const expect = 'Tōkyō'
        assert.equal(actual, expect);
    })

    it('きょうすけ', async () => {
        const s = new Service();

        const actual = await s.romanize('きょうすけ');
        const expect = 'Kyōsuke'
        assert.equal(actual, expect);
    })

    it('しんあい', async () => {
        const s = new Service();

        const actual = await s.romanize('しんあい');
        const expect = 'Shin\'ai'
        assert.equal(actual, expect);
    })

    it('しない', async () => {
        const s = new Service();

        const actual = await s.romanize('しない');
        const expect = 'Shinai'
        assert.equal(actual, expect);
    })

    it('しんよう', async () => {
        const s = new Service();

        const actual = await s.romanize('しんよう');
        const expect = 'Shin\'yō'
        assert.equal(actual, expect);
    })

    it('しにょう', async () => {
        const s = new Service();

        const actual = await s.romanize('しにょう');
        const expect = 'Shinyō'
        assert.equal(actual, expect);
    })

    it('しんや', async () => {
        const s = new Service();

        const actual = await s.romanize('しんや');
        const expect = 'Shin\'ya'
        assert.equal(actual, expect);
    })

    it('みかん ミカン みかん', async () => {
        const s = new Service();

        const actual = await s.romanize('みかん ミカン みかん');
        const expect = 'Mikan Mikan Mikan'
        assert.equal(actual, expect);
    })
})