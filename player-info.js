function playerNames(player) {
    const newPlayer = [];
    for (let i = 0; i < player.length; i++) {
        console.log("Inside for loop");
        if (player[i].length >= 6) {
            newPlayer.push(player[i]);
            console.log(player[i]);
        }
    }
    return newPlayer;
}
module.exports = playerNames;