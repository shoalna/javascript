// double quotation in a, b looks like different, but it will work


// either comporation of blow 2 variables should work
let a = {"a":"id", "b":"name", "c":"age", "d":"address"};
let a = {a:"code", b:"name", c:"date", d:"font"};

let b = [{a:2,b:3,c:4},{a:2,b:3,c:4},{a:2,b:3,c:4}];
let b = [{"a":2,"b":3,"c":4},{"a":2,"b":3,"c":4},{"a":2,"b":3,"c":4}];

let c = b.map((item, index, arr) => {
    console.log(item);  // always be [{a:2,b:3,c:4},{a:2,b:3,c:4},{a:2,b:3,c:4}]
    let obj = {};
    for(let i in item){
       console.log(i); // a, b, or c
       obj[a[i]] = item[i];
    }
    return obj;
});
