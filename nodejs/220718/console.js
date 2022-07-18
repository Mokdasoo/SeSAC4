const obj = {
    out: {
        in: {
            key: 'value'
        }
    }
};
console.log(obj);
console.log(obj["out"]);
console.log(obj['out']['in']);




console.time("time");

console.error("error!");

console.trace("Error");

console.table([{name:'abc', birth:1990}, {name: 'def', birth:1980}]);

console.dir(obj, {colors: true, depth: 2});
console.dir(obj, {colors: false, depth: 1});

console.timeEnd("time");