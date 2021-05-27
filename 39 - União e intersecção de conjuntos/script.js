const a = [2, 3, 1, 0, 5];
const b = [1, 2, 3, 4, 5];

const tem = [];
const all = b;

a.forEach(function(item){
    if (b.indexOf(item) != -1){
        tem.push(item);
    } else {
        all.push(item);
    }
});

console.log(tem);
console.log(all);