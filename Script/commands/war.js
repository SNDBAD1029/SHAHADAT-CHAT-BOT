module.exports.config = {
 name: "war",
 version: "1.0.0",
 hasPermssion: 2,
 credits: "Shahadat SAHU",
 description: "গালি টু গালি",
 commandCategory: "group",
 usages: "prefix+war",
 cooldowns: 2,
 dependencies: {
 "fs-extra": "",
 "axios": ""
 }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
 let name = event.mentions[mention];
 var arraytag = [];
 arraytag.push({id: mention});
 
 var a = function (a) { api.sendMessage(a, event.threadID); }
 
 a("اهلا بيك ف الخراب");
 setTimeout(() => {a({body: "هههههههههههههههههههههههههههههههههههههه" })}, 3000);
  setTimeout(() => {a({body: "طبعا عارف انا هعمل فيك اي يابن المتناجى" })}, 4000);
  setTimeout(() => {a({body: "ههههههههههههههههههههههههههههههههههههههه" })}, 5000);
  setTimeout(() => {a({body: "انا هخيلك تندم على اليوم ال شوفت فيه حسابي يابن العرض" })}, 6000);
  setTimeout(() => {a({body: "تعاله يابن المتناجى دانا هخلي حياتك سواد شبه كص امك " })}, 7000);
  setTimeout(() => {a({body: "انت ياض يابن المتناجى قولي انت بتتناق فين دلوقت يابن العرض" })}, 8000);
  setTimeout(() => {a({body: "ابوك دا راجل معرض شبهك يابن العرض يخولنجي" })}, 9000);
  setTimeout(() => {a({body: "هههههههههههههههههههههههههههههههههههههه" })}, 10000);
  setTimeout(() => {a({body: "انت ياكصمك" })}, 3000);
  setTimeout(() => {a({body: "هههههههههههههههههههههههههههههههههههههه" })}, 11000);
  setTimeout(() => {a({body: "انت ياض يابن المركوب" })}, 12000);
  setTimeout(() => {a({body: "هههههههههههههههههههههههههههههههههههههه" })}, 13000);
  setTimeout(() => {a({body: "انا هفجر طيظك يابن المتناجه" })}, 14000);
 




}
