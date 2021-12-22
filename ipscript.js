/* Ip check with Telgram Message */


const ipUrl = "https://ip4.seeip.org/json";
const telegramToken = "" // Telegram Bot Token ;
const telegramChatId = "" // Chat id, get it from https://api.telegram.org/bot<TOKEN>/getUpdates;
const currentIp = "" // Current Ipv4;

function Get() {
    const https = require('https')
        let req = https.get(ipUrl, function (res) {
        let data = '';
        res.on('data', function (stream) {
            data += stream;
        });
        res.on('end', function () {
            test = JSON.parse(data);
            jsonContent = JSON.stringify(test.ip).replace(/"/g, "");
            console.log(jsonContent);
            console.log(currentIp);

            if (jsonContent === currentIp) {
                console.log("true");
            }
            else {
                console.log("false");
                https.get("https://api.telegram.org/bot" + telegramToken + "/sendMessage?chat_id=" + telegramChatId + "&text=IP changed to: " + jsonContent);
            }
            res.off;
        });
    });
}

Get();
