// double quotation in a, b looks like different, but it will work
let a = {"a":"id", "b":"name", "c":"age", "d":"address"};
let b = [{a:2,b:3,c:4},{a:2,b:3,c:4},{a:2,b:3,c:4}];


let c = b.map((item, index, arr) => {
    console.log("==========");
    console.log(item);
    let obj = {};
    for(let i in item){
       console.log(i);
       obj[a[i]] = item[i];
    }
    return obj;
});