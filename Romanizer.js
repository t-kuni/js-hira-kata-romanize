module.exports = class Romanizer {
    romanMap = {
        'あ' : 'a',
        'い' : 'i',
        'う' : 'u',
        'え' : 'e',
        'お' : 'o',
        'か' : 'ka',
        'き' : 'ki',
        'く' : 'ku',
        'け' : 'ke',
        'こ' : 'ko',
        'さ' : 'sa',
        'し' : { hepburn : 'shi', kunrei : 'si' },
        'す' : 'su',
        'せ' : 'se',
        'そ' : 'so',
        'た' : 'ta',
        'ち' : { hepburn : 'chi', kunrei : 'ti' },
        'つ' : { hepburn : 'tsu', kunrei : 'tu' },
        'て' : 'te',
        'と' : 'to',
        'な' : 'na',
        'に' : 'ni',
        'ぬ' : 'nu',
        'ね' : 'ne',
        'の' : 'no',
        'は' : 'ha',
        'ひ' : 'hi',
        'ふ' : { hepburn : 'fu', kunrei : 'hu' },
        'へ' : 'he',
        'ほ' : 'ho',
        'ま' : 'ma',
        'み' : 'mi',
        'む' : 'mu',
        'め' : 'me',
        'も' : 'mo',
        'や' : 'ya',
        'ゆ' : 'yu',
        'よ' : 'yo',
        'ら' : 'ra',
        'り' : 'ri',
        'る' : 'ru',
        'れ' : 're',
        'ろ' : 'ro',
        'わ' : 'wa',
        'ゐ' : 'wi',
        'ゑ' : 'we',
        'を' : { hepburn : 'o', kunrei : 'wo' },
        'ん' : 'n',
        'が' : 'ga',
        'ぎ' : 'gi',
        'ぐ' : 'gu',
        'げ' : 'ge',
        'ご' : 'go',
        'ざ' : 'za',
        'じ' : { hepburn : 'ji', kunrei : 'zi' },
        'ず' : 'zu',
        'ぜ' : 'ze',
        'ぞ' : 'zo',
        'だ' : 'da',
        'ぢ' : { hepburn : 'ji', kunrei : 'di' },
        'づ' : { hepburn : 'zu', kunrei : 'du' },
        'で' : 'de',
        'ど' : 'do',
        'ば' : 'ba',
        'び' : 'bi',
        'ぶ' : 'bu',
        'べ' : 'be',
        'ぼ' : 'bo',
        'ぱ' : 'pa',
        'ぴ' : 'pi',
        'ぷ' : 'pu',
        'ぺ' : 'pe',
        'ぽ' : 'po',
        'きゃ' : 'kya',
        'きぃ' : 'kyi',
        'きゅ' : 'kyu',
        'きぇ' : 'kye',
        'きょ' : 'kyo',
        'くぁ' : 'qa',
        'くぃ' : 'qi',
        'くぇ' : 'qe',
        'くぉ' : 'qo',
        'くゃ' : 'qya',
        'くゅ' : 'qyu',
        'くょ' : 'qyo',
        'しゃ' : { hepburn : 'sha', kunrei : 'sya' },
        'しぃ' : 'syi',
        'しゅ' : { hepburn : 'shu', kunrei : 'syu' },
        'しぇ' : 'sye',
        'しょ' : { hepburn : 'sho', kunrei : 'syo' },
        'ちゃ' : { hepburn : 'cha', kunrei : 'tya' },
        'ちぃ' : { hepburn : 'chi', kunrei : 'tyi' },
        'ちゅ' : { hepburn : 'chu', kunrei : 'tyu' },
        'ちぇ' : { hepburn : 'che', kunrei : 'tye' },
        'ちょ' : { hepburn : 'cho', kunrei : 'tyo' },
        'てゃ' : 'tha',
        'てぃ' : 'thi',
        'てゅ' : 'thu',
        'てぇ' : 'the',
        'てょ' : 'tho',
        'ひゃ' : 'hya',
        'ひぃ' : 'hyi',
        'ひゅ' : 'hyu',
        'ひぇ' : 'hye',
        'ひょ' : 'hyo',
        'ふぁ' : 'fa',
        'ふぃ' : 'fi',
        'ふぇ' : 'fe',
        'ふぉ' : 'fo',
        'みゃ' : 'mya',
        'みぃ' : 'myi',
        'みゅ' : 'myu',
        'みぇ' : 'mye',
        'みょ' : 'myo',
        'ヴぁ' : 'va',
        'ヴぃ' : 'vi',
        'ヴぇ' : 've',
        'ヴぉ' : 'vo',
        'ぎゃ' : 'gya',
        'ぎぃ' : 'gyi',
        'ぎゅ' : 'gyu',
        'ぎぇ' : 'gye',
        'ぎょ' : 'gyo',
        'じゃ' : { hepburn : 'ja', kunrei : 'zya' },
        'じぃ' : 'zyi',
        'じゅ' : { hepburn : 'ju', kunrei : 'zyu' },
        'じぇ' : 'zye',
        'じょ' : { hepburn : 'jo', kunrei : 'zyo' },
        'ぢゃ' : { hepburn : 'dya', kunrei : 'zya' },
        'ぢぃ' : 'dyi',
        'ぢゅ' : { hepburn : 'dyu', kunrei : 'zya' },
        'ぢぇ' : 'dye',
        'ぢょ' : { hepburn : 'dyo', kunrei : 'zya' },
        'びゃ' : 'bya',
        'びぃ' : 'byi',
        'びゅ' : 'byu',
        'びぇ' : 'bye',
        'びょ' : 'byo',
        'ぴゃ' : 'pya',
        'ぴぃ' : 'pyi',
        'ぴゅ' : 'pyu',
        'ぴぇ' : 'pye',
        'ぴょ' : 'pyo',
        'りゃ' : 'rya',
        'りぃ' : 'ryi',
        'りゅ' : 'ryu',
        'りぇ' : 'rye',
        'りょ' : 'ryo',
        'にゃ' : 'nya',
        'にぃ' : 'nyi',
        'にゅ' : 'nyu',
        'にぇ' : 'nye',
        'にょ' : 'nyo',
        '、' : ', ',
        '，' : ', ',
        '。' : '.'
    };

    sutegana = ['ぁ', 'ぃ', 'ぅ', 'ぇ', 'ぉ', 'ゃ', 'ゅ', 'ょ'];

    sokuon = 'っ';

    chouonMap = {
        'a': {
            'aa': {hepburn: 'ā', kunrei: 'â'}
        },
        'i': {
            'ii': {hepburn: 'ī', kunrei: 'î'}
        },
        'u': {
            'uu': {hepburn: 'ū', kunrei: 'û'},
            'ou': {hepburn: 'ō', kunrei: 'ô'}
        },
        'e': {
            'ee': {hepburn: 'ē', kunrei: 'ê'}
        },
        'o': {
            'oo': {hepburn: 'ō', kunrei: 'ô'}
        },
    }

    mappingMode = 'hepburn';

    constructor(option) {
        if (option && 'mode' in option && option.mode === 'kunrei') {
            this.mappingMode = 'kunrei';
        }
    }


    romanize(_text) {
        const text = this.kanaToHira(_text);
        let romanText = '';
        for (let i = 0; i < text.length; ) {
            const char = this.getChar(text, i);
            const romanChar = this.getRomanChar(text, i, char, romanText);

            romanText += romanChar + (this.isNeedApostrophe(text, i) ? '\'' : '');
            i += char.length;
        }
        return this.convertNN(this.upper(this.convertChouin(romanText)));
    }

    /**
     * 日本語の文字を取得する
     * 次の文字が捨て仮名の場合は捨て仮名も含めて取得される
     *
     * @param text
     * @param i
     * @returns {string|*}
     */
    getChar(text, i) {
        if (this.isWithSutegana(text, i)) {
            return text.substr(i, 2);
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

    isWithSutegana(text, i) {
        const nextIdx = i + 1;
        if (nextIdx >= text.length) {
            return false;
        }

        const char = text[nextIdx];
        return this.sutegana.includes(char);
    }

    convertChouin(romanText) {
        let result = romanText[0];
        for (let i = 1; i < romanText.length; i++) {
            const char = romanText[i];
            const twoChar = romanText.substr(i - 1, 2);

            if (char in this.chouonMap && twoChar in this.chouonMap[char]) {
                result = result.substr(0, result.length - 1) + this.chouonMap[char][twoChar][this.mappingMode];
            } else {
                result += char;
            }
        }
        return result;
    }

    upper(romanText) {
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

    convertNN(romanText) {
        return romanText.replace(/nn/g, 'n');
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
        return str.replace(/[\u30a1-\u30f6]/g, function(match) {
            const chr = match.charCodeAt(0) - 0x60;
            return String.fromCharCode(chr);
        });
    }
}