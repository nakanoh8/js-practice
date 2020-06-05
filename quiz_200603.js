const baseTimeline = [
  { time: "13:00", value: 5, flag: true },
  { time: "13:30", value: 10 },
  { time: "14:00", flag: false },
];
const addTimeline = [
  { time: "13:30", flag: true },
  { time: "14:00", value: 5, flag: true },
  { time: "14:30", value: 3 },
];

/*
 * 島田さんが書いたコード
 */
// let ans = Object.values(
//   baseTimeline.concat(addTimeline).reduce((acc, ele) => {
//     acc[ele.time] = acc[ele.time] || {};
//     acc[ele.time] = Object.assign(acc[ele.time], ele);
//     return acc;
//   }, {})
// );

/*
 * 自分が書いたコード
 */
// addTimelineにだけ存在するtimeのリストを作る
// const timesOnlyAddTl = []
// for(let at of addTimeline){
//     let isExist = false
//     for(let bt of baseTimeline){
//         if(at.time === bt.time)
//             isExist = true
//     }
//     if(!isExist)
//         timesOnlyAddTl.push(at.time)
// }
// const mergedTimeline = []
// for(let bt of baseTimeline){
//     let mt = Object.assign({}, bt)
//     for(let at of addTimeline){
//         if(bt.time === at.time){
//             mt = Object.assign(bt, at)
//             break
//         }
//     }
//     mergedTimeline.push(mt)
// }
// addTimelineにだけ存在するtimeを持つオブジェクトを追加
// for(let at of addTimeline){
//     if(timesOnlyAddTl.indexOf(at.time) !== -1)
//         mergedTimeline.push(Object.assign({}, at))
// }
// console.log(mergedTimeline)

/*
 * 自分が書いたコード2
 */
const mergedTimeline =
  baseTimeline.concat(addTimeline).reduce((acc,ele) => {
    const i = acc.findIndex(tl => tl.time === ele.time);
    const addIndex = (i===-1)? acc.length : i;
    acc[addIndex] = (i===-1)? Object.assign({},ele) : Object.assign(acc[i], ele);
    return acc;
  }, []);
console.log(mergedTimeline)
// console.log(baseTimeline)
// console.log(addTimeline)

// let a = [1,2,3,4,5]
// let b = {a: 12, b: "B"}
// console.log({...a, ...b})

// function sum(x, y, z) {
//   return x + y + z;
// }
// const numbers = [1, 2, 3];
// console.log(sum(...numbers));

// const mergedTimeline = [
//   { time: "13:00", value: 5, flag: true },
//   { time: "13:30", value: 10, flag: true },
//   { time: "14:00", value: 5, flag: true },
//   { time: "14:30", value: 3 },
// ];
// console.log(ans === mergedTimeline);
