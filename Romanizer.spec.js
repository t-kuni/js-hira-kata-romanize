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

    it('ぴんなっぷ', async () => {
        const s = new Service();

        const actual = await s.romanize('ぴんなっぷ');
        const expect = 'Pinnappu'
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

    it('おんな', async () => {
        const s = new Service();

        const actual = await s.romanize('おんな');
        const expect = 'Onna'
        assert.equal(actual, expect);
    })

    it('うっせぇわ', async () => {
        const s = new Service();

        const actual = await s.romanize('うっせぇわ');
        const expect = 'Ussēwa'
        assert.equal(actual, expect);
    })
})

describe('Romanizer（オプションセット：ヘボン式）', () => {
    it('りゅうぞうじ じょうたろう', async () => {
        const s = new Service(Service.OPTION_SET_HEPBURN);

        const actual = await s.romanize('りゅうぞうじ じょうたろう');
        const expect = 'Ryūzōji Jōtarō'
        assert.equal(actual, expect);
    })
});

describe('Romanizer（オプションセット：訓令式）', () => {
    it('りゅうぞうじ じょうたろう', async () => {
        const s = new Service(Service.OPTION_SET_KUNREI);

        const actual = await s.romanize('りゅうぞうじ じょうたろう');
        const expect = 'Ryûzôzi Zyôtarô'
        assert.equal(actual, expect);
    })

    it('ちょうきゅうめいのちょうすけ', async () => {
        const s = new Service(Service.OPTION_SET_KUNREI);

        const actual = await s.romanize('ちょうきゅうめいのちょうすけ');
        const expect = 'Tyôkyûmeinotyôsuke'
        assert.equal(actual, expect);
    })

    it('じゃ', async () => {
        const s = new Service(Service.OPTION_SET_KUNREI);

        const actual = await s.romanize('じゃ');
        const expect = 'Zya'
        assert.equal(actual, expect);
    })

    it('おおしろ', async () => {
        const s = new Service(Service.OPTION_SET_KUNREI);

        const actual = await s.romanize('おおしろ');
        const expect = 'Ôsiro'
        assert.equal(actual, expect);
    })

    it('せーらーむーん', async () => {
        const s = new Service(Service.OPTION_SET_KUNREI);

        const actual = await s.romanize('せーらーむーん');
        const expect = 'Sêrâmûn'
        assert.equal(actual, expect);
    })

    it('セーラームーン', async () => {
        const s = new Service(Service.OPTION_SET_KUNREI);

        const actual = await s.romanize('セーラームーン');
        const expect = 'Sêrâmûn'
        assert.equal(actual, expect);
    })

    it('じゃっきーちぇん', async () => {
        const s = new Service(Service.OPTION_SET_KUNREI);

        const actual = await s.romanize('じゃっきーちぇん');
        const expect = 'Zyakkîtyen'
        assert.equal(actual, expect);
    })

    it('ぴょーん', async () => {
        const s = new Service(Service.OPTION_SET_KUNREI);

        const actual = await s.romanize('ぴょーん');
        const expect = 'Pyôn'
        assert.equal(actual, expect);
    })

    it('めっ', async () => {
        const s = new Service(Service.OPTION_SET_KUNREI);

        const actual = await s.romanize('めっ');
        const expect = 'Me\''
        assert.equal(actual, expect);
    })

    it('っつ・・・', async () => {
        const s = new Service(Service.OPTION_SET_KUNREI);

        const actual = await s.romanize('っつ・・・');
        const expect = 'Ttu・・・'
        assert.equal(actual, expect);
    })

    it('ばっっっっっかじゃないの！？', async () => {
        const s = new Service(Service.OPTION_SET_KUNREI);

        const actual = await s.romanize('ばっっっっっかじゃないの！？');
        const expect = 'Bakkazyanaino！？'
        assert.equal(actual, expect);
    })

    it('とうきょう', async () => {
        const s = new Service(Service.OPTION_SET_KUNREI);

        const actual = await s.romanize('とうきょう');
        const expect = 'Tôkyô'
        assert.equal(actual, expect);
    })

    it('きょうすけ', async () => {
        const s = new Service(Service.OPTION_SET_KUNREI);

        const actual = await s.romanize('きょうすけ');
        const expect = 'Kyôsuke'
        assert.equal(actual, expect);
    })

    it('しんあい', async () => {
        const s = new Service(Service.OPTION_SET_KUNREI);

        const actual = await s.romanize('しんあい');
        const expect = 'Sin\'ai'
        assert.equal(actual, expect);
    })

    it('しない', async () => {
        const s = new Service(Service.OPTION_SET_KUNREI);

        const actual = await s.romanize('しない');
        const expect = 'Sinai'
        assert.equal(actual, expect);
    })

    it('しんよう', async () => {
        const s = new Service(Service.OPTION_SET_KUNREI);

        const actual = await s.romanize('しんよう');
        const expect = 'Sin\'yô'
        assert.equal(actual, expect);
    })

    it('しにょう', async () => {
        const s = new Service(Service.OPTION_SET_KUNREI);

        const actual = await s.romanize('しにょう');
        const expect = 'Sinyô'
        assert.equal(actual, expect);
    })

    it('しんや', async () => {
        const s = new Service(Service.OPTION_SET_KUNREI);

        const actual = await s.romanize('しんや');
        const expect = 'Sin\'ya'
        assert.equal(actual, expect);
    })

    it('みかん ミカン みかん', async () => {
        const s = new Service(Service.OPTION_SET_KUNREI);

        const actual = await s.romanize('みかん ミカン みかん');
        const expect = 'Mikan Mikan Mikan'
        assert.equal(actual, expect);
    })

    it('ちょうおん', async () => {
        const s = new Service(Service.OPTION_SET_KUNREI);

        const actual = await s.romanize('ちょうおん');
        const expect = 'Tyôon'
        assert.equal(actual, expect);
    })
})

describe('Romanizer（各種長音）', () => {
    it('macron', async () => {
        const s = new Service({
            chouon: Service.CHOUON_MACRON,
        });

        const actual = await s.romanize('あぁいぃうぅえぇおぉおぅ');
        const expect = 'Āīūēōō';
        assert.equal(actual, expect);
    })

    it('circumflex', async () => {
        const s = new Service({
            chouon: Service.CHOUON_CIRCUMFLEX,
        });

        const actual = await s.romanize('あぁいぃうぅえぇおぉおぅ');
        const expect = 'Âîûêôô'
        assert.equal(actual, expect);
    })

    it('alphabet', async () => {
        const s = new Service({
            chouon: Service.CHOUON_ALPHABET,
        });

        const actual = await s.romanize('あぁいぃうぅえぇおぉおぅ');
        const expect = 'Aaiiuueeooou';
        assert.equal(actual, expect);
    })

    it('skip', async () => {
        const s = new Service({
            chouon: Service.CHOUON_SKIP,
        });

        const actual = await s.romanize('あぁいぃうぅえぇおぉおぅ');
        const expect = 'Aiueoo';
        assert.equal(actual, expect);
    })

    it('hyphen', async () => {
        const s = new Service({
            chouon: Service.CHOUON_HYPHEN,
        });

        const actual = await s.romanize('あぁいぃうぅえぇおぉおぅ');
        const expect = 'A-i-u-e-o-o-';
        assert.equal(actual, expect);
    })
});

describe('Romanizer（オプションの組み合わせ）', () => {
    it('ヘボン式でcircumflex', async () => {
        const s = new Service({
            mapping: Service.MAPPING_HEPBURN,
            chouon: Service.CHOUON_CIRCUMFLEX,
        });
        const actual = await s.romanize('ちょうきゅうめいのちょうすけ');
        const expect = 'Chôkyûmeinochôsuke'
        assert.equal(actual, expect);
    })

    it('訓令式でマクロン', async () => {
        const s = new Service({
            mapping: Service.MAPPING_KUNREI,
            chouon: Service.CHOUON_MACRON,
        });
        const actual = await s.romanize('ちょうきゅうめいのちょうすけ');
        const expect = 'Tyōkyūmeinotyōsuke'
        assert.equal(actual, expect);
    })
});

describe('Romanizer（大文字化）', () => {
    it('UPPER_WORD_INITIAL', async () => {
        const s = new Service({
            mapping: Service.MAPPING_HEPBURN,
            chouon: Service.CHOUON_MACRON,
            upper: Service.UPPER_WORD_INITIAL,
        });
        const actual = await s.romanize('みかん りんご、バナナ とまと。パイン');
        const expect = 'Mikan Ringo, Banana Tomato. Pain'
        assert.equal(actual, expect);
    })

    it('UPPER_SENTENCE_INITIAL', async () => {
        const s = new Service({
            mapping: Service.MAPPING_HEPBURN,
            chouon: Service.CHOUON_MACRON,
            upper: Service.UPPER_SENTENCE_INITIAL,
        });
        const actual = await s.romanize('みかん りんご、バナナ とまと。パイン');
        const expect = 'Mikan ringo, banana tomato. Pain'
        assert.equal(actual, expect);
    })

    it('UPPER_ALL', async () => {
        const s = new Service({
            mapping: Service.MAPPING_HEPBURN,
            chouon: Service.CHOUON_MACRON,
            upper: Service.UPPER_ALL,
        });
        const actual = await s.romanize('みかん りんご、バナナ とまと。パイン');
        const expect = 'MIKAN RINGO, BANANA TOMATO. PAIN'
        assert.equal(actual, expect);
    })

    it('UPPER_NONE', async () => {
        const s = new Service({
            mapping: Service.MAPPING_HEPBURN,
            chouon: Service.CHOUON_MACRON,
            upper: Service.UPPER_NONE,
        });
        const actual = await s.romanize('みかん りんご、バナナ とまと。パイン');
        const expect = 'mikan ringo, banana tomato. pain'
        assert.equal(actual, expect);
    })
});

describe('Romanizer（ケース別バグ潰し）', () => {
    it('いいね', async () => {
        const s = new Service({
            mapping: Service.MAPPING_HEPBURN,
            chouon: Service.CHOUON_MACRON,
            upper: Service.UPPER_SENTENCE_INITIAL,
        });
        const actual = await s.romanize('いいね');
        const expect = 'Īne'
        assert.equal(actual, expect);
    })

    it('いやぁ', async () => {
        const s = new Service({
            mapping: Service.MAPPING_HEPBURN,
            chouon: Service.CHOUON_MACRON,
            upper: Service.UPPER_SENTENCE_INITIAL,
        });
        const actual = await s.romanize('いやぁ');
        const expect = 'Iyā'
        assert.equal(actual, expect);
    })

    it('いやぁぁ', async () => {
        const s = new Service({
            mapping: Service.MAPPING_HEPBURN,
            chouon: Service.CHOUON_MACRON,
            upper: Service.UPPER_SENTENCE_INITIAL,
        });
        const actual = await s.romanize('いやぁぁ');
        const expect = 'Iyāa'
        assert.equal(actual, expect);
    })

    it('いやぁぁぁ', async () => {
        const s = new Service({
            mapping: Service.MAPPING_HEPBURN,
            chouon: Service.CHOUON_MACRON,
            upper: Service.UPPER_SENTENCE_INITIAL,
        });
        const actual = await s.romanize('いやぁぁぁ');
        const expect = 'Iyāā'
        assert.equal(actual, expect);
    })

    it('いやぁぁぁあぁ', async () => {
        const s = new Service({
            mapping: Service.MAPPING_HEPBURN,
            chouon: Service.CHOUON_MACRON,
            upper: Service.UPPER_SENTENCE_INITIAL,
        });
        const actual = await s.romanize('いやぁぁぁあぁ');
        const expect = 'Iyāāā'
        assert.equal(actual, expect);
    })

    it('いやぁぁぁあぁ（長音表記：ローマ字）', async () => {
        const s = new Service({
            mapping: Service.MAPPING_HEPBURN,
            chouon: Service.CHOUON_ALPHABET,
            upper: Service.UPPER_SENTENCE_INITIAL,
        });
        const actual = await s.romanize('いやぁぁぁあぁ');
        const expect = 'Iyaaaaaa'
        assert.equal(actual, expect);
    })

    it('なぁに', async () => {
        const s = new Service({
            mapping: Service.MAPPING_HEPBURN,
            chouon: Service.CHOUON_ALPHABET,
            upper: Service.UPPER_SENTENCE_INITIAL,
        });
        const actual = await s.romanize('なぁに');
        const expect = 'Naani'
        assert.equal(actual, expect);
    })
});