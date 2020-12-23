function qsort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return qsort(left).concat(pivot, qsort(right));
}

function min(arr) {
    var min = 101;
    for (let i = 0; i < arr.length; i++) {
        if(min >= arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

function max(arr) {
    var max = -1;
    for (let i = 0; i < arr.length; i++) {
        if(max <= arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

function mid(arr) {
    return qsort(arr)[arr.length / 2];
}

function ShowContacts() {
    Window contactsWindow = new Window();
}

var a = Array.from({length: 1000}, () => Math.floor(Math.random() * 100));
console.log(a);
console.log(min(a));
console.log(max(a));
console.log(mid(a));
console.log(qsort(a));

map = new Map();
tags = Array.from(document.querySelectorAll("*"), x => x.tagName);
console.log(tags);
for (let i = 0; i < tags.length; i++) {
    if(!map.has(tags[i])) {
        map.set(tags[i], 1);
    } else {
        var v = map.get(tags[i]);
        map.set(tags[i], v + 1);
    }
}
console.log(map);