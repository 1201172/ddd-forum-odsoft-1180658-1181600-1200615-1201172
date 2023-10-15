const { exec } = require('child_process');


function runCommand(command, successMessage) {
  const childProcess = exec(command);

  childProcess.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  childProcess.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  childProcess.on('error', (error) => {
    console.error(`Error: ${error.message}`);
  });

  childProcess.on('close', (code) => {
    if (code === 0) {
      console.log(successMessage);
    } else {
      console.error(`Command exited with code ${code}`);
    }
  });
}

// Run the build script using npm install
runCommand('npm install', 'Dependencies installed successfully.');

// Install dependencies using npm run-script build
runCommand('npm run-script build', 'Build script completed successfully.');





