# js-hira-kata-romanize

ひらがなとカタカナをローマ字に変換するJavaScript向けのライブラリです。

# インストール

```
npm i js-hira-kata-romanize
```

# 使い方

基本的な使い方は以下のとおりです。  
デフォルトはヘボン式になります。

```javascript
const Romanizer = require('js-hira-kata-romanize');

const r = new Romanizer();
const roman = r.romanize('ちょうきゅうめいのちょうすけ');

console.log(roman);
// 出力： Chōkyūmeinochōsuke
```

訓令式を使用する場合はコンストラクタにオプションを渡します。

```javascript
const r = new Romanizer(Romanizer.OPTION_SET_KUNREI);
const roman = r.romanize('ちょうきゅうめいのちょうすけ');

console.log(roman);
// 出力： Tyôkyûmeinotyôsuke
```

# オプション

## mapping

ひらがな(カタカナ)とローマ字のマッピング方式を指定します。  
ヘボン式または訓令式を指定できます。  

```javascript
const r = new Romanizer({
    mapping: Romanizer.MAPPING_KUNREI
});
const roman = r.romanize('ちょうきゅうめいのちょうすけ');

console.log(roman);
// 出力： Tyôkyûmeinotyôsuke
```

| 値 | 説明 |
| --- | --- |
| MAPPING_HEPBURN(デフォルト) | ヘボン式を使用します。 例）Chōkyūmeinochōsuke |
| MAPPING_KUNREI | 訓令式を使用します。例）Tyōkyūmeinotyōsuke |



## chouon

長音の変換方式を指定できます。

```javascript
const r = new Romanizer({
    chouon: Romanizer.CHOUON_CIRCUMFLEX
});
const roman = r.romanize('ちょうきゅうめいのちょうすけ');

console.log(roman);
// 出力： Tyôkyûmeinotyôsuke
```

| 値 | 説明 |
| --- | --- |
| CHOUON_MACRON(デフォルト) | マクロン記号を用います。例）Tōkyō |
| CHOUON_CIRCUMFLEX | サーカムフレックス記号を用います。例）Tôkyô |
| CHOUON_ALPHABET | 母音のローマ字を用います。例）Toukyou |
| CHOUON_SKIP | 長音を無視します。例）Tokyo |
| CHOUON_HYPHEN |  ハイフンを用います。例）To-kyo-|

## upper

大文字化の方式を指定できます。

```javascript
const r = new Romanizer({
    upper: Romanizer.UPPER_WORD_INITIAL,
});
const roman = r.romanize('ちょうきゅうめいのちょうすけ');

console.log(roman);
// 出力： Tyôkyûmeinotyôsuke
```

| 値 | 説明 |
| --- | --- |
| UPPER_WORD_INITIAL(デフォルト) | 単語の先頭の文字を大文字にします。例）Mikan Ringo, Banana Tomato. Pain |
| UPPER_SENTENCE_INITIAL | 文の先頭の文字を大文字にします。例）Mikan ringo, banana tomato. Pain |
| UPPER_ALL | 全ての文字を大文字にします。例）MIKAN RINGO, BANANA TOMATO. PAIN |
| UPPER_NONE | 何もしません。 |

## オプションセットについて

`Romanizer.OPTION_SET_HEPBURN`と`Romanizer.OPTION_SET_KUNREI`は上記のオプションを組み合わせたデフォルトのセットです。

```javascript
static OPTION_SET_HEPBURN = {
    mapping: Romanizer.MAPPING_HEPBURN,
    chouon: Romanizer.CHOUON_MACRON,
}
static OPTION_SET_KUNREI = {
    mapping: Romanizer.MAPPING_KUNREI,
    chouon: Romanizer.CHOUON_CIRCUMFLEX,
}
```

## Development

Release 

``` 
npm publish
```