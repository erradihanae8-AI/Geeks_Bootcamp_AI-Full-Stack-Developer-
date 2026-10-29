const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
const usernames = [];

gameInfo.forEach(game => {
    usernames.push(game.username + "!");
});

console.log(usernames);
const winners = [];

gameInfo.forEach(game => {

    if (game.score > 5) {
        winners.push(game.username);
    }
});

console.log(winners);

let totalScore = 0;

gameInfo.forEach(game => {
    totalScore += game.score;
});

console.log(totalScore);
