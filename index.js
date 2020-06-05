const fs = require('fs')
const crypto = require('crypto')

const data = fs.readFileSync('./file.txt') //Buffer
const hash = crypto.createHash('sha256')

let code = hash.update(data)
code = hash.digest('hex')


console.log(code)
const expected = "3937af80ae67867e6b636624c5c2bd42b887625c8953a31ff7c277b6c00c5e72"
console.log(expected)
if (code === expected) {
    console.log("EQUALS !!!")
}
else {
    console.log("NOT EQUALS !!!")
}
