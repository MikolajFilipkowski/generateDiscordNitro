const chars = "abcdefghijklmnopqrstuvwxyz0123456789"

function generate() {
    let uuid = ""
    for (let i = 0; i < 64; i++) {
        uuid+=chars[Math.floor(Math.random()*chars.length)];
    }

    return uuid
}

module.exports = generate