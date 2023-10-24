const spinner = ["|  ", "/  ", "-  ", "\\  "];
let timer = 100;
let spincount = 0;
while (spincount <= 2) {
  for (const item of spinner) {
    setTimeout(() => process.stdout.write(`\r${item}`), timer)
    timer += 200;
  }
  spincount++;
}