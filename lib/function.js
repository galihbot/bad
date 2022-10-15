const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')
const requests = require('node-fetch');
const FormData = require('form-data')
const { fromBuffer } = require('file-type')
const fetch = require('node-fetch')
let scmd = JSON.parse(fs.readFileSync('./src/command.json'))

const mediafireDl = async (url) => {
const res = await axios.get(url) 
const $ = cheerio.load(res.data)
const link = $('a#downloadButton').attr('href')
const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '')
console.log(size)
console.log(link)
console.log($)
const seplit = link.split('/')
const nama = seplit[5]
mime = nama.split('.')
mime = mime[1]
return { nama, mime, size, link }
}

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await fetch(url)
		const reso = await res.buffer()
		return reso
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const parseMention = (text = '') => {
      return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const carigrup = async (nama) => {
	  return new Promise((resolve, reject) => {
	axios.get(`http://ngarang.com/link-grup-wa/daftar-link-grup-wa.php?search=${nama}&searchby=name`, {
method: 'GET'
}).then(res => {
const hasil = []
const $ = cheerio.load(res.data)
	$('div.wa-chat-body').each(function(c, d) {
let url = $(d).find('a').attr('href')
let name = $(d).find('div.wa-chat-title-text').text().trim().split('. ')[1]
console.log(name)
const result = {
	subject: name,
	link: url.split('?')[0]
}
hasil.push(result)
})
	resolve(hasil)
})
})
}
const getVoice = async (benny, ben) => {
	const requests = require('node-fetch')
	const FormData = require('form-data')
    const file = await benny.downloadAndSaveMediaMessage(ben)
    const stream = fs.createReadStream(file);
    const form = new FormData();
    form.append('audio', stream);
    const UrL = await requests('http://hujanapi.xyz/api/stt?apikey=januari', { method: 'POST', body: form })
    const ret =  await UrL.json()
    const voiceMsg = ret.result ? ret.result : 'Tidak terdeteksi'
    return voiceMsg
}
const getBaper = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const usedCommandRecently = new Set()

const isFiltered = (from) => {
    return !!usedCommandRecently.has(from)
}

const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => {
        return usedCommandRecently.delete(from)
    }, 5000) // 5 seconds delay, I don't recommend below that.
}

function formatDate(n, locale = 'id') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}

const jadwalSolat = async(tempat) => {
const url = `https://m.dream.co.id/jadwal-salat/${tempat.replace(/\s/g, '-').toLowerCase()}`
const res = await axios.get(url)
const $ = cheerio.load(res.data)
const a = $('table').find('tbody > tr > td')
const emror = "_[ ! ] Error Daerah Tidak DiTemukan_"
const daerah = url.split('/')[4]
const tanggal = $(a).eq(0).text()
const shubuh = $(a).eq(1).text()
const dzuhur = $(a).eq(2).text()
const ashar = $(a).eq(3).text()
const maghrib = $(a).eq(4).text()
const isya = $(a).eq(5).text()
return { daerah, tanggal, shubuh, dzuhur, ashar, maghrib, isya}
}

const uploadBerkas = (path) => new Promise((resolve, reject) => {
     const {default: Axios} = require('axios')
     const FormData = require('form-data')
     const fd = new FormData()
     fd.append('sampleFile', fs.createReadStream(path))
     Axios({
          method: 'POST',
          url: 'https://top4top.io/index.php',
          data: fd,
          headers: {
               'user-agent': 'MRHRTZ-ZONE :D',
               'content-type': `multipart/form-data; boundary=${fd._boundary}`
          }
     }).then(({ data }) => resolve(data)).catch(reject)
})

const uploadMedia = (path, fileName) => {
    return new Promise(async (resolve, reject) => {
		fileName ? fileName : Date.now()
		let buffData = fs.readFileSync(path)
        const { ext } = await fromBuffer(buffData)
        const filePath = `./src/${fileName}.${ext}`
        fs.writeFile(filePath, buffData, { encoding: 'base64' }, (err) => {
            if (err) reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, `${fileName}.${ext}`)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then((response) => response.json())
                .then((result) => {
                    if (result.error) reject(result.error)
					resolve({files:[{url: 'https://telegra.ph' + result[0].src}]})
                })
                .then(() => fs.unlinkSync(filePath))
                .catch((err) => reject(err))
        })
    })
}

const wikiSearch = async (query) => {
const res = await axios.get(`https://id.m.wikipedia.org/wiki/${query}`)
const $ = cheerio.load(res.data)
let wiki = $('#mf-section-0').find('p').text()
let thumb = 'https:' + $('#mf-section-0').find('div > div > a > img').attr('src')
let judul = $('h1#section_0').text()
return { wiki, thumb, judul }
}

const kusonime = async(query) => {
	const ling = await axios.get(`https://kusonime.com/?s=${query}&post_type=post`)
const $ = cheerio.load(ling.data)
const hasil = []
 
const link = $('div.venz > ul > div.kover > div.detpost > div.content > h2.episodeye > a').attr('href')
const judul = $('div.venz > ul > div.kover > div.detpost > div.content > h2.episodeye > a').attr('title')
 
 
const lling = await axios.get(`${link}`) 
const $$ = cheerio.load(lling.data)
const img = $$('div.venser > div.post-thumb > img').attr('src')
const title_japanese = $$('div.venser > div.venutama > div.lexot > div.info > p').eq(0).text().replace('Japanese: ','')
const genre = $$('div.venser > div.venutama > div.lexot > div.info > p').eq(1).text().replace('Genre : ','')
const season =  $$('div.venser > div.venutama > div.lexot > div.info > p').eq(2).text().replace('Seasons : ','')
const producer =  $$('div.venser > div.venutama > div.lexot > div.info > p').eq(3).text().replace('Producers: ','')
const tipe =  $$('div.venser > div.venutama > div.lexot > div.info > p').eq(4).text().replace('Type: ','')
const status = $$('div.venser > div.venutama > div.lexot > div.info > p').eq(5).text().replace('Status: ','')
const total_eps =  $$('div.venser > div.venutama > div.lexot > div.info > p').eq(6).text().replace('Total Episode: ','')
const score =  $$('div.venser > div.venutama > div.lexot > div.info > p').eq(7).text().replace('Score: ','')
const duration =  $$('div.venser > div.venutama > div.lexot > div.info > p').eq(8).text().replace('Duration: ','')
const rilis =  $$('div.venser > div.venutama > div.lexot > div.info > p').eq(9).text().replace('Released on: ','')
return { link, judul, img, title_japanese, genre, season, producer, tipe, status, total_eps, score, duration, rilis }
}

async function ArtiNama(nama) {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.primbon.com/arti_nama.php?nama1=${nama}&proses=+Submit%21+`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        const isi = $('#body').text().split('Nama:')[0].replace(/\n\n\n\n\n\n\n\n\n/gi, '\n').split('ARTI NAMA\n')[1].replace('\n      \n        \n        \n          ', '')
          resolve(isi)
      })
      .catch(reject)
  })
}

async function ArtiMimpi(mimpi) {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.primbon.com/tafsir_mimpi.php?mimpi=${mimpi}&submit=+Submit+`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        const detect = $('#body > font > i').text()
        const isAva = /Tidak ditemukan/g.test(detect) ? false : true
        if (isAva) {
          const isi = $('#body').text().split(`Hasil pencarian untuk kata kunci: ${mimpi}`)[1].replace(/\n\n\n\n\n\n\n\n\n/gi, '\n')
          resolve(isi)
        } else {
          const res = {
            status: 404,
            result: `Arti Mimpi ${mimpi} Tidak Di Temukan`
          }
          resolve(res)
        }
      })
      .catch(reject)
  })
}

const addCmd = (id, command) => {
    const obj = { id: id, chat: command }
    scmd.push(obj)
    fs.writeFileSync('./src/command.json', JSON.stringify(scmd))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scmd).forEach((i) => {
        if (scmd[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scmd).forEach((i) => {
        if (scmd[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scmd[position].chat
    }
}
const checkSCommand = (id) => {
    let status = false
    Object.keys(scmd).forEach((i) => {
        if (scmd[i].id === id) {
            status = true
        }
    })
    return status
}

const uploadimgs = async (filename, name) => {
	const FormData = require('form-data')
    var image = fs.readFileSync(filename)
    var form = new FormData()
	
    form.append('files[]', image, name)
     
    const upload = fetch('https://uguu.se/upload.php', {
        method: 'POST',
        body: form
    }).then((response) => response.json())
        .then((result) => {
			console.log(result)
            return result
        })
        .catch(e => {
            return e
        })
    return upload
}

const resepnya = async (QUERY) => {
	try {
		const resep1 = await axios.get(`https://masak-apa.tomorisakura.vercel.app/api/search/?q=${QUERY}`)
		if (resep1.data.results[0] == '' || resep1.data.results[0] == undefined)
			return {
				"status": 200,
				"error": "Query yang anda cari tidak tersedia!"
			}
		//console.log(resep1)
		const random = Math.floor(Math.random() * resep1.data.results.length);
		const resep2 = await axios.get('https://masak-apa.tomorisakura.vercel.app/api/recipe/' + resep1.data.results[random].key)
		//console.log(resep2)
		const results = resep2.data.results
		return {
			results
		}
	} catch (err) {
		return { err }
	}
}

const jagoKata = async (query) => {
const base = `https://jagokata.com/kata-bijak/kata-${query}.html`
const des = await axios.get(base)
const sup = cheerio.load(des.data)
var page = sup('h4 > strong').eq(2).text() / 10
page = parseInt(page)
const randomPage = Math.floor(Math.random() * page)
const res = await axios.get(`${base}?page=${randomPage}`)
const $ = cheerio.load(res.data)
const hasil = []
const list = $('ul > li')
const random = Math.floor(Math.random() * 10)
const isi = $(list).find('q.fbquote').eq(random).text() 

var by = $(list).find('div > div > a').eq(random).text()
by = by ? by : "Kang Galon"
return { isi,  by }
}

const alay = (text) => {
     const K = new RegExp("[AaOoIiSs]", "g")
    text = text.replace(K, "4", "6", "0", "1", "5")
    return text
}

function kbbiSearch(KATA) {
    return new Promise(function (resolve, reject) {                                                                                                                                                               //<https://github.com/ArugaZ/whatsapp-bot>
		axios.get(`https://kbbi.kemdikbud.go.id/entri/${KATA}`)
		.then(req => {
			try {
				const arti = []
				let soup = cheerio.load(req.data)
				soup('ol').each(function(a, b) {
					soup(b).find('li').each(function(c, d) {
						arti.push(soup(d).text())
					})
				})
				soup('ul.adjusted-par').each(function(a, b) {
					soup(b).find('li').each(function(c, d) {
						arti.push(soup(d).text())
					})
				})
				resolve({result: arti})
			} catch (err) {
				reject({
					status: 'error',
					error: err
				})
			}
		})
		.catch((err) => {
			reject({
				status: 'error',
				error: err
			})
		})
	})
}

function getGempa() {
	const {default: Axios} = require('axios')
	const cheerio = require('cheerio')
     return new Promise((resolve, reject) => {
          Axios.get('https://www.bmkg.go.id/')
               .then(({ data }) => {
                    const $ = cheerio.load(data)
                    // console.log(data);
                    resolve({
                         status: true,
                         gambar: $('div.gempabumi-home-bg.margin-top-13 > div > div:nth-child(1) > a').attr('href'),
                         waktu: $('span.waktu').text(),
                         magnitudo: $('div.gempabumi-detail > ul > li:nth-child(2)').text(),
                         kedalaman: $('div.gempabumi-detail > ul > li:nth-child(3)').text(),
                         koordinat: $('div.gempabumi-detail > ul > li:nth-child(4)').text(),
                         lokasi: $('div.gempabumi-detail > ul > li:nth-child(5)').text(),
                         tsunami: $('div.gempabumi-detail > ul > li:nth-child(6)').text()
                    })
               })
               .catch((response) => {
                    reject({ status: false, message: response })
               })
     })
}

function tek(seconds){
  function tok(s){
    return (s < 10 ? '' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${tok(hours)}Jam ${tok(minutes)}Menit ${tok(seconds)}Detik`
}

function speedText(speed) {
    let bits = speed * 8;
    const units = ['', 'K', 'M', 'G', 'T'];
    const places = [0, 1, 2, 3, 3];
    let unit = 0;
    while (bits >= 2000 && unit < 4) {
      unit++;
      bits /= 1000;
    }

    return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
}

module.exports = {getGempa, tek, speedText, parseMention, uploadimgs, resepnya, jagoKata, alay, kbbiSearch, addCmd, getCommandPosition, getCmd, getVoice, checkSCommand, mediafireDl, sleep, getBuffer, carigrup, getBaper, isFiltered, addFilter, formatDate, jadwalSolat, uploadBerkas, uploadMedia, wikiSearch, kusonime, ArtiNama, ArtiMimpi}
