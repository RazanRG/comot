// script By Jomoker gratis di github doang
// gak punya YouTube jadi gak upload sc nya

const fs = require('fs')
const chalk = require('chalk')
const petik = '```'

global.owner = ['6289671842736']
global.ownvcard = '+62 896-7184-2736'
global.nomerOwner = '6289671842736'
global.nameowner = 'Yanto RG'
global.namebot = 'Moon Bot'
global.versi = 'beta'
global.end = 'Powered By Yanto RG'
global.email = `razan.smuler@gmail.com`
global.ytb = `https://youtube.com/`
global.detect = `https://telegra.ph/file/c32e5d586f74c7cf0e636.jpg`
global.foto = `https://telegra.ph/file/0ade60bdfdad5f1867779.jpg`
global.link = `https://chat.whatsapp.com/Hhr2WsHzJhjDRSTACXHyO2`
global.email = 'CATBOTAPI@gmail.com'
global.prefa = ['','!','.',',','🐤','🗿']
global.prefix = '#'
global.autoRecord = false
global.autoTyping = true
global.anticall = false

//Name stiker
global.packname = ''
global.author = 'Moon'

global.mess = {
wait: `𝗣𝗿𝗼𝘀𝗲𝘀 𝗸𝗮𝗸`,
succes: `𝗦𝘂𝗸𝘀𝗲𝘀 𝗸𝗮𝗸`,
publics: `𝗦𝘂𝗸𝘀𝗲𝘀 𝗽𝘂𝗯𝗹𝗶𝗰`,
selfs: `𝗦𝘂𝗸𝘀𝗲𝘀 𝘀𝗲𝗹𝗳`,
admin: `𝗔𝗱𝗺𝗶𝗻 𝗼𝗻𝗹𝘆 𝗸𝗮𝗸`,
botAdmin: `𝗕𝗼𝘁 𝗵𝗮𝗿𝘂𝘀 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 𝗮𝗱𝗺𝗶𝗻 𝗸𝗮𝗸`,
owner: `𝗢𝘄𝗻𝗲𝗿 𝗼𝗻𝗹𝘆 𝗸𝗮𝗸`,
prem: `𝗣𝗿𝗲𝗺 𝗼𝗻𝗹𝘆 𝗸𝗮𝗸`,
group: `𝗚𝗿𝗼𝘂𝗽 𝗼𝗻𝗹𝘆 𝗸𝗮𝗸`,
private: `𝗣𝗿𝗶𝘃𝗮𝘁𝗲 𝗼𝗻𝗹𝘆 𝗸𝗮𝗸`,
error: `𝗛𝗮𝗶 𝗸𝗮𝗸 𝗳𝗶𝘁𝘂𝗿 𝗲𝗿𝗼𝗿 𝘀𝗶𝗹𝗮𝗵𝗸𝗮𝗻 𝗹𝗮𝗽𝗼𝗿 𝗸𝗲 𝗼𝘄𝗻𝗲𝗿 𝟰𝟬𝟰`,
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})