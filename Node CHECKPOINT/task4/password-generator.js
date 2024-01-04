const generatePassword = require('generate-password');

const generateRandomPassword = (length = 10) => {
  const password = generatePassword.generate({
    length,
    numbers: true,
    symbols: true,
    uppercase: true,
    
  });

  console.log("Generated Password:", password);
};


generateRandomPassword();
