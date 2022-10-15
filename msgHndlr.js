require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { color, bgcolor }  = require('./lib/color')
let toMs = require('ms');
const { exec, spawn, execSync } = require("child_process")
const jadwas = require('./lib/jadwalsholat')
const axios = require('axios')
const hxz = require('./lib/hxz-api')
const {getGempa, speedText, resepnya, jagoKata, alay, kbbiSearch, checkSCommand, mediafireDl, carigrup, getBaper, isFiltered, addFilter, jadwalSolat, uploadBerkas, uploadMedia, wikiSearch, kusonime, ArtiNama, ArtiMimpi} = require('./lib/function')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss DD:MM:YYYY")
let ms = require('parse-ms');
const { JSDOM } = require('jsdom')
let antivo = JSON.parse(fs.readFileSync('./src/antivo.json'))
let = monospace = '```'
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
let { floNime, webp2mp4File, TelegraPh, UploadFileUgu } = require('./lib/uploader')
const speed = require('performance-now')
const crypto = require('crypto')
const brainly = require('brainly-scraper-v2')
const { performance } = require('perf_hooks')
let yts = require('scrape-youtube')
const ffmpeg = require('fluent-ffmpeg')
const premium = require('./functions/premium')
const ban = require('./functions/ban')
const _ban = JSON.parse(fs.readFileSync('./src/banned.json'))
const register = require('./functions/register')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const commandsDB = JSON.parse(fs.readFileSync('./src/autoresp.json'))
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { addBadword, checkBadword, deleteBadword } = require('./lib/badword')
const { smsg, tek, formatp, tanggal, formatDate, getTime, addCmd, getCmd, delisUrl, sleep, clockString, uploadImages, uploadimgs, runtime, fetchJson, getBuffer, jsonformat, getCommandPosition, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')


// read database
let virus = JSON.parse(fs.readFileSync('./src/antivirus.json'))
let mimic = JSON.parse(fs.readFileSync('./src/mimic.json'))
let ownerNumber = JSON.parse(fs.readFileSync('./src/owner.json'))
let badwordDB = JSON.parse(fs.readFileSync('./src/badword.json'))
let _premium = JSON.parse(fs.readFileSync('./src/premium.json'))
const _registered = JSON.parse(fs.readFileSync('./src/registered.json'))
let cadb = JSON.parse(fs.readFileSync('./src/game/caklontong.json'))
let antihidetag = JSON.parse(fs.readFileSync('./src/antihidetag.json'))
let autodelete = JSON.parse(fs.readFileSync('./src/autodelete.json'))
let kasar = JSON.parse(fs.readFileSync('./src/antikasar.json'))
let welkom = JSON.parse(fs.readFileSync('./src/welcome.json'))
let kickarea = JSON.parse(fs.readFileSync('./src/kickarea.json'))
let autojoin = false
let react = false
let reactcmd = false
let auspon = true
let teksreactcmd = "⏳"
let teksreact = "⏳"
let scmd = JSON.parse(fs.readFileSync('./src/command.json'))
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let caklontongs = []
let getmusic = []
let getvideo = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = benny = async (benny, ben, chatUpdate, store) => {
    try {
		const type = Object.keys(ben.message)[0]
        var body = (ben.mtype === 'conversation') ? ben.message.conversation : (ben.mtype == 'imageMessage') ? ben.message.imageMessage.caption : (ben.mtype == 'videoMessage') ? ben.message.videoMessage.caption : (ben.mtype == 'extendedTextMessage') ? ben.message.extendedTextMessage.text : (ben.mtype == 'buttonsResponseMessage') ? ben.message.buttonsResponseMessage.selectedButtonId : (ben.mtype == 'listResponseMessage') ? ben.message.listResponseMessage.singleSelectReply.selectedRowId : (ben.mtype == 'templateButtonReplyMessage') ? ben.message.templateButtonReplyMessage.selectedId : (ben.mtype === 'messageContextInfo') ? (ben.message.buttonsResponseMessage?.selectedButtonId || ben.message.listResponseMessage?.singleSelectReply.selectedRowId || ben.text) : (type == 'stickerMessage') && (getCmd(ben.message[type].fileSha256.toString('base64')) !== null && getCmd(ben.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(ben.message[type].fileSha256.toString('base64')) : ''
        var budy = (ben.mtype === 'conversation') ? ben.message.conversation : (ben.mtype === 'extendedTextMessage') ? ben.message.extendedTextMessage.text : ''
        global.prefix = /^[°•.'":÷×¶?£¢€¥®™?=;~|!+<?#$%^&\/\\©^]/.test(body) ? body.match(/^[°•.'":÷×¶?£¢€¥®™?=;~|!+<?#$%^&\/\\©^]/gi)[0] : '#'
        let command = body.startsWith(global.prefix) ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : ''
		const isCmd = body.startsWith(global.prefix)
        const args = body.trim().split(/ +/).slice(1)
        const pushname = ben.pushName || "No Name"
        const botNumber = await benny.decodeJid(benny.user.id)
        const isCreator= [botNumber, ...ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(ben.sender)
        const isOwner = [botNumber, ...ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(ben.sender)
        const itsMe = ben.sender == botNumber ? true : false
        const text = q = args.join(" ")
		const from = chatUpdate.messages[0].chat
        const quoted = ben.quoted ? ben.quoted: ben
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
		const arg = body.slice(command.length+2)
		let text1 = arg.split('&')[0]
		let text2 = arg.split('&')[1]
		let text3 = arg.split('&')[2]
		let text4 = arg.split('&')[3]
		let text5 = arg.split('&')[4]
		let text6 = arg.split('&')[5]
	
        // Group
        const groupMetadata = ben.isGroup ? await benny.groupMetadata(ben.chat) : false
        const groupMembers = groupMetadata.participants
        const groupDesc = groupMetadata.desc
		const isGroup = ben.isGroup
		const sender = ben.sender
        const groupName = ben.isGroup ? groupMetadata.subject : ''
        const participants = ben.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = ben.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = ben.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = ben.isGroup ? groupAdmins.includes(ben.sender) : false
		const isRegistered = register.checkRegisteredUser(ben.sender, _registered)
		let isWelkom = ben.isGroup ? welkom.includes(ben.chat) : false
		let isKickArea = ben.isGroup ? kickarea.includes(from) : false
		const isAntiVo = ben.isGroup ? antivo.includes(from) : false
		let isAntiVirus = ben.isGroup ? virus.includes(from) : false
		let isAutodelete = ben.isGroup ? autodelete.includes(from) : false
		let isAntiHT = ben.isGroup ? antihidetag.includes(from) : false
		let isBanned = ban.checkBanUser(ben.sender, _premium)
		let isCreators = ben.sender.includes(global.creator)
		let isAntiKasar = ben.isGroup ? kasar.includes(from) : false
    	const isPremium = premium.checkPremiumUser(ben.sender, _premium)
		const content = JSON.stringify(ben.message)
		const isQuotedText = type === 'extendedTextMessage'
		const isQuotedLink = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
		const isQuotedLiveLocation = type === 'extendedTextMessage' && content.includes('liveLocationMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedMedia = type === 'extendedTextMessage' && content.includes('imageMessage') || type === 'extendedTextMessage' && content.includes('stickerMessage') || type === 'extendedTextMessage' && content.includes('videoMessage') || type === 'extendedTextMessage' && content.includes('audioMessage') || type === 'extendedTextMessage' && content.includes('documentMessage')
		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		
		doc = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {})
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `${global.namabot}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}

if (ben.isGroup && !ben.key.fromMe && !isOwner && isAntiHT) {
	if (ben && ben.message && ben.mentionedJid) {
		if (ben.mentionedJid.length === groupMembers.length) {
			await benny.groupParticipantsUpdate(from, [ben.sender], 'remove')
			reply(`*[ ANTI HIDETAG ]*\n\nKamu di kick karena mengirim hidetag`)
		}
		}
	}
		
		mess = {
			wait: '[ WAIT ] Sedang di proses ...',
			success: 'Berhasil!',
			error: {
				stick: 'Maaf, terjadi kesalahan saat convert gambar ke sticker',
				Iv: 'Linknya mokad:v',
				banned: `Maaf anda telah dibanned oleh owner ${global.namabot}`,
				api: 'Error'
			},
			only : {
				pc: 'Perintah ini hanya bisa digunakan di private chat saja!',
				Registered: `Kamu belum terdaftar di database!\n\nSilakan register dengan format:\n*${global.prefix}daftar*\n\nNote:\nHarap save nomor ku agar bisa mendapatkan serial!!`,
				group: 'Grup only bruh...',
				ownerG: 'Owner grup only bruh...',
				ownerB: `*[ Khusus owner ${global.namabot} ]*`,
				creator: `*[ Khusus creator ${global.namabot} ]*`,
				admin: '*[ Khusus admin group ]*',
				premium: `Premium user only bruh...\nMau jadi user premium?\nChat wa.me/6289636006352`,
				Badmin: 'Jadikan bot admin terlebih dahulu!'
			}
		}
		
		const expiredBanCheck = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
		benny.sendMessage(_dir[position].id, {text: `*「 UNBANNED 」*\n\n➸ *ID*: ${_dir[position].id.split('@')[0]}\n➸ *Note*: Jangan ulangi kesalahan yang sama!`})
            console.log(`Ban expired: ${_dir[position].id}`)
            _dir.splice(position, 1)
            fs.writeFileSync('./src/banned.json', JSON.stringify(_dir))
        }
    }, 1000)
}
		
		//Premium auto expired
		premium.expiredCheck(_premium)
		//Banned auto expired
		expiredBanCheck(_ban)
		
		//Banned Function
		if (!ben.key.fromMe && !isOwner && !isCreators && isBanned) return
		
		if (ben.key.fromMe && isOwner && body.toLowerCase() === 'ehh')
			{
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/hisoka.jpg') }, { upload: benny.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `*${global.namabot} WAS HERE*`,
"description": `*Script Bot:*\nhttps://cararegistrasi.com/I4V4C`,
"jpegThumbnail": await getBuffer(await benny.getPP(from)),
"currencyCode": "IDR",
"footerText": `_*${global.namabot}*_`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `HANYA BOT WHATSAPP BIASA`,
"url": "wa.me/6287718895904"
},
"businessOwnerJid": "6287718895904@s.whatsapp.net",
}
}), { userJid: from, quoted: doc })
benny.relayMessage(from, catalog.message, { messageId: catalog.key.id })
}
		
		const reply = (teks) => {
			ben.reply(teks)
		}
		
		const downloadM = async (ben, path) => {
			if (!isQuotedMedia) throw 'Reply Media!'
			path = path ? path : Date.now()
const dia = await benny.downloadAndSaveMediaMessage(ben, path)
return dia
}
		

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
		
	const msgs = (message) => {
            if (body.startsWith(global.prefix))  {
                if (message.length >= 10){
                    return `${message.substr(0, 10)}`
                }else{
                    return `${message}`
                }
            }
        }
		
		const msga = (message) => {
                if (message.length >= 8){
                    return `${message.substr(0, 8)}`
                }else{
                    return `${message}`
                }
        }
		const msgss = (message) => {
                if (message.length >= 10){
                    return `${message.substr(0, 10)}`
                }else{
                    return `${message}`
                }
        }
		
	 if (ben.isGroup && mimic.includes(from)) {
			ben.copyNForward(from, false)
		}
		
	if (budy.toLowerCase() === 'nyerah') {
			   await reply(`*Yah kamu menyerah, cemen!*`)
			   caklontongs = []
           cadb.splice(cadb)
				fs.writeFileSync('./src/game/caklontong.json', JSON.stringify(cadb))
            }
		
		
			if (isGroup && isAutodelete) {
				if (!body.includes('chat.whatsapp.com')) {
				for (var i = 0; i < badwordDB.length ; i++) {
				if (body.includes(badwordDB[i].badword)) {
				if (ben.key.fromMe && isOwner) return
				if (isAdmins) return reply('Kamu admin grup jadi ngga di hapus :)')			
				await benny.sendMessage(from, { delete: { remoteJid: ben.chat, id: ben.id, participant: ben.sender } })
			reply(`_*[PETUGAS PEMBERSIH]*_ \n\nBot mendeteksi pesan kotor!\nPesan telah dihapus oleh bot!`)
				
				}
			}
				} else if (body.includes('chat.whatsapp.com')) {
					ben.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, Pesan kamu akan dihapus oleh bot !`)
        if (!isBotAdmins) return ben.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await benny.groupInviteCode(ben.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(ben.text)
        if (isgclink) return ben.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return ben.reply(`Ehh maaf kamu admin`)
        if (isCreator) return ben.reply(`Ehh maaf kamu owner bot ku`)
        await benny.sendMessage(from, { delete: { remoteJid: ben.chat, id: ben.id, participant: ben.sender } })
				}
			}
	if (isAntiVo && ben.message.viewOnceMessage && !ben.key.fromMe){
var msg = {...ben}

let typenya = msg.message.viewOnceMessage.message["videoMessage"] ?
msg.message.viewOnceMessage.message.videoMessage : msg.message.viewOnceMessage.message.imageMessage

typenya["viewOnce"] = false

typenya["caption"] = `\`\`\`Anti ViewOnce\n\n\nCaption : ${(typenya.caption === '') ? '' : typenya.caption}\`\`\``

let peq = msg.message.viewOnceMessage.message["imageMessage"] ? { key: { fromMe: false, participant: ben.sender, id: ben.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } } :  { key: { fromMe: false, participant: ben.sender, id: ben.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } }

const templateList = generateWAMessageFromContent(from, proto.Message.fromObject({ "viewOnceMessage": msg.message.viewOnceMessage }), {});

benny.relayMessage(from, templateList.message, { messageId: templateList.key.id })
}
		
	if (cadb.includes(from)) {
			if (ben && ben.quoted && ben.quoted.id === caklontongs[0].sender) {
            if (!isCmd && body.toLowerCase() === caklontongs[0].jawaban) {
                 gbutsan = [
  {buttonId: '#caklontong', buttonText: {displayText: 'MAIN LAGI'}, type: 'RESPONSE'}
]
 benny.send5ButMsg(from, `*Selamat jawaban kamu benar*\n*Jawaban :* ${caklontongs[0].jawaban}\n\nIngin bermain lagi? kirim *${prefix}caklontong*`, global.namabot, gbutsan)
				caklontongs = []
				cadb.splice(cadb.indexOf(from), 1)
				fs.writeFileSync('./src/game/caklontong.json', JSON.stringify(cadb))
            } else if (!isCmd && budy.toLowerCase() !== caklontong[0].jawaban) {
				reply('*Jawaban Salah!*')
			}
        }
		}
		
	let panggilbot = ["nando","benny","bot"]
	if (panggilbot.includes(budy.toLowerCase())) {
		await sleep(2000)
		let ppi = await getBuffer(await benny.getPP(ben.sender))
 	let btn = [{
                                urlButton: {
                                    displayText: 'WhatsApp Owner',
                                    url: 'https://wa.me/6287718895904?text=Hai+Owner+N@nd0+BOT'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 877-1889-5904'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: `Menu All ${decodeURI('%F0%9F%93%96')}`,
                                    id: '#menu'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: `List Menu ${decodeURI('%F0%9F%97%92%EF%B8%8F')}`,
                                    id: '#listmenu'
                                }
                            }]
                      let txt = `*Hai, ${pushname}* ${decodeURI('%F0%9F%91%8B')} \n*Perkenalkan nama aku adalah:*\n*${global.namabot}*\n*Aku adalah bot whatsapp yang dibuat menggunakan bahasa javascript.*`
                      benny.send5ButImg(from, txt, global.namabot, ppi, btn, ppi, {quoted: ben})
	}
		
		if (auspon && budy) {
	for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
			}
	}
	
		if (isCmd && reactcmd) {
			await sleep(2000)
benny.sendMessage(from, { react:{ text: teksreactcmd, key: ben.key } })
		}
		if (!isCmd && react) {
			await sleep(2000)
benny.sendMessage(from, { react:{ text: teksreact, key: ben.key } })
		}
		let { spawn } = require('child_process')
let path = require('path')
let tmp = path.join(__dirname, '/src/')
function running(img, duration = 10, fps = 60) {
  return new Promise((resolve, reject) => {
    let layers = [
      `color=s=512x512:d=${duration}:r=${fps}[bg]`,
      '[0:v]scale=-2:512[img]',
      `[bg][img]overlay=x='(w+h)*((n/${fps})*-1/${duration})+h'`
    ]

    let n = + new Date + 'run.jpg'
    let i = path.join(tmp, n)
    fs.writeFileSync(i, img)
    console.log(img)
    let o = path.join(tmp, n + '.mp4')
    let args = [
      '-y',
      '-i', i,
      '-t', duration.toString(),
      '-filter_complex', layers.join(';'),
      '-pix_fmt', 'yuv420p',
      '-crf', '18',
      o
    ]
    spawn('ffmpeg', args, { stdio: 'inherit' })
      .on('error', reject)
      .on('close', () => {
        try {
          fs.unlinkSync(i)
          resolve(fs.readFileSync(o))
          fs.unlinkSync(o)
        } catch (e) {
          reject(e)
        }
      })
    //.stderr.on('data', a => console.log(a+''))
  })
}
		
	var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
        var d = new Date(new Date + 3600000)
        var weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
		var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var haris = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            switch(waktoo){
                case 0: waktoo = "Tengah Malam🌚 - Tidur Kak:)"; break;
                case 1: waktoo = "Tengah Malam🌚 - Tidur Kak:)"; break;
                case 2: waktoo = "Dini Hari🌒 - Tidur Kak:)"; break;
                case 3: waktoo = "Dini Hari🌓 - Tidur Kak:)"; break;
                case 4: waktoo = "Subuh🌔"; break;
                case 5: waktoo = "Subuh🌔"; break;
                case 6: waktoo = "Selamat Pagi🌝"; break;
                case 7: waktoo = "Selamat Pagi🌝"; break;
                case 8: waktoo = "Selamat Pagi🌝"; break;
                case 9: waktoo = "Selamat Pagi"; break;
                case 10: waktoo = "Selamat Pagi🌞"; break;
                case 11: waktoo = "Selamat Siang🌞"; break;
                case 12: waktoo = "Selamat Siang🌞"; break;
                case 13: waktoo = "Selamat Siang🌞"; break;
                case 14: waktoo = "Selamat Siang🌞"; break;
                case 15: waktoo = "Selamat Sore🌝"; break;
                case 16: waktoo = "Selamat Sore🌝"; break;
                case 17: waktoo = "Selamat Sore🌖"; break;
                case 18: waktoo = "Magrib🌘"; break;
                case 19: waktoo = "Magrib🌚"; break;
                case 20: waktoo = "Selamat Malam🌚"; break;
                case 21: waktoo = "Selamat Malam🌚"; break;
                case 22: waktoo = "Selamat Malam🌚"; break;
                case 23: waktoo = "Tengah Malam🌚 - Tidur Kak:)"; break;
            }
            var tampilTanggal = "" + hari + ' ' + weton + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilHari = "" + waktoo;
            var tampilWaktu = moment().tz('Asia/Jakarta').format("HH:mm:ss");
            var tampilWaktus = moment().tz('Asia/Makassar').format("HH:mm:ss");
            var tampilWaktuss = moment().tz('Asia/Jayapura').format("HH:mm:ss");
			
		
		//Anti kasar function
		if (!ben.key.fromMe && isGroup && isAntiKasar && isBotAdmins) {
	for (var i = 0; i < badwordDB.length ; i++) {
				if (body.includes(badwordDB[i].badword)) {
					if (isAdmins) return reply('Kamu admin grup jadi ngga di kick :)')
				 reply(`_*[PETUGAS PEMBERSIH]*_ \n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
					benny.groupParticipantsUpdate(from, [ben.sender], 'remove')
				}
			}
	}
		
		//Anti virus function
		if (ben.isGroup && !ben.key.fromMe && isAntiVirus && isBotAdmins) {
		    if (budy.length >= 1000) {
				if (isAdmins) return reply('Kamu admin grup jadi ngga di kick :)')
				reply(`[ *PETUGAS PEMBERSIH* ]\n\nKamu nakal si! Ngapain kirim virus? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
				 benny.groupParticipantsUpdate(from, [ben.sender], 'remove')
				}
		}
		
		//Auto join funtion
		if (!ben.key.fromMe && autojoin) {
	if (budy.includes("://chat.whatsapp.com/")) {
		let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
		console.log(color('[AUTO JOIN]', 'cyan'), color('BRING ME THE HORIZON 2011', 'yellow'))
    let res = await benny.groupAcceptInvite(budy.split('chat.whatsapp.com/')[1])
}
	}
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[ben.sender]
            if (typeof user !== 'object') global.db.data.users[ben.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[ben.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[ben.chat]
            if (typeof chats !== 'object') global.db.data.chats[ben.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[ben.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateLocation' in setting)) setting.templateLocation = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateLocation: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
	
        // Public & Self
        if (!benny.public) {
            if (!ben.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (ben.message) {
          if (!ben.isGroup && isCmd) console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ COMMAND ]", "aqua"), color(msgs(command)), color("from", "pink"), color('+' + ben.sender.split('@')[0]+` ( ${msga(ben.pushName)} )`, "lime"))
		    if (!ben.isGroup && !isCmd) console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ PRIVATE ]", "aqua"), color(msgss(ben.text)), color("from", "pink"), color('+' + ben.sender.split('@')[0]+` ( ${msga(ben.pushName)} )`, "lime"))
	        if (ben.isGroup && isCmd) console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ COMMAND ]", "aqua"), color(msgs(command)), color("from", "pink"), color('+' + ben.sender.split('@')[0]+` ( ${msga(ben.pushName)} )`, "lime"), color("in", "purple"), color(groupName, "yellow"))
	        if (ben.isGroup && !isCmd) console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ GROUP ]", "aqua"), color(msgss(ben.text)), color("from", "pink"), color('+' + ben.sender.split('@')[0]+` ( ${msga(ben.pushName)} )`, "lime"), color("in", "purple"), color(groupName, "yellow"))
	        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await benny.setStatus(`${global.namabot} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[ben.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        ben.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return ben.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await benny.groupInviteCode(ben.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(ben.text)
        if (isgclink) return ben.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return ben.reply(`Ehh maaf kamu admin`)
        if (isCreator) return ben.reply(`Ehh maaf kamu owner bot ku`)
        benny.groupParticipantsUpdate(from, [ben.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[ben.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && ben.msg.fileSha256 && (ben.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[ben.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
            userJid: benny.user.id,
            quoted: ben.quoted && ben.quoted.fakeObj
        })
        messages.key.id = ben.key.id
        messages.pushName = ben.pushName
        if (ben.isGroup) messages.participant = ben.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        benny.ev.emit('messages.upsert', msg)
        }
		
		
	    
	if (('family100'+ben.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+ben.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(ben.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = ben.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            benny.sendText(from, caption, ben, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+ben.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+ben.chat]
        }

        if (tebaklagu.hasOwnProperty(ben.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[ben.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await benny.sendButtonText(from, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, global.namabot, ben)
                delete tebaklagu[ben.sender.split('@')[0]]
            } else ben.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(ben.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[ben.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ben.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${global.prefix}math mode`)
                delete kuismath[ben.sender.split('@')[0]]
            } else ben.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(ben.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[ben.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await benny.sendButtonText(from, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, global.namabot, ben)
                delete tebakgambar[ben.sender.split('@')[0]]
            } else ben.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(ben.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[ben.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await benny.sendButtonText(from, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, global.namabot, ben)
                delete tebakkata[ben.sender.split('@')[0]]
            } else ben.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(ben.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[ben.sender.split('@')[0]]
	    deskripsi = caklontong_desk[ben.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await benny.sendButtonText(from, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, global.namabot, ben)
                delete caklontong[ben.sender.split('@')[0]]
		delete caklontong_desk[ben.sender.split('@')[0]]
            } else ben.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(ben.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[ben.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await benny.sendButtonText(from, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, global.namabot, ben)
                delete tebakkalimat[ben.sender.split('@')[0]]
            } else ben.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(ben.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[ben.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await benny.sendButtonText(from, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, global.namabot, ben)
                delete tebaklirik[ben.sender.split('@')[0]]
            } else ben.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(ben.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[ben.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await benny.sendButtonText(from, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, global.namabot, ben)
                delete tebaktebakan[ben.sender.split('@')[0]]
            } else ben.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(ben.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // ben.reply(`[DEBUG]\n${parseInt(ben.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(ben.text)) return
	    isSurrender = !/^[1-9]$/.test(ben.text)
	    if (ben.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(ben.sender === room.game.playerO, parseInt(ben.text) - 1))) {
	    ben.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (ben.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = ben.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== ben.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = ben.chat
	    if (room.x !== room.o) await benny.sendText(room.x, str, ben, { mentions: parseMention(str) } )
	    await benny.sendText(room.o, str, ben, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(ben.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (ben.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(ben.text) && ben.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(ben.text)) {
	    benny.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, ben)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = ben.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    benny.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, ben, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) benny.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, ben)
	    if (!roof.pilih2) benny.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, ben)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) benny.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    benny.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, ben)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = ben.sender == roof.p
	    let jwb2 = ben.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(ben.text) && !roof.pilih && !ben.isGroup) {
	    roof.pilih = reg.exec(ben.text.toLowerCase())[0]
	    roof.text = ben.text
	    ben.reply(`Kamu telah memilih ${ben.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) benny.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(ben.text) && !roof.pilih2 && !ben.isGroup) {
	    roof.pilih2 = reg.exec(ben.text.toLowerCase())[0]
	    roof.text2 = ben.text
	    ben.reply(`Kamu telah memilih ${ben.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) benny.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    benny.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), ben, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(ben.mentionedJid || []), ...(ben.quoted ? [ben.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            ben.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[ben.sender].afkTime > -1) {
            let user = global.db.data.users[ben.sender]
            ben.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
		
		if (isCmd && !ben.key.fromMe && !isRegistered) {
			   umur = Math.floor(Math.random() * 30)
				serial = crypto.randomBytes(10).toString('hex').slice(0, 10)
				console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(ben.pushName, 'cyan'), 'Age:', color(umur, 'cyan'), 'Serial:', color(serial, 'cyan'))
			   register.addRegisteredUser(ben.sender, ben.pushName, umur, time, serial, _registered)
			   benny.sendMessage(botNumber, {image: {url: await benny.getPP(ben.sender)}, caption: `*Nama:* ${ben.pushName}\n*ID:* ${ben.sender.split('@')[0]}\n*Serial:* ${serial}\n*Tag:* @${ben.sender.split('@')[0]}`, mentions: [ben.sender]})
		   }
	    
        switch(command) {
			
			case 'wame':
			case 'wa.me':{
				await benny.sendMessage(from, {text: `_*[ SELF WHATSAPP ]*_\n\n_Request by_ : @${ben.sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${ben.sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${ben.sender.split("@")[0]}*`, mentions: [ben.sender]}, {quoted: ben})
			}
			break
	    case 'afk': {
                let user = global.db.data.users[ben.sender]
                user.afkTime = + new Date
                user.afkReason = text
                ben.reply(`${ben.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(ben.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            ben.reply('Partner ditemukan!')
            room.o = ben.chat
            room.game.playerO = ben.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await benny.sendText(room.x, str, ben, { mentions: parseMention(str) } )
            await benny.sendText(room.o, str, ben, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: ben.chat,
            o: '',
            game: new TicTacToe(ben.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            ben.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${global.prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            benny.sendText(from, `Berhasil delete session TicTacToe`, ben)
            } else if (!this.game) {
            ben.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            ben.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(ben.sender))) ben.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (ben.mentionedJid[0] === ben.sender) return ben.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!ben.mentionedJid[0]) return ben.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${global.prefix}suit @${owner[1]}`, ben.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(ben.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${ben.sender.split`@`[0]} menantang @${ben.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${ben.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await benny.sendText(from, caption, ben, { mentions: parseMention(caption) }),
            id: id,
            p: ben.sender,
            p2: ben.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) benny.sendText(from, `_Waktu suit habis_`, ben)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	     case 'chat': {
                if (!isCreator) throw mess.only.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    benny.chatModify({ mute: 'Infinity' }, ben.chat, []).then((res) => ben.reply(jsonformat(res))).catch((err) => ben.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    benny.chatModify({ mute: null }, ben.chat, []).then((res) => ben.reply(jsonformat(res))).catch((err) => ben.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    benny.chatModify({  archive: true }, ben.chat, []).then((res) => ben.reply(jsonformat(res))).catch((err) => ben.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    benny.chatModify({ archive: false }, ben.chat, []).then((res) => ben.reply(jsonformat(res))).catch((err) => ben.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    benny.chatModify({ markRead: true }, ben.chat, []).then((res) => ben.reply(jsonformat(res))).catch((err) => ben.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    benny.chatModify({ markRead: false }, ben.chat, []).then((res) => ben.reply(jsonformat(res))).catch((err) => ben.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    benny.chatModify({ clear: { message: { id: ben.quoted.id, fromMe: true }} }, ben.chat, []).then((res) => ben.reply(jsonformat(res))).catch((err) => ben.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+ben.chat in _family100) {
                    ben.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+ben.chat] = {
                    id: 'family100'+ben.chat,
                    pesan: await benny.sendText(from, hasil, ben),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!ben.quoted && !text) throw `Kirim/reply text dengan caption ${global.prefix + command}`
            ter = command[1].toLowerCase()
            tex = ben.quoted ? ben.quoted.text ? ben.quoted.text : q ? q : ben.text : q ? q : ben.text
            ben.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${global.prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(ben.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await benny.sendMessage(from, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: ben })
                    benny.sendText(from, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[ben.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(ben.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    benny.sendButtonText(from, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[ben.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, global.namabot, ben)
                    delete tebaklagu[ben.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(ben.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    benny.sendImage(from, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, ben).then(() => {
                    tebakgambar[ben.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(ben.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    benny.sendButtonText(from, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[ben.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, global.namabot, ben)
                    delete tebakgambar[ben.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(ben.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    benny.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, ben).then(() => {
                    tebakkata[ben.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(ben.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    benny.sendButtonText(from, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[ben.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, global.namabot, ben)
                    delete tebakkata[ben.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(ben.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    benny.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, ben).then(() => {
                    tebakkalimat[ben.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(ben.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    benny.sendButtonText(from, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[ben.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, global.namabot, ben)
                    delete tebakkalimat[ben.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(ben.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    benny.sendText(from, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, ben).then(() => {
                    tebaklirik[ben.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(ben.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    benny.sendButtonText(from, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[ben.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, global.namabot, ben)
                    delete tebaklirik[ben.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(ben.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    benny.sendText(from, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, ben).then(() => {
                    caklontong[ben.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[ben.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(ben.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    benny.sendButtonText(from, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[ben.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[ben.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, global.namabot, ben)
                    delete caklontong[ben.sender.split('@')[0]]
		    delete caklontong_desk[ben.sender.split('@')[0]]
                    }
                }
            }
            break
			case 'antiviewonce':	if (arg === 'on') {
								antivo.push(from)
								fs.writeFileSync('./src/antivo.json', JSON.stringify(antivo))
								await reply('*Berhasil mengaktifkan Anti ViewOnce*')
							} else if (arg === 'off') {
								antivo.splice(from, 1)
								fs.writeFileSync('./src/antivo.json', JSON.stringify(antivo))
								await reply('*Berhasil mematikan Anti ViewOnce*')
							} else {
								reply('Pilih on atau off!')
							}
							break
			case 'welcome':if (!ben.isGroup) return ben.reply(mess.only.group)
				if (!isAdmins) return reply(mess.only.admin)
					if (arg.length < 1) return ben.reply('Ketik ${global.prefix}${command} on/off')
					if (arg == 'on') {
						if (isWelkom) return ben.reply('Sudah nyala!')
						welkom.push(from)
						fs.writeFileSync('./src/welcome.json', JSON.stringify(welkom))
						ben.reply('Success Enable Welcome!')
					} else if (arg == 'off') {
						let welkz = welkom.indexOf(ben.chat)
						welkom.splice(welkz, 1)
						fs.writeFileSync('./src/welcome.json', JSON.stringify(welkom))
						ben.reply('Success Disable Welcome!')
					} else {
						ben.reply(`𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 on 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, off 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: ${global.prefix}${command} on`)
					} break
					case 'jadwalsholat':case 'jadwalshalat':if (!arg) return reply('Masukan nama daerah!!')
					anu = await jadwas.getDataJadwal(arg)
					console.log(anu)
					teks = `*JADWAL SHALAT ${arg}*\n\n`
					for (let u of anu.result.jadwal) {
						console.log(u)
					teks += `*Tanggal:* ${u.tanggal}\n*Bulan:* ${bulan1}\n*Shubuh:* ${u.shubuh}\n*Dzuhur:* ${u.dzuhur}\n*Ashar:* ${u.ashar}\n*Maghrib:* ${u.magrib}\n*Isya:* ${u.isya}\n===========================\n`
					}
					reply(teks)
					break 
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(ben.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${global.prefix}math medium`
                let result = await genMath(text.toLowerCase())
                benny.sendText(from, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, ben).then(() => {
                    kuismath[ben.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(ben.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ben.reply("Waktu Habis\nJawaban: " + kuismath[ben.sender.split('@')[0]])
                    delete kuismath[ben.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!ben.isGroup) return reply(mess.only.group)
            let member = participants.map(u => u.id)
            let me = ben.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await benny.sendButtonText(from, buttons, jawab, global.namabot, ben, {mentions: ments})
            }
            break
			case 'gaycek':		{
                 if (arg.length > 1) {
					 if (!ben.mentionedJid) return reply('@Tag member!')
					sangen = Math.floor(Math.random() * 100)
					teks = `Tingkat gay @${ben.mentionedJid[0].split('@')[0]} Adalah ${sangen}%`
					benny.sendMessage(from, {text: teks, mentions: ben.mentionedJid}, {quoted: ben})
										} else if (arg.length < 1) {
					sangen = Math.floor(Math.random() * 100)
					teks = `Tingkat gay @${sender.split('@')[0]} Adalah ${sangen}%`
					benny.sendMessage(from, {text: teks, mentions: [sender]}, {quoted: ben})
										} 
			}
			break
                case 'lesbicek': { if (arg.length > 1) {
					 if (!ben.mentionedJid) return reply('@Tag member!')
					sangen = Math.floor(Math.random() * 100)
					teks = `Tingkat lesbi @${ben.mentionedJid[0].split('@')[0]} Adalah ${sangen}%`
					benny.sendMessage(from, {text: teks, mentions: ben.mentionedJid}, {quoted: ben})
										} else if (arg.length < 1) {
					sangen = Math.floor(Math.random() * 100)
					teks = `Tingkat lesbi @${sender.split('@')[0]} Adalah ${sangen}%`
					benny.sendMessage(from, {text: teks, mentions: [sender]}, {quoted: ben})
										} 
				}
				break
            case 'jadian': {
            if (!ben.isGroup) return reply(mess.only.group)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await benny.sendButtonText(from, buttons, jawab, global.namabot, ben, {mentions: menst})
            }
            break
            case 'react': {
                if (!isCreator) throw mess.only.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: ben.chat, fromMe: true, id: quoted.id }
                    }
                }
                benny.sendMessage(from, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.only.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                ben.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await benny.groupAcceptInvite(result).then((res) => ben.reply(jsonformat(res))).catch((err) => ben.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.only.owner
                await benny.groupLeave(ben.chat).then((res) => ben.reply(jsonformat(res))).catch((err) => ben.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.only.owner
               if (!text) throw `Example : ${global.prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          ben.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
	case 'add': {
		if (!ben.isGroup) return reply(mess.only.group)
                if (!isBotAdmins) return reply(mess.only.Badmin)
                if (!isAdmins) return reply(mess.only.admin)
		let users = ben.quoted ? ben.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await benny.groupParticipantsUpdate(from, [users], 'add').then((res) => ben.reply(jsonformat(res))).catch((err) => ben.reply(jsonformat(err)))
	}
	break
	case 'kick': {
		if (!ben.isGroup) return reply(mess.only.group)
                if (!isBotAdmins) return reply(mess.only.Badmin)
                if (!isAdmins) return reply(mess.only.admin)
		let users = ben.mentionedJid[0] ? ben.mentionedJid[0] : ben.quoted ? ben.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await benny.groupParticipantsUpdate(from, [users], 'remove').then((res) => ben.reply(jsonformat(res))).catch((err) => ben.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!ben.isGroup) return reply(mess.only.group)
                if (!isBotAdmins) return reply(mess.only.Badmin)
                if (!isAdmins) return reply(mess.only.admin)
		let users = ben.mentionedJid[0] ? ben.mentionedJid[0] : ben.quoted ? ben.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await benny.groupParticipantsUpdate(from, [users], 'promote').then((res) => ben.reply(jsonformat(res))).catch((err) => ben.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!ben.isGroup) return reply(mess.only.group)
                if (!isBotAdmins) return reply(mess.only.Badmin)
                if (!isAdmins) return reply(mess.only.admin)
		let users = ben.mentionedJid[0] ? ben.mentionedJid[0] : ben.quoted ? ben.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await benny.groupParticipantsUpdate(from, [users], 'demote').then((res) => ben.reply(jsonformat(res))).catch((err) => ben.reply(jsonformat(err)))
	}
	break
	case 'stickflip':
									if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true) {
						 media = await benny.downloadAndSaveMediaMessage(quoted)
						let gifpx = await webp2mp4File(media)
						reply(mess.wait)
						ran = getRandom('.mp4')
						console.log(gifpx)
						anj = await getBuffer(gifpx.result)
						ani = Date.now()+'.mp4'
						fs.writeFileSync(ani, anj)
						exec(`ffmpeg -i ${ani} -vf "hflip" -c:a copy ${ran}`, async (err) => {
							benny.sendVideoAsSticker(from, ran, ben, { packname: global.packname, author: global.author })
									})
									 } else if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == false) {
										 ran = getRandom('.png')
                                        reply(mess.wait)
					owgi = await downloadM(ben.quoted)
					 exec(`ffmpeg -i ${owgi} -filter:v "hflip" ${ran}`, async (err) => {
						if (err) return reply(String(err))
										benny.sendImageAsSticker(from, ran, ben, { packname: global.packname, author: global.author })
					})
									 } else {
										 reply('Reply stickernya!')
									 }
									break
        case 'stickflip2':
									if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true) {
						 media = await benny.downloadAndSaveMediaMessage(quoted)
						let gifpx = await webp2mp4File(media)
						reply(mess.wait)
						ran = getRandom('.mp4')
						console.log(gifpx)
						anj = await getBuffer(gifpx.result)
						ani = Date.now()+'.mp4'
						fs.writeFileSync(ani, anj)
						exec(`ffmpeg -i ${ani} -vf vflip -c:a copy ${ran}`, async (err) => {
							benny.sendVideoAsSticker(from, ran, ben, { packname: global.packname, author: global.author })
									})
									 } else if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == false) {
										 ran = getRandom('.png')
                                        reply(mess.wait)
					owgi = await downloadM(ben.quoted)
					 exec(`ffmpeg -i ${owgi} -filter:v "vflip" ${ran}`, async (err) => {
						if (err) return reply(String(err))
										benny.sendImageAsSticker(from, ran, ben, { packname: global.packname, author: global.author })
					})
									 } else {
										 reply('Reply stickernya!')
									 }
									break
									case 'takesw':
			case 'colongsw':
			case 'ambilsw':
			if (!ben.key.fromMe && !isOwner) return
			if (isQuotedImage) {
				anu = await downloadM()
				benny.sendMessage(from, fs.readFileSync(anu), image, {quoted: ben})
			} else if (isQuotedVideo) {
				anu = await downloadM()
				benny.sendMessage(from, fs.readFileSync(anu), video, {quoted: ben, mimetype: 'video/mp4'})
			}
			break
			case 'ambil':		case 'colong':
	if (!isQuotedSticker) return reply('Stiker aja om')
	 media = await benny.downloadAndSaveMediaMessage(quoted)
			reply(mess.wait)
			anu = ben.quoted.sender
				benny.sendMessage(anu, {text: `*Halo kak* ( @${anu.split('@')[0]} )\n*Izin ambil sticker nya yah :)*`, mentions: [anu]})
	if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == false) {
		exec(`ffmpeg -i ${media} webp.jpg`, async (err) => {
	    if (err) return reply(util.format(err))
		benny.sendImageAsSticker(from, 'webp.jpg', ben, { packname: global.packname, author: global.author })
	fs.unlinkSync('webp.jpg')
		})
	} else if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true) {
		let au = await webp2mp4File(media)
		benny.sendImageAsSticker(from, au.result, ben, { packname: global.packname, author: global.author })
	}
							break
        case 'stickflip3':
									if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true) {
						 media = await benny.downloadAndSaveMediaMessage(quoted)
						let gifpx = await webp2mp4File(media)
						reply(mess.wait)
						ran = getRandom('.mp4')
						console.log(gifpx)
						anj = await getBuffer(gifpx.result)
						ani = Date.now()+'.mp4'
						fs.writeFileSync(ani, anj)
						exec(`ffmpeg -i ${ani} -vf "hflip, vflip" -c:a copy ${ran}`, async (err) => {
							benny.sendVideoAsSticker(from, ran, ben, { packname: global.packname, author: global.author })
									})
									 } else if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == false) {
										 ran = getRandom('.png')
                                        reply(mess.wait)
					owgi = await downloadM(ben.quoted)
					 exec(`ffmpeg -i ${owgi} -filter:v "hflip, vflip" ${ran}`, async (err) => {
						if (err) return reply(String(err))
										benny.sendImageAsSticker(from, ran, ben, { packname: global.packname, author: global.author })
					})
									 } else {
										 reply('Reply stickernya!')
									 }
									break
        case 'block': {
		if (!isCreator) throw mess.only.owner
		let users = ben.mentionedJid[0] ? ben.mentionedJid[0] : ben.quoted ? ben.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await benny.updateBlockStatus(users, 'block').then((res) => ben.reply(jsonformat(res))).catch((err) => ben.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.only.owner
		let users = ben.mentionedJid[0] ? ben.mentionedJid[0] : ben.quoted ? ben.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await benny.updateBlockStatus(users, 'unblock').then((res) => ben.reply(jsonformat(res))).catch((err) => ben.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!ben.isGroup) return reply(mess.only.group)
                if (!isBotAdmins) return reply(mess.only.Badmin)
                if (!isAdmins) return reply(mess.only.admin)
                if (!text) throw 'Text ?'
                await benny.groupUpdateSubject(from, text).then((res) => ben.reply(mess.success)).catch((err) => ben.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!ben.isGroup) return reply(mess.only.group)
                if (!isBotAdmins) return reply(mess.only.Badmin)
                if (!isAdmins) return reply(mess.only.admin)
                if (!text) throw 'Text ?'
                await benny.groupUpdateDescription(from, text).then((res) => ben.reply(mess.success)).catch((err) => ben.reply(jsonformat(err)))
            }
            break
			case 'art':
        case 'bts':
        case 'exo':
        case 'elf':
        case 'loli':
        case 'neko':
        case 'waifu':
        case 'shota':
        case 'husbu':
        case 'sagiri':
        case 'shinobu':
        case 'megumin':
        case 'wallnime':
        case 'quotesimage':
            benny.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random/${command}?apikey=${global.lolkey}` } })
            break
        case 'chiisaihentai':
        case 'trap':
        case 'blowjob':
        case 'yaoi':
        case 'ecchi':
        case 'hentai':
        case 'ahegao':
        case 'hololewd':
        case 'sideoppai':
        case 'animefeets':
        case 'animebooty':
        case 'animethighss':
        case 'hentaiparadise':
        case 'animearmpits':
        case 'hentaifemdom':
        case 'lewdanimegirls':
        case 'biganimetiddies':
        case 'animebellybutton':
        case 'hentai4everyone':
            benny.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${global.lolkey}}` } })
            break

        case 'bj':
        case 'ero':
        case 'cum':
        case 'feet':
        case 'yuri':
        case 'trap':
        case 'lewd':
        case 'feed':
        case 'eron':
        case 'solo':
        case 'gasm':
        case 'poke':
        case 'anal':
        case 'holo':
        case 'tits':
        case 'kuni':
        case 'kiss':
        case 'erok':
        case 'smug':
        case 'baka':
        case 'solog':
        case 'feetg':
        case 'lewdk':
        case 'waifu':
        case 'pussy':
        case 'femdom':
        case 'cuddle':
        case 'hentai':
        case 'eroyuri':
        case 'cum_jpg':
        case 'blowjob':
        case 'erofeet':
        case 'holoero':
        case 'classic':
        case 'erokemo':
        case 'fox_girl':
        case 'futanari':
        case 'lewdkemo':
        case 'wallpaper':
        case 'pussy_jpg':
        case 'kemonomimi':
        case 'nsfw_avatar':
            benny.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random2/${command}?apikey=${global.lolkey}` }, caption: `*${command}*` })
            break
			
		case 'kickbule':{if (!isGroup) return reply(mess.only.group)
					if (!ben.key.fromMe && !isAdmins) return reply(mess.only.admin)
					moms = []
					let p = 1
					teks = `*LIST BULE DI GRUP INI*\n\n`
					reply('*Another number +62 will kick!*')
					for (let i of groupMembers) {
						if (i.id && !i.id.startsWith('62')) {
                    moms.push(i.id)
						}
					}
						console.log(moms)
						for (let o of moms) {
							teks += `*${p++}.* @${o.split('@')[0]}\n`
						}
						benny.sendMessage(from, {text: teks, mentions: moms}, {quoted: ben})
						for (let u = 0; u < moms.length; u++) {
							await sleep(2000)
							if (!isBotAdmins) return reply(mess.only.Badmin)
						benny.groupParticipantsUpdate(from, [moms[u]], 'remove')
					} } break
					case 'cekbule':{
					if (!isGroup) return reply(mess.only.group)
					moms = []
					let p = 1
					teks = `*LIST BULE DI GRUP INI*\n\n`
					for (let i of groupMembers) {
						if (i.id && !i.id.startsWith('62')) {
                    moms.push(i.id)
						}
					}
						console.log(moms)
						for (let o of moms) {
							teks += `*${p++}.* @${o.split('@')[0]}\n`
						}
						benny.sendMessage(from, {text: teks, mentions: moms}, {quoted: ben})
					} break

        // Textprome //
		
        case 'blackpink':
        case 'neon':
        case 'greenneon':
        case 'advanceglow':
        case 'futureneon':
        case 'sandwriting':
        case 'sandsummer':
        case 'sandengraved':
        case 'metaldark':
        case 'neonlight':
        case 'holographic':
        case 'text1917':
        case 'minion':
        case 'deluxesilver':
        case 'newyearcard':
        case 'bloodfrosted':
        case 'halloween':
        case 'jokerlogo':
        case 'fireworksparkle':
        case 'natureleaves':
        case 'bokeh':
        case 'toxic':
        case 'strawberry':
        case 'box3d':
        case 'roadwarning':
        case 'breakwall':
        case 'icecold':
        case 'luxury':
        case 'cloud':
        case 'summersand':
        case 'horrorblood':
        case 'thunder':
            if (arg.length == 0) return ben.reply(`Example: ${global.prefix + command} Nando BOT`)
            benny.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${global.lolkey}&text=${arg}` }, caption: `*${command}:* ${arg}` })
            break

        case 'pornhub':
        case 'glitch':
        case 'avenger':
        case 'space':
        case 'ninjalogo':
        case 'marvelstudio':
        case 'lionlogo':
        case 'wolflogo':
        case 'steel3d':
        case 'wallgravity':
            if (args.length == 0) return ben.reply(`Example: ${global.prefix + command} Nando BOT`)
            benny.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${global.lolkey}&text1=${text1}&text2=${text2}` }, caption: `*${command}:* ${arg}` })
            break

        // Photo Oxy //
        case 'shadow':
        case 'cup':
        case 'cup1':
        case 'romance':
        case 'smoke':
        case 'burnpaper':
        case 'lovemessage':
        case 'undergrass':
        case 'love':
        case 'coffe':
        case 'woodheart':
        case 'woodenboard':
        case 'summer3d':
        case 'wolfmetal':
        case 'nature3d':
        case 'underwater':
        case 'golderrose':
        case 'summernature':
        case 'letterleaves':
        case 'glowingneon':
        case 'fallleaves':
        case 'flamming':
        case 'harrypotter':
        case 'carvedwood':
            if (arg.length == 0) return ben.reply(`Example: ${global.prefix + command} Nando BOT`)
            benny.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${global.lolkey}&text=${arg}` }, caption: `*${command}:* ${arg}` })
            break

        case 'tiktokimg':
        case 'arcade8bit':
        case 'battlefield4':
        case 'pubg':
            if (arg.length == 0) return reply(`Example: ${global.prefix + command} Nando&BOT`)
            benny.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${global.lolkey}&text1=${text1}&text2=${text2}` }, caption: `*${command}:* ${arg}` })
            break

        // Ephoto 360 //
        case 'wetglass':
        case 'multicolor3d':
        case 'watercolor':
        case 'luxurygold':
        case 'galaxywallpaper':
        case 'lighttext':
        case 'beautifulflower':
        case 'puppycute':
        case 'royaltext':
        case 'heartshaped':
        case 'birthdaycake':
        case 'galaxystyle':
        case 'hologram3d':
        case 'greenneon':
        case 'glossychrome':
        case 'greenbush':
        case 'metallogo':
        case 'noeltext':
        case 'glittergold':
        case 'textcake':
        case 'starsnight':
        case 'wooden3d':
        case 'textbyname':
        case 'writegalacy':
        case 'galaxybat':
        case 'snow3d':
        case 'birthdayday':
        case 'goldplaybutton':
        case 'silverplaybutton':
        case 'freefire':
            if (arg.length === 0) return ben.reply(`Example: ${global.prefix + command} Nando BOT`)
            benny.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${global.lolkey}&text=${arg}` }, caption: `*${command}:* ${arg}` })
            break
			case 'utatoo':
case 'unsharpen':
case 'thanos':
case 'sniper':
case 'sharpen':
case 'scary':
case 'redple':
case 'rejected':
case 'posterize':
case 'ps4':
case 'pixelize':
case 'missionpassed':
case 'moustache':
case 'lookwhatkarenhave':
case 'instagram':
case 'greyscale':
case 'glitch':
case 'gay':
case 'frame':
case 'fire':
case 'distort':
case 'dictator':
case 'deepfry':
case 'ddungeon':
case 'circle':
case 'challenger':
case 'burn':
case 'brazzers':
case 'beautiful':{
	reply(mess.wait)
	if (isQuotedImage) {
		let i = await benny.downloadAndSaveMediaMessage(quoted)
		let b = await TelegraPh(i)
		let h = await ameApi.generate(command, { url: b})
benny.sendMessage(from, {image: {url: h}, caption: `*${command}*`}, {quoted: ben})
	} else if (isQuotedSticker) {
		if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true) return reply('*Hanya reply sticker yang tidak bergerak!*')
		let i = await downloadM(ben.quoted)
		let ran = getRandom('.jpg')
		exec(`ffmpeg -i ${i} ${ran}`, async(err) => {
		let b = await TelegraPh(ran)
		let h = await ameApi.generate(command, { url: b})
		fs.writeFileSync(ran, h)
		benny.sendImageAsSticker(from, ran, ben, {packname: global.packname, author: global.author})
		})
	}	else {
	reply('Reply image/sticker nya!')
}
}
break
          case 'setppbot': {
                if (!isCreator) throw mess.only.owner
                if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${global.prefix + command}`)
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${global.prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${global.prefix + command}`
                let media = await benny.downloadAndSaveMediaMessage(quoted)
                await benny.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                ben.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!ben.isGroup) return reply(mess.only.group)
                if (!isAdmins) return reply(mess.only.admin)
                if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${global.prefix + command}`)
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${global.prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${global.prefix + command}`
                let media = await benny.downloadAndSaveMediaMessage(quoted)
                await benny.updateProfilePicture(from, { url: media }).catch((err) => fs.unlinkSync(media))
                ben.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!ben.isGroup) return reply(mess.only.group)
                if (!ben.key.fromMe && !isOwner && !isAdmins) return reply(mess.only.admin)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                benny.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: ben })
                }
                break
                case 'hidetag': {
            if (!ben.isGroup) return reply(mess.only.group)
            if (!ben.key.fromMe && !isOwner && !isAdmins) return reply(mess.only.admin)
            benny.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: ben })
            }
            break
               case 'totag': {
               if (!ben.isGroup) return reply(mess.only.group)
               if (!isBotAdmins) return reply(mess.only.Badmin)
               if (!isAdmins) return reply(mess.only.admin)
               if (!ben.quoted) throw `Reply pesan dengan caption ${global.prefix + command}`
               benny.sendMessage(from, { forward: ben.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
			   case 'autorespond': {
										if (!ben.key.fromMe || !isOwner) return
										if (arg === 'on') {
											auspon = true
											await reply('*Done!*')
										} else if (arg === 'off') {
											auspon = false
											await reply('*Done!*')
										} else {
											reply('Pilih on atau off!')
										}
									}
									break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[ben.sender].limit < 1) return ben.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[ben.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                ben.reply(teks)
	    }
	    break
		case 'caklontong': {
						if (cadb.includes(from)) return reply(`Masih ada soal yang belum di selesaikan`)
							let soalan = JSON.parse(fs.readFileSync('./src/caklontong.json'))
						let soal = soalan[Math.floor(Math.random() * soalan.length)]
						let anih = soal.jawaban.toLowerCase()
				let pao = await benny.sendMessage(from, {text: `*[ CAK LONTONG ]*\n\n*Soal:*\n${soal.soal}\n*Reply Soal ini untuk menjawab!*\n\n*Waktu hanya 10 detik!*`}, {quoted: ben})
				caklontongs.push({soal: soal.soal, jawaban: anih, sender: pao.key.id})
				console.log(caklontongs)
				cadb.push(from)
					fs.writeFileSync('./src/game/caklontong.json', JSON.stringify(cadb))
            }
                break
				case 'cancelcaklontong':
				case 'cancelcl':{
					if (!cadb.includes(from)) return reply('*Tidak ada sesi permainan yang berlangsung di group ini!*')
					if (!ben.quoted) return reply(`*Reply soal caklontong dan ketik*\n ${prefix}${command}`)
					if (ben.message && ben.message.extendedTextMessage && ben.message.extendedTextMessage.contextInfo && ben.message.extendedTextMessage.contextInfo.stanzaId !== caklontong[0].sender) return reply(`*Reply soal caklontong dan ketik*\n ${prefix}${command}`)
				caklontongs = []
			cadb.splice(cadb.indexOf(from), 1)
					fs.writeFileSync('./src/game/caklontong.json', JSON.stringify(cadb))
				}
					break
               case 'vote': {
            if (!ben.isGroup) return reply(mess.only.group)
            if (ben.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${global.prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${global.prefix + command} Owner Ganteng*`
            ben.reply(`Vote dimulai!\n\n*${global.prefix}upvote* - untuk ya\n*${global.prefix}devote* - untuk tidak\n*${global.prefix}cekvote* - untuk mengecek vote\n*${global.prefix}hapusvote* - untuk menghapus vote`)
            vote[ben.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[ben.chat][1]
            devote = vote[ben.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[ben.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[ben.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[ben.chat][2].length}
│
│ 
└────

*${global.prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${global.prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${global.prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: global.namabot,
                buttons: buttonsVote,
                headerType: 1
            }
            benny.sendMessage(from, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!ben.isGroup) return reply(mess.only.group)
            if (!(ben.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${global.prefix}vote* - untuk memulai vote`
            isVote = vote[ben.chat][1].concat(vote[ben.chat][2])
            wasVote = isVote.includes(ben.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[ben.chat][1].push(ben.sender)
            menvote = vote[ben.chat][1].concat(vote[ben.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[ben.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[ben.chat][1].length}
${vote[ben.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[ben.chat][2].length}
${vote[ben.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${global.prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${global.prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${global.prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: global.namabot,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            benny.sendMessage(from, buttonMessageUpvote)
	    }
             break
			 case 'cekbot':{if (!isGroup) return reply(mess.only.group)
											if (!ben.key.fromMe && !isAdmins) return reply(mess.only.admin)
					mems = []
					teks = `*LIST BOT DI GROUP INI*\n\n`
					for (let mem of groupMembers){
					console.log(mem)
					woilo = mem.id
					l = 1
					namadia = await benny.getName(woilo)
					mems.push({jid: woilo, name: namadia})
					}
					memss = []
					korbannama = ['bot','Bot','BOT','bOt','boT']
					console.log(mems)
					for (let e = 0; e < korbannama.length; e++) {
					for (let i = 0; i < mems.length; i++) {
						if (mems[i].name.includes(korbannama[e])) {
							memss.push(mems[i].id)
						}
					}
					}
					for (let p of memss) {
					teks += `*${l++}.* @${p.split('@')[0]}\n`
					}
					teks += `Total: ${memss.length}`
					benny.sendMessage(from, {text: teks, mentions: memss}, {quoted: ben})
			 } break
					case 'kickadmin':
					if (!isGroup) return reply(mess.only.group)
			        if (!ben.key.fromMe && !isAdmins) return reply(mess.only.admin)
					if (!isBotAdmins) return reply(mess.only.Badmin)
						for (let i = 0; i < groupMembers.length; i++) {
							if (groupMembers && groupMembers[i].admin && !groupMembers[i].id.includes(benny.user.id)) {
								await sleep(3000)
								benny.groupParticipantsUpdate(from, [groupMembers[i].id], 'remove')
							}
						}
						break
			 case 'cekadmin':
			 case 'listadmin':
					if (!isGroup) return reply(mess.only.group)
						l = 1
					mema = []
						teks = `*LIST ADMIN DI GROUP INI*\n\n`
					for (let p of groupMembers) {
						if (p.admin) {
							mema.push(p.id)
					teks += `*${l++}.* @${p.id.split('@')[0]}\n`
						}
					}
					teks += `Total: ${mema.length}`
						benny.sendMessage(from, {text: teks, mentions: mema}, {quoted: ben})
						break
			 case 'cekprofile': if (!isGroup) return reply(mess.only.group)
				 if (arg && ben.message.extendedTextMessage) {
				 anu = await benny.getPP(ben.mentionedJid[0])
				 stat = await benny.fetchStatus(ben.mentionedJid[0], 'text')
				namadia = await benny.getName(ben.mentionedJid[0])
				 console.log(stat)
				 teks = `[ _*USER INFO*_ ]\n\n\n*Nama:* ${namadia}\n*Status:* ${stat.status || '-'}\n*Admin:* ${groupAdmins.includes(ben.mentionedJid[0]) ? 'YES' : 'NO'}`
				 buffer = await getBuffer(anu)
				 benny.sendMessage(from, {image: buffer, caption: teks, mentions: [ben.mentionedJid[0]]}, {quoted: ben})  
				 } else if (!arg && ben.message.extendedTextMessage) {
				 anu = await benny.getPP(ben.quoted.sender)
				 stat = await benny.fetchStatus(ben.quoted.sender, 'text')
				namadia = await benny.getName(ben.quoted.sender)
				 console.log(stat)
				 teks = `_*USER INFO*_\n\n\n*Nama:* ${namadia}\n*Status:* ${stat.status || '-'}\n*Admin:* ${groupAdmins.includes(ben.quoted.sender) ? 'YES' : 'NO'}`
				 buffer = await getBuffer(anu)
				benny.sendMessage(from, {image: buffer, caption: teks, mentions: [ben.quoted.sender]}, {quoted: ben})  
				 }
		break 
                case 'devote': {
            if (!ben.isGroup) return reply(mess.only.group)
            if (!(ben.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${global.prefix}vote* - untuk memulai vote`
            isVote = vote[ben.chat][1].concat(vote[ben.chat][2])
            wasVote = isVote.includes(ben.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[ben.chat][2].push(ben.sender)
            menvote = vote[ben.chat][1].concat(vote[ben.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[ben.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[ben.chat][1].length}
${vote[ben.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[ben.chat][2].length}
${vote[ben.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${global.prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${global.prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${global.prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: global.namabot,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            benny.sendMessage(from, buttonMessageDevote)
	}
            break
			case 'autodelete':
			if (!isGroup) return reply(mess.only.group)
				if (!ben.key.fromMe && isAdmins) return reply(mess.only.group)
					if (!isBotAdmins) return reply(mess.only.Badmin)
						if (arg === 'on') {
						autodelete.push(from)
					fs.writeFileSync('./src/autodelete.json', JSON.stringify(autodelete))
					reply('*Done!*')
						} else if (arg === 'off') {
						autodelete.splice(autodelete.indexOf(from), 1)
					fs.writeFileSync('./src/autodelete.json', JSON.stringify(autodelete))
					reply('*Done!*')
						} else {
							reply('Pilih on atau off!')
						}
						break
			case 'addbadword':
			if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${ben.sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			    	if (!arg) return reply(`Penggunaan ${prefix}addbadword anjing`)
				teks = body.slice(12)
				tos = `Berhasil Add Badword\n`
				addBadword(teks, badwordDB)
				t = 1
				for (let o of badwordDB) {
					tos += `\n*${t++}.* ${o.badword}`
				}
				reply(tos)
				break
				case 'listbadword':teks = `*LIST BADWORD*\n`
				t = 1
				for (let o of badwordDB) {
					teks += `\n*${t++}.* ${o.badword}`
				}
				reply(teks)
				break
			case 'delbadword':
			if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			    	if (!arg.length) return reply(`Penggunaan ${prefix}delbadword anjing`)
				if (!checkBadword(body.slice(12), badwordDB)) return reply(`Ga ada di database`)
                deleteBadword(body.slice(12), badwordDB)
				reply(`Ok berhasil gan`)
				break
			case 'caripasangan':
			case 'carijodoh':
			case 'caripacar':	if (!isGroup) return reply(mess.only.group)
			jom2 = groupMembers
			kepoah = jom2[Math.floor(Math.random() * jom2.length)]
			teks = `*${command.split('ri')[1]} kamu digrup ini adalah:* @${kepoah.id.split('@')[0]}`
			benny.sendMessage(from, {image: await getBuffer(await benny.getPP(kepoah.id)), caption: teks, mentions: [kepoah.id]}, {quoted: ben})
			break
			case 'ban':
			if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
	if (arg.split('&')[0] && arg.split(' & ')[1] && ben.message.extendedTextMessage) {
					   ban.addBanUser(ben.mentionedJid[0], arg.split('&')[1], _ban)
                        await reply(`*「 BANNED 」*\n\n➸ *ID*: ${ben.mentionedJid[0].split('@')[0]}\n➸ *Expired*: ${ms(toMs(arg.split(' & ')[1])).days} day(s) ${ms(toMs(arg.split(' & ')[1])).hours} hour(s) ${ms(toMs(arg.split(' & ')[1])).minutes} minute(s)`)
				   } else if (arg.split(' & ')[0] && arg.split(' & ')[1] && ben.message.conversation) {
					   bodom = new RegExp('[-+/ +/()]', 'gi')
				teks = arg.split('&')[0].replace(bodom, '')
					    ban.addBanUser(`${teks}@s.whatsapp.net`, text2, _ban)
                        await reply(`*「 BANNED 」*\n\n➸ *ID*: ${teks}\n➸ *Expired*: ${ms(toMs(arg.split(' & ')[1])).days} day(s) ${ms(toMs(arg.split('&')[1])).hours} hour(s) ${ms(toMs(arg.split('&')[1])).minutes} minute(s)`)
				   } else if (arg && !arg.includes('&') && ben.message.extendedTextMessage) {
					   ban.addBanUser(ben.quoted.sender, arg, _ban)
                        await reply(`*「 BANNED 」*\n\n➸ *ID*: ${ben.quoted.sender.split('@')[0]}\n➸ *Expired*: ${ms(toMs(arg)).days} day(s) ${ms(toMs(arg)).hours} hour(s) ${ms(toMs(arg)).minutes} minute(s) ${ms(toMs(arg)).seconds} second(s)`)
				   } else {
					   reply('Format salah!')
				   } 
				   break
				   case 'unban':
			if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
				if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
	if (arg && arg.includes('@') && ben.message.extendedTextMessage) {
					  _ban.splice(_ban.indexOf(ban.getBanPosition(ben.mentionedJid[0], _ban)), 1)
				fs.writeFileSync('./src/banned.json', JSON.stringify(_ban))
                        await reply('*Sukses!*')
						} else if (arg && !arg.includes('@') && ben.message.conversation) {
					   bodom = new RegExp('[-+/ +/()]', 'gi')
				teks = arg.split(' & ')[0].replace(bodom, '')
				_ban.splice(_ban.indexOf(ban.getBanPosition(`${teks}@s.whatsapp.net`, _ban)), 1)
				fs.writeFileSync('./src/banned.json', JSON.stringify(_ban))
                        await reply('*Sukses!*')
				  } else if (!arg && !arg.includes('@') && ben.message.extendedTextMessage) {
                _ban.splice(_ban.indexOf(ban.getBanPosition(ben.quoted.sender, _ban)), 1)
				fs.writeFileSync('./src/banned.json', JSON.stringify(_ban))
                        await reply('*Sukses!*')
					 } else {
					   reply('Format salah!')
				   } 
				   break
				   case 'addpremium':
			case 'addprem':
			if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
	if (arg.split(' & ')[0] && arg.split(' & ')[1] && ben.message.extendedTextMessage) {
					   premium.addPremiumUser(ben.mentionedJid[0], arg.split('&')[1], _premium)
                        await reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${ben.mentionedJid[0].split('@')[0]}\n➸ *Expired*: ${ms(toMs(arg.split(' & ')[1])).days} day(s) ${ms(toMs(arg.split(' & ')[1])).hours} hour(s) ${ms(toMs(arg.split(' & ')[1])).minutes} minute(s)`)
				   } else if (arg.split(' & ')[0] && arg.split(' & ')[1] && ben.message.conversation) {
					   bodom = new RegExp('[-+/ +/()]', 'gi')
				teks = arg.split('&')[0].replace(bodom, '')
					    premium.addPremiumUser(`${arg.split(' & ')[1]}@s.whatsapp.net`, text2, _premium)
                        await reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${teks}\n➸ *Expired*: ${ms(toMs(arg.split(' & ')[1])).days} day(s) ${ms(toMs(arg.split('&')[1])).hours} hour(s) ${ms(toMs(arg.split('&')[1])).minutes} minute(s)`)
				   } else if (arg && !arg.includes('&') && ben.message.extendedTextMessage) {
					   premium.addPremiumUser(ben.quoted.sender, arg, _premium)
                        await reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${ben.quoted.sender.split('@')[0]}\n➸ *Expired*: ${ms(toMs(arg)).days} day(s) ${ms(toMs(arg)).hours} hour(s) ${ms(toMs(arg)).minutes} minute(s)`)
				   } else {
					   reply('Format salah!')
				   } 
				   break
                 case 'addpremiumall':
			case 'addpremall':
			if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
				if (!arg) return reply('Masukan waktu expired nya!')
				let grupre = `*[ PREMIUM ALL ADDED ]*\n\n`
				for (let i of groupMembers) {
					   premium.addPremiumUser(i.id, arg, _premium)
					   grupre += `- *ID*: ${i.id.split('@')[0]}\n- *Expired*: ${ms(toMs(args[0])).days} day(s) ${ms(toMs(args[0])).hours} hour(s) ${ms(toMs(args[0])).minutes} minute(s)\n\n`
			} 
                        await reply(grupre.trim())
				   break
			case 'delpremiumall':
			case 'delpremall':
			if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
					  _premium.splice(_premium)
				fs.writeFileSync('./src/premium.json', JSON.stringify(_premium))
                        await reply('*Sukses!*')
				   break
				   case 'chatpremium':
				   case 'chatprem':
				   if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
					   if (!arg) return reply('Apa pesannya?')
						   for (let i = 0; i < _premium.length; i++) {
							   await sleep(2000)
							   benny.sendMessage(_premium[i].id, {text: `*Dari Owner ${benny.getName(ben.sender)}:*\n*Pesan:* ${arg}`})
						   }
						   break
			case 'premiumlist':
            case 'listpremium':
            case 'listprem':
            case 'premlist':let listPremi = `*-- [ PREMIUM USERS ] --*\n\nJumlah : ${_premium.length}\n\n`
                const deret = premium.getAllPremiumUser(_premium)
                const arrayPremi = []
                for (let i = 0; i < deret.length; i++) {
                    const checkExp = ms(premium.getPremiumExpired(deret[i], _premium) - Date.now())
                    arrayPremi.push({pushname: await benny.getName(premium.getAllPremiumUser(_premium)[i])})
                    listPremi += `*${i + 1}.* @${premium.getAllPremiumUser(_premium)[i].replace('@s.whatsapp.net', '')}\n? *Name*: ${arrayPremi[i].pushname}\n? *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
  console.log(arrayPremi)               
				}
	await benny.sendMessage(from, {text: listPremi.trim(), mentions: benny.parseMention(listPremi)})
            break
case 'cekvote':
if (!ben.isGroup) return reply(mess.only.group)
if (!(ben.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${global.prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[ben.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[ben.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[ben.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${global.prefix}hapusvote* - untuk menghapus vote


©${benny.user.id}
`
benny.sendTextWithMentions(from, teks_vote, ben)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!ben.isGroup) return reply(mess.only.group)
            if (!(ben.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${global.prefix}vote* - untuk memulai vote`
            delete vote[ben.chat]
            ben.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': case 'grup': {
                if (!ben.isGroup) return reply(mess.only.group)
                if (!isBotAdmins) return reply(mess.only.Badmin)
                if (!ben.key.fromMe && !isOwner && !isAdmins) return reply(mess.only.admin)
                if (args[0] === 'close'){
                    await benny.groupSettingUpdate(from, 'announcement').then((res) => ben.reply(`Sukses Menutup Group`)).catch((err) => ben.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await benny.groupSettingUpdate(from, 'not_announcement').then((res) => ben.reply(`Sukses Membuka Group`)).catch((err) => ben.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await benny.sendButtonText(from, buttons, `Mode Group`, global.namabot, ben)

             }
            }
            break
            case 'editinfo': {
                if (!ben.isGroup) return reply(mess.only.group)
                if (!isBotAdmins) return reply(mess.only.Badmin)
                if (!isAdmins) return reply(mess.only.admin)
             if (args[0] === 'open'){
                await benny.groupSettingUpdate(from, 'unlocked').then((res) => ben.reply(`Sukses Membuka Edit Info Group`)).catch((err) => ben.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await benny.groupSettingUpdate(from, 'locked').then((res) => ben.reply(`Sukses Menutup Edit Info Group`)).catch((err) => ben.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await benny.sendButtonText(from, buttons, `Mode Edit Info`, global.namabot, ben)

            }
            }
            break
            case 'antilink': {
                if (!ben.isGroup) return reply(mess.only.group)
                if (!isBotAdmins) return reply(mess.only.Badmin)
                if (!isAdmins) return reply(mess.only.admin)
                if (args[0] === "on") {
                if (db.data.chats[ben.chat].antilink) return ben.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[ben.chat].antilink = true
                ben.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[ben.chat].antilink) return ben.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[ben.chat].antilink = false
                ben.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await benny.sendButtonText(from, buttons, `Mode Antilink`, global.namabot, ben)
                }
             }
             break
             case 'mute': {
                if (!ben.isGroup) return reply(mess.only.group)
                if (!isBotAdmins) return reply(mess.only.Badmin)
                if (!isAdmins) return reply(mess.only.admin)
                if (args[0] === "on") {
                if (db.data.chats[ben.chat].mute) return ben.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[ben.chat].mute = true
                ben.reply(`${global.namabot} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[ben.chat].mute) return ben.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[ben.chat].mute = false
                ben.reply(`${global.namabot} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await benny.sendButtonText(from, buttons, `Mute Bot`, global.namabot, ben)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!ben.isGroup) return reply(mess.only.group)
                if (!isBotAdmins) return reply(mess.only.Badmin)
                let response = await benny.groupInviteCode(ben.chat)
                benny.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, ben, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!ben.isGroup) return reply(mess.only.group)
                if (!isBotAdmins) return reply(mess.only.Badmin)
                if (!isAdmins) return reply(mess.only.admin)
                if (args[0] === '1') {
                    await benny.groupToggleEphemeral(from, 1*24*3600).then((res) => ben.reply(jsonformat(res))).catch((err) => ben.reply(jsonformat(err)))
                } else if (args[0] === '7') {
                    await benny.groupToggleEphemeral(from, 7*24*3600).then((res) => ben.reply(jsonformat(res))).catch((err) => ben.reply(jsonformat(err)))
                } else if (args[0] === '90') {
                    await benny.groupToggleEphemeral(from, 90*24*3600).then((res) => ben.reply(jsonformat(res))).catch((err) => ben.reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await benny.groupToggleEphemeral(from, 0).then((res) => ben.reply(jsonformat(res))).catch((err) => ben.reply(jsonformat(err)))
                } else {
                let sections = [
                {
                title: "CHANGE EPHEMERAL GROUP",
                rows: [
                {title: "Ephemeral 1 day", rowId: `#ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
                {title: "Ephemeral 7 day's", rowId: `#ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
                {title: "Ephemeral 90 days's", rowId: `#ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
                {title: "Ephemeral Off", rowId: `#ephemeral off`, description: `Deactivate this Ephemeral group`}
                ]
                },
                ]
                benny.sendListMsg(from, `Please select the following Ephemeral Options List !`, global.namabot, `Hello Admin ${groupMetadata.subject}`, `Click Here`, sections, ben)
                }
            }
            break
			case 'meme':
			benny.sendImages(from, `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${global.lolkey}`, command, `*${command}*`, ben)
			break
            case 'delete': {
                if (!ben.quoted) throw false
				if (isGroup) {
					let { chat, id, isBaileys } = ben.quoted
                benny.sendMessage(from, { delete: { remoteJid: ben.chat, id: ben.quoted.id, participant: ben.quoted.sender } })
				} else {
                let { chat, id, isBaileys } = ben.quoted
                benny.sendMessage(from, { delete: { remoteJid: ben.chat, id: ben.quoted.id, participant: ben.quoted.sender } })
            }
			}
            break
			case 'setauthor':
			if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
				global.author = arg
			reply(`*Author berhasil diubah menjadi:* ${arg}`)
			break
			case 'brainly':{
					anu = await brainly(arg, 5, 'id')
					console.log(anu.data[0].jawaban)
					teks = `*BRAINLY*\n\n`
					for (let o of anu.data) {
					for (let i of o.jawaban) {
						teks += `Pertanyaan: ${o.pertanyaan}\nJawaban: ${i.text}\n==============================\n`
					}
					}
					console.log(anu)
					reply(teks.trim())
			}
				break
				
			case 'setpackname':
			if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
				global.packname = arg
			reply(`*Packname berhasil diubah menjadi:* ${arg}`)
			break
			case 'kickarea':
			if (!ben.isGroup) return reply(mess.only.group)
					if (!ben.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
					if (!isBotAdmins) return reply(mess.only.Badmin)
			  if (arg === 'on') {
				  if (isKickArea) return reply('Sudah aktif!!!')
						kickarea.push(from)
						fs.writeFileSync('./src/kickarea.json', JSON.stringify(kickarea))
						ben.reply('*Sukses mengaktifkan mode kickarea!*')
			  } else if (arg === 'off') {
						kickarea.splice(kickarea.indexOf(from), 1)
						fs.writeFileSync('./src/kickarea.json', JSON.stringify(kickarea))
						ben.reply('*Sukses mematikan mode kickarea!*')
					} else {
						reply('Pilih on atau off!')
					}
						break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.only.owner
                if (!text) throw `Text mana?\n\nExample : ${global.prefix + command} fatih-san`
                let getGroups = await benny.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                ben.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 877-1889-5904'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: '#ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: '#owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: '#sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      benny.send5ButImg(i, txt, global.namabot, global.thumb, btn)
                    }
                ben.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
			case 'print':
				 if (!ben.key.fromMe && !isCreator) return reply(mess.only.ownerB)
					
				 if (arg) {
					 console.log(arg)
				 } else if (!arg) {
				 console.log(ben.quoted.text)
				 } 
			 break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.only.owner
                if (!text) throw `Text mana?\n\nExample : ${global.prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                ben.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'WhatsApp Owner',
                                    url: 'https://wa.me/6287718895904?text=Hai+Owner+N@nd0+BOT'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 877-1889-5904'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: '#ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: '#owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: '#sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      benny.send5ButImg(yoi, txt, global.namabot, global.thumb, btn)
		}
		ben.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!ben.quoted) ben.reply('Reply Pesan')
                let msg = await ben.getQuotedObj()
                if (!ben.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                benny.sendTextWithMentions(from, teks, ben)
            }
            break
            case 'q': case 'quoted': {
		if (!ben.quoted) return ben.reply('Reply Pesannya!!')
		let wokwol = await benny.serializeM(await ben.getQuotedObj())
		if (!wokwol.quoted) return ben.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(from, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 benny.sendTextWithMentions(from, teks, ben)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await benny.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 benny.sendTextWithMentions(from, teks, ben)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : ben.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    benny.sendText(from, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, ben, { mentions: online })
             }
             break
			 case 'inspect': {
if (!args[0]) return ben.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return ben.reply("Link Invalid")
benny.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => {
tekse = `     「 Group Link Inspector 」
▸ ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
▸ Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
▸ Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
▸ Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
▸ Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
▸ Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
`
try {
pp = await benny.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
await benny.sendMessage(from, {image: {url:pp}, caption: tekse, mentions: await benny.parseMention(tekse)}, {quoted: ben})
})
}
break
case 'stickerwm': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${global.prefix + command}`
			if (!text1) return reply(`Contoh penggunaan: ${global.prefix+command} Nando&BOT`)
			if (!text2) return reply(`Contoh penggunaan: ${global.prefix+command} Nando&BOT`)
            ben.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await benny.sendImageAsSticker(from, media, ben, { packname: text1, author: text2 })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return ben.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await benny.sendVideoAsSticker(from, media, ben, { packname: text1, author: text2 })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${global.prefix + command}\nDurasi Video 1-9 Detik`
                }
}
				break
				case 'spamtag':{	if (!ben.key.fromMe && !isOwner && !isAdmins) return reply(mess.only.admin)
						if (ben.isGroup && !ben.quoted) {
							teks = Number(text2)
							teks1 = ben.quoted.text
							gmem = []
for (let o of groupMembers) {
	gmem.push(o.id)
}
if (!Number(teks)) return reply('Jumlah harus berupa angka!')
if (Number(teks) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < arg.split('&')[1]; i++) {
	  benny.sendMessage(from, {text: arg.split('&')[0], mentions: gmem})
	  }
			} else if (ben.isGroup && ben.quoted) {
gmem = []
for (let o of groupMembers) {
	gmem.push(o.id)
}
if (!teks1) teks1 = '-'
if (!Number(teks2)) return reply('Jumlah harus berupa angka!')
if (Number(teks2) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < arg; i++) {
	  benny.sendMessage(from, {text: ben.quoted.text, mentions: gmem})
	  }
						}
				}
						break
				case 'spam':
if (!isOwner && !ben.key.fromMe) return
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 11) {
teks = arg
oi1 = teks.split('&')[0]
oi2 = teks.split('&')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  benny.sendMessage(from, {text: `${oi1}`})
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 11) {
teks = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  benny.sendMessage(from, {text: teks})
	  }
} else if (isQuotedSticker) {
	            media = await benny.downloadAndSaveMediaMessage(ben.quoted)
				anu = fs.readFileSync(media)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  benny.sendMessage(from, {sticker: anu})
	  }
} else if (isQuotedAudio) {
	            media = await benny.downloadAndSaveMediaMessage(ben.quoted)
				anu = fs.readFileSync(media)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  benny.sendMessage(from, {audio: audio, mimetype: 'audio/mp4', ptt:true})
	  }
} else if (isQuotedImage) {
	delb = await benny.downloadMediaMessage(ben.quoted)
	teks = body.slice(6)
	oi1 = teks.split('&')[0]
oi2 = teks.split('&')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  benny.sendMessage(from, {image: delb, caption: oi1})
	  }
}
	  break
				case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${global.prefix + command}`
            ben.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await benny.sendImageAsSticker(from, media, ben, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return ben.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await benny.sendVideoAsSticker(from, media, ben, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${global.prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
					case 'bucin':
				   ono = JSON.parse(fs.readFileSync('./src/bucin.json'))
  randIndex = ono[Math.floor(Math.random() * ono.length)]
				   reply(randIndex)
		break
			case 'takestick': {
                if (!quoted) throw 'Reply Image'
				if (!text1) return reply(`Contoh penggunaan: ${global.prefix+command} Nando&BOT`)
			    if (!text2) return reply(`Contoh penggunaan: ${global.prefix+command} Nando&BOT`)
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${global.prefix + command}*`
                ben.reply(mess.wait)
                let media = await benny.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    let encmedia = await benny.sendImageAsSticker(from, buffer, ben, { packname: text1, author: text2 })
                    await fs.unlinkSync(encmedia)
                })
            }
            break
            case 'ebinary': {
            if (!text) throw `Example : ${global.prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            ben.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${global.prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            ben.reply(db)
        }
        break
		case 'autoreactmd':
		if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
			if (arg == 'on') {
				reactcmd = true
				reply('*Done!*')
			} else if (arg === 'off') {
				reactcmd = false
				reply('*Done!*')
			} else {
				reply('Pilih on atau off')
			}
			break
			case 'setreactcmd':
			if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
			teksreactcmd = arg
		reply('*Done!*')
		break
		case 'autoreact':
		if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
			if (arg == 'on') {
				react = true
				reply('*Done!*')
			} else if (arg === 'off') {
				react = false
				reply('*Done!*')
			} else {
				reply('Pilih on atau off')
			}
			break
			case 'setreact':
			if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
			teksreact = arg
		reply('*Done!*')
		break
		case 'anticall':
		if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
			if (arg === 'on') {
				anticall = true
				reply('*Done!*')
			} else if (arg == 'off') {
				anticall = false
				reply('*Done!*')
			} else {
				reply('Pilih on atau off!')
			}
			break
		case 'antikasar':if (!isGroup) return reply(mess.only.group)
					if (!isBotAdmins) return reply('Jadikan bot admin terlebih dahulu!')
					if (arg.length < 1) return reply('Pilih on atau off!')
					if (arg == 'on') {
						if (isAntiKasar) return reply('Udah lu nyalain pantek:v')
						kasar.push(from)
						fs.writeFileSync('./src/antikasar.json', JSON.stringify(kasar))
						reply('Success Enable Anti kasar!')
					} else if (arg == 'off') {
						kasar.splice(kasar.indexOf(from), 1)
						fs.writeFileSync('./src/antikasar.json', JSON.stringify(kasar))
						reply('Success Disable Anti kasar!')
					} else {
						reply('𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 on 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, off 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: ${global.prefix}${command} on')
					} break
		case 'antivirus':if (!isGroup) return reply(mess.only.group)
					if (!ben.key.fromMe && !isOwner && !isBotAdmins) return reply('Jadikan bot admin terlebih dahulu!')
					if (!arg) return reply('Pilih on atau off!')
					if (arg == 'on') {
						if (isAntiVirus) return reply('Sudah nyala!')
						virus.push(from)
						fs.writeFileSync('./src/antivirus.json', JSON.stringify(virus))
						reply('*Success Enable Anti virus!*')
					} else if (arg == 'off') {
						virus.splice(virus.indexOf(from), 1)
						fs.writeFileSync('./src/antivirus.json', JSON.stringify(virus))
						reply('Success Disable Anti virus!')
					} else {
						reply(`𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 on 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, off 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: ${global.prefix}${command} on`)
					} break
		case 'autojoin':
				if (!isOwner && !ben.key.fromMe) return reply(`*Maaf @${sender.split('@')[0]} Perintah ${global.prefix}${command} tidak ada di list ${global.prefix}menu!*`)
				if (arg.length < 1) return reply('Pilih on atau off!')
					if (arg == 'on') {
						if (autojoin == true) return reply('*Auto join sudah aktif!*')
						autojoin = true
						reply('*Sukses mengaktifkan mode auto join!*')
					} else if (arg == 'off') {
						if (autojoin == false) return reply('*Auto join sudah mati!*')
						autojoin = false
						reply('*Sukses mematikan mode auto join!*')
			} else {
				reply('*Pilih on atau off*')
			} break
			case 'ssweb':
			if (!arg) return reply('Masukan urlnya!')
				if (!arg.startsWith('https://')) return reply('Url harus diawali dengan https://')
					reply(mess.wait)
				benny.sendMessage(from, {image: {url: `https://api.lolhuman.xyz/api/ssweb?apikey=${global.lolkey}&url=${arg}`}, caption: `*Ssweb:* ${arg}`}, {quoted: ben})
			break
            case 'emojimix': {
				try {
		let [emoji1, emoji2] = arg.split`+`
		if (!emoji1) throw `Example : ${global.prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${global.prefix + command} 😅+🤔`
			benny.sendImageAsSticker(from, `https://api.lolhuman.xyz/api/emojimix/${encodeURI(emoji1)}+${encodeURI(emoji2)}?apikey=${global.lolkey}`, ben, { packname: global.packname, author: global.author })
				} catch {
					reply('Error!')
				}
			}
	    break
	    case 'emojimix2': {
	    if (!text) throw `Example : ${global.prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await benny.sendImageAsSticker(from, res.url, ben, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
		case 'ttp': 
		case 'ttp2': 
		case 'ttp3': 
		case 'ttp4': 
		case 'ttp5': 
		case 'ttp6': {
           if (!text) throw `Example : ${global.prefix + command} text`
		   ben.reply(mess.wait)
           await benny.sendImageAsSticker(from, `https://api.lolhuman.xyz/api/${command}?apikey=${global.lolkey}&text=${arg}`, ben, {packname:global.packname, author: global.author})

         }
         break
	    case 'attp': 
	    case 'attp2': {
           if (!text) throw `Example : ${global.prefix + command} text`
		   ben.reply(mess.wait)
		 benny.sendMessage(from, {sticker:{url:`https://api.lolhuman.xyz/api/${command}?apikey=${global.lolkey}&text=${arg}`}}, {quoted: ben})
         }
         break
		 case 'ingfogc':
case 'gcingfo':
case 'gcinfo':
case 'infogc':
case 'infogroup':
	if (!isGroup) return reply(mess.only.group)
	ppUrl = await benny.getPP(from) // leave empty to get your own
	benny.sendMessage(from, {image:{url:ppUrl}, caption: `*Name* : ${groupName}\n*Member* : ${groupMembers.length}\n*Anti kasar* : ${isAntiKasar ? 'YES' : 'NO'}\n*Anti virus* : ${isAntiVirus ? 'YES' : 'NO'}\n*Anti link* : ${db.data.chats[ben.chat].antilink ? 'YES' : 'NO'}\n*Admin* : ${groupAdmins.length}\n*Desc* : ${groupDesc ? groupDesc.toString() : ''}`}, {quoted: ben})
	break
		 case 'ping':{

	const timestamp = speed();
	const latensi = speed() - timestamp
	exec(`neofetch --stdout`, (error, stdout, stderr) => {
	const child = stdout.toString('utf-8')
	const teks = child.replace(/Memory:/, "Ram:")
	reply(`*${teks}Speed: ${latensi.toFixed(4)} _Detik_*`)
	})
		 }
	break
	       case 'nulis': 
	       case 'magernulis': {
           if (!text) throw `Example : ${global.prefix + command} text`
		   ben.reply(mess.wait)
		await benny.sendMessage(from, {image: {url:`https://api.lolhuman.xyz/api/nulis?apikey=${global.lolkey}&text=${arg}`}, caption: `*${command}:* ${arg}`}, {quoted: ben})

         }
         break
		 case 'stickrun':
		 if (!quoted) return reply('Reply Stickernya!')
			 if (isQuotedImage) {
			 let au = await running(await benny.downloadMediaMessage(quoted))
		 console.log(au)
		 await benny.sendVideoAsSticker(from, au, ben, { packname: global.packname, author: global.auhor })
			 } else  if (isQuotedSticker) {
				 let media = await downloadM(ben.quoted)
				 let ai = getRandom('.jpg')
				 exec(`ffmpeg -i ${media} ${ai}`, async (err) => {
					 if (err) return reply(util.format(err))
			 let au = await running(fs.readFileSync(ai))
		 console.log(au)
		 await benny.sendVideoAsSticker(from, au, ben, { packname: global.packname, author: global.auhor })
				 })
			 } else {
				 reply('Reply Gambar dan sticker saja!')
			 }
		 break
		 case 'bucin':
				   ono = JSON.parse(fs.readFileSync('./src/bucin.json'))
  randIndex = ono[Math.floor(Math.random() * ono.length)]
				   reply(randIndex)
		break
		case 'mimic':
					if (!isGroup) return reply(mess.only.group)
					if (!ben.key.fromMe && !isAdmins) return reply(mess.only.admin)
					if (arg === 'on') {
						if (mimic.includes(from)) return reply('*Mimic sudah aktif!*')
							mimic.push(from)
						fs.writeFileSync('./src/mimic.json', JSON.stringify(mimic))
						reply('*Done!*')
					} else if (arg === 'off') {
						if (!mimic.includes(from)) return reply('*Mimic belum aktif!*')
							mimic.splice(mimic.indexOf(from), 1)
						fs.writeFileSync('./src/mimic.json', JSON.stringify(mimic))
						reply('*Done!*')
					} else {
						reply('Pilih on atau off!')
					}
					break
		case 'addowner':{
					if (!ben.key.fromMe && !isCreators) return reply(mess.only.ownerB)
						if (arg && ben.message.extendedTextMessage) {
		for (let i of ben.message.extendedTextMessage.contextInfo.mentionedJid) {
		ownerNumber.push(i.split('@')[0])
		fs.writeFileSync('./src/owner.json', JSON.stringify(ownerNumber))
							}
		reply('*Done!*')
		} else if (!arg && ben.message.extendedTextMessage) {
		ownerNumber.push(ben.message.extendedTextMessage.contextInfo.participant.split('@')[0])
		fs.writeFileSync('./src/owner.json', JSON.stringify(ownerNumber))
		reply('*Done!*')
		} else if (arg && ben.message.conversation) {
				let owns = arg.replace(new RegExp('[-+/ +/()]', 'gi'), '')
		ownerNumber.push(owns)
		fs.writeFileSync('./src/owner.json', JSON.stringify(ownerNumber))
		reply('*Done!*')
			}
				}
			break
				case 'delowner':{
					if (!ben.key.fromMe && !isCreators) return reply(mess.only.creator)
						if (arg && ben.message.extendedTextMessage) {
							for (let i of ben.message.extendedTextMessage.contextInfo.mentionedJid) {
		 adown = ownerNumber.indexOf(i.split('@')[0])
			 ownerNumber.splice(adown, 1)
		fs.writeFileSync('./src/owner.json', JSON.stringify(ownerNumber))
							}
		await reply('*Done!*')
		} else if (!arg && ben.message.extendedTextMessage) {
		ownerNumber.splice(ownerNumber.indexOf(ben.quoted.sender.split('@')[0]), 1)
		fs.writeFileSync('./src/owner.json', JSON.stringify(ownerNumber))
		reply('*Done!*')
		} else if (arg && ben.message.conversation) {
			let owns = arg.replace(new RegExp('[-+/ +/()]', 'gi'), '')
		ownerNumber.splice(ownerNumber.indexOf(owns), 1)
		fs.writeFileSync('./src/owner.json', JSON.stringify(ownerNumber))
		reply('*Done!*')
			}
				}
			break
		   case 'stickmeme':	   
		   case 'stickmeme2':	   
		   case 'stickmeme3':	{		   
		   if (!arg)  return reply(`Contoh: ${prefix}${command} N@nd0 BOT`)
									 if (ben.message.extendedTextMessage != undefined || ben.message.extendedTextMessage != null) {
										 if (command === 'stickmeme3' && !arg.includes('&')) return reply(`Contoh: ${prefix}${command} N@nd0&BOT`)
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await downloadM(ben.quoted)
					ran = getRandom('.jpg')
					exec(`ffmpeg -i ${owgi} ${ran}`, async (err) => {
					var uploade = await TelegraPh(ran)
					let sm1 = `https://api.memegen.link/images/custom/_/${arg}.png?background=${uploade}`
										let sm2 = `https://api.memegen.link/images/custom/${arg}/_.png?background=${uploade}`
										let sm3 = `https://api.memegen.link/images/custom/${encodeURI(text1)}/${encodeURI(text2)}.png?background=${uploade}`
										if (command === 'stickmeme') buffer = sm1
										if (command === 'stickmeme2') buffer = sm2
										if (command === 'stickmeme3') buffer = sm3
										let FaTiH = await benny.sendImageAsSticker(from, buffer, ben, { packname: global.packname, author: global.author })
									 })
		   }}
									break
		   case 'simih': case 'simisimi': {
            if (!text) throw `Example : ${global.prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            ben.reply(hben.result.message)
            }
            break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${global.prefix + command}*`
                ben.reply(mess.wait)
                let media = await benny.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    benny.sendMessage(from, { image: buffer }, { quoted: ben })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovid': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${global.prefix + command}*`
                ben.reply(mess.wait)
                let media = await benny.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await benny.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: ben })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${global.prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${global.prefix + command}`
            ben.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            benny.sendMessage(from, {audio: audio, mimetype: 'audio/mpeg'}, { quoted: ben })
            }
            break
            case 'topdf': 
            case 'imgtopdf': 
            case 'imagetopdf': {
            if (!/image/.test(mime)) return reply(`Kirim/Reply Gambar/Image Yang Ingin Dijadikan Pdf Dengan Caption ${global.prefix + command}`)
            if (!quoted) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${global.prefix + command}`)
            ben.reply(mess.wait)
            let media = await downloadM(ben.quoted)
			let upl = await TelegraPh(media)
            let pdf = await fetchJson(`https://api.lolhuman.xyz/api/convert2pdf?apikey=${global.lolkey}&filename=${encodeURI(global.namabot)}.jpg&file=${upl}`)
            benny.sendMessage(from, {document: {url: pdf.result}, mimetype: 'application/pdf', fileName: `Image To Pdf`}, { quoted: ben })
            }
            break
           case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${global.prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${global.prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${global.prefix + command}`
            ben.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            benny.sendMessage(from, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${global.namabot}.mp3`}, { quoted: ben })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${global.prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${global.prefix + command}`
            ben.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            benny.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:ben})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${global.prefix + command}*`
                ben.reply(mess.wait)
                let media = await benny.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await benny.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: ben })
                await fs.unlinkSync(media)
            }
            break
	 case 'tourl': {
                ben.reply(mess.wait)
                let media = await benny.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    ben.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    ben.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${global.prefix + command}`)
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${global.prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${global.prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await benny.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    ben.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    benny.sendMessage(from, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted: ben })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${global.prefix + command} story wa anime`
                let search = await yts.search(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.videos) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                benny.sendMessage(from, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: ben })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${global.prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                ben.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${global.prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: global.namabot,
                    buttons: buttons,
                    headerType: 4
                }
                benny.sendMessage(from, buttonMessage, { quoted: ben })
        })
        }
        break
		case 'ppcouple':{
				    let apo = fs.readdirSync('./src/image/couple')
					let p = apo[Math.floor(Math.random() * apo.length)]
					let b = p
					let pc = b.includes('1') ? b.split('1')[0]+'.jpg' : b
					let plh = fs.readFileSync(`./src/image/couple/${pc}`)
					let plj = fs.readFileSync(`./src/image/couple/${pc.split('.jpg')[0]+'1'+'.jpg'}`)
					benny.sendMessage(from, {image: plh, caption: 'Ini cowoknya'}, {quoted: ben}).then(() => benny.sendMessage(from, {image: plj, caption: 'Ini ceweknya'}, {quoted: ben}))
					} 
					break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${global.prefix + command} story wa anime`
                let search = await yts.search(arg)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `#ytmp3 ${anu.link}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `#ytmp4 ${anu.link}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
				console.log(anu)
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.id}
⭔ Duration : ${anu.duration}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.uploaded}
⭔ Author : ${anu.channel.name}
⭔ Channel : ${anu.channel.link}
⭔ Description : ${anu.description}
⭔ Url : ${anu.link}`,
                    footer: global.namabot,
                    buttons: buttons,
                    headerType: 4
                }
                benny.sendMessage(from, buttonMessage, { quoted: ben })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
			reply(mess.wait)
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${global.prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return ben.reply('File Melebihi Batas '+util.format(media))
                benny.sendImage(from, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, ben)
                benny.sendMessage(from, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: ben })
            }
            break
            case 'ytmp4': case 'ytvideo': {
				reply(mess.wait)
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${global.prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return ben.reply('File Melebihi Batas '+util.format(media))
                benny.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: ben })
            }
            break
            case 'pinterest': {
                ben.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                benny.sendMessage(from, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: ben })
            }
            break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                ben.reply(mess.wait)
                benny.sendMessage(from, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: ben })
            }
            break
	    case 'couple': {
                ben.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                benny.sendMessage(from, { image: { url: random.male }, caption: `Couple Male` }, { quoted: ben })
                benny.sendMessage(from, { image: { url: random.female }, caption: `Couple Female` }, { quoted: ben })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: global.namabot,
                    buttons: buttons,
                    headerType: 4
                }
                benny.sendMessage(from, buttonMessage, { quoted: ben })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: global.namabot,
                    buttons: buttons,
                    headerType: 4
                }
                benny.sendMessage(from, buttonMessage, { quoted: ben })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: global.namabot,
                    buttons: buttons,
                    headerType: 4
                }
                benny.sendMessage(from, buttonMessage, { quoted: ben })
            }
            break
			case 'setnamabot':
			case 'setname':
			if(!ben.key.fromMe && !isOwner) return reply(mess.only.owner)
				global.namabot = arg
			reply(`*Success change name bot from ${global.namabot} to ${arg}!*`)
			break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                benny.sendMessage(from, buttonMessage, { quoted: ben })
            }
            break
			case 'tembak':
			if (!isGroup) return reply(mess.only.group)
			if (!ben.mentionedJid) return reply('Tag Seseorang untuk ditembak!')
			let tem = `@${ben.mentionedJid[0].split('@')[0]} kamu mau ga jadi pacar @${sender.split('@')[0]}?`
	benny.sendMessage(from, {text: tem, mentions:[ben.mentionedJid[0], sender]})
	break
			case 'tolak':{
			if (!isGroup) return reply(mess.only.group)
			if (!ben.mentionedJid) return reply('Tag Seseorang untuk ditolak!')
			let tem = `@${sender.split('@')[0]} gamau jadi pacar @${ben.mentionedJid[0].split('@')[0]}`
	benny.sendMessage(from, {text: tem, mentions:[ben.mentionedJid[0], sender]})
			}
	break
			case 'terima':{
			if (!isGroup) return reply(mess.only.group)
			if (!ben.mentionedJid) return reply('Tag Seseorang untuk diterima!')
			let tem = `@${sender.split('@')[0]} mau jadi pacar @${ben.mentionedJid[0].split('@')[0]}`
	benny.sendMessage(from, {text: tem, mentions:[ben.mentionedJid[0], sender]})
			}
	break
			case 'putus':
			case 'putusin':{
			if (!isGroup) return reply(mess.only.group)
			if (!ben.mentionedJid) return reply('Tag Seseorang untuk diputusin!')
			let tem = `@${ben.mentionedJid[0].split('@')[0]} mulai sekarang kita putus!`
	benny.sendMessage(from, {text: tem, mentions:[ben.mentionedJid[0], sender]})
			}
	break
			case 'cerai':
			case 'ceraikan':{
			if (!isGroup) return reply(mess.only.group)
			if (!ben.mentionedJid) return reply('Tag Seseorang untuk diceraikan!')
			let tem = `mulai sekarang @${ben.mentionedJid[0].split('@')[0]} dan @${sender.split('@')[0]} cerai!`
	benny.sendMessage(from, {text: tem, mentions:[ben.mentionedJid[0], sender]})
			}
	break
			case 'lamar':{
			if (!isGroup) return reply(mess.only.group)
			if (!ben.mentionedJid) return reply('Tag Seseorang untuk dilamar!')
			let tem = `@${ben.mentionedJid[0].split('@')[0]} Apakah kamu mau jadi pasangan hidup @${sender.split('@')[0]} ?`
	benny.sendMessage(from, {text: tem, mentions:[ben.mentionedJid[0], sender]})
			}
	break
			case 'ikhlasin':{
			if (!isGroup) return reply(mess.only.group)
			if (!ben.mentionedJid) return reply('Tag Seseorang untuk di ikhlasin!')
			let tem = `@${ben.mentionedJid[0].split('@')[0]} semoga tenang dialam sana yaa ;)`
	benny.sendMessage(from, {text: tem, mentions:[ben.mentionedJid[0], sender]})
			}
	break
	       case 'katasenja':
					case 'gambarpantun':
					case 'quotesid':
		case 'quotesen':
		case 'katakata':
		case 'motivasi':
						case 'giant':
					case 'suneo':
					case 'dorami':
					case 'shinchan':
					case 'shizuka':
					case 'sandy':
					case 'plankton':
					case 'nobita':
					case 'spongebob': 
					case 'gary': 
					case 'patrick': 
					case 'tuankrab': 
					case 'squidward':
					case 'doraemon':
		case 'katamotivasi':
		case 'kehidupan':
		case 'islami':
				case 'katadilan':
				case 'katabijak': {
					let gp = await hxz.pinterest(command)
					console.log(gp)
					let gn = gp[Math.floor(Math.random() * gp.length)]
					benny.sendImages(from, gn, command, ben)
				}
		break
		case 'inspirasi': {
					let gp = await hxz.pinterest('kata kata inspirasi')
					console.log(gp)
					let gn = gp[Math.floor(Math.random() * gp.length)]
					benny.sendImages(from, gn, command, ben)
				}
		break
		case 'janji-allah': {
					let gp = await hxz.pinterest('janji allah kepada hamba nya')
					console.log(gp)
					let gn = gp[Math.floor(Math.random() * gp.length)]
					benny.sendImages(from, gn, command, ben)
				}
		break
		case 'culikke':
			if (!ben.key.fromMe && !isOwner) return
			for (let u = 0; u < ben.mentionedJid.length; u++) {
				await sleep(3000)
				benny.groupParticipantsUpdate(text1, ben.mentionedJid, 'add')
			}
			break
			case 'culikall':
					if (!ben.key.fromMe && !isOwner) return
						if (!arg) return reply('Masukan id grup tujuan!')
						for (let i = 0; i < groupMembers.length; i++) {
							await sleep(4000)
							benny.groupParticipantsUpdate(arg, [groupMembers[i].id], 'add')
						}
						break
		case 'groupid':
		reply(ben.chat)
		break
		case 'indonesia':
case 'thailand':
case 'malaysia':
case 'vietnam':
case 'china':
case 'jepang':
case 'korea':
case 'santuy':
	case 'bocil':
	case 'geayubi':
	case 'asupan2':
	case 'asupan':
	case 'asupan4':
	case 'asupan3':
	case 'ukhty':{
	let h = JSON.parse(fs.readFileSync(`./src/${command}.json`))
	let g = h[Math.floor(Math.random() * h.length)]
	reply(mess.wait)
                benny.sendMessage(from, {video:{url: g}, mimetype: 'video/mp4', caption: `*${command}*`}, {quoted: ben})
}
break
		case 'gambar':{
			if (!text) return reply(`Penggunaan: ${prefix+command} Sasuke`)
        let gp = await hxz.pinterest(command)
					console.log(gp)
					let gn = gp[Math.floor(Math.random() * gp.length)]
					benny.sendImages(from, gn, command, ben)
				}
		break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${global.prefix + command} text`
                ben.reply(mess.wait)
                benny.sendMessage(from, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: ben})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                ben.reply(mess.wait)
                benny.sendMessage(from, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: ben })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                ben.reply(mess.wait)
                benny.sendMessage(from, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: ben })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${global.prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, ben)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${global.prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, ben)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${global.prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, ben)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${global.prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, ben)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${global.prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, ben)
            }
            break
			case 'nando':
if (!ben.key.fromMe && !isOwner) return
let bugn = await benny.sendMessage(from, {text: 'Hai N@nd0 BOT'}, {quoted: ben})
let bugnn = await benny.sendMessage(from, {react:{ text: 'ⶡ', key: bugn.key}})
let bugnnn = await benny.sendMessage(from, {text: 'Hai juga nando'}, {quoted: bugnn})
break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${global.prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, ben)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${global.prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, ben)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${global.prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, ben)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${global.prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendImage(from,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, ben)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${global.prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, ben)
            }
            break
			case 'lk21':	{
						    if (!arg) return reply('Film apa?')
							anu = await fetchJson(`http://api.lolhuman.xyz/api/lk21?apikey=${global.lolkey}&query=${arg}`)
							reply(mess.wait)
							plor = anu.result
							teks = `*❏* *LAYAR KACA 21*\n*╠❏*\n*╠❏* *Judul:* ${plor.title}\n*╠❏* *Desc:* ${plor.desc}\n*╠❏* *Genre:* ${plor.genre}\n*╠❏* *Durasi:* ${plor.duration}\n*╠❏* *Rating:* ${plor.rating}\n*╠❏* *Link:* ${plor.link}\n*╠❏* *Lokasi:* ${plor.location}\n*╠❏* *Bahasa:* ${plor.language}\n*╠❏* *Tanggal rilis:* ${plor.date_release}\n*╚❏* *Actors:* ${plor.actors}\n\n`
							benny.sendMessage(from, {image:{url:plor.thumbnail}, caption: teks}, {quoted: ben})
			}
							break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${global.prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, ben)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${global.prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, ben)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${global.prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, ben)
            }
            break
			
			case 'status':if (!benny.public) {
					benny.sendMessage(from, {text: '*[ BOT SEDANG SELF MODE! ]*'}, {quoted: ben})
					} else if (benny.public) {
					benny.sendMessage(from, {text: '*[ BOT SEDANG PUBLIC MODE! ]*'}, {quoted: ben})
					} break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, ben)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${global.prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, ben)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${global.prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendImage(from, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, ben)
            }
            break
			case 'antihidetag':
case 'antiht':
if (!ben.key.fromMe && !isAdmins) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.Badmin)
	if (arg === 'on') {
		if (isAntiHT) return reply('Sudah nyala!')
		antihidetag.push(from)
		fs.writeFileSync('./src/antihidetag.json', JSON.stringify(antihidetag))
		reply('*Done!*')
	} else if (arg === 'off') {
		if (!isAntiHT) return reply('Belum nyala!')
		let antiht = antihidetag.indexOf(from)
		antihidetag.splice(antiht, 1)
		fs.writeFileSync('./src/antihidetag.json', JSON.stringify(antihidetag))
		reply('*Done!*')
	} else {
		reply('*Pilih on atau off!*')
	}
	break
			case 'addcmd':
           case 'setcmd':
              if (isQuotedSticker) {
              if (!arg) return reply(`Mana teks nya ?`)
              var kodenya = ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, arg)
              ben.reply('Berhasil!')
              } else {
              ben.reply('tag stickernya')
			  }
              break
			   case 'delcmd':
              if (!isQuotedSticker) return ben.reply(`Reply Stickernya!`)
              var kodenya = ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
             scmd.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./src/command.json', JSON.stringify(scmd))
              ben.reply('Berhasil')
              break
			  case 'cekcmd':{
				  if (!isQuotedSticker) return reply('Reply Stickernya!')
let teks = await getCmd(ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64'))
reply(teks)
			  }
break	  
       case 'listcmd':
              let teksnyee = `*[ LIST STICKER CMD ]*\n`
              let cemde = [];
			  t = 1
              for (let i of scmd) {
              cemde.push(i.id)
              teksnyee += `\n\n ➭ *ID :* ${i.id}\n➭ *Cmd* : ${i.chat}`
}
              benny.sendMessage(from, {text: teksnyee}, {quoted: ben})
              break
            case 'fengshui': {
                if (!text) throw `Example : ${global.prefix + command} Dika, 1, 2005\n\nNote : ${global.prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, ben)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${global.prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, ben)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${global.prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, ben)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${global.prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, ben)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${global.prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, ben)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${global.prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, ben)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${global.prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${global.prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, ben)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${global.prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, ben)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${global.prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, ben)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${global.prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, ben)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${global.prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, ben)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${global.prefix + command} 12, 1, 2022, 28\n\nNote : ${global.prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, ben)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${global.prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, ben)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${global.prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return ben.reply(anu.message)
                benny.sendText(from, `⭔ *Hasil :* ${anu.message}`, ben)
            }
            break
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[ben.sender].limit < 1) return ben.reply('Limit Harian Anda Telah Habis')
                if (!text) return ben.reply(`Example : ${global.prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${global.prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return ben.reply(anu.result.message)
                    ben.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[ben.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${global.prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${global.prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return ben.reply(anu.result.message)
                    ben.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[ben.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${global.prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return ben.reply(anu.result.message)
                    ben.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[ben.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${global.prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return ben.reply(anu.result.message)
                    ben.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[ben.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${global.prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return ben.reply(anu.result.message)
                    ben.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[ben.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${global.prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return ben.reply(anu.result.message)
                    benny.sendMedia(from, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}`, ben)
		    db.data.users[ben.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${global.prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return ben.reply(anu.result.message)
                    ben.reply(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
		    db.data.users[ben.sender].limit -= 1
                } else {
                    ben.reply(`Example : ${global.prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                ben.reply(mess.wait)
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${global.lolkey}&url=${arg}`)
				if (anu.status !== 200) return reply('Link nya bermasalah harap ganti link dan coba lagi!')
                let buttons = [
                    {buttonId: `#tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                    {buttonId: `#tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.link },
                    caption: `*Title:* ${anu.result.title}\n*Author:* ${anu.result.author.username}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                benny.sendMessage(from, buttonMessage, { quoted: ben })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                ben.reply(mess.wait)
                let buttons = [
                    {buttonId: `#tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `#tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: `https://api.lolhuman.xyz/api/tiktokwm?apikey=${global.lolkey}&url=${arg}` },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                benny.sendMessage(from, buttonMessage, { quoted: ben })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                ben.reply(mess.wait)
                let buttons = [
                    {buttonId: `#tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `#tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await benny.sendMessage(from, buttonMessage, { quoted: ben })
                benny.sendMessage(from, { audio: { url: `https://api.lolhuman.xyz/api/tiktokmusic?apikey=${global.lolkey}&url=${arg}` }, mimetype: 'audio/mpeg'}, { quoted: ben })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'No Query Url!'
                ben.reply(mess.wait)
                    let anu = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${global.lolkey}&url=${arg}`)
                    benny.sendFileUrl(from, anu.result[0], `Download Url Instagram From ${isUrl(text)[0]}`, ben)
            }
            break
			case 'music': // SEARCH MUSIC FROM YOUTUBE
        case 'musik':
           if (arg.length === 0) return reply(`Kirim perintah ${prefix}music judul lagu`)
           const querv2 = body.slice(7)
           reply(mess.wait)
           try {
               const resmusv2s = await yts.search(arg)
               const jsonsercmuv2 = await resmusv2s.videos
               let berhitung1 = 1
               let xixixai = `Hasil pencarian dari ${querv2}\n\nKetik ${prefix}getmusic [id] untuk mengambil lagu. Atau reply pesan ini dan ketik ${prefix}getmusic 2\n`
               for (let i = 0; i < jsonsercmuv2.length; i++) {
                   xixixai += `\n-----------------\n\n*Urutan* : ${i+1}\n*Title* : ${jsonsercmuv2[i].title}\n*Channel* : ${jsonsercmuv2[i].channel.name}\n*Durasi* : ${jsonsercmuv2[i].duration}\n*Perintah download*:\n${prefix}getmusic ${jsonsercmuv2[i].id}\n`
               }
                   xixixai += `\n\n`
               for (let ii = 0; ii < jsonsercmuv2.length; ii++) {
                   xixixai += `(#)${jsonsercmuv2[ii].id}`
               }
               benny.sendFileUrl(from, jsonsercmuv2[0].thumbnail, xixixai)
           } catch (err){
               console.log(err)
           }
           break
		   case 'video': // SEARCH MUSIC FROM YOUTUBE
        case 'video':
           if (arg.length === 0) return reply(`Kirim perintah ${prefix}music judul lagu`)
           const queryv2 = body.slice(7)
           reply(mess.wait)
           try {
               const resmusv2s = await yts.search(arg)
               const jsonsercmuv2 = await resmusv2s.videos
               let berhitung1 = 1
               let xixixai = `Hasil pencarian dari ${queryv2}\n\nKetik ${prefix}getmusic [id] untuk mengambil lagu. Atau reply pesan ini dan ketik ${prefix}getmusic 2\n`
               for (let i = 0; i < jsonsercmuv2.length; i++) {
                   xixixai += `\n-----------------\n\n*Urutan* : ${i+1}\n*Title* : ${jsonsercmuv2[i].title}\n*Channel* : ${jsonsercmuv2[i].channel.name}\n*Durasi* : ${jsonsercmuv2[i].duration}\n*Perintah download*:\n${prefix}getmusic ${jsonsercmuv2[i].id}\n`
               }
                   xixixai += `\n\n`
               for (let ii = 0; ii < jsonsercmuv2.length; ii++) {
                   xixixai += `(#)${jsonsercmuv2[ii].id}`
               }
               benny.sendFileUrl(from, jsonsercmuv2[0].thumbnail, xixixai)
           } catch (err){
               console.log(err)
           }
           break
		   case 'getvideo':
        case 'getvideo':
            try {
                if (isQuotedImage) {
                    if (arg.length === 0) return reply(`Kirim perintah *${prefix}getmusik _IdDownload_*`)
                    if (!Number(args[0])) return reply(`_Apabila ditag hanya cantumkan nomer urutan bukan ID Download!_  contoh : *!getmusik _1_*`)
                    const dataDownmp3 = ben.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
                    const pilur = dataDownmp3.split('(#)')
                    reply(mess.wait)
					console.log(pilur[args[0]])
				let res = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${global.lolkey}&url=https://www.youtube.com/watch?v=${pilur[args[0]]}`)
						let title = res.result.title
						let thumb = res.result.thumbnail
						let dl_link = res.result.link
						let filesizeF = res.result.size
						let filesize = parseFloat(res.result.size) * (1000 * /MB$/.test(res.result.size))
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 30000) return benny.sendFileUrl(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        benny.sendFileUrl(from, thumb,captions)
                        benny.sendFileUrl(from, dl_link).catch(() => reply(mess.error.api))
                        })
                } else if (ben.message.extendedTextMessage.contextInfo.quotedMessage) { 
                    reply(`_Salah tag! hanya tag pesan berisi data hasil from penelusuran musik._`)
                } else {
                    if (arg.length === 0) return reply('Kirim perintah *!getmusik _IdDownload_*, untuk contoh silahkan kirim perintah *!readme*')
                    if (args[0] <= 25) return reply(`_Apabila ingin mengambil data musik dengan nomor urutan, mohon tag pesan bot tentang pencarian musik!_`,)
                    reply(mess.wait)
                    yta(`https://youtu.be/${args[0]}`)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 30000) return benny.sendFileUrl(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        benny.sendFileUrl(from, thumb, captions)
                        benny.sendFileUrl(from, dl_link, 'video.mp4', '', ben).catch(() => reply(mess.error.api))
                        })
                    })
                }
            } catch (err) {
                reply(`_Kesalahan! Pastikan id download sudah benar._`)
            }
            break
			case 'addcase': {
				if (command && !ben.isGroup) return reply(mess.only.group)
                if (!isOwner) return reply(mess.only.ownerB)
                if (!arg) return reply(`Example: ${prefix + command} query`)
					let ca = fs.readFileSync('./msgHndlr.js').toString().split('switch(command) {')[1].split('case \'wa')[0]
				console.log(ca)
					try {
					fs.writeFileSync(ca, `${arg}`, '.js')
                    reply("case" + arg + fs.readFileSync('./msgHndlr.js').toString().split('case \''+ arg +'\'')[1].split("break")[0] + "break")
                } catch {
                    reply("Case tidak ditemukan")
                }
			}
					break
					case 'getcase': {
                if (command && !ben.isGroup) return reply(mess.only.group)
                if (!isOwner) return reply(mess.only.ownerB)
                if (!arg) return reply(`Example: ${prefix + command} query`)
                try {
                    reply("case " + arg + fs.readFileSync('./msgHndlr.js').toString().split('case \''+ arg +'\'')[1].split("break")[0] + "break")
                } catch {
                    reply("Case tidak ditemukan")
                }
            }
            break
		case 'getmusik':
        case 'getmusic':
            try {
                if (isQuotedImage) {
                    if (arg.length === 0) return reply(`Kirim perintah *${prefix}getmusik _IdDownload_*`)
                    if (!Number(args[0])) return reply(`_Apabila ditag hanya cantumkan nomer urutan bukan ID Download!_  contoh : *!getmusik _1_*`)
                    const dataDownmp3 = ben.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
                    const pilur = dataDownmp3.split('(#)')
                    reply(mess.wait)
					console.log(pilur[args[0]])
				let res = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${global.lolkey}&url=https://www.youtube.com/watch?v=${pilur[args[0]]}`)
						let title = res.result.title
						let thumb = res.result.thumbnail
						let dl_link = res.result.link
						let filesizeF = res.result.size
						let filesize = parseFloat(res.result.size) * (1000 * /MB$/.test(res.result.size))
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 30000) return benny.sendFileUrl(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        benny.sendFileUrl(from, thumb,captions)
                        benny.sendFileUrl(from, dl_link).catch(() => reply(mess.error.api))
                        })
                } else if (ben.message.extendedTextMessage.contextInfo.quotedMessage) { 
                    reply(`_Salah tag! hanya tag pesan berisi data hasil from penelusuran musik._`)
                } else {
                    if (arg.length === 0) return reply('Kirim perintah *!getmusik _IdDownload_*, untuk contoh silahkan kirim perintah *!readme*')
                    if (args[0] <= 25) return reply(`_Apabila ingin mengambil data musik dengan nomor urutan, mohon tag pesan bot tentang pencarian musik!_`,)
                    reply(mess.wait)
                    yta(`https://youtu.be/${args[0]}`)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 30000) return benny.sendFileUrl(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        benny.sendFileUrl(from, thumb, captions)
                        benny.sendFileUrl(from, dl_link, 'audio.mp3', '', ben).catch(() => reply(mess.error.api))
                        })
                    })
                }
            } catch (err) {
                reply(`_Kesalahan! Pastikan id download sudah benar._`)
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                ben.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await benny.sendImage(from, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, ben)
                benny.sendMessage(from, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: ben })
            }
            break
			case 'vidglow':	case 'glowvid':	
media = await downloadM(ben || ben.quoted)
						ran = getRandom('.mp4')
			exec(`ffmpeg -i ${media} -filter_complex "[1]format=yuv420p[in2];[in2][0]scale2ref[in2][in1];[in1][in2]blend=screen" ${ran}`, (err) => {
							if (err) return reply('eror')
							benny.sendMessage(from, {video: fs.readFileSync(ran), mimetype: 'video/mp4'}, {quoted: ben})
						})
						break
						break						
						case 'vidburik':	case 'burikvid':	media = await downloadM(ben || ben.quoted)
						ran = getRandom('.mp4')
			exec(`ffmpeg -i ${media} -filter_complex xfade=transition=pixelize:duration=5:offset=0 ${ran}`, (err) => {
							if (err) return reply('eror')
							benny.sendMessage(from, {video: fs.readFileSync(ran), mimetype: 'video/mp4'}, {quoted: ben})
						})
						break
						break						
						case 'videopencil':	case 'mp4pencil':
						media = await downloadM(ben || ben.quoted)
						ran = getRandom('.mp4')
			exec(`ffmpeg -i ${media} -vf "edgedetect=enable='gt(mod(t,60),57)',negate" -c:a copy ${ran}`, (err) => {
							if (err) return reply('eror')
							benny.sendMessage(from, {video: fs.readFileSync(ran), mimetype: 'video/mp4'}, {quoted: ben})
						})
						break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                ben.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await benny.sendImage(from, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                benny.sendMessage(from, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: ben })
            }
            break
	        case 'twitvid':case 'twitervid': case 'twittervid': {
                if (!text) throw 'Masukkan Query Link!'
                ben.reply(mess.wait)
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/twitter?apikey=${global.lolkey}&url=${arg}`)
                let buttons = [
                    {buttonId: `#twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.link[0] },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                benny.sendMessage(from, buttonMessage, { quoted: ben })
            }
            break
			 case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                ben.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `#twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await benny.sendMessage(from, buttonMessage, { quoted: ben })
                benny.sendMessage(from, { audio: { url: anu.result.audio } }, { quoted: ben })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
            if (!arg) return reply(`Example: ${global.prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
				reply(mess.wait)
            axios.get(`https://api.lolhuman.xyz/api/facebook?apikey=${global.lolkey}&url=${arg}`).then(({ data }) => {
                benny.sendMessage(from, { video: { url: data.result }, mimetype: 'video/mp4' }, {quoted: ben})
            })
			}
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                ben.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                benny.sendMessage(from, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: ben })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${global.prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: global.namabot,
			buttons,
			headerType: 4
		    }
		    benny.sendMessage(from, buttonMessage, { quoted: ben })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        benny.sendMessage(from, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: ben })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${global.prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		benny.sendMessage(from, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: ben })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${global.prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		benny.sendMessage(from, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:ben}).catch ((err) => ben.reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		ben.reply(mess.wait)
		benny.sendMessage(from, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:ben})
		} else if (args[0] === 'docx') {
		ben.reply(mess.wait)
		benny.sendMessage(from, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:ben})
		} else if (args[0] === 'pptx') {
		ben.reply(mess.wait)
		benny.sendMessage(from, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:ben})
		} else if (args[0] === 'xlsx') {
		ben.reply(mess.wait)
		benny.sendMessage(from, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:ben})
		} else {
		ben.reply(`Mau format apa ? Example : ${global.prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadits': case 'hadis': case 'hadist': {
		if (!args[0]) return reply(`Contoh:
${global.prefix + command} bukhari 1
${global.prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
tirmidzi
1 - 3891
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${global.prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://fatiharridho.herokuapp.com/api/islamic/hadits?list=${args[0]}`)
		let { number, arab, id } = res.result.find(v => v.number == args[1])
		ben.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		ben.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${global.prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${global.prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		ben.reply(txt)
		benny.sendMessage(from, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted: ben })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${global.prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${global.prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		ben.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                ben.reply(mess.wait)
                let media = await benny.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return ben.reply(err)
                let buff = fs.readFileSync(ran)
                benny.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: ben })
                fs.unlinkSync(ran)
                })
                } else ben.reply(`Balas audio yang ingin diubah dengan caption *${global.prefix + command}*`)
                } catch (e) {
                ben.reply(e)
                }
                break
            case 'addmsg': {
                if (!ben.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${global.prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
ben.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${global.prefix}getmsg ${text}

Lihat list Pesan Dengan ${global.prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${global.prefix + command} file name\n\nLihat list pesan dengan ${global.prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                benny.copyNForward(from, msgs[text.toLowerCase()], false)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        ben.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return ben.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		ben.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (ben.isGroup) return ben.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                benny.sendButtonText(from, buttons, `\`\`\`Hi ${await benny.getName(ben.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, global.namabot, ben)
            }
			break
			 case 'addrespon':
			 case 'addrespond':
			if (!isOwner && !ben.key.fromMe) return reply(`*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`)
			    	if (!text1) return reply(`Penggunaan ${prefix}addrespon hai&hai juga`)
			    	if (!text2) return reply(`Penggunaan ${prefix}addrespon hai&hai juga`)
				if (checkCommands(text1, commandsDB) === true) return reply(`Udah ada`)
				addCommands(text1, text2, ben.sender, commandsDB)
				reply(`Ok berhasil gan`)
				break
				case 'listrespon':case 'listrespond':teks = `*LIST RESPOND CHAT*\n\n`
				t = 1
				for (let o of commandsDB) {
					teks += `*Pesan:* ${o.pesan}\n*Balasan:* ${o.balasan}\n*Creator:* @${o.creator.split('@')[0]}\n=====================================\n`
				}
				benny.sendMessage(from, {text: teks.trim(), mentions: await benny.parseMention(teks)}, {quoted: ben})
				break
			case 'delrespon':
			case 'delrespond':
			if (!isOwner && !ben.key.fromMe) return reply(`*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`)
			    	if (!arg) return reply(`Penggunaan ${prefix}delrespon hai`)
				if (!checkCommands(arg, commandsDB)) return reply(`Ga ada di database`)
                deleteCommands(arg, commandsDB)
				reply(`Ok berhasil gan`)
				break
            case 'keluar': case 'leave': {
                if (ben.isGroup) return ben.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(ben.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await benny.sendButtonText(from, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                ben.reply('Ok')
                let other = room.other(ben.sender)
                if (other) await benny.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, ben)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (ben.isGroup) return ben.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(ben.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await benny.sendButtonText(from, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, global.namabot, ben)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(ben.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await benny.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, global.namabot, ben)
                    room.b = ben.sender
                    room.state = 'CHATTING'
                    await benny.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, global.namabot, ben)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: ben.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await benny.sendButtonText(from, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, global.namabot, ben)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (ben.isGroup) return ben.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(ben.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await benny.sendButtonText(from, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(ben.sender)
                if (other) await benny.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, ben)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(ben.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await benny.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, global.namabot, ben)
                    room.b = ben.sender
                    room.state = 'CHATTING'
                    await benny.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, global.namabot, ben)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: ben.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await benny.sendButtonText(from, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, global.namabot, ben)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.only.owner
                benny.public = true
                ben.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.only.owner
                benny.public = false
                ben.reply('Sukses Change To Self Usage')
            }
            break
            case 'speed': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                ben.reply(respon)
            }
            break
			case 'getonce':{
var msg = {...ben}

let typenya = msg.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessage.message["videoMessage"] ?
msg.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessage.message.videoMessage : msg.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessage.message.imageMessage

typenya["viewOnce"] = false

let peq = msg.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessage.message["imageMessage"] ? { key: { fromMe: false, participant: ben.sender, id: ben.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } } :  { key: { fromMe: false, participant: ben.sender, id: ben.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } }

const templateList = generateWAMessageFromContent(from, proto.Message.fromObject({ "viewOnceMessage": msg.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessage }), {});

benny.relayMessage(from, templateList.message, { messageId: templateList.key.id })
}
							break
            case 'speedtest': {
            ben.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) ben.reply(stdout)
        if (stderr.trim()) ben.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                benny.sendContact(from, ownerNumber, ben)
            }
            break
            case 'playstore': {
            if (!text) throw `Example : ${global.prefix + command} clash of clans`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `⭔ Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `⭔ Name : ${i.name}\n`
            teks += `⭔ Link : ${i.link}\n`
            teks += `⭔ Developer : ${i.developer}\n`
            teks += `⭔ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            ben.reply(teks)
            }
            break
            case 'gsmarena': {
            if (!text) throw `Example : ${global.prefix + command} samsung`
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `⭔ Title: ${judul}
⭔ Realease: ${rilis}
⭔ Size: ${ukuran}
⭔ Type: ${type}
⭔ Storage: ${storage}
⭔ Display: ${display}
⭔ Inchi: ${inchi}
⭔ Pixel: ${pixel}
⭔ Video Pixel: ${videoPixel}
⭔ Ram: ${ram}
⭔ Chipset: ${chipset}
⭔ Battery: ${batrai}
⭔ Battery Brand: ${merek_batre}
⭔ Detail: ${detail}`
            benny.sendImage(from, thumb, capt, ben)
            }
            break
            case 'jadwalbioskop': {
            if (!text) throw `Example: ${global.prefix + command} jakarta`
            let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Title: ${i.title}\n`
            capt += `⭔ Thumbnail: ${i.thumb}\n`
            capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
            }
            benny.sendImage(from, res.result[0].thumb, capt, ben)
            }
            break
            case 'nowplayingbioskop': {
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += `⭔ Title: ${i.title}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Img Url: ${i.img}\n\n──────────────────────\n`
            }
            benny.sendImage(from, res.result[0].img, capt, ben)
            }
            break
            case 'aminio': {
            if (!text) throw `Example: ${global.prefix + command} free fire`
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Aminio Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Community: ${i.community}\n`
            capt += `⭔ Community Link: ${i.community_link}\n`
            capt += `⭔ Thumbnail: ${i.community_thumb}\n`
            capt += `⭔ Description: ${i.community_desc}\n`
            capt += `⭔ Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            benny.sendImage(from, 'https://'+res.result[0].community_thumb, capt, ben)
            }
            break
            case 'wattpad': {
            if (!text) throw `Example : ${global.prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From ${text}\n\n`
            capt += `⭔ Judul: ${judul}\n`
            capt += `⭔ Dibaca: ${dibaca}\n`
            capt += `⭔ Divote: ${divote}\n`
            capt += `⭔ Bab: ${bab}\n`
            capt += `⭔ Waktu: ${waktu}\n`
            capt += `⭔ Url: ${url}\n`
            capt += `⭔ Deskripsi: ${description}`
            benny.sendImage(from, thumb, capt, ben)
            }
            break
            case 'webtoons': {
            if (!text) throw `Example : ${global.prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Like: ${i.like}\n`
            capt += `⭔ Creator: ${i.creator}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
            }
            ben.reply(capt)
            }
            break
            case 'drakor': {
            if (!text) throw `Example : ${global.prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Years: ${i.years}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            benny.sendImage(from, res.result[0].thumbnail, capt, ben)
            }
            break
            case 'setmenu': {
            if (!ben.key.fromMe && !isCreator) throw mess.only.owner
               if (args[0] === 'templateImage'){
               global.setbot = 'templateImage'
                ben.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                global.setbot = 'templateVideo'
                ben.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                global.setbot = 'templateGif'
                ben.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                global.setbot = 'templateMessage'
                ben.reply(mess.success)
                } else if (args[0] === 'templateLocation'){
			    global.setbot = 'templateLocation'
                ben.reply(mess.success)
                } else if (args[0] === 'templateLiveLocation'){
			    global.setbot = 'templateLiveLocation'
                ben.reply(mess.success)
                } else if (args[0] === 'templateDocument'){
                global.setbot = 'templateDocument'
                ben.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `#setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `#setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `#setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `#setmenu templateMessage`, description: `Change menu bot to Template Message`},
                {title: "Template Location", rowId: `#setmenu templateLocation`, description: `Change menu bot to Template Location`},
                {title: "Template Live Location", rowId: `#setmenu templateLiveLocation`, description: `Change menu bot to Template Live Location`},
                {title: "Template Document", rowId: `#setmenu templateDocument`, description: `Change menu bot to Template Document`}
                ]
                },
                ]
                benny.sendListMsg(from, `Please select the menu you want to change!`, global.namabot, `Hello Owner !`, `Click Here`, sections, ben)
                }
            }
            break
			case 'alay': 		{
let teks = arg ? arg : ben.quoted.text		
					reply(teks.replace(/[a-z]/gi, v => Math.random() > .5 ? v[['toLowerCase', 'toUpperCase'][Math.floor(Math.random() * 2)]]() : v).replace(/[abegiors]/gi, v => {
        if (Math.random() > .5) return v
        switch (v.toLowerCase()) {
            case 'a': return '4'
            case 'b': return Math.random() > .5 ? '8' : '13'
            case 'e': return '3'
            case 'g': return Math.random() > .5 ? '6' : '9'
            case 'i': return '1'
            case 'o': return '0'
            case 'r': return '12'
            case 's': return '5'
        }
    }))
					} break
			case 'trigger':
			case 'triggered':          {
                                         if (isQuotedImage) {
					owgi = await downloadM(ben.quoted)
					anu = await TelegraPh(owgi)
					benny.sendVideoAsSticker(from, `https://cililitan.herokuapp.com/api/triggered?url=${anu}`, ben, { packname: global.packname, author: global.author })
                                             } else if (isQuotedSticker) {
												 if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated) return reply('Reply sticker gambar!')
ran = getRandom('.jpg')
ehgmediabi = await downloadM(ben.quoted)
exec(`ffmpeg -i ${ehgmediabi} ${ran}`, async (err) => {
	reply(mess.wait)
	fs.writeFileSync('triger.jpg', fs.readFileSync(ran))
				anu = await TelegraPh('triger.jpg')
					console.log(anu)
                                        benny.sendVideoAsSticker(from, `https://cililitan.herokuapp.com/api/triggered?url=${anu}`, ben, { packname: global.packname, author: global.author })
				})
			} else {
                                                 reply('Reply Image/Sticker!')
                                          }           
			}
                                          break
										  case 'vidjalan':case 'jalanvid':if (!isQuotedImage) return reply('Reply Image!')
					anu = await downloadM(ben.quoted)
				reply(mess.wait)
					ran = getRandom('.mp4')
					exec(`ffmpeg -framerate 25/15 -i ${anu} -c:v libx264 -vf "scale=iw*min(1080/iw\,1080/ih):ih*min(1080/iw\,1080/ih), pad=1080:1080:(1080-iw*min(1080/iw\,1080/ih))/2:(1080-ih*min(1080/iw\,1080/ih))/2,fps=30000/1001,format=yuv420p" ${ran}`, async(err) => {
						if (err) return reply('Error')
						benny.sendMessage(from, {video: fs.readFileSync(ran), caption: 'Neh..', mimetype: 'video/mp4'}, {quoted: ben})
					})
					break
					case 'vidimut':if (!isQuotedVideo) return reply('Tag audio/vn nya!')
					media = await downloadM(ben.quoted)
				reply(mess.wait)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, {video: hah, mimetype: 'video/mp4', mimetype: 'video/mp4'}, {quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'vidbass':if (!isQuotedVideo) return reply('Reply Video nya!')
					media = await downloadM(ben.quoted)
				reply(mess.wait)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, {video: hah, mimetype: 'video/mp4'}, {quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'vidbudeg':case 'vidbudek':if (!isQuotedVideo) return reply('Reply videonya!')
					media = await downloadM(ben.quoted)
				reply(mess.wait)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, {video: hah, mimetype: 'video/mp4'}, {quoted: ben})
						fs.unlinkSync(ran)
					})
				break
case 'menuvideo':l = 1
				reply(require('./src/help').menuvideo(prefix, l))
				break
case 'menusticker':l = 1
				reply(require('./src/help').menusticker(prefix, l))
				break
				case 'menucreator':l = 1
				reply(require('./src/help').menucreator(prefix, l))
				break
				case 'menusticker':l = 1
				reply(require('./src/help').menusticker(prefix, l))
				break
				case 'menugroup':l = 1
				reply(require('./src/help').menugroup(prefix, l))
				break
				case 'menuwebzone':l = 1
				reply(require('./src/help').menuwebzone(prefix, l))
				break
				case 'menudownload':l = 1
				reply(require('./src/help').menudownload(prefix, l))
				break
				case 'menusearch':l = 1
				reply(require('./src/help').menusearch(prefix, l))
				break
				case 'menurandom':l = 1
				reply(require('./src/help').menurandom(prefix, l))
				break
				case 'menutextpro':l = 1
				reply(require('./src/help').menutextpro(prefix, l))
				break
				case 'menuphotooxy':l = 1
				reply(require('./src/help').menuphotooxy(prefix, l))
				break
				case 'menuephoto':l = 1
				reply(require('./src/help').menuephoto(prefix, l))
				break
				case 'menufun':l = 1
				reply(require('./src/help').menufun(prefix, l))
				break
				case 'menuprimbon':l = 1
				reply(require('./src/help').menuprimbon(prefix, l))
				break
				case 'menuconvert':l = 1
				reply(require('./src/help').menuconvert(prefix, l))
				break
				case 'menumain':l = 1
				reply(require('./src/help').menumain(prefix, l))
				break
				case 'menudatabase':l = 1
				reply(require('./src/help').menudatabase(prefix, l))
				break
				case 'menuanonymous':l = 1
				reply(require('./src/help').menuanonymous(prefix, l))
				break
				case 'menuislami':l = 1
				reply(require('./src/help').menuislami(prefix, l))
				break
				case 'menuvoicechanger':l = 1
				reply(require('./src/help').menuvoicechanger(prefix, l))
				break
				case 'menuowner':l = 1
				reply(require('./src/help').menuowner(prefix, l))
				break
				case 'vidcahaya':				 ran = getRandom('.mp4')
									 if (isQuotedVideo) {
                                        reply(mess.wait)
					owgi = await downloadM(ben.quoted)
					exec(`ffmpeg -i ${owgi} -vf eq=brightness=0.5:saturation=1 -c:a copy ${ran}`, async(err) => {
	if (err) return reply('Error')
	benny.sendMessage(from, {video: fs.readFileSync(ran), mimetype: 'video/mp4'}, {quoted: ben})
})
									 }
	break
	case 'vidcolorful':				 ran = getRandom('.mp4')
									 if (isQuotedVideo) {
                                        reply(mess.wait)
					owgi = await downloadM(ben.quoted)
					exec(`ffmpeg -i ${owgi} -vf eq=brightness=0.06:saturation=3 -c:a copy ${ran}`, async(err) => {
	if (err) return reply('Error')
	benny.sendMessage(from, {video: fs.readFileSync(ran), mimetype: 'video/mp4'}, {quoted: ben})
})
									 }
	break
				case 'vidcepetin':if (!isQuotedVideo) return reply('Reply Videonya!')
					media = await downloadM(ben.quoted)
				reply(mess.wait)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter_complex "rubberband=tempo=1.5" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					benny.sendMessage(from, {video: hah, mimetype: 'video/mp4'}, {quoted: ben})
						fs.unlinkSync(ran)
					})
				break
					 case 'vidflip2':				if (isQuotedVideo) {
                                        reply(mess.wait)
										ran = getRandom('.mp4')
					owgi = await downloadM(ben.quoted)
					 exec(`ffmpeg -i ${owgi} -filter:v "vflip" ${ran}`, async (err) => {
						if (err) return reply('error')
										benny.sendMessage(from, {video : fs.readFileSync(ran), mimetype: 'video/mp4'}, {quoted: ben})
					})
					 } break
					 case 'vidslowmo': case 'vidslow': case 'slowvid':				if (isQuotedVideo) {
                                        reply(mess.wait)
										ran = getRandom('.mp4')
					owgi = await downloadM(ben.quoted)
					 exec(`ffmpeg -i ${owgi} -filter:v "vflip" ${ran}`, async (err) => {
						if (err) return reply('error')
										benny.sendMessage(from, {video : fs.readFileSync(ran), mimetype: 'video/mp4'}, {quoted: ben})
					})
					 } break
									case 'fsizevid':{
										if (!Number(arg)) return reply('Hanya angka!')
		if (!isQuotedVideo) return reply('Reply Media!')
let sz = await downloadM(ben.quoted)
let types = ben.quoted.mtype
 let message = await prepareWAMessageMedia({ video: fs.readFileSync(sz), fileLength: Number(arg)}, { upload: benny.waUploadToServer })
var template = generateWAMessageFromContent('0@s.whatsapp.net', proto.Message.fromObject({
        videoMessage: message.videoMessage
            }), {quoted: ben})
            benny.relayMessage(from, template.message, { messageId: template.key.id })
		}
break
case 'getcaption':
	if (!isQuotedImage && !isQuotedVideo) return reply('Reply Video/Image nya!')
										reply(ben.quoted.text)
									break
					case 'vidflip':				case 'flipvid':	
									if (isQuotedVideo) {
										ran = getRandom('.mp4')
                                        reply(mess.wait)
					owgi = await downloadM(ben.quoted)
					exec(`ffmpeg -i ${owgi} -vf hflip -c:a copy ${ran}`, async (err) => {
						if (err) return reply(err)
										benny.sendMessage(from, {video : fs.readFileSync(ran), mimetype: 'video/mp4'}, {quoted: ben})
					})
									} break
									case 'vidmirror':					case 'mirrorvid':				if (!isQuotedVideo) return reply('videonya mana')
					if (isQuotedVideo) {
    media = await benny.downloadAndSaveMediaMessage(ben.quoted)
							ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -vf crop=iw:ih:0:0,split[left][tmp];[tmp]hflip[right];[left]pad=iw*2[a];[a][right]overlay=w ${ran}`, async(err) => {
						if (err) return reply('Error')
					benny.sendMessage(from, {video: fs.readFileSync(ran), mimetype: 'video/mp4', caption: 'Neh..'}, {quoted: adadeh})
					})
					} else {
						reply('Mana video nya?')
					}
									break
									case 'vidfisheye':					case 'fisheyevid':				if (!isQuotedVideo) return reply('videonya mana')
					if (isQuotedVideo) {
    media = await benny.downloadAndSaveMediaMessage(ben.quoted)
							ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -vf "lenscorrection=cx=0.5:cy=0.5:k1=1:k2=1" ${ran}`, async(err) => {
						if (err) return reply('Error')
						benny.sendMessage(from, {video: fs.readFileSync(ran), mimetype: 'video/mp4'}, {quoted: ben})
					})
					} else {
						reply('Mana video nya?')
					}
									break
					case 'vidrgba':				case 'rgbavid':				
									 var ghs = body.slice(11)
									if (isQuotedVideo) {
										ran = getRandom('.mp4')
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ben.quoted)
					exec(`ffmpeg -i ${owgi} -vf rgbashift=rh=15:bv=15:gh=-15 -pix_fmt yuv420p ${ran}`, async (err) => {
						if (err) return reply(err)
										benny.sendMessage(from, {video : fs.readFileSync(ran), mimetype: 'video/mp4'}, {quoted: ben})
					})
									} break
				case 'vidreverse':if (!isQuotedVideo) return reply('Reply Video nya!')
					media = await downloadM(ben.quoted)
				reply(mess.wait)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, {video: hah, mimetype: 'video/mp4'}, {quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'vidrobot':if (!isQuotedVideo) return reply('Reply Video nya!')
					media = await downloadM(ben.quoted)
				reply(mess.wait)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, {video:hah, mimetype: 'video/mp4'}, {quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'heroml':
	                        if (!arg) return reply('Nama heronya mana bang?')
			let {herodetails} = require('./lib/herodetail')
                        let nb = await herodetails(arg)
					console.log(nb)
					reply(JSON.stringify(nb, null, 2))
							 break
			case 'creategroup':
			case 'cg':
			if (!ben.key.fromMe && !isOwner) return
			if (ben && !ben.quoted && arg && ben.mentionedJid) {
			benny.groupCreate(text1, ben.mentionedJid)
			} else if (ben && ben.quoted && arg && ben.mentionedJid) {
			benny.groupCreate(arg, [ben.quoted.sender])
			} else {
				reply('Reply member/ @Tag member!')
			}
			break
			case 'sc':
			reply(`*Script Bot:*\nhttps://cararegistrasi.com/I4V4C`)
			break
			case 'listmenu':{
			let sections = [{
	title: `${global.namabot}`,
	rows: [
	    {title: 'Pasangan Command', rowId:"#menupasangan", description: "For Pasangan Only"},
	    {title: 'Image Command', rowId:"#menuimage", description: "For Image Only"},
	    {title: 'Video Command', rowId:"#menuvideo", description: "For Video Only"},
	    {title: 'Sticker Command', rowId:"#menusticker", description: "For Sticker Only"},
	    {title: 'Group Command', rowId:"#menugroup", description: "For Group Only"},
	    {title: 'Webzone Command', rowId:"#menuwebzone", description: "For Webzone Only"},
	    {title: 'Download Command', rowId:"#menudownload", description: "For Download Only"},
	    {title: 'Search Command', rowId:"#menusearch", description: "For Download Only"},
		{title: 'Random Command', rowId:"#menurandom", description: "For Random Only"},
	    {title: 'Textpro Command', rowId:"#menutextpro", description: "For Textpro Only"},
		{title: 'Photooxy Command', rowId:"#menuphotooxy", description: "For Photooxy Only"},
	    {title: 'Ephoto Command', rowId:"#menuephoto", description: "For Ephoto Only"},
	    {title: 'Fun Command', rowId:"#menufun", description: "For Fun Only"},
	    {title: 'Primbon Command', rowId:"#menuprimbon", description: "For Primbon Only"},
		{title: 'Convert Command', rowId:"#menuconvert", description: "For Convert Only"},
	    {title: 'Main Command', rowId:"#menumain", description: "For Main Menu Only"},
		{title: 'Database Command', rowId:"#menudatabase", description: "For Database Only"},
	    {title: 'Anonymous Command', rowId:"#menuanonymous", description: "For Anonymous Only"},
		{title: 'Islamic Command', rowId:"#menuislami", description: "For Islami Only"},
	    {title: 'Voicechanger Command', rowId:"#menuvoicechanger", description: "For Voice Changer Only"},
		{title: 'Owner Command', rowId:"#menuowner", description: "For Owner Only"}
 
	]
    }]

    const button = {
        title: `_*${global.namabot}*_`,
        description: `List menu ${global.namabot} on bottom!`,
        footerText: "*Script Bot:*\nhttps://cararegistrasi.com/I4V4C",
        buttonText: `_~*LIST MENU ${global.namabot}*~_`,
        listType: 'SINGLE_SELECT',
        sections: sections
        }
        const templateList = generateWAMessageFromContent(from, proto.Message.fromObject({ "listMessage": button }), {});
        benny.relayMessage(from, templateList.message, { messageId: templateList.key.id, quoted: ben })

			}
break
case 'menuimage':l = 1
				reply(require('./src/help').menuimage(prefix, l))
				break
case 'menupasangan':l = 1
				reply(require('./src/help').menupasangan(prefix, l))
				break
case 'menuvideo':l = 1
				reply(require('./src/help').menuvideo(prefix, l))
				break
case 'menuaudio':l = 1
				reply(require('./src/help').menuaudio(prefix, l))
				break
case 'menugroup':
case 'menugrup':l = 1
				reply(require('./src/help').menugroup(prefix, l))
				break
case 'menuimage':l = 1
				reply(require('./src/help').menuimage(prefix, l))
				break
case 'menudownload':l = 1
				reply(require('./src/help').menudownload(prefix, l))
				break
case 'menugame':l = 1
				reply(require('./src/help').menugame(prefix, l))
				break
case 'menunews':l = 1
				reply(require('./src/help').menunews(prefix, l))
				break
case 'menusearch':l = 1
				reply(require('./src/help').menusearch(prefix, l))
				break
case 'menuimagemaker':l = 1
				reply(require('./src/help').menuimagem(prefix, l))
				break
case 'menuanime':l = 1
				reply(require('./src/help').menuanime(prefix, l))
				break
case 'menusticker':l = 1
				reply(require('./src/help').menusticker(prefix, l))
				break
case 'menutextmaker':l = 1
				reply(require('./src/help').menutextm(prefix, l))
				break
case 'menurandom':l = 1
				reply(require('./src/help').menurandom(prefix, l))
				break
case 'menuconvert':l = 1
				reply(require('./src/help').menuconvert(prefix, l))
				break
case 'menuowner':l = 1
				reply(require('./src/help').menuowner(prefix, l))
				break
				case 'menunulis': {
		  let dateIslamic = Intl.DateTimeFormat('id' + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
	   let runtime = process.uptime()
	   let teksrun = `${tek(runtime)}`
	   let ppgc = await benny.getPP(ben.sender)
	   let ppimg = await getBuffer(ppgc)
				l = 1
				k = 1
				let biobot = await benny.getBio(botNumber)
                anu = `                  [ ${global.namabot} ] 
${monospace}${tampilTanggal}${monospace}
${monospace}${dateIslamic}${monospace}
${monospace}${tampilHari}${monospace}
${monospace}Jam : ${tampilWaktu} WIB${monospace}
${monospace}Jam : ${tampilWaktus} WITA${monospace}
${monospace}Jam : ${tampilWaktuss} WIT${monospace}

${monospace}Informasi User${monospace}
${monospace}Nama: ${ben.pushName}${monospace}
${monospace}Status: ${isCreator ? 'Owner' : 'User'}${monospace}
${monospace}Premium: ${isPremium ? 'Yes' : 'No'}${monospace}

${monospace}Informasi Bot${monospace}
${monospace}Nama : ${global.namabot}${monospace}
${monospace}Bio : ${biobot.status}${monospace}
${monospace}Total user : ${_registered.length}${monospace}
${monospace}Telah Aktif Selama:${monospace}
${monospace}${teksrun}${monospace}

${require('./src/help').help(global.prefix, l, k)}`
		await benny.sendMessage(from, {image: {url:`https://api.lolhuman.xyz/api/nulis?apikey=${global.lolkey}&text=${encodeURI(anu)}`}, caption: `Menu ${global.namabot}`}, {quoted: ben})

         }
         break
            case 'list': case 'menu': case 'help': case '?': {
				let dateIslamic = Intl.DateTimeFormat('id' + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
	   let runtime = process.uptime()
	   let teksrun = `${tek(runtime)}`
	   let ppgc = await benny.getPP(ben.sender)
	   let ppimg = await getBuffer(ppgc)
				l = 1
				k = 1
				let biobot = await benny.getBio(botNumber)
                anu = `                [ ${global.namabot} ] 
${monospace}${tampilTanggal}${monospace}
${monospace}${dateIslamic}${monospace}
${monospace}${tampilHari}${monospace}
${monospace}Jam : ${tampilWaktu} WIB${monospace}
${monospace}Jam : ${tampilWaktus} WITA${monospace}
${monospace}Jam : ${tampilWaktuss} WIT${monospace}

${monospace}Informasi User${monospace}
${monospace}Nama: ${ben.pushName}${monospace}
${monospace}Status: ${isCreator ? 'Owner' : 'User'}${monospace}
${monospace}Premium: ${isPremium ? 'Yes' : 'No'}${monospace}

${monospace}Informasi Bot${monospace}
${monospace}Nama : ${global.namabot}${monospace}
${monospace}Bio : ${biobot.status}${monospace}
${monospace}Total user : ${_registered.length}${monospace}
${monospace}Telah Aktif Selama:${monospace}
${monospace}${teksrun}${monospace}

${require('./src/help').help(global.prefix, l, k)}`
                let btn = [{
					urlButton: {
                                    displayText: 'Klik untuk salin nomor kamu',
                                    url:  `https://www.whatsapp.com/otp/copy/123456`
                                }
				},{
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 877-1889-5904'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: '#owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: '#sc'
                                }
                            }]
                        if (global.setbot === 'templateDocument') {
                        benny.send5ButDoc(from, anu, global.namabot, ppimg, btn, ppimg)
                        } else if (global.setbot === 'templateImage') {
                        benny.send5ButImg(from, anu, global.namabot, ppimg, btn, ppimg)
                        } else if (global.setbot === 'templateLiveLocation') {
                        benny.send5ButLiveLoc(from, anu)
                        } else if (global.setbot === 'templateGif') {
                        benny.send5ButGif(from, anu, global.namabot, global.visoka, btn, ppimg)
                        } else if (global.setbot === 'templateVid') {
                        benny.send5ButVid(from, anu, global.namabot, global.visoka, btn, ppimg)
                        } else if (global.setbot === 'templateMsg') {
                        benny.send5ButMsg(from, anu, global.namabot, btn)
                        } else if (global.setbot === 'templateLocation') {
                        benny.send5ButLoc(from, anu, global.namabot, ppimg, btn)
                        }
                     }
            break
            default:
			if ((ben.key.fromMe || isCreator) && body.startsWith('>>')){
				var code = body.slice(3)
					try {
                if (!code) return ben.reply('No JavaScript Code')
                let evaled;
 
                if (code.includes("--silent") && code.includes("--async")) {
                code = code.replace("--async", "").replace("--silent", "");
                return await eval(`(async () => { ${code} })()`)
                } else if (code.includes("--async")) {
                code = code.replace("--async", "");
                evaled = await eval(`(async () => { ${code} })()`);
                } else if (code.includes("--silent")) {
                code = code.replace("--silent", "");
                return await eval(code);
                } else evaled = await eval(code);
              if (typeof evaled !== "string") evaled = require("util").inspect(evaled)
            let output = clean(evaled);
            benny.sendMessage(from, {text: output}, {quoted:ben})
            } catch(err) {
                outerr = clean(util.format(err))
                ben.reply(`Error: ${outerr}`)
            }
			}
                if (budy.startsWith('=>')) {
                    if (!isCreator) return ben.reply(mess.only.ownerB)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return ben.reply(bang)
                    }
                    try {
                        ben.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        ben.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return ben.reply(mess.only.ownerB)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await ben.reply(evaled)
                    } catch (err) {
                        await ben.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return ben.reply(mess.only.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return ben.reply(err)
                        if (stdout) return ben.reply(stdout)
                    })
                }
			
		if (ben.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(ben.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(ben.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(ben.text)) return
                        let other = [room.a, room.b].find(user => user !== ben.sender)
                        ben.copyNForward(other, true, ben.quoted && ben.quoted.fromMe ? {
                            contextInfo: {
                                ...ben.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (ben.chat.endsWith('broadcast')) return
		    if (ben.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    benny.copyNForward(from, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        console.log(util.format(err))
    }
}

function clean(text) {
            if (typeof text === "string")
              return text
                .replace(/`/g, `\`${String.fromCharCode(8203)}`)
                .replace(/@/g, `@${String.fromCharCode(8203)}`);
            //eslint-disable-line prefer-template
            else return text;
            }

