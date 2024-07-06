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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_25_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA1NixcbiAgICAgICAgMjMwLFxuICAgICAgICA4NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA1LFxuICAgICAgICA3NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDkxLFxuICAgICAgICAwLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgODMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDkzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAxLFxuICAgICAgICA3MixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI4LFxuICAgICAgICA2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDk5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDI4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDgxLFxuICAgICAgICA2NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDM0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInByL3FmeURpUTRodjRGSFppUHlOT0FOb2dxc3pRbjBmTFBIVjh5OGhRT1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE2MDQ2ODE3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FGQTQ5OEVCNEY5OUQxRTQ2MTdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMjY1MTQ4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlVFeWdqSnJqVEw2bEkxaDRfYmQ2MkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjE4ODkwMjgtMWNiOS00ZGI2LTkyMzYtYWQyMGI5MzI4ZDZlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOSxcbiAgICAgIDE2NSxcbiAgICAgIDIwMCxcbiAgICAgIDI0NCxcbiAgICAgIDI0NixcbiAgICAgIDM2LFxuICAgICAgMjM2LFxuICAgICAgMjMxLFxuICAgICAgMjA5LFxuICAgICAgMjAwLFxuICAgICAgMjA3LFxuICAgICAgMjUsXG4gICAgICA3NSxcbiAgICAgIDI0MCxcbiAgICAgIDE2MSxcbiAgICAgIDU4LFxuICAgICAgMTcsXG4gICAgICAxMTYsXG4gICAgICAxMjEsXG4gICAgICA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzgsXG4gICAgICAxOTcsXG4gICAgICAxMTEsXG4gICAgICAxMzUsXG4gICAgICAyNDMsXG4gICAgICAxOTMsXG4gICAgICAwLFxuICAgICAgMjUzLFxuICAgICAgMyxcbiAgICAgIDE2MyxcbiAgICAgIDExMCxcbiAgICAgIDI2LFxuICAgICAgODMsXG4gICAgICAxNjAsXG4gICAgICAxMzUsXG4gICAgICAyMDgsXG4gICAgICAzMixcbiAgICAgIDE2OCxcbiAgICAgIDE2NCxcbiAgICAgIDg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHExMzRjS0VMSFRwTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPUnJDSG16RUM1MmVmNkIyMkF5Y3hPS0hrdGdLbTZvdlZBckozM2JYR0g4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlpmZ3BsdXVaTzI3OXI4azlhdVorSWVkSUdncVU1a2VsYU1uZEhWVzd1M0hpRnN6Zzgxdm1XdFVxVjlGMTRNNTVoUndNV29ldDRMZDNaNFRBMDlkU0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9FclpuSTdSOEJWa0FyVW83SlBwNXIwSVdBQ2FuT1JWNU1ZRXRTNzN0a09UU3NlZmdDZ21TQ1Nzc0hIam5XaC94RGJNVzg2a3BleGd3YXJxYzlVd0NBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2MDQ2ODE3MzoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjk0MTk4MDgxMDA0MDM6MjNAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTYwNDY4MTczOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI2NTE0MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1BalwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTUFqLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVUtMVklSQktLRmE2ellLdEVIUjBkdHFDQnIyOE13cUpTeU5kUXZ0aGJoVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNzAwNTk3OTQ2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyNjUxNDYxMThcIn0iCn0="  // PUT your SESSION_ID 


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
