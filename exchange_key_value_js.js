// double quotation in a, b looks like different, but it will work


// either comporation of blow 2 variables should work
let a = {"a":"id", "b":"name", "c":"age", "d":"address"};
let a = {a:"id", b:"name", c:"age", d:"address"};

let b = [{a:2,b:3,c:4},{a:2,b:3,c:4},{a:2,b:3,d:5}]; // notice 3rd element is not same with other
let b = [{"a":2,"b":3,"c":4},{"a":2,"b":3,"c":4},{"a":2,"b":3,"d":5}];

let c = b.map((item, index, arr) => {
    console.log(item);  // always be [{a:2,b:3,c:4},{a:2,b:3,c:4},{a:2,b:3,c:4}]
    let obj = {};
    for(let i in item){
       console.log(i); // a, b, or c
       obj[a[i]] = item[i];
    }
    return obj;
});

console.log(c); // [{id:2,name:3,age:4},{id:2,name:3,age:4},{id:2,name:3,address:5}]
