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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f5b8e95f14fa175a1006.jpg" ; // SET LOGO FOR IMAGE 
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_30_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIsXG4gICAgICAgIDIwLFxuICAgICAgICA2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQyLFxuICAgICAgICA4NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDMwLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyOCxcbiAgICAgICAgODcsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDUxLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDg2LFxuICAgICAgICAyOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc3LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICA3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA0LFxuICAgICAgICA5MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxODksXG4gICAgICAgIDIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjksXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImp6UFp3YllLQW9LbXh2Sm9sWXlqcUtkNTNXTjdtdlhTN2FOMGlsNHgvaGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVfd0kzVy1aUkFDSlRuSzQwYXRhR0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmE1NmFlNDctYjk5Ny00NTU3LTg3OTMtYjA4YmYxOWY2NGNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOSxcbiAgICAgIDUsXG4gICAgICAxNjgsXG4gICAgICAxODYsXG4gICAgICAxNDAsXG4gICAgICAxNTksXG4gICAgICAxOCxcbiAgICAgIDIwLFxuICAgICAgMTUwLFxuICAgICAgMTc5LFxuICAgICAgMTA3LFxuICAgICAgMTQsXG4gICAgICA1OSxcbiAgICAgIDE1LFxuICAgICAgMTA4LFxuICAgICAgMyxcbiAgICAgIDk0LFxuICAgICAgNTEsXG4gICAgICAyMDksXG4gICAgICA3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTUsXG4gICAgICAyNDMsXG4gICAgICAyMTksXG4gICAgICA1NyxcbiAgICAgIDMxLFxuICAgICAgNixcbiAgICAgIDE4NSxcbiAgICAgIDExMSxcbiAgICAgIDIwMSxcbiAgICAgIDY3LFxuICAgICAgOTksXG4gICAgICAxMjcsXG4gICAgICAxODQsXG4gICAgICA2MixcbiAgICAgIDIyLFxuICAgICAgMTYwLFxuICAgICAgMTc0LFxuICAgICAgMTEsXG4gICAgICA3MyxcbiAgICAgIDc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTCtRM29jQkVMZlZwTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlb0hwOWsvS243RU9nNWY2R0swQkx0NThOOVlkQmFwejFqODlwZCs5YUZrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjJXdmNKMThadStoSEtWdFAzYUdRNnZpUzZkeUpSbWJpR2l3U25mS2czRGc0MzJLOVFyeDhIRXppdklHNGR0YUlBZjN5QTRkU29vdWRNdVJvUE1sSkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImFoYmVaM0pwejBtZ293b3E4bzJmbVZIRk5MSzNYenNBQzJKbHp3dVpJNDh2TDR4amlyUVd3MVRqZzI2WEtvMXUyM2ZLN1MrSzg2YmlZTVN4QXd4eGpnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0NDc5MTA1Mzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQVJBQiBFWENIQU5HRVwiLFxuICAgIFwibGlkXCI6IFwiMTI5NDg1MDQzMTU1MTQzOjdAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQ0NzkxMDUzOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI2NTQyNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNnelwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ2d6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwib0hVaFN5WXhhbUxmYXpKd1NUVVkrOERFcnZqdXJVOUpDR3FuODExME44QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyODQ2NTc3MjcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDI2NTQzMTI2M1wifSIKfQ=="  // PUT your SESSION_ID 


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
