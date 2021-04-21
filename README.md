# js-hira-kata-romanize

ひらがなとカタカナをローマ字に変換するライブラリです。

# インストール

```
(TODO)
```

# 使い方

基本的な使い方は以下のとおりです。
デフォルトはヘボン式になります。

```javascript
const Romanizer = require('js-hira-kata-romanize');

const r = new Romanizer();
const roman = await r.romanize('ちょうきゅうめいのちょうすけ');

console.log(roman);
// 出力： Chōkyūmeinochōsuke
```

訓令式

```javascript
const r = new Romanizer({
    mode: 'kunrei'
});
const roman = await r.romanize('ちょうきゅうめいのちょうすけ');

console.log(roman);
// 出力： Tyôkyûmeinotyôsuke
```

長音の扱い
ヘボン式ではマクロン、訓令式ではハットが付与されます。

ハイフンを入れる

chouon: 'macron',
chouon: 'circumflex',
chouon: 'alphabet',
chouon: 'skip',
chouon: 'hyphen',
