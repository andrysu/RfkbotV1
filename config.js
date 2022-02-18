// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot

gc1 = ''
gc2 = ''
gc3 = ''
global.linkGC = ['https://chat.whatsapp.com/FZ8u1GjV88K3X9mFxtaQzZ', ''] // ganti jadi group lu
global.owner = ['6285894148101'] // Put your number here //owner eval
global.kontak = ['6285894148101','0'] //Ketika ada yang ngetik #owner
global.mods = ['0'] // Want some help?
global.prems = ['6285894148101'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://api.lolhuman.xyz': '9c8467e76ff85ce6a5c20bc7',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = '9c8467e76ff85ce6a5c20bc7'
zekskey = 'apivinz'
xteamkey = 'Dawnfrostkey'
//xteam        MIMINETBOT
namaig = 'GAK ADA :)'
namagithub = 'GAK ADA :)'
kasihcaption = `Nih Kak`
namakontak1 = 'Andry'
namakontak2 = 'Andry'

//kasihcaption = `Nih Kak`

// Sticker WM
global.packname = 'By Andry' // ganti aja
global.author = 'ᴀɴᴅʀʏ ʙᴏᴢᴛ' // ganti aja

//yyy
bc = 'ᴀɴᴅʀʏ' //ᴀɴᴅʀʏ ʙᴏᴢᴛ Broadcast
footer = '\n©ᴀɴᴅʀʏ ʙᴏᴢᴛ'
namabot = 'ᴀɴᴅʀʏ ʙᴏᴢᴛ'
namalu = 'Andry'


// 
wait = '_*chotto matte kudasai ...*_'
global.wait = '_*chotto matte kudasai ...*_'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/FZ8u1GjV88K3X9mFxtaQzZ'
global.nsfw = 'Hoy Hoy Haram.'
global.eror = '_*Server Error*_'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 36 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
