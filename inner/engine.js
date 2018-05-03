function mountLine(line) {
    var tableRow = document.createElement("tr")
    for (var i = 0; i < line.length; i++) {
        var tableData = document.createElement("td")
        var char = line.charAt(i)
        tableData.className = getClassName(char)
        tableData.innerHTML = char
        tableRow.appendChild(tableData)
    }  
    document.getElementsByTagName('table')[0].appendChild(tableRow)
}

map.forEach(function(line) {
    mountLine(line)
});
