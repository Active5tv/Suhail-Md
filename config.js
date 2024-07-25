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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_04_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAyLFxuICAgICAgICA3NixcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDcxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM2LFxuICAgICAgICA0NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxLFxuICAgICAgICAwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAzNixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMixcbiAgICAgICAgMTA1LFxuICAgICAgICA1MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDUyLFxuICAgICAgICA3NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxODcsXG4gICAgICAgIDk2LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAzMCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICA1NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQxLFxuICAgICAgICA4NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5NixcbiAgICAgICAgODIsXG4gICAgICAgIDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMixcbiAgICAgICAgNzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5LFxuICAgICAgICA3LFxuICAgICAgICAyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjUzM3N4ZEY4WDI3czljQ0hXdjhzbWVaanhUN1MzSFRFU0grVFhIYmY3aE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkkwd3gxWHd6UnFDMUl6RmJhZmVPRlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmQyZjZlYWItMDMyOS00ODY0LWFjNjktYmI1ZTMzODM3MTYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM0LFxuICAgICAgMjAzLFxuICAgICAgMjMsXG4gICAgICA4OSxcbiAgICAgIDYsXG4gICAgICAzNyxcbiAgICAgIDEzMSxcbiAgICAgIDEyLFxuICAgICAgMTkxLFxuICAgICAgNjgsXG4gICAgICAyNSxcbiAgICAgIDIwNSxcbiAgICAgIDE5LFxuICAgICAgMSxcbiAgICAgIDU2LFxuICAgICAgMjE5LFxuICAgICAgNjIsXG4gICAgICAyMzEsXG4gICAgICAxLFxuICAgICAgMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk2LFxuICAgICAgMTIwLFxuICAgICAgNTQsXG4gICAgICAyMjYsXG4gICAgICAxMDgsXG4gICAgICAxMjcsXG4gICAgICAxNTQsXG4gICAgICAxNDUsXG4gICAgICAxNTAsXG4gICAgICA4NSxcbiAgICAgIDgwLFxuICAgICAgNjUsXG4gICAgICA4NyxcbiAgICAgIDUzLFxuICAgICAgMTUzLFxuICAgICAgMTQ2LFxuICAgICAgMTkzLFxuICAgICAgMjIyLFxuICAgICAgNzksXG4gICAgICAxNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTTJZWURQTlpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNTI3NDUwOTY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFjdGl2ZSBUdlwiLFxuICAgIFwibGlkXCI6IFwiMjc5OTU5NDIzNzI5NzExOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHZqd1pNQkVKV25pclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJodHZ3Z0lZU0svZGVJWTg1Qlcwa1pIVE5xSC9mMkVsakVzSWNnTHN4Nm5RPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIldabHM2emI3R3FCRHJtbjhUb21aSDBzOVBvY1luakZ5aUxOT2tlWWp0MS9NLy93d2lBaTViN3JDcmN1cjhWdUpyM3RnMnRIMFExLzJQSnl1ZGlmWERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImh0TjNXT2xENm1qcmI5U2haVHloTmNlWFJLZXNSQlJiK01zS0xJQSttTExaQ1pYS056Nlo2TFBoOGpKTUNuREx3NFkzN3lWVndjY3FQajAwY2V2R0R3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNTI3NDUwOTY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxOTMwNjU5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
