// config
var mapFileName = "./map"
//

function readTextFile(filePath) {
    return  ["#####", "## ##", "## ##", "#####"]
}

function getClassName(char) {
    switch (char) {
        case '#': return 'sharp'
        case ' ': return 'space'
        default: return undefined
    }
}
function mountLine(line) {
    var lineDiv = document.createElement("div")
    for (var i = 0; i < line.length; i++) {
        var charElement = document.createElement("span")
        var char = line.charAt(i)

        charElement.className = getClassName(char)
        charElement.innerHTML = char
        
        lineDiv.appendChild(charElement)
    }  
    document.body.appendChild(lineDiv)
}

var map = readTextFile(mapFileName)
map.forEach(function(line) {
    mountLine(line)
});
