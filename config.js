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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_03_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDMzLFxuICAgICAgICA5NixcbiAgICAgICAgNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MixcbiAgICAgICAgMjM1LFxuICAgICAgICAzNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzLFxuICAgICAgICA3MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxODYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTIsXG4gICAgICAgIDk5LFxuICAgICAgICA3NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDM2LFxuICAgICAgICAwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAwLFxuICAgICAgICA0LFxuICAgICAgICA4MixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNixcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODMsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg2LFxuICAgICAgICA5NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE3LFxuICAgICAgICA2LFxuICAgICAgICA4NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDksXG4gICAgICAgIDkwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxODksXG4gICAgICAgIDUzLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDk2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTksXG4gICAgICAgIDc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDgwLFxuICAgICAgICA2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDczLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk12Q1ZmSkxyY0JIMXRXNzRKMyt3VEF5QzhhaXZ3RlBpTVhIdnkrbDZPUmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxqTzlOSkZQU3hTWE1tS3BFNDB4U0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2ZkODU5MmItYmY4Ni00OWUwLWFjNmMtMWQwMmNlNTI4MDlhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkzLFxuICAgICAgMTE3LFxuICAgICAgNzMsXG4gICAgICAxMDEsXG4gICAgICA0NyxcbiAgICAgIDE0NSxcbiAgICAgIDkwLFxuICAgICAgMTQwLFxuICAgICAgMTgzLFxuICAgICAgMTc1LFxuICAgICAgMTg3LFxuICAgICAgOTMsXG4gICAgICAxNTksXG4gICAgICAyMTEsXG4gICAgICA4NyxcbiAgICAgIDcwLFxuICAgICAgNjEsXG4gICAgICAxNDIsXG4gICAgICAxNDUsXG4gICAgICAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MSxcbiAgICAgIDIwNCxcbiAgICAgIDI4LFxuICAgICAgMTUsXG4gICAgICAxNCxcbiAgICAgIDE0NixcbiAgICAgIDgyLFxuICAgICAgMTI4LFxuICAgICAgMTcsXG4gICAgICAxMjgsXG4gICAgICAyMzMsXG4gICAgICA4MyxcbiAgICAgIDQxLFxuICAgICAgMjIxLFxuICAgICAgNDUsXG4gICAgICAxMjYsXG4gICAgICAxMDAsXG4gICAgICAyMzUsXG4gICAgICA3LFxuICAgICAgODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOFNRR1hCNzJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNTI3NDUwOTY6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFjdGl2ZSBUdlwiLFxuICAgIFwibGlkXCI6IFwiMjc5OTU5NDIzNzI5NzExOjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDNqd1pNQkVKTEZuTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJodHZ3Z0lZU0svZGVJWTg1Qlcwa1pIVE5xSC9mMkVsakVzSWNnTHN4Nm5RPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJQd2lyeVdPTHpoOExTZ0xMOGZTREYyWEVXUlF5RHlEekdTQ21pelB3b3RFRlJYdkcwKzRuUk00NXIvN1RZbk92UjB2UXBiNmpJWmZMSHNzSXhkTUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjYyd0YzRjhLd2ZEN0hGZFVkbGRTSFNhaWIremxaL0ZCekhBT1M2TjF6L3A5dmYxOEJpblpMbG1kSzM2RUc3Q3RQWE1VaEdydEZBMlRVdlIvZlJSeGhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNTI3NDUwOTY6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjI5Mzk4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
