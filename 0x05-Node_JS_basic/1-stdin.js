process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input on stdin
process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  if (input) {
    console.log(`Your name is: ${input}`);
  }

  console.log('This important software is now closing');
  process.exit(0);
});
