function panggilNestedArray(value) {

    var x = []
    for (var a = 0; a < value.length; a++) {
        for (var b = 0; b < value[a].length; b++) {
            if (value[a][b] === undefined) continue
            if (x[b] === undefined) x[b] = []
            x[b][a] = value[a][b]
        }
    } console.log(x)
}

var nestedArray = [
    [1, 2, 3, 4],
    ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
    ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

panggilNestedArray(nestedArray)