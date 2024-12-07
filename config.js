//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348083763056";
global.owner = process.env.OWNER_NUMBER || "234808373056";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0o3Y1ppSVRSV25nc1ZUdGsvL3VEVnJUK25qYStFRjdvNEdIaDBtR0NsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialJWTFZBeGVsUks0YkJXcSs1TWtQUytxeWlsanpkc21OaTBMOVdkZkhsRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRFU4RnkrbUlLVE1YQlV0a3J6a1dMcTBqS0F1dVhKL0VaK1N2NHpuNkdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtWXNLTUErRFUrY05xNkdVNyt5RkhqVDhxMmdPVGlKMlFuZW84cW8rT2lFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNKSHRFYWVKQkxsOWQ3NWtuL3dpcHJ6c1g4M1RTZkxxYUJJUWd3RFYvRkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InY2bGU3bnR5MzgyRVdhWFVmM0ttdkFmdEh5Q1UzblZlOWU3RkJvUVBraGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0FOL1Rud3psdkE1bFMvaC9RMXNiVzBDa2ZVTTVhQU9QT0tRRUtyMDgzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZndROTBWdE1DR090TkR0dFFkbXc4TlVuUllja0FQQUFRODBQaEhkbThDMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZROE1IeVlkQzhJS1hEUTQyVEJ4L2tkdytaUjNrN21veVcwN09KVXVDay9SdWhTcEFPK2dXN1h4cFpEeHJyeGswNmNXZXhCV3pRaWZSQlpCNlg3VEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTUsImFkdlNlY3JldEtleSI6InV0ME1oUC9POVBDTjc4SHRSNVg5YktNZzJ3UmllT2FXSTROTFhpR2RGSEU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImFQRnhucmtzVDhxSWxvWXU5cUhvbHciLCJwaG9uZUlkIjoiNWI1MTY0OTUtNzA2Mi00ZWI3LWI2NTAtMGE2NDYwOWMyMmMxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdtNXg1SXRQb05WMG1QeXNnaHYwN1VydnRPRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1ZHgyVFFSbk0weEkwMmUyMUcyNWlBR1dkOVU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQllUUEg1WUQiLCJtZSI6eyJpZCI6IjIzNDgwODM3NjMwNTY6NDdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05mdDZlQUdFT2l6MExvR0dBNGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjJKblVyVERwVFhHK2VPcDVMcHIzWXZyTHc1YW5DOTRLMkk1UEJycDFJWGM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ims0QkJ4Q1ZBRHZua0Vyd3NQbFpQbXdDV21TZXdZY29XUFEwbExrSnRlTHJCcHBlZUFLRlVFMUREeXNEZDlJaFlEdE9PVUNEeFM1dUM3ZUd2Y01ta0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBVmo3YlZKdks2QU1XdE1qRmlVQStzZ2dNN2hiU0hwUmZkRHdCdmZmTVJyK0F4d1VIVWhnN1BadmZPNk5DeE5ZMXZXbnFXT1pIa29sMXVST2JET29EZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwODM3NjMwNTY6NDdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZGlaMUswdzZVMXh2bmpxZVM2YTkyTDZ5OE9XcHd2ZUN0aU9Ud2E2ZFNGMyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzU2NDkxOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEcksifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "NIKKA-V3",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
