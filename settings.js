//🦄Dream Guy Deepak 

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: dreamguydeepak" //ur yt chanel name
global.socialm = "GitHub: DGDEEPAK" //ur github or insta name
global.location = "India, West Bengal, Darjeeling" //ur location

//new
global.botname = 'Zenitsu-Bot6' //ur bot name
global.ownernumber = '918348225320' //ur owner number
global.ownername = '🦄Dream Guy Deepak' //ur owner name
global.websitex = "https://youtube.com/@dreamguydeepak"
global.wagc = "https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835"
global.themeemoji = '🦄'
global.wm = "Deepak Bot Inc."
global.botscript = 'https://github.com/DGDEEPAK/Zenitsu-Bot6' //script link
global.packname = "Sticker By"
global.author = "🦄Dream Guy Deepak"
global.creator = "918348225320@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["918348225320","917029257330"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v1' // menu type 'v1' => 'v8'
global.typereply = 'v1' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./DeepakMedia/theme/Zenitsu.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})