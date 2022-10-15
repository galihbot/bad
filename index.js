require('./config')
const { version, bugs } = require('./package.json')
global.ses = 'Nando'
const CFonts = require('cfonts')
const { color } = require('./lib/color')
const readline = require('readline');
const { default: bennyConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const yargs = require('yargs/yargs')
let { floNime, webp2mp4File, TelegraPh, UploadFileUgu } = require('./lib/uploader')
const chalk = require('chalk')
const FileType = require('file-type')
const util = require('util')
const path = require('path')
const _ = require('lodash')
const axios = require('axios')
const PhoneNumber = require('awesome-phonenumber')
let welkom = JSON.parse(fs.readFileSync('./src/welcome.json'))
let kickarea = JSON.parse(fs.readFileSync('./src/kickarea.json'))
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')

const getAllDirFiles = (dirPath, arrayOfFiles) => {
    const files = fs.readdirSync(dirPath)
    arrayOfFiles = arrayOfFiles || []
    files.forEach((f) => {
        if (fs.statSync(dirPath + '/' + f).isDirectory()) {
            arrayOfFiles = getAllDirFiles(dirPath + '/' + f, arrayOfFiles)
        } else {
            arrayOfFiles.push(f)
        }
    })
    return arrayOfFiles
} 

/**
 * Uncache a changes.
 * @param {*} module 
 */
const uncache = (module = '.') => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (err) {
            reject(err)
        }
    })
}

/**
 * Delete file cache.
 * @param {*} module 
 * @param {*} call 
 */
const nocache = (module, call = () => {}) => {
    console.log(color('[WATCH]', 'orange'), color(`=> '${module}'`, 'yellow'), 'file is now being watched by me!')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        call(module)
    })
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

// save database every 30seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)

const newclient = async (ses) => {
	global.ses = ses
	const { state, saveState } = useSingleFileAuthState(`./${ses}.json`)
async function startBenny() {
	try {
    const benny = bennyConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['N@nd0 Multi Device','Safari','1.0.0'],
        auth: state
    })

    store.bind(benny.ev)
    
    // anticall auto block
    benny.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
		if (global.anticall) {
    let pa7rick = await benny.sendContact(callerId, global.owner)
    benny.sendMessage(callerId, { text: `Sistem otomatis block!\nJangan menelpon bot!\nSilahkan Hubungi Owner Untuk Dibuka !`}, { quoted : pa7rick })
    await sleep(8000)
    await benny.updateBlockStatus(callerId, "block")
    }
	}
    })
	
	benny.parseMention = (text = '') => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

benny.getPP = async (jid) => {
	try {
					ppnya = await benny.profilePictureUrl(jid, 'image')
				} catch {
					ppnya = 'https://telegra.ph/file/934bbf810353ca8a6547b.png'
				}
				return ppnya
}
	
	 benny.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await benny.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await benny.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://telegra.ph/file/934bbf810353ca8a6547b.png'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await benny.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://telegra.ph/file/934bbf810353ca8a6547b.png'
                }

                if (anu.action == 'add') {
					if (kickarea.includes(anu.id)) {
					num = anu.participants[0]
					if (!num.startsWith('62')) {
		console.log(color('[KICK]', 'red'), color('Received a foreign participant', 'yellow'))
		teks = '*Sorry bro this group only +62!*'
		benny.sendMessage(metadata.id, {text: teks})
		await sleep(2000)
		benny.sendMessage(metadata.id, {text: `*Bye* @${num.split('@')[0]}`, mentions: [num]})
		await sleep(2000)
		await benny.groupParticipantsUpdate(metadata.id, [num], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
		}
				}
					if (welkom.includes(anu.id)) {
					pushnames = await benny.getName(num)
                    benny.sendMessage(anu.id, { image: { url: `https://api.lolhuman.xyz/api/base/welcome?apikey=${global.lolkey}&img1=${ppuser}&img2=${ppgroup}&background=https://telegra.ph/file/9aa025d7c97ce57ba5023.jpg&username=${pushnames}&member=${metadata.size}&groupname=${encodeURI(metadata.subject)}` }, mentions: [num], caption: `*Hai* *${pushnames}*\n*Selamat datang di group:*\n*${metadata.subject}*\n\n*Intro dulu*\n*Nama:* \n*Asal kota:* \n*Jenis kelamin:* \n*Nomor:* @${num.split('@')[0]}\n*Semoga Betah yaa~~*` })
					}
			   } else if (anu.action == 'remove') {
					if (welkom.includes(anu.id)) {
					pushnames = await benny.getName(num)
                    benny.sendMessage(anu.id, { image: { url: `https://api.lolhuman.xyz/api/base/leave?apikey=${global.lolkey}&img1=${ppuser}&img2=${ppgroup}&background=https://telegra.ph/file/9aa025d7c97ce57ba5023.jpg&username=${pushnames}&member=${metadata.size + 1}&groupname=${encodeURI(metadata.subject)}` }, mentions: [num], caption: `*Goodbye* *${pushnames}*\n*Leave from group:*\n*${metadata.subject}*\n*Nomor:* ${num.split('@')[0]}\n*GoodBye~~*` })
					}
				} else if (anu.action == 'promote') {
                    benny.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `@${num.split('@')[0]} Promote From ${metadata.subject}` })
                } else if (anu.action == 'demote') {
                    benny.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `@${num.split('@')[0]} Demote From ${metadata.subject}` })
              }
            }
        } catch (err) {
            console.log(util.format(err))
        }
    })

    benny.ev.on('messages.upsert', async chatUpdate => {
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (!benny.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
		if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = await smsg(benny, mek, store)
        require("./msgHndlr")(benny, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })
    
    // Group Update
    benny.ev.on('groups.update', async pea => {
       //console.log(pea)
    // Get Profile Picture Group
       try {
       ppgc = await benny.profilePictureUrl(pea[0].id, 'image')
       } catch {
       ppgc = 'https://telegra.ph/file/fdb0f411f6b0d2ce07124.png'
       }
       let wm_fatih = { url : ppgc }
       if (pea[0].announce == true) {
       benny.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nGroup telah ditutup oleh admin, Sekarang hanya admin yang dapat mengirim pesan !`, `Group Settings Change Message`, wm_fatih, [])
       } else if(pea[0].announce == false) {
       benny.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nGroup telah dibuka oleh admin, Sekarang peserta dapat mengirim pesan !`, `Group Settings Change Message`, wm_fatih, [])
       } else if (pea[0].restrict == true) {
       benny.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nInfo group telah dibatasi, Sekarang hanya admin yang dapat mengedit info group !`, `Group Settings Change Message`, wm_fatih, [])
       } else if (pea[0].restrict == false) {
       benny.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nInfo group telah dibuka, Sekarang peserta dapat mengedit info group !`, `Group Settings Change Message`, wm_fatih, [])
       } else {
       benny.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nGroup Subject telah diganti menjadi *${pea[0].subject}*`, `Group Settings Change Message`, wm_fatih, [])
     }
    })
	
    // Setting
    benny.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
	
    
    benny.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = benny.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    benny.getName = (jid, withoutContact  = false) => {
        id = benny.decodeJid(jid)
        withoutContact = benny.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = benny.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === benny.decodeJid(benny.user.id) ?
            benny.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    benny.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await benny.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await benny.getName(i + '@s.whatsapp.net')}\nFN:${await benny.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.ADR:;;Mars;;;;\nitem2.X-ABLabel:Region\nitem3.EMAIL;type=INTERNET:bennyhdyt21@gmail.com\nitem3.X-ABLabel:Email\nEND:VCARD`
	    })
	}
	benny.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
    
    benny.setStatus = (status) => {
        benny.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    benny.public = true

    benny.serializeM = (m) => smsg(benny, m, store)

    benny.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	
let p = 1		
        if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); startBenny(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startBenny(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startBenny(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); startBenny(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); startBenny();}
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startBenny(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startBenny(); }
            else benny.end(`Unknown DisconnectReason: ${reason}|${connection}`)
        } else {
			console.log(color('[ CLIENT ]', 'lime'), color('Connecting to session: ', 'magenta') + `${global.ses} in ${p++} seconds`)
			console.log(color('[DEV]', 'cyan'), color('Welcome back, Owner! Hope you are doing well~', 'lime'))
		}
    })

    benny.ev.on('creds.update', saveState)

    // Add Other
      
      /** Resize Image
      *
      * @param {Buffer} Buffer (Only Image)
      * @param {Numeric} Width
      * @param {Numeric} Height
      */
      benny.reSize = async (image, width, height) => {
       let jimp = require('jimp')
       var oyy = await jimp.read(image);
       var kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
       return kiyomasa
      }
      // Siapa yang cita-citanya pakai resize buat keliatan thumbnailnya
      
      /** Send Button 5 LIve Location
       *
       * @param {*} jid
       * @param {*} text
       * @param {*} footer
       * @param {*} location
       * @param [*] button
       * @param {*} options
       */
      benny.send5ButLiveLoc = async (jid , text = '', options = {}) =>{
       var template = generateWAMessageFromContent(jid, {
       "liveLocationMessage": {
	   "caption": text,
       "degreesLatitude":-6.2607933,
"degreesLongitude":106.8668448,
"sequenceNumber":"774236889",
"jpegThumbnail":"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",
"thumbnail":"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"
       }
       }, options)
       benny.relayMessage(jid, template.message, { messageId: template.key.id })
      }

      /** Send Button 5 Location
       *
       * @param {*} jid
       * @param {*} text
       * @param {*} footer
       * @param {*} location
       * @param [*] button
       * @param {*} options
       */
      benny.send5ButLoc = async (jid , text = '' , footer = '', lok, but = [], options = {}) =>{
       let resize = await benny.reSize(lok, 300, 150)
       var template = generateWAMessageFromContent(jid, {
       "templateMessage": {
       "hydratedTemplate": {
       "locationMessage": {
       "degreesLatitude": 0,
       "degreesLongitude": 0,
       "jpegThumbnail": resize
       },
       "hydratedContentText": text,
       "hydratedFooterText": footer,
       "hydratedButtons": but
       }
       }
       }, options)
       benny.relayMessage(jid, template.message, { messageId: template.key.id })
      }

      /**
      *
      * @param {*} jid
      * @param {*} url
      * @param {*} caption
      * @param {*} quoted
      * @param {*} options
      */
     benny.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return benny.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return benny.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return benny.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return benny.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return benny.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }

    /** Send List Messaage
      *
      *@param {*} jid
      *@param {*} text
      *@param {*} footer
      *@param {*} title
      *@param {*} butText
      *@param [*] sections
      *@param {*} quoted
      */
        benny.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        benny.sendMessage(jid, listMes, { quoted: quoted })
        }
		
    /** Get Bio Someone
	*
	*@param {*} jid
	*@returns
	*/
	benny.getBio = async (jid) => {
		let bio = await benny.fetchStatus(jid)
		return bio
	}

    /** Send Button 5 Message
     * 
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} button
     * @returns 
     */
        benny.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        benny.sendMessage(jid, templateMessage)
        }
		

    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    benny.send5ButImg = async (jid , text = '' , footer = '', img, but = [], buff, options = {}) =>{
        let resize = await benny.reSize(buff, 300, 150)
        let message = await prepareWAMessageMedia({ image: img, jpegThumbnail: resize }, { upload: benny.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            benny.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /** Send Button 5 Document
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} document
     * @param [*] button
     * @param {*} options
     * @returns
     */
    benny.send5ButDoc = async (jid , text = '' , footer = '', img, but = [], buff, options = {}) =>{
        let resize = await benny.reSize(buff, 300, 150)
        let message = await prepareWAMessageMedia({ document: img, jpegThumbnail: resize, fileName: `Hai kak, ${m.pushName} 👋`, mimetype: 'application/pdf', fileLength: '98999999999998988', pageCount: 999 }, { upload: benny.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        documentMessage: message.documentMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            benny.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /** Send Button 5 Video
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} Video
     * @param [*] button
     * @param {*} options
     * @returns
     */
    benny.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], buff, options = {}) =>{
        let resize = await benny.reSize(buff, 300, 150)
        let message = await prepareWAMessageMedia({ video: vid, jpegThumbnail: resize }, { upload: benny.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            benny.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /** Send Button 5 Gif
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} Gif
     * @param [*] button
     * @param {*} options
     * @returns
     */
    benny.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], buff, options = {}) =>{
        let resize = await benny.reSize(buff, 300, 150)
        let a = [1,2]
        let b = a[Math.floor(Math.random() * a.length)]
        let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true, jpegThumbnail: resize, gifAttribution: b}, { upload: benny.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            benny.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    benny.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        benny.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    benny.sendText = (jid, text, quoted = '', options) => benny.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
	 
	benny.sendVideos = async (to, videos, command, caption = 'Nehh..', ben) => {
		let buttons = [
		{buttonId: `${global.prefix}${command}`, buttonText: {displayText: 'NEXT'}, type: 1},
        {buttonId: '#menu', buttonText: {displayText: 'BACK TO MENU'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: videos },
                    caption: `*${command}*`,
                    footer: benny.user.name,
                    buttons: buttons,
                    headerType: 5
                }
                benny.sendMessage(to, buttonMessage, { quoted: ben })
		}
	benny.sendImages = async (to, images, command, caption = 'Nehh..', ben) => {
			buttons = [
  {buttonId: `${global.prefix}${command}`, buttonText: {displayText: 'NEXT'}, type: 'RESPONSE'},
  {buttonId: '#menu', buttonText: {displayText: 'BACK TO MENU'}, type: 'RESPONSE'}
]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*${command}*`,
                    footer: benny.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                benny.sendMessage(to, buttonMessage, { quoted: ben })
		}
		
    benny.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await benny.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    benny.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await benny.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    benny.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await benny.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    benny.sendTextWithMentions = async (jid, text, quoted, options = {}) => benny.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    benny.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await benny.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    benny.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await benny.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    benny.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    benny.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} filename
     * @param {*} caption
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    benny.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await benny.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await benny.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    benny.copyNForward = async (jid, message, forceForward = false, options = {}) => {
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
        await benny.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    benny.cMod = (jid, copy, text = '', sender = benny.user.id, options = {}) => {
        //let copy = message.toJSON()
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
		copy.key.fromMe = sender === benny.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }
	
	benny.download = async (file, path) => {
		path = path ? path : Date.now()
     benny.downloadAndSaveMediaMessage(file)
	 console.log('Done!')
	}

    /**
     * 
     * @param {*} path 
     * @returns 
     */
    benny.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
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

    return benny
} catch (err) {
	console.log(util.format(err))
}
}
startBenny()
}

console.clear()
CFonts.say(`${global.ses.split('.json')[0].toUpperCase()}BOT`, {
            font: 'chrome',
            align: 'left',
            gradient: ['red', 'magenta']
        })
        console.log(color('=> Bot successfully loaded! Database:', 'yellow'), color(getAllDirFiles('./src')
            .length), color('Library:', 'yellow'), color(getAllDirFiles('./lib')
            .length))
        console.log(color('=> Source code version:', 'yellow'), color(version))
        console.log(color('=> Bug? Error? Suggestion? Visit here:', 'yellow'), color(bugs.url))
        console.log(color(`[${ses.split('.json')[0].toUpperCase()}]`), color(`${ses.split('.json')[0].toUpperCase()} BOT is now online!`, 'yellow'))
		nocache('./msgHndlr.js', (m) => console.log(color('[WATCH]', 'orange'), color(`=> '${m}'`, 'yellow'), 'file is updated!'))
if (!process.argv[2]) {
    rl.question(color('Masukan nama session: ', 'magenta'), (answer) => {
        console.log('  ')
        if (!fs.existsSync(`./${answer}.json`)) {
            console.log(color('[ NEW CLIENT ]', 'lime'), color('Creating new session:', 'magenta') + answer)
        } else {
            console.log(color('[ CLIENT ]', 'lime'), color('Connecting to session: ', 'magenta') + answer)
        }
        sessionname = answer
        rl.close();
        newclient(sessionname)
    });
} else if (process.argv[2]) {
    sessionname = process.argv[2]
    console.log('  ')
    if (!fs.existsSync(`./${sessionname}.json`)) {
        console.log(color('[ NEW CLIENT ]', 'lime'), color('Creating new session:', 'magenta') + sessionname)
    } else {
        console.log(color('[ CLIENT ]', 'lime'), color('Connecting to session: ', 'magenta') + sessionname)
    }
    newclient(sessionname)
    rl.close();
}
