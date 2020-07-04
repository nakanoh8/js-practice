//[:猫:, :犬:, :犬:, :猫:, :猫:, :犬:]のような配列を[[:猫:, :猫:, :猫: ], [:犬:, :犬:, :犬:]]に仕分けする

const data = ['neko', 'inu', 'inu', 'neko', 'neko', 'inu'];

let result = [];
Array.from(new Set(data)).forEach((uniqEle) => {
    result.push(data.filter((ele) => ele === uniqEle));
});

console.log(result);
