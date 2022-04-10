function toAscii(string: string): number[] {
    let chars = []
    for(let i = 0; i < string.length; i++){
        chars.push(string[i].charCodeAt(0))
    }; return chars
}

export {
    toAscii
}