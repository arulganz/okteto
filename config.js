/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6281229859085
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

// Other
global.owner = ['6281229859085','6285869134434','62815788590761']
global.ntilink = ['120363043965529911@g.us','120363022988111568@g.us']
global.packname = 'Sticker by'
global.author = 'zBot [62815788590761]'
global.sessionName = 'kon'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Success',
    admin: 'Khusus Admin Group (tidak termasuk pembuat group)',
    botAdmin: 'Bot Harus Menjadi Admin',
    owner: 'Khusus Owner Bot',
    group: 'Hanya Bisa Digunakan Di Group',
    private: 'Hanya Bisa Digunakan Di Private Chat',
    bot: 'Khusus Nomor Bot',
    wait: 'Proses...',
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
