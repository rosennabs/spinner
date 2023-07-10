const specialCharacters = ["|", "/", "-", "\\", "|", "/", "-", "\\"];
let delay = 100;

for (let char of specialCharacters) {
  setTimeout(() => {
    process.stdout.write(`\r${char}     `);
  }, delay);

  delay += 200;
}










