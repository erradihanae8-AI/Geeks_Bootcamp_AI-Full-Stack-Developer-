
const players = {};


function updateScore(player, isCorrect) {
    if (!players[player]) {
        players[player] = 0;
    }

    if (isCorrect) {
        players[player]++;
    }

    return players[player];
}

// Retrieve the rankings
function getLeaderboard() {
    return Object.entries(players)
        .map(([player, score]) => ({
            player,
            score
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
}

module.exports = {
    updateScore,
    getLeaderboard
};