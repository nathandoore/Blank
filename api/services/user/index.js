const bcrypt = require("bcrypt");

function salting(password){
    const saltRounds = 10;
  
    return bcrypt.genSalt(saltRounds, function (err, salt) {
      return bcrypt.hash(password, salt, function (err, hash) {
        return hash;
      });
    });
}

module.exports = salting();