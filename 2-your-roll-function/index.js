function roll(min, max, isFloat) {
    const r = Math.random() * (max - min) + min
    return isFloat ? r : Math.floor(r)
}

// console.log(roll(1, 10, true));

const names = ['James', 'Jane', 'Ryan', 'Rebecca']

// Ages between 18 and 60
// Heights between 5.1 and 1.8 meters
const user = {
    name: names[roll(0, names.length)],
    age: roll(18, 61),
    height: roll(5.1, 1.81, true).toFixed(2)
}

console.log(user);