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

let ans = Object.values(
  baseTimeline.concat(addTimeline).reduce((acc, ele) => {
    // console.log("////////////////////")
    //   console.log("acc: ", acc)
    //   console.log("ele: ", ele)
    //   console.log("BEF: acc[ele.time]: ", acc[ele.time])
    acc[ele.time] = acc[ele.time] || {};
    acc[ele.time] = Object.assign(acc[ele.time], ele);
    // console.log("AFT: acc[ele.time]: ", acc[ele.time])
    return acc;
  }, {})
);

// addTimelineにだけ存在するtimeのリストを作る
const timesOnlyAddTl = []
for(let at of addTimeline){
    let isExist = false
    for(let bt of baseTimeline){
        if(at.time === bt.time)
            isExist = true
    }
    if(!isExist)
        timesOnlyAddTl.push(at.time)
}
const mergedTimeline = []
for(let bt of baseTimeline){
    let mt = Object.assign({}, bt)
    for(let at of addTimeline){
        if(bt.time === at.time)
            mt = Object.assign(bt, at)
            break
    }
    mergedTimeline.push(mt)
}
// addTimelineにだけ存在するtimeを持つオブジェクトを追加
for(let at of addTimeline){
    if(timesOnlyAddTl.indexOf(at.time) !== -1)
        mergedTimeline.push(Object.assign({}, at))
}
console.log(mergedTimeline)



// console.log(ans);

// const mergedTimeline = [
//   { time: "13:00", value: 5, flag: true },
//   { time: "13:30", value: 10, flag: true },
//   { time: "14:00", value: 5, flag: true },
//   { time: "14:30", value: 3 },
// ];
// console.log(ans === mergedTimeline);
