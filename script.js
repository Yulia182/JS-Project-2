let userName = prompt("Welcome to GC mini golf! What is your name?");
console.log(`User Name: ${userName}`);

let holes = prompt(`Hi, ${userName}! Would you like to play 3 or 6 holes?`);
holes = parseInt(holes);
console.log(`Number of holes: ${holes}`);

let totalPutts = 0;
for (let i = 1; i <= holes; i++) {
  let putt = prompt(`How many putts for the hole ${i}?`);
  totalPutts += parseInt(putt);
}
console.log(`Total putts: ${totalPutts}`);

if (holes === 3) {
  if (totalPutts < 9) {
    console.log(
      `Great job, ${userName}! Your total par was: -${9 - totalPutts}`
    );
  } else if (totalPutts > 9) {
    console.log(
      `Nice try, ${userName}... Your total par was: +${totalPutts - 9}.`
    );
  } else {
    console.log(`Good game, ${userName}. Your total par was: 0.`);
  }
} else {
  if (totalPutts < 18) {
    console.log(
      `Great job, ${userName}! Your total par was: -${18 - totalPutts}`
    );
  } else if (totalPutts > 18) {
    console.log(
      `Nice try, ${userName}... Your total par was: +${totalPutts - 18}.`
    );
  } else {
    console.log(`Good game, ${userName}. Your total par was: 0.`);
  }
}
