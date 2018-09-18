const { Pool } = require ('pg');
const connectionUrl = "postgres://ibnjwjnapcjvcr:1d41a1aaa840057cc68cdbd23f0185da6f9da8c4d21ff24a3dfb5cbdcb4dd1fb@ec2-54-83-4-76.compute-1.amazonaws.com:5432/dlhmluld3r1p9";

const pool = new Pool({
    connectionString : connectionUrl,
    ssl: true,
});

module.exports = this.pool;