const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𓆩 *ZAINTION* 𓆪 🐦‍⬛⚡" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349042566473";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349042566473";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_31_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODQsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMixcbiAgICAgICAgNjUsXG4gICAgICAgIDc3LFxuICAgICAgICAzMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMzLFxuICAgICAgICA5MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MixcbiAgICAgICAgMTA1LFxuICAgICAgICAzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDc5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDk4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDYyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDMxLFxuICAgICAgICAzMSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQxLFxuICAgICAgICA4MSxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgODAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgODEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODEsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIwLFxuICAgICAgICA4MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQzLFxuICAgICAgICA2OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MixcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQwLFxuICAgICAgICA4MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDY0LFxuICAgICAgICAxODcsXG4gICAgICAgIDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1LFxuICAgICAgICA3NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSGVYeDBuVnBuNk9DMUNXZkZlS1Y2d0xxdGMyaXlmYWpKRU5IUjhSYlNaST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicEcwVTZyaWZUMVNqRkxWZ0g4b0dxZ1wiLFxuICBcInBob25lSWRcIjogXCJjMGNlMmI4MS04YTg0LTRhOWEtYjY1Yi1iMzMwOGNjZDk5YmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA4LFxuICAgICAgNzYsXG4gICAgICA2NixcbiAgICAgIDQzLFxuICAgICAgMTcyLFxuICAgICAgOTgsXG4gICAgICA5NixcbiAgICAgIDI1MixcbiAgICAgIDgwLFxuICAgICAgOTksXG4gICAgICAyMzMsXG4gICAgICAxMTIsXG4gICAgICA1MixcbiAgICAgIDQ2LFxuICAgICAgMTU5LFxuICAgICAgNyxcbiAgICAgIDU3LFxuICAgICAgMjE0LFxuICAgICAgMTIwLFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU4LFxuICAgICAgNjAsXG4gICAgICAxNTcsXG4gICAgICAxNzksXG4gICAgICAxNjksXG4gICAgICAzMSxcbiAgICAgIDUyLFxuICAgICAgMjI1LFxuICAgICAgMTQsXG4gICAgICAyMTcsXG4gICAgICAxNDcsXG4gICAgICAyMjAsXG4gICAgICAxNjYsXG4gICAgICAxMDUsXG4gICAgICAyMTEsXG4gICAgICAxNzUsXG4gICAgICAxNDcsXG4gICAgICA4OSxcbiAgICAgIDE3MCxcbiAgICAgIDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMjJWN0hGQkRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzk5NzY3Nzk6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjMzMjg2MDQ2OTAwNDI0OjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ051cDVPMElFUFRWcExRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQThFdWRndnhGcHUvRi82NUkwdW9NRUNxSml6bm5qWmVlS1FuQ2szLzFRST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDbjB3Q0t1R2NINU1Mb09QTTdZbE1ac2wrTnpPZU41YWlkM2xpei9vRnk5cnBjMnIxWSt2eThYbXE4OENkSHFQZnVXTStHVTdQcmJsNUxpY2NHd1Jpdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0OS9WeHI1K1RuRlZDeG1aSDRqQ0lncG9rVEp4aVdKZUZXZDBCeGU5ZWJiakJNSFJFMW94T2k3TTg0VlVjV3lrTEd3S3pKcWkzcVV6NVpEVm9IV3RqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM5OTc2Nzc5OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI2NTQ2MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQmdBQUJkMVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFCZ0FBQmQxLmpzb24iOiAie1wia2V5RGF0YVwiOlwidXppUG96NVdoWjlXYSs3THNDMUJVZ1lWczJMMTR0OVhGclhOd3pqTUJUdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMzc3NzE2OTU1LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMSwwLDI0XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk5NjU5MTYyMzNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "𓆩 *ZAINTION* 𓆪 🐦‍⬛⚡" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Ｍ-ＣＲＯＳＳ",
  ownername:process.env.OWNER_NAME|| "Ｍ-ＣＲＯＳＳ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
