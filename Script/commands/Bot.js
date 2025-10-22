module.exports.config = {
  name: "bot",
  version: "1.0.0",
  hasPermission: 0,
  credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦",
  description: "Random fun reply when someone says Bot",
  commandCategory: "Fun",
  usages: "[Bot]",
  cooldowns: 2,
};

const botReplies = [
  "😒😒 عاوز اي كل شويه بوت بوت انت مش بتزهق",
 "🥺 قلب البوت وروح البوت من جوا",
 "😒 مخلاص يبني هجبلك حودا يعورك",
 "🙈 روح البوت من جوا",
 "🔨😼 هضربك ب الشكوش على دماغك لو مسكتش",
 "🙂 روح العب بعيد يحبيبي"
];

module.exports.run = async function ({ api, event }) {
  const reply = botReplies[Math.floor(Math.random() * botReplies.length)];
  api.sendMessage(reply, event.threadID, event.messageID);
};
