function getClassName(char) {
    switch (char) {
        case '#': return 'sharp'
        case ' ': return 'space'
        case '.': return 'dot'
        default: return 'undefchar'
    }
}