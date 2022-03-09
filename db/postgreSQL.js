const Pool = require('pg').Pool

const connectionString = `postgresql://postgres:hushnud.22@localhost:5432/del`

const pool = new Pool({
  connectionString: connectionString,
})

module.exports = pool
