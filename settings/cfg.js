global.owner = [
  "2250565647864", //ganti nomor owner
  "2250565647864" //nomor owner kedua kalo ada
]
global.nomorbot = '2250565647864'
global.urlfoto = 'https://imgur.com/a/PjlJHxy'

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})