# Installation
```
npm install string-ascii
```

# Description
`string-ascii` is a useless (or maybe useful considering your needs) npm package to convert strings to ascii and vice versa <br>
Honestly tis package is created to only serve one purpose and that is to make my code more complex and make people smack their head onto the wall for hours if they try understanding it

[![NPM](https://nodei.co/npm/string-ascii.png)](https://nodei.co/npm/string-ascii/)

# Usage Examples
---
 ## `string` to `ascii` 
```js
const ascii = require("string-ascii")

let string = "yelo world"
string = ascii.toAscii(string)
console.log(string) // returns an array
// output: [ 121, 101, 108, 111, 32, 119, 111, 114, 108, 100 ]
```
```js
// another example 
const { toAscii } = require("string-ascii")
console.log(toAscii("yelo world"))
```
```js
// one more perhaps
console.log(require("string-ascii").toAscii("yelo world"))
```

---
## `ascii` to `string`
```js
const ascii = require("string-ascii")

let arr = [ 121, 101, 108, 111, 32, 119, 111, 114, 108, 100 ]
let string = ascii.toString(arr)
console.log(string) // returns a string
// output: yelo world
```
```js
// like it
const { toString } = require("string-ascii")
console.log(toString([ 121, 101, 108, 111, 32, 119, 111, 114, 108, 100 ]))
```
```js
// best one for sure, for sure
console.log(require("string-ascii").toString([ 121, 101, 108, 111, 32, 119, 111, 114, 108, 100 ]))
```

# Lastly
for some reason i remembered tis pic so gonne leave it here
[![pizza](https://media.discordapp.net/attachments/840197346176401408/962640675625635870/unknown.png?width=430&height=473)](https://media.discordapp.net/attachments/840197346176401408/962640675625635870/unknown.png?width=430&height=473)