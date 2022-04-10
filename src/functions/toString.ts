function toString(arr: number[]): string {
    let str = ""
    for(let i in arr){
        str += String.fromCharCode(arr[i])
    }; return str
}

export {
    toString
}