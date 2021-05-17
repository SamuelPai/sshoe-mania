let mysql = require("mysql");
let pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "SamPai159$",
    database: "sshoe_mania"
});

module.exports.pool = pool;