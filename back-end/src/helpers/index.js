// const validatePwd = (password) => {
//   if (!password || password.length < 6) return false;
//   return true;
// };

// const validateName = (name) => {
//   if (!name || name.length < 12) return false;
//   return true;
// };

// const validateEmail = (email) => {
//   const validRegex = new RegExp(
//     /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
//   );
//   const validEmail = validRegex.test(email);

//   if (!email || !validEmail) return false;
//   return true;
// };

const jwtKey = require('fs')
  .readFileSync(`${__dirname}/../../jwt.evaluation.key`, { encoding: 'utf-8' })
  .trim();

module.exports = {
  jwtKey,
  // validatePwd,
  // validateName,
  // validateEmail,
};
