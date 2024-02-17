const fs = require('fs');

function fetchDiscord(path) {
    const options = {
        method: 'POST',
        headers: {
            authority: 'api.discord.gx.games',
            accept: '*/*',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
            'content-type': 'application/json',
            origin: 'https://www.opera.com',
            referer: 'https://www.opera.com/',
            'sec-ch-ua': '"Opera GX";v="105", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 OPR/105.0.0.0'
        },
        body: `{"partnerUserId":"${require("./generateUUID")()}"}`
    };
    fetch('https://api.discord.gx.games/v1/direct-fulfillment', options)
        .then(response => response.json())
        .then(response => {
            let fullURL = "https://discord.com/billing/partner-promotions/1180231712274387115/"+response.token+"\n";
            fs.appendFile(path, fullURL, (err) => {
                if (err) throw err;
            });
        })
        .catch(err => console.error(err));
}

function generateNitro(number, path='free-nitro-urls.txt') {
    let i = 0
    for (i = 0; i<number; i++) {
        fetchDiscord(path)
    }

    console.log(`Saved ${i} Discord Nitro URLs!`);
}

module.exports = generateNitro