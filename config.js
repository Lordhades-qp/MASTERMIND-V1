// Module
const fs = require('fs')

//Bot Settings
global.connect = true // True For Pairing // False For Qr
global.publicX = true // True For Public // False For Self
global.owner = ['2250565647864'] //Own Number
global.developer = "Giddy Tennor" //Dev Name
global.botname = "MASTERMIND-V1" //Bot Name
global.version = "9.0.0" //Version Bot

//Sticker Setiings
global.packname = "Sticker By" //Pack Name 
global.author = "𓄂⍣⃝ ❦︎⃟𓍝𝚳𝚫𝐒𝚻𝚵𝚪𝚳𝚰𝚴𝐃☠︎ ⃝⃞" // Author

//Social Media Settings
global.ttok = "https://tiktok.com/sentinel kmg"
global.whatpp ="https://wa.me/2250565647865."

//Bug Name Settings

global.mess = { // bagian ini gausah diganti 
 ingroup: 'hee woubi là, utilise ça seulement dans les groupe.',
 admin: 'bro ça c'est réservé seulement pour les admin de groupe.',
 owner: 'Tu n'es pas owner donc dégage.',
 premium: 'dégage tu n'es pas premium.',
 seller: 'seul le revendeur et le propriétaire peuvent utiliser ça.',
 usingsetpp: `Batard laisse ça c'est pour le owner seul 🌝`,
 wait: '*he man attend un peu ✨*',
 success: 'Succès ✨',
 bugrespon: `✨Processs.....✨✨`
}
//System Bot Settings
global.prefa = ['','!','.',',','✨','🗿'] // Prefix // Not Change

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
