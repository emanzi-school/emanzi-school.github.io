var fs = require('fs')

var texts = [
    fs.readFileSync('./in/elements_1.json', 'utf8'),
    fs.readFileSync('./in/elements_2.json', 'utf8'),
    fs.readFileSync('./in/elements_3.json', 'utf8')
]

console.log(texts[1])

var sets = [
    JSON.parse(texts[0]),
    JSON.parse(texts[1]),
    JSON.parse(texts[2])
]

var output = []

/*
----[ E1 ]----
"number": 0,
"name": "Hydrogen",
"symbol": "H",
"mass": 1.007,
"firstIonEnergy": 13.59844,
"atomicRadius": 25,
"valenceElectrons": 38

----[ E3 ]----
"atomicNumber": 53,
"electronegativity": 2.66
*/

for (var i=0; i<sets[1].length; i++) {
    console.log(`Adding element #${i+1}`)
    var e1 = sets[0][i]
    var e2 = sets[1][i]
    var e3 = sets[2][i]
    output.push({
        group: e2["Group"],
        meltingPoint: e2["meltingPoint"],
        period: e2["Period"],
        boilingPoint: e2["boilingPoint"],
        block: e2["Block"],
        density: e2["density"],
        relativeAtomicMass: e2["relativeAtomicMass"],
        stateAtTwentyC: e2["stateAtTwentyC"],
        keyIsotopes: e2["keyIsotopes"],
        electronConfiguration: e2["electronConfiguration"],
        atomicNumber: e2["atomicNumber"],
        symbol: e1["symbol"],
        name: e1["name"],
        firstIonEnergy: e1["firstIonEnergy"],
        atomicRadius: e1["atomicRadius"],
        valenceElectrons: e1["valenceElectrons"],
        electronegativity: e3["electronegativity"]
    })
}


console.log(JSON.stringify(output))