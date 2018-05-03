# WebTextViewer
The reason to create is me and my friend need a util to view our generated maps. Configurable and simple

At the moment the program consume maps as js arrays and it must be saved as map.js:
```javascript
var map = ["###", "# #", "###"]
```
It will be represented as:
```
###
# #
###
```

If you need to configure new char:
1) think up a name and fix the match in classmap.js
2) describe colors in colors.css

# Example
classmap.js:
```javascript
function getClassName(char) {
    switch (char) {
        case '#': return 'sharp'
        case ' ': return 'space'
        case '.': return 'dot'
        case 'Y': return 'new-char' //NEW ONE 
        default: return 'undefchar'
    }
}
```

colors.css:
```css
.new-char {
    color: awesome color 
}
```
