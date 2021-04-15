module.exports = class Romanizer {

    constructor() {
        this.remStr = null;
    }

    /**
     * 変換マップ
     */
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
        'ぁ' : 'xa',
        'ぃ' : 'xi',
        'ぅ' : 'xu',
        'ぇ' : 'xe',
        'ぉ' : 'xo',
        'ゃ' : 'xya',
        'ゅ' : 'xyu',
        'ょ' : 'xyo',
        'っ' : 'xtu',
        'ヴ' : 'vu',
        'ー' : '-',
        '、' : ', ',
        '，' : ', ',
        '。' : '.'
    };

    sutegana = ['ぁ', 'ぃ', 'ぅ', 'ぇ', 'ぉ', 'ゕ', 'ゖ', 'ゃ', 'ゅ', 'ょ', 'ゎ'];

    sokuon = 'っ';

    chouonMap = {
        'a': {
            'aa': 'ā'
        },
        'i': {
            'ii': 'ī'
        },
        'u': {
            'uu': 'ū',
            'ou': 'ō',
        },
        'e': {
            'ee': 'ē',
        },
        'o': {
            'oo': 'ō',
        },
    }

    romanize(text) {
        let romanText = '';
        for (let i = 0; i < text.length; ) {
            const char = this.getChar(text, i);

            // 促音そのものは処理しない
            if (char === this.sokuon) {
                i += char.length;
                continue;
            }

            const romanChar = this.getRomanChar(text, i, char, romanText);

            romanText += romanChar;
            i += char.length;
        }
        return this.upper(this.convertChouin(romanText));
    }

    getChar(text, i) {
        if (this.isWithSutegana(text, i)) {
            return text.substr(i, 2);
        } else {
            return text[i];
        }
    }

    getRomanChar(text, i, char, romanText) {
        let romanChar = char;

        if (char === 'ー') {
            romanChar = romanText[romanText.length - 1];
        } else if (char in this.romanMap) {
            if (typeof this.romanMap[char] === 'object') {
                romanChar = this.romanMap[char].hepburn;
            } else {
                romanChar = this.romanMap[char]
            }
        }

        // 1文字前が促音なら子音を繰り返す
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
                result = result.substr(0, result.length - 1) + this.chouonMap[char][twoChar];
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
}