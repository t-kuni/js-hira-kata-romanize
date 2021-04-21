const Service = require('./Romanizer');
const assert = require('chai').assert

describe('Romanizer（オプション無し：ヘボン式）', () => {
    it('りゅうぞうじ じょうたろう', async () => {
        const s = new Service();

        const actual = await s.romanize('りゅうぞうじ じょうたろう');
        const expect = 'Ryūzōji Jōtarō'
        assert.equal(actual, expect);
    })

    it('ちょうきゅうめいのちょうすけ', async () => {
        const s = new Service();

        const actual = await s.romanize('ちょうきゅうめいのちょうすけ');
        const expect = 'Chōkyūmeinochōsuke'
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
        const expect = 'Ōshiro'
        assert.equal(actual, expect);
    })

    it('せーらーむーん', async () => {
        const s = new Service();

        const actual = await s.romanize('せーらーむーん');
        const expect = 'Sērāmūn'
        assert.equal(actual, expect);
    })

    it('セーラームーン', async () => {
        const s = new Service();

        const actual = await s.romanize('セーラームーン');
        const expect = 'Sērāmūn'
        assert.equal(actual, expect);
    })

    it('じゃっきーちぇん', async () => {
        const s = new Service();

        const actual = await s.romanize('じゃっきーちぇん');
        const expect = 'Jakkīchen'
        assert.equal(actual, expect);
    })

    it('ぴょーっん', async () => {
        const s = new Service();

        const actual = await s.romanize('ぴょーっん');
        const expect = 'Pyōn'
        assert.equal(actual, expect);
    })

    it('ぴょーん', async () => {
        const s = new Service();

        const actual = await s.romanize('ぴょーん');
        const expect = 'Pyōn'
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
        const expect = 'Tōkyō'
        assert.equal(actual, expect);
    })

    it('きょうすけ', async () => {
        const s = new Service();

        const actual = await s.romanize('きょうすけ');
        const expect = 'Kyōsuke'
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
        const expect = 'Shin\'yō'
        assert.equal(actual, expect);
    })

    it('しにょう', async () => {
        const s = new Service();

        const actual = await s.romanize('しにょう');
        const expect = 'Shinyō'
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

    it('ちょうおん', async () => {
        const s = new Service();

        const actual = await s.romanize('ちょうおん');
        const expect = 'Chōon'
        assert.equal(actual, expect);
    })
})

describe('Romanizer（モード：ヘボン式）', () => {
    it('りゅうぞうじ じょうたろう', async () => {
        const s = new Service({
            mode: 'hepburn'
        });

        const actual = await s.romanize('りゅうぞうじ じょうたろう');
        const expect = 'Ryūzōji Jōtarō'
        assert.equal(actual, expect);
    })
});

describe('Romanizer（モード：訓令式）', () => {
    it('りゅうぞうじ じょうたろう', async () => {
        const s = new Service({
            mode: 'kunrei'
        });

        const actual = await s.romanize('りゅうぞうじ じょうたろう');
        const expect = 'Ryûzôzi Zyôtarô'
        assert.equal(actual, expect);
    })

    it('ちょうきゅうめいのちょうすけ', async () => {
        const s = new Service({
            mode: 'kunrei'
        });

        const actual = await s.romanize('ちょうきゅうめいのちょうすけ');
        const expect = 'Tyôkyûmeinotyôsuke'
        assert.equal(actual, expect);
    })

    it('じゃ', async () => {
        const s = new Service({
            mode: 'kunrei'
        });

        const actual = await s.romanize('じゃ');
        const expect = 'Zya'
        assert.equal(actual, expect);
    })

    it('おおしろ', async () => {
        const s = new Service({
            mode: 'kunrei'
        });

        const actual = await s.romanize('おおしろ');
        const expect = 'Ôsiro'
        assert.equal(actual, expect);
    })

    it('せーらーむーん', async () => {
        const s = new Service({
            mode: 'kunrei'
        });

        const actual = await s.romanize('せーらーむーん');
        const expect = 'Sêrâmûn'
        assert.equal(actual, expect);
    })

    it('セーラームーン', async () => {
        const s = new Service({
            mode: 'kunrei'
        });

        const actual = await s.romanize('セーラームーン');
        const expect = 'Sêrâmûn'
        assert.equal(actual, expect);
    })

    it('じゃっきーちぇん', async () => {
        const s = new Service({
            mode: 'kunrei'
        });

        const actual = await s.romanize('じゃっきーちぇん');
        const expect = 'Zyakkîtyen'
        assert.equal(actual, expect);
    })

    it('ぴょーっん', async () => {
        const s = new Service({
            mode: 'kunrei'
        });

        const actual = await s.romanize('ぴょーっん');
        const expect = 'Pyôn'
        assert.equal(actual, expect);
    })

    it('ぴょーん', async () => {
        const s = new Service({
            mode: 'kunrei'
        });

        const actual = await s.romanize('ぴょーん');
        const expect = 'Pyôn'
        assert.equal(actual, expect);
    })

    it('めっ', async () => {
        const s = new Service({
            mode: 'kunrei'
        });

        const actual = await s.romanize('めっ');
        const expect = 'Me\''
        assert.equal(actual, expect);
    })

    it('っつ・・・', async () => {
        const s = new Service({
            mode: 'kunrei'
        });

        const actual = await s.romanize('っつ・・・');
        const expect = 'Ttu・・・'
        assert.equal(actual, expect);
    })

    it('ばっっっっっかじゃないの！？', async () => {
        const s = new Service({
            mode: 'kunrei'
        });

        const actual = await s.romanize('ばっっっっっかじゃないの！？');
        const expect = 'Bakkazyanaino！？'
        assert.equal(actual, expect);
    })

    it('とうきょう', async () => {
        const s = new Service({
            mode: 'kunrei'
        });

        const actual = await s.romanize('とうきょう');
        const expect = 'Tôkyô'
        assert.equal(actual, expect);
    })

    it('きょうすけ', async () => {
        const s = new Service({
            mode: 'kunrei'
        });

        const actual = await s.romanize('きょうすけ');
        const expect = 'Kyôsuke'
        assert.equal(actual, expect);
    })

    it('しんあい', async () => {
        const s = new Service({
            mode: 'kunrei'
        });

        const actual = await s.romanize('しんあい');
        const expect = 'Sin\'ai'
        assert.equal(actual, expect);
    })

    it('しない', async () => {
        const s = new Service({
            mode: 'kunrei'
        });

        const actual = await s.romanize('しない');
        const expect = 'Sinai'
        assert.equal(actual, expect);
    })

    it('しんよう', async () => {
        const s = new Service({
            mode: 'kunrei'
        });

        const actual = await s.romanize('しんよう');
        const expect = 'Sin\'yô'
        assert.equal(actual, expect);
    })

    it('しにょう', async () => {
        const s = new Service({
            mode: 'kunrei'
        });

        const actual = await s.romanize('しにょう');
        const expect = 'Sinyô'
        assert.equal(actual, expect);
    })

    it('しんや', async () => {
        const s = new Service({
            mode: 'kunrei'
        });

        const actual = await s.romanize('しんや');
        const expect = 'Sin\'ya'
        assert.equal(actual, expect);
    })

    it('みかん ミカン みかん', async () => {
        const s = new Service({
            mode: 'kunrei'
        });

        const actual = await s.romanize('みかん ミカン みかん');
        const expect = 'Mikan Mikan Mikan'
        assert.equal(actual, expect);
    })

    it('ちょうおん', async () => {
        const s = new Service({
            mode: 'kunrei'
        });

        const actual = await s.romanize('ちょうおん');
        const expect = 'Tyôon'
        assert.equal(actual, expect);
    })
})

describe('Romanizer（各種長音）', () => {
    it('macron', async () => {
        const s = new Service({
            chouon: 'macron'
        });

        const actual = await s.romanize('あぁいぃうぅえぇおぉおぅ');
        const expect = 'Āīūēōō';
        assert.equal(actual, expect);
    })

    it('circumflex', async () => {
        const s = new Service({
            chouon: 'circumflex'
        });

        const actual = await s.romanize('あぁいぃうぅえぇおぉおぅ');
        const expect = 'Âîûêôô'
        assert.equal(actual, expect);
    })

    it('alphabet', async () => {
        const s = new Service({
            chouon: 'alphabet'
        });

        const actual = await s.romanize('あぁいぃうぅえぇおぉおぅ');
        const expect = 'Aaiiuueeooou';
        assert.equal(actual, expect);
    })

    it('skip', async () => {
        const s = new Service({
            chouon: 'skip'
        });

        const actual = await s.romanize('あぁいぃうぅえぇおぉおぅ');
        const expect = 'Aiueoo';
        assert.equal(actual, expect);
    })

    it('hyphen', async () => {
        const s = new Service({
            chouon: 'hyphen'
        });

        const actual = await s.romanize('あぁいぃうぅえぇおぉおぅ');
        const expect = 'A-i-u-e-o-o-';
        assert.equal(actual, expect);
    })
});

describe('Romanizer（オプションの組み合わせ）', () => {
    it('ヘボン式でcircumflex', async () => {
        const s = new Service({
            mode: 'hepburn',
            chouon: 'circumflex',
        });
        const actual = await s.romanize('ちょうきゅうめいのちょうすけ');
        const expect = 'Chôkyûmeinochôsuke'
        assert.equal(actual, expect);
    })

    it('訓令式でマクロン', async () => {
        const s = new Service({
            mode: 'kunrei',
            chouon: 'macron',
        });
        const actual = await s.romanize('ちょうきゅうめいのちょうすけ');
        const expect = 'Tyōkyūmeinotyōsuke'
        assert.equal(actual, expect);
    })
});