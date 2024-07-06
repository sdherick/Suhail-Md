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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349155838800";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_11_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI4LFxuICAgICAgICA5NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTQzLFxuICAgICAgICA5OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgODYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDAsXG4gICAgICAgIDUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNixcbiAgICAgICAgMjI1LFxuICAgICAgICA2OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODksXG4gICAgICAgIDU2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDcsXG4gICAgICAgIDg1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNCxcbiAgICAgICAgNixcbiAgICAgICAgNjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgODMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDM4LFxuICAgICAgICA0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDQyLFxuICAgICAgICA5MixcbiAgICAgICAgMTM3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDU1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNixcbiAgICAgICAgMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODIsXG4gICAgICAgIDM3LFxuICAgICAgICAzNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI4LFxuICAgICAgICA3NixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDU4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA2MyxcbiAgICAgICAgMzksXG4gICAgICAgIDQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDYsXG4gICAgICAgIDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkyLFxuICAgICAgICA1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU1LFxuICAgICAgICA3MixcbiAgICAgICAgMjQzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEsXG4gICAgICAgIDI2LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRzQ3ZUphdTdmNTM1ZThuamZGSzVkMjFaNEFuNEk3MWVpSE56cHV2RFRPTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic2xQQkRWaVRTSG14NFFYQWxxZkZnZ1wiLFxuICBcInBob25lSWRcIjogXCI3ZWVhYTRkMi0wZDlmLTRkNjEtYThiMi0zMzc4Y2Y1ZTIwOGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgxLFxuICAgICAgMTcyLFxuICAgICAgMTI4LFxuICAgICAgMTkzLFxuICAgICAgMjQzLFxuICAgICAgMTM3LFxuICAgICAgMTE1LFxuICAgICAgMjM0LFxuICAgICAgNTgsXG4gICAgICAxNTksXG4gICAgICAyNTIsXG4gICAgICAyMDYsXG4gICAgICAyMTAsXG4gICAgICAxNyxcbiAgICAgIDIyMyxcbiAgICAgIDE0OCxcbiAgICAgIDIxNyxcbiAgICAgIDIwLFxuICAgICAgMjE4LFxuICAgICAgMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgMTcsXG4gICAgICAyNTEsXG4gICAgICA2OCxcbiAgICAgIDE1NixcbiAgICAgIDcsXG4gICAgICAyNDgsXG4gICAgICAxMzYsXG4gICAgICAyMSxcbiAgICAgIDEyOSxcbiAgICAgIDI0NyxcbiAgICAgIDI1NSxcbiAgICAgIDU4LFxuICAgICAgMTEzLFxuICAgICAgNjEsXG4gICAgICAyMTQsXG4gICAgICA0NCxcbiAgICAgIDQ3LFxuICAgICAgNTIsXG4gICAgICAxOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM1RFMzZOUDhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTU4Mzg4MDA6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJaYWludGlvblwiLFxuICAgIFwibGlkXCI6IFwiMTU3ODcwMjk3NDc3MzQwOjMxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pIVnJxMEJFSyt3cExRR0dCSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiczRRc0YwMldJZWVZMWUwQlVOT3V4RUpyWHkrNWk1ZVpySEF1aVg3U0ZGZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJORVp3UllOVWpZQTh6QkhhY2Vab0ZtNWJhTDh4R01mNmkvRlcwMXd0bkM5TVpVRlRNekVCczQxZFI1M3JjZzFXT1hENDN1dnVpcVUvQ0pTVnVQYytBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpS0RGZmxTM2VVU1ovNkhSNUpXUGJOWkljMUNpQUd1dlFZbHExK1V5OHR1a2ozZXVBd2w0L2MwTUI0eGdFSURUZ0F3ZmJTU1h1bDVRbitSZVRXanVBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTU1ODM4ODAwOjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyNjA2NjFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "𓆩 *ZAINTION* 𓆪 🐦‍⬛⚡" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𓆩 *ZAINTION* 𓆪 🐦‍⬛⚡",
  ownername:process.env.OWNER_NAME|| "𓆩 *ZAINTION* 𓆪 🐦‍⬛⚡",


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
