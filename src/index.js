const config = require("./config.js");

const ping = require("net-ping");
const player = require('play-sound')(opts = {player: config.audioPlayer});

const session = ping.createSession();
const target = config.targetHost;
const audio = {
    Alive: "./audio/Alive.mp3",
    Timeout: "./audio/Timeout.mp3",
    Unreachable: "./audio/Unreachable.mp3",
    Error: "./audio/Error.mp3",
};

function play(audioFile) {
    player.play(audioFile, function (err) {
        if (err) console.log(err);
    });
}

function now() {
    let date = new Date();
    return date.getFullYear() + "-"
        + date.getMonth() + "-"
        + date.getDate() + " "
        + date.getHours() + ":"
        + date.getMinutes() + ":"
        + date.getSeconds();
}

setInterval(function () {
    session.pingHost(target, function (error, target) {
        if (error) {
            if (error instanceof ping.RequestTimedOutError) {
                console.log(target + ": Timeout");
                play(audio.Timeout);
            }
            if (error instanceof ping.DestinationUnreachableError) {
                console.log(now() + "  " + target + ": " + error.toString());
                play(audio.Unreachable);
            } else {
                console.log(now() + "  " + target + ": " + error.toString());
                play(audio.Error);
            }
        } else {
            console.log(now() + "  " + target + ": Alive");
            play(audio.Alive);
        }
    });
}, config.timeout);
