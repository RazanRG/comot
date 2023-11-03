require('./comot/config/settings')
require("http").createServer((_, res) => res.end("Uptime!")).listen(8080)
process.on("uncaughtException", console.error);
const {
default: makeWASocket, 
delay,
fetchLatestBaileysVersion, 
DisconnectReason, 
getAggregateVotesInPollMessage,
makeCacheableSignalKeyStore,
makeInMemoryStore,
PHONENUMBER_MCC,
generateForwardMessageContent, 
proto, 
useMultiFileAuthState, 
jidDecode, 
WAMessageKey, 
prepareWAMessageMedia,
generateWAMessageFromContent, 
generateMessageID, 
downloadContentFromMessage, 
getContentType, 
BufferJSON,
} = require("@whiskeysockets/baileys");
const sessionName = "session";
const pino = require('pino')
const NodeCache = require("node-cache");
const readline = require("readline");
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const figlet = require('figlet')
const moment = require("moment-timezone");
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const FileType = require('file-type')
const path = require('path')
const {
toBuffer,
toDataURL
} = require('qrcode')
const express = require('express')
let app = express()
let _qr = 'invalid'
let PORT = process.env.PORT
const PhoneNumber = require('awesome-phonenumber')
const { color, bgcolor, mycolor } = require('./comot/jangandiubah/color')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./comot/jangandiubah/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, runtime, sleep } = require('./comot/jangandiubah/functions')

const useStore = false;
const usePairingCode = true;
const useMobile = false;

const MAIN_LOGGER = pino({
   timestamp: () => `,"time":"${new Date().toJSON()}"`,
});

const logger = MAIN_LOGGER.child({});
logger.level = "trace";

const store = useStore ? makeInMemoryStore({ logger }) : undefined;
store?.readFromFile("./session");

// Save every 1m
setInterval(() => {
store?.writeToFile("./session");
}, 10000 * 6);

const msgRetryCounterCache = new NodeCache();

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

const P = require("pino")({
   level: "silent",
});

async function startcomot() {
let { state, saveCreds } = await useMultiFileAuthState(sessionName);
let { version, isLatest } = await fetchLatestBaileysVersion();
const comot = makeWASocket({
version,
logger: P, // P for hidden log console
printQRInTerminal: !usePairingCode, // If you want to use scan, then change the value of this variable to false
mobile: useMobile,
browser: ["chrome (linux)", "", ""], // If you change this then the pairing code will not work
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, P),
},
msgRetryCounterCache,
});
store?.bind(comot.ev);

comot.ev.on("creds.update", saveCreds); // to save creds

if (usePairingCode && !comot.authState.creds.registered) {
if (useMobile) {
throw new Error("cannot use mobile api");
}
const phoneNumber = await question("Masukan nomor telepon di awali 628xxxxxx : ");
const code = await comot.requestPairingCode(phoneNumber);
console.log(`Connect to code : ${code}`);
}

comot.ev.on('messages.upsert', async chatUpdate => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return
if (!comot.public && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = smsg(comot, m, store)
require('./comott')(comot, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})

comot.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
let metadata = await comot.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await comot.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await comot.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
//welcome\\
memb = metadata.participants.length
comotWlcm = await getBuffer(ppuser)
comotLft = await getBuffer(ppuser)
if (anu.action == 'add') {
const comotbuffer = await getBuffer(ppuser)
let comotName = num
const dbtime = moment.tz('Asia/Makassar').format('HH:mm:ss')
const dbdate = moment.tz('Asia/Makassar').format('DD/MM/YYYY')
const xmembers = metadata.participants.length
comotbody = `┌─❖
│「 𝗛𝗶 👋 」
└┬❖ 「  @${comotName.split("@")[0]}  」
   │✑  𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 
   │✑  ${metadata.subject}
   │✑  𝗠𝗲𝗺𝗯𝗲𝗿 : 
   │✑  ${xmembers}orang
   │✑  𝗝𝗼𝗶𝗻𝗲𝗱 : 
   │✑  ${dbdate}
   └───────────────┈ ⳹`
comot.sendMessage(anu.id,
{ text: comotbody,
contextInfo:{
mentionedJid:[num],
"externalAdReply": {"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.namebot}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": comotWlcm,
"sourceUrl": `${link}
"mediaType": 1,
"renderLargerThumbnail": true`}}})
} else if (anu.action == 'promote') {
let acu = `Runtime : ⏳ ${runtime(process.uptime())}
Jam : ${time}`
const sender = m.key.fromMe ? (comot.user.id.split(':')[0]+'@s.whatsapp.net' || comot.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
comotkece = `@${senderNumber.split('@')[0]} 𝘁𝗲𝗹𝗮𝗵 𝗺𝗲𝗻𝗷𝗮𝗱𝗶𝗸𝗮𝗻 @${num.split('@')[0]} 𝗮𝗱𝗺𝗶𝗻 𝗴𝗿𝗼𝘂𝗽 ${metadata.subject}`
comot.sendMessage(anu.id,
{ text: comotkece,
contextInfo:{ 
mentionedJid:[num],
forwardingScore: 99999999,
isForwarded: false,
externalAdReply: { 
title: acu, 
thumbnailUrl: detect, 
sourceUrl: ytb,
mediaType: 1,
renderLargerThumbnail: true}}})
} 
}
} catch (err) {
console.log(err)
}
})

comot.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}


comot.ev.on('contacts.update', update => {
for (let contacts of update) {
let id = comot.decodeJid(contacts.id)
if (store && store.contacts) store.contacts[id] = { id, name: contacts.notify }
}
})

comot.getName = (jid, withoutContact= false) => {
id = comot.decodeJid(jid)
withoutContact = comot.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contact[id] || {}
if (!(v.name || v.subject)) v = comot.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === comot.decodeJid(comot.user.id) ?
comot.user :
(store.contact[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

comot.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await comot.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await comot.getName(i + '@s.whatsapp.net')}\nFN:${await comot.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:clarz939@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/inizenscuy\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
})
}
comot.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}

comot.public = true

comot.serializeM = (m) => smsg(comot, m, store)

comot.ev.process(async (events) => {
if (events["connection.update"]) {
const update = events["connection.update"];
const { connection, lastDisconnect } = update;
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); comot.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startcomot(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startcomot(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); comot.logout(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); comot.logout(); }
else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startcomot(); }
else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startcomot(); }
else comot.end(`Unknown DisconnectReason: ${reason}|${connection}`)
}
console.log("connection update", update);
}
});

comot.sendButMessage = async (id, text1, desc1, but = [], options) => {
let buttonMessage = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
return comot.sendMessage(id, buttonMessage,{quoted: options})
}

comot.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

comot.sendText = (jid, text, quoted = '', options) => comot.sendMessage(jid, { text: text, ...options }, { quoted })

comot.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
let types = await comot.getFile(PATH, true)
let { filename, size, ext, mime, data } = types
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/sticker.js')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: global.packname, author: global.packname2, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await comot.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}

comot.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await comot.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

comot.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await comot.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
}

comot.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await comot.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
}

comot.sendTextWithMentions = async (jid, text, quoted, options = {}) => comot.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

comot.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}

await comot.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

comot.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}

await comot.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
 
comot.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

comot.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
	}
	return buffer
 }
 
comot.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
		let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await comot.relayMessage(jid, waMessage.message, { messageId:waMessage.key.id })
return waMessage
}

comot.cMod = (jid, copy, text = '', sender = comot.user.id, options = {}) => {
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options
}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === comot.user.id
return proto.WebMessageInfo.fromObject(copy)
}

comot.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
	size: await getSizeMedia(data),
...type,
data
}
}
return comot
}

startcomot()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
