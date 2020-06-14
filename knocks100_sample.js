// ###丹野さんコード

// 第1章: 準備運動
// 00. 文字列の逆順
// 文字列"stressed"の文字を逆に（末尾から先頭に向かって）並べた文字列を得よ．
{
    const str = "stressed";
    const result = [...str].reverse().join``;
    console.log(result)
}

// 01. 「パタトクカシーー」
// 「パタトクカシーー」という文字列の1,3,5,7文字目を取り出して連結した文字列を得よ．
{
    const str = "パタトクカシーー";
    const result = [...str].filter((char, index) => index % 2 == 0).join``
    console.log(result);
}

// 02. 「パトカー」＋「タクシー」＝「パタトクカシーー」
// 「パトカー」＋「タクシー」の文字を先頭から交互に連結して文字列「パタトクカシーー」を得よ．
{
    const str1 = "パトカー";
    const str2 = "タクシー";

    let result = "";
    for (let i = 0; i < str1.length; i++) {
        result = result + str1[i] + str2[i];
    }
    console.log(result);
}

// 03. 円周率
// "Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics."という文を
// 単語に分解し，各単語の（アルファベットの）文字数を先頭から出現順に並べたリストを作成せよ．
{
    const str = "Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics."
    const words = str.replace(/[,.]/g,'').split(/\s/);
    // const words = str.replace(",", "").replace(".", "").split(/\s/);
    const result = words.map(word => word.length)
    console.log(result)
}

// 04. 元素記号
// "Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can."という文を単語に分解し，1, 5, 6, 7, 8, 9, 15, 16, 19番目の単語は先頭の1文字，それ以外の単語は先頭に2文字を取り出し，取り出した文字列から単語の位置（先頭から何番目の単語か）への連想配列（辞書型もしくはマップ型）を作成せよ．
{
    const str = "Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can."
    const words = str.split(" ");
    const signs = words.map((word, i) => {
        const isGetOneCharOrder = [1, 5, 6, 7, 8, 9, 15, 16, 19].includes(i + 1);
        const sliceLength = isGetOneCharOrder ? 1 : 2;
        return word.substring(0, sliceLength)
    })
    const result = signs.reduce(
        (acc, sign, i) => {
            acc[i] = sign;
            return acc;
        },
        {}
    )
    console.log(result)
}


// ###まゆみさんコード

// 第1章: 準備運動
// 00. 文字列の逆順
// 文字列"stressed"の文字を逆に（末尾から先頭に向かって）並べた文字列を得よ．
{
    const str = "stressed";
    console.log(str.split().reverse().join())
}

// 01. 「パタトクカシーー」
// 「パタトクカシーー」という文字列の1,3,5,7文字目を取り出して連結した文字列を得よ．
{
    const str = "パタトクカシーー";
    const result = str.split("").filter((e, index) => { return index % 2 === 1}).join("")
    console.log(result)
}
// 02. 「パトカー」＋「タクシー」＝「パタトクカシーー」
// 「パトカー」＋「タクシー」の文字を先頭から交互に連結して文字列「パタトクカシーー」を得よ．
{
    // A + B : A = augend B = addend
    const augend = 'パトカー'.split("")
    const addend = 'タクシー'.split("")
    const result = augend.reduce((array, value, index) => {
        array.push(value);
        array.push(addend[index]);
        return array;
    }, []).join("")
    console.log(result)
}

// 03. 円周率
// "Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics."
// という文を単語に分解し，各単語の（アルファベットの）文字数を先頭から出現順に並べたリストを作成せよ．
{
    const str = "Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics."
    const words = str.split(" ").map(e => e.replace(/,|\./g , ""))
    const result = words.map(e => e.length)
    console.log(result)
}

// 04. 元素記号
// "Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can."という文を単語に分解し，
// 1, 5, 6, 7, 8, 9, 15, 16, 19番目の単語は先頭の1文字，
// それ以外の単語は先頭に2文字を取り出し，取り出した文字列から単語の位置（先頭から何番目の単語か）への連想配列（辞書型もしくはマップ型）を作成せよ．
{
    const str = "Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can.";
    const words = str.split(" ").map(e => e.replace(/\./g , ""))
    const result = words.reduce((object, value, index) => {
        if ([1, 5, 6, 7, 8, 9, 15, 16, 19].includes(index + 1)) {
            object[value[0]] = index + 1;
        } else {
            object[value.substr(0, 2)] = index + 1;
        }
        return object;
    }, {})
    console.log(result);
}