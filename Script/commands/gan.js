const fs = require("fs");
const request = require("request");

let lastPlayed = -1;

module.exports.config = {
 name: "gan",
 version: "1.0.0",
 hasPermission: 0,
 credits: "Shahadat Islam",
 description: "Play random song with prefix command",
 commandCategory: "music",
 usages: "[prefix]gan",
 cooldowns: 5
};

const songLinks = [
 "https://drive.google.com/uc?export=download&id=1AgP2rWOS_TlPHF42ZbOc2rcuT85JfFFl",
 "https://drive.google.com/uc?export=download&id=1gYPLJ3vtpmM3DCfjICnIVHXfPcRu-Zgm",
 "https://drive.google.com/uc?export=download&id=1eaVdDZh5rhD5C995IDnNIsSjQFid_Gze",
 "https://drive.google.com/uc?export=download&id=1kBi0fdOhyLHNgjePB-Ktb7bze6H2ktJD",
 "https://drive.google.com/uc?export=download&id=1Zh8cvkjuTaQ7RoyB4_uDAeoxY045lM2U",
 "https://drive.google.com/uc?export=download&id=1r6bxkjQu8WzZd8pa01bStkJJJM5a_Q2n",
 "https://drive.google.com/uc?export=download&id=1xZd8oUSbhQMCWQ3xkuZ-HH-xcoun7Z9h",
 "https://drive.google.com/uc?export=download&id=1e4qrIOQQpCWs_nilCo35Ojs_MTX3Pemj",
 "https://drive.google.com/uc?export=download&id=1VoQOH-J74gHb3bE3IOcsfNLlLb7dQ2B4",
 "https://drive.google.com/uc?export=download&id=1n_umxerUpAAUB9QaX8uK8KKcvztX24bP",
 "https://drive.google.com/uc?export=download&id=1J6VHjIMAwubXF-7MDlpTtVtVILyKedW5",
 "https://drive.google.com/uc?export=download&id=1CA7ilFr_WGJwyvobrq4NXXcu6eivQi3U",
 "https://drive.google.com/uc?export=download&id=1aRpoXu1QxfNdoQckLpr_6uO-RHS1KZNr",
 "https://drive.google.com/uc?export=download&id=1sFc5YfoufZvB0UGySj23B-w25J9o84b4"
];

module.exports.run = async function ({ api, event, args }) {
 const { threadID, messageID } = event;

 if (songLinks.length === 0) {
 return api.sendMessage("❌ No songs available in the list!", threadID, messageID);
 }

 // Set reaction to indicate processing
 api.setMessageReaction("⌛", messageID, () => {}, true);

 // Select a random song (different from last played)
 let index;
 do {
 index = Math.floor(Math.random() * songLinks.length);
 } while (index === lastPlayed && songLinks.length > 1);

 lastPlayed = index;
 const url = songLinks[index];
 const filePath = `${__dirname}/cache/mysong_${index}.mp3`;

 // Download and send the song
 request(encodeURI(url))
 .pipe(fs.createWriteStream(filePath))
 .on("close", () => {
 api.sendMessage({
 body: "🎶 Here's your requested song:",
 attachment: fs.createReadStream(filePath)
 }, threadID, () => {
 // Delete the file after sending
 try {
 fs.unlinkSync(filePath);
 } catch (err) {
 console.error("Error deleting file:", err);
 }
 }, messageID);
 })
 .on("error", (err) => {
 console.error("Download error:", err);
 api.sendMessage("❌ Failed to download the song. Please try again later.", threadID, messageID);
 });
};
