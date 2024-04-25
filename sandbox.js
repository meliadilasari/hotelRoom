const bcrypt = require('bcryptjs');
let salt = bcrypt.genSaltSync(10);
      let hash = bcrypt.hashSync("meliaa", salt)



      console.log(hash)

      console.log(bcrypt.compareSync("meliaa", hash))
      console.log(bcrypt.compareSync("not_bacon", hash));
      bcrypt.compareSync("meliaa", hash); // true
      bcrypt.compareSync("not_bacon", hash);