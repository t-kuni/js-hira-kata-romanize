module.exports = class Romanizer {
    static MAPPING_HEPBURN = 'hepburn';
    static MAPPING_KUNREI = 'kunrei';

    static CHOUON_MACRON = 'macron';
    static CHOUON_CIRCUMFLEX = 'circumflex';
    static CHOUON_ALPHABET = 'alphabet';
    static CHOUON_SKIP = 'skip';
    static CHOUON_HYPHEN = 'hyphen';

    static UPPER_WORD_INITIAL = 'word_initial';
    static UPPER_SENTENCE_INITIAL = 'sentence_initial';
    static UPPER_ALL = 'all';
    static UPPER_NONE = 'none';

    static OPTION_SET_HEPBURN = {
        mapping: Romanizer.MAPPING_HEPBURN,
        chouon: Romanizer.CHOUON_MACRON,
    }
    static OPTION_SET_KUNREI = {
        mapping: Romanizer.MAPPING_KUNREI,
        chouon: Romanizer.CHOUON_CIRCUMFLEX,
    }

    romanMap = {
        'あ': 'a',
        'い': 'i',
        'う': 'u',
        'え': 'e',
        'お': 'o',
        'か': 'ka',
        'き': 'ki',
        'く': 'ku',
        'け': 'ke',
        'こ': 'ko',
        'さ': 'sa',
        'し': {hepburn: 'shi', kunrei: 'si'},
        'す': 'su',
        'せ': 'se',
        'そ': 'so',
        'た': 'ta',
        'ち': {hepburn: 'chi', kunrei: 'ti'},
        'つ': {hepburn: 'tsu', kunrei: 'tu'},
        'て': 'te',
        'と': 'to',
        'な': 'na',
        'に': 'ni',
        'ぬ': 'nu',
        'ね': 'ne',
        'の': 'no',
        'は': 'ha',
        'ひ': 'hi',
        'ふ': {hepburn: 'fu', kunrei: 'hu'},
        'へ': 'he',
        'ほ': 'ho',
        'ま': 'ma',
        'み': 'mi',
        'む': 'mu',
        'め': 'me',
        'も': 'mo',
        'や': 'ya',
        'ゆ': 'yu',
        'よ': 'yo',
        'ら': 'ra',
        'り': 'ri',
        'る': 'ru',
        'れ': 're',
        'ろ': 'ro',
        'わ': 'wa',
        'ゐ': 'wi',
        'ゑ': 'we',
        'を': {hepburn: 'o', kunrei: 'wo'},
        'ん': 'n',
        'が': 'ga',
        'ぎ': 'gi',
        'ぐ': 'gu',
        'げ': 'ge',
        'ご': 'go',
        'ざ': 'za',
        'じ': {hepburn: 'ji', kunrei: 'zi'},
        'ず': 'zu',
        'ぜ': 'ze',
        'ぞ': 'zo',
        'だ': 'da',
        'ぢ': {hepburn: 'ji', kunrei: 'di'},
        'づ': {hepburn: 'zu', kunrei: 'du'},
        'で': 'de',
        'ど': 'do',
        'ば': 'ba',
        'び': 'bi',
        'ぶ': 'bu',
        'べ': 'be',
        'ぼ': 'bo',
        'ぱ': 'pa',
        'ぴ': 'pi',
        'ぷ': 'pu',
        'ぺ': 'pe',
        'ぽ': 'po',
        'きゃ': 'kya',
        'きぃ': 'kyi',
        'きゅ': 'kyu',
        'きぇ': 'kye',
        'きょ': 'kyo',
        'くぁ': 'qa',
        'くぃ': 'qi',
        'くぇ': 'qe',
        'くぉ': 'qo',
        'くゃ': 'qya',
        'くゅ': 'qyu',
        'くょ': 'qyo',
        'しゃ': {hepburn: 'sha', kunrei: 'sya'},
        'しぃ': 'syi',
        'しゅ': {hepburn: 'shu', kunrei: 'syu'},
        'しぇ': 'sye',
        'しょ': {hepburn: 'sho', kunrei: 'syo'},
        'ちゃ': {hepburn: 'cha', kunrei: 'tya'},
        'ちぃ': {hepburn: 'chi', kunrei: 'tyi'},
        'ちゅ': {hepburn: 'chu', kunrei: 'tyu'},
        'ちぇ': {hepburn: 'che', kunrei: 'tye'},
        'ちょ': {hepburn: 'cho', kunrei: 'tyo'},
        'てゃ': 'tha',
        'てぃ': 'thi',
        'てゅ': 'thu',
        'てぇ': 'the',
        'てょ': 'tho',
        'ひゃ': 'hya',
        'ひゅ': 'hyu',
        'ひぇ': 'hye',
        'ひょ': 'hyo',
        'ふぁ': 'fa',
        'ふぃ': 'fi',
        'ふぇ': 'fe',
        'ふぉ': 'fo',
        'みゃ': 'mya',
        'みゅ': 'myu',
        'みぇ': 'mye',
        'みょ': 'myo',
        'ヴぁ': 'va',
        'ヴぃ': 'vi',
        'ヴぇ': 've',
        'ヴぉ': 'vo',
        'ぎゃ': 'gya',
        'ぎゅ': 'gyu',
        'ぎぇ': 'gye',
        'ぎょ': 'gyo',
        'じゃ': {hepburn: 'ja', kunrei: 'zya'},
        'じゅ': {hepburn: 'ju', kunrei: 'zyu'},
        'じぇ': 'zye',
        'じょ': {hepburn: 'jo', kunrei: 'zyo'},
        'ぢゃ': {hepburn: 'dya', kunrei: 'zya'},
        'ぢゅ': {hepburn: 'dyu', kunrei: 'zya'},
        'ぢぇ': 'dye',
        'ぢょ': {hepburn: 'dyo', kunrei: 'zya'},
        'びゃ': 'bya',
        'びゅ': 'byu',
        'びぇ': 'bye',
        'びょ': 'byo',
        'ぴゃ': 'pya',
        'ぴゅ': 'pyu',
        'ぴぇ': 'pye',
        'ぴょ': 'pyo',
        'りゃ': 'rya',
        'りゅ': 'ryu',
        'りぇ': 'rye',
        'りょ': 'ryo',
        'にゃ': 'nya',
        'にゅ': 'nyu',
        'にぇ': 'nye',
        'にょ': 'nyo',
        "ゔ": 'bu',
        '、': ', ',
        '，': ', ',
        '。': '. ',
        'ぁ': 'a',
        'ぃ': 'i',
        'ぅ': 'u',
        'ぇ': 'e',
        'ぉ': 'o',
    };

    sutegana = ['ぁ', 'ぃ', 'ぅ', 'ぇ', 'ぉ', 'ゃ', 'ゅ', 'ょ'];

    sokuon = 'っ';

    chouonMap = {
        'a': {
            'aa': {macron: 'ā', circumflex: 'â'}
        },
        'i': {
            'ii': {macron: 'ī', circumflex: 'î'}
        },
        'u': {
            'uu': {macron: 'ū', circumflex: 'û'},
            'ou': {macron: 'ō', circumflex: 'ô'}
        },
        'e': {
            'ee': {macron: 'ē', circumflex: 'ê'}
        },
        'o': {
            'oo': {macron: 'ō', circumflex: 'ô'}
        },
    }

    mappingMode = Romanizer.MAPPING_HEPBURN;
    chouonMode = Romanizer.CHOUON_MACRON;
    upperMode = Romanizer.UPPER_WORD_INITIAL;

    constructor(option) {
        if (option && 'mapping' in option) {
            this.mappingMode = option.mapping;
        }

        if (option && 'chouon' in option) {
            this.chouonMode = option.chouon;
        }

        if (option && 'upper' in option) {
            this.upperMode = option.upper;
        }
    }


    romanize(_text) {
        const text = this.kanaToHira(_text);
        let romanText = '';
        for (let i = 0; i < text.length;) {
            const char = this.getChar(text, i);
            const romanChar = this.getRomanChar(text, i, char, romanText);

            romanText += romanChar + (this.isNeedApostrophe(text, i) ? '\'' : '');
            i += char.length;
        }
        return this.upper(this.convertChouon(romanText));
    }

    /**
     * 日本語の文字を取得する
     * 以下の条件に合致する場合は捨て仮名も含めた２文字を取得します。
     * ・次の文字が捨て仮名である
     * ・捨て仮名を含めた２文字がromanMapに存在する
     *
     * romanMapに存在しない場合は１文字づつ処理するためにこのような挙動になっています。
     *
     * @param text
     * @param i
     * @returns {string|*}
     */
    getChar(text, i) {
        if (this.isWithSutegana(text, i)) {
            const charWithSutegana = text.substr(i, 2);
            return charWithSutegana in this.romanMap ? charWithSutegana : text[i];
        } else {
            return text[i];
        }
    }

    /**
     * 日本語の文字に対応するローマ字を取得する
     * @param text
     * @param i
     * @param char
     * @param romanText
     * @returns {*}
     */
    getRomanChar(text, i, char, romanText) {
        let romanChar = char;

        if (char === 'ー') {
            romanChar = romanText[romanText.length - 1];
        } else if (char === 'っ') {
            return '';
        } else if (char in this.romanMap) {
            if (typeof this.romanMap[char] === 'object') {
                romanChar = this.romanMap[char][this.mappingMode];
            } else {
                romanChar = this.romanMap[char]
            }
        }

        // 1文字前が促音なら子音を２つにする
        if (text[i - 1] === this.sokuon) {
            romanChar = romanChar[0] + romanChar;
        }

        return romanChar;
    }

    /**
     * 次の文字が捨て仮名の場合、真を返します
     *
     * @param text
     * @param i
     * @returns {boolean}
     */
    isWithSutegana(text, i) {
        const nextIdx = i + 1;
        if (nextIdx >= text.length) {
            return false;
        }

        const char = text[nextIdx];
        return this.sutegana.includes(char);
    }

    convertChouon(romanText) {
        if (this.chouonMode === 'alphabet') {
            return romanText;
        }

        let result = romanText[0];
        let prevCharIsChouon = false;
        for (let i = 1; i < romanText.length; i++) {
            const char = romanText[i];
            const twoChar = romanText.substr(i - 1, 2);

            if (!prevCharIsChouon && char in this.chouonMap && twoChar in this.chouonMap[char]) {
                prevCharIsChouon = true;
                if (this.chouonMode === 'skip') continue;

                if (this.chouonMode === 'hyphen') {
                    result += '-';
                } else {
                    result = result.substr(0, result.length - 1) + this.chouonMap[char][twoChar][this.chouonMode];
                }
            } else {
                result += char;
                prevCharIsChouon = false;
            }
        }
        return result;
    }

    upper(romanText) {
        switch (this.upperMode) {
            case Romanizer.UPPER_WORD_INITIAL: return this.upperWordInitial(romanText);
            case Romanizer.UPPER_SENTENCE_INITIAL: return this.upperSentenceInitial(romanText);
            case Romanizer.UPPER_ALL: return this.upperAll(romanText);
            case Romanizer.UPPER_NONE: return romanText;
            default: throw new Error('upperに不正な値が指定されています')
        }
    }

    upperWordInitial(romanText) {
        let result = romanText[0].toUpperCase();
        for (let i = 1; i < romanText.length; i++) {
            const char = romanText[i];
            const prevChar = romanText.substr(i - 1, 1);

            if (prevChar.match(/\s/)) {
                result += char.toUpperCase();
            } else {
                result += char;
            }
        }
        return result;
    }

    upperSentenceInitial(romanText) {
        let result = '';
        let inSentence = false;
        for (let i = 0; i < romanText.length; i++) {
            const char = romanText[i];

            if (char.match(/[a-zA-Zāâīîūûēêōô]/) && inSentence === false) {
                result += char.toUpperCase();
                inSentence = true;
            } else {
                if (char === '.') {
                    inSentence = false;
                }
                result += char;
            }
        }
        return result;
    }

    upperAll(romanText) {
        let result = '';
        for (let i = 0; i < romanText.length; i++) {
            const char = romanText[i];
            result += char.toUpperCase();
        }
        return result;
    }

    /**
     * 以下のいずれかに該当する場合は真を返す
     *
     * ・撥音「ん」の後に母音やヤ行音が来てナ行音と区別できない場合
     * ・文の末尾に促音がある場合
     *
     * @param text
     * @param i
     * @returns {boolean}
     */
    isNeedApostrophe(text, i) {
        if (text[i] === 'ん' && ['あ', 'い', 'う', 'え', 'お', 'や', 'ゆ', 'よ'].includes(text[i + 1])) {
            return true;
        }

        if (text[i] === this.sokuon && i + 1 >= text.length) {
            return true;
        }

        return false;
    }

    kanaToHira(str) {
        return str.replace(/[\u30a1-\u30f6]/g, function (match) {
            const chr = match.charCodeAt(0) - 0x60;
            return String.fromCharCode(chr);
        });
    }
}