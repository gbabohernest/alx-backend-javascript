process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input on stdin
process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input) {
    // const userInput = input.toString().trim();
    process.stdout.write(`Your name is: ${input}`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
