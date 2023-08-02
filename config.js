global.owner = ['6281546565277']  
global.mods = ['6281546565277'] 
global.prems = ['6281546565277']
global.nameowner = 'Kanara'
global.numberowner = '6281546565277' 
global.mail = 'support@tioprm.my.id' 
global.gc = 'https://chat.whatsapp.com/IjTiu89YhMeLY5dNT4L43X'
global.instagram = 'https://instagram.com/kanara.dk'
global.wm = '© Kanara'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'DKSoft'
global.author = 'Bot WhatsApp'

//INI WAJIB DI ISI!//
global.btc = 'YOUR_APIKEY_HERE' 
//Daftar terlebih dahulu https://api.botcahx.live

global.lann = 'YOUR_APIKEY_HERE'
//Daftar terlebih dahulu https://api.betabotz.org 

global.APIs = {   
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'Apikey' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
