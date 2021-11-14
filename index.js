const colors = require("colors");

const colorType = { GREEN: 0, YELLOW: 1, RED: 2 };

let currentColor = colorType.GREEN;
const leftRest = process.argv[2];
const rightRest = process.argv[3];
let noPrimeNumber = true;

if (isNaN(leftRest) || isNaN(rightRest)) {
  console.log("Параметры, которые вы ввели неверные.".red);
  return;
}

const isPrimeNumber = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return true;
};
const changeColor = () => {
  currentColor++;
  if (currentColor > colorType.RED) currentColor = colorType.GREEN;
};

const colorPrint = (num) => {
  if (noPrimeNumber) noPrimeNumber = false;
  switch (currentColor) {
    case colorType.RED:
      console.log(`${num}`.red);
      break;
    case colorType.GREEN:
      console.log(`${num}`.green);
      break;
    case colorType.YELLOW:
      console.log(`${num}`.yellow);
      break;
  }
  changeColor();
};

for (let i = leftRest; i <= rightRest; i++) {
  if (isPrimeNumber(i)) colorPrint(i);
}
if (noPrimeNumber)
  console.log(
    `В указанном диапазоне нет простых чисел [${leftRest},${rightRest}]`.red
  );
