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
global.gurl  =process.env.GURL  || "https://Wa.me/2349042566473?text=Boss%20ＫＩＮＧ🍀Ｍ-ＣＲＯＳＳ%20my%20name%20is___%20and%20I've%20saved%20your%20contact%20you%20should%20please%20save%20mine%20too%20%20✅";
global.website=process.env.GURL || "https://Wa.me/2349042566473?text=Boss%20ＫＩＮＧ🍀Ｍ-ＣＲＯＳＳ%20my%20name%20is___%20and%20I've%20saved%20your%20contact%20you%20should%20please%20save%20mine%20too%20%20✅" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f5b8e95f14fa175a1006.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𓆩 *Ｍ-ＣＲＯＳＳ⚡*" 


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
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/7fb2b22b9f1ed29135ede.jpg" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_11_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY3LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI5LFxuICAgICAgICAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzAsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MixcbiAgICAgICAgOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNixcbiAgICAgICAgMTA4LFxuICAgICAgICA0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNixcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDI3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMwLFxuICAgICAgICA1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA4NixcbiAgICAgICAgODEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDk5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiV2ZjbE5ka2czNXcyUnFXMzlwdm9sTFpqZ0wyVUdMVUZ3dDFjdFp3VkZBQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTXhPNUFEeTZTVWVwcExCZWFTcmhrQVwiLFxuICBcInBob25lSWRcIjogXCJjNTViMTBhOC0zMGE4LTQwN2MtYmU5MC1hMTFlM2IxYzVhNjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgNTMsXG4gICAgICAyMzgsXG4gICAgICAxNzAsXG4gICAgICAyMzQsXG4gICAgICAxMTQsXG4gICAgICAzNCxcbiAgICAgIDE2NixcbiAgICAgIDc2LFxuICAgICAgMjI0LFxuICAgICAgNjksXG4gICAgICAxNjQsXG4gICAgICAxMDEsXG4gICAgICA5NixcbiAgICAgIDk2LFxuICAgICAgNzMsXG4gICAgICA2OSxcbiAgICAgIDg1LFxuICAgICAgNjQsXG4gICAgICAyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjIsXG4gICAgICAyNSxcbiAgICAgIDE4MyxcbiAgICAgIDIxOSxcbiAgICAgIDkwLFxuICAgICAgMjQ3LFxuICAgICAgMTYwLFxuICAgICAgOTksXG4gICAgICAyMDUsXG4gICAgICAxNjgsXG4gICAgICAxOTYsXG4gICAgICAyMjksXG4gICAgICAxNDYsXG4gICAgICAxNTcsXG4gICAgICAzNCxcbiAgICAgIDE1LFxuICAgICAgOTQsXG4gICAgICAyNTIsXG4gICAgICAzNCxcbiAgICAgIDIzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMTVlTTEhaOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA0MjU2NjQ3Mzo5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgxMjgxMTc4MDI3NTo5NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNcTRoc0lGRUwzNG83UUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInFlbW4yRVBkSE5LSXhWZFl2UmRkWnpYZCsvbTB6Z0NyNkszc1JsTHhZaWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicFlzbUYvNWhZL1YzaHJRazBqalk2dFNXSXRGc0NyenNmaFA0aVFuY1NqVno3bHA4RDRNQzZuUm9zRXNEMEJ1Y2gzTC95R0NZRC8yZ0x6Q0YwVWxYQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaXlYUWV5ZmM1YnQxc1h5UUdpeUE2VXpHNE9FV0hSR3BiQWl0UGNpYnEyUFd1VVdNV0s4NXBvcEUxbHNkT3IzQ0RzK1MrVVVCZVRkN29IWEhUczY2aVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA0MjU2NjQ3Mzo5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjUzNTA0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "⚡",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "*Ｍ-ＣＲＯＳＳ🕷️*" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
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
  LANG: ( process.env.THEME ||  "NEZUKO"  ).toUpperCase(),



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
