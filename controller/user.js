// require("dotenv").config()

const mysql = require('mysql2/promise')
const db = require('../config/db.config')

console.log(db)

const userProfile = async (req, res, next) => {
  try{

    // console.log(DB_DATABASE)
    // const conn = await mysql.createConnection({
    //   host: 'localhost',
    //   user: 'root',
    //   password: '',
    //   database: 'BASIC_NODEJS'
    // });
    const conn = await (await mysql.createConnection(db))

    const sql =`select * from users`;

    const [queryResult] = await conn.execute(sql);
    conn.end();

    res.status(200).json({
      data: queryResult
    })
  }catch(err){
    res.json({
      success: false, message:err.message
    })
  }
}

exports.userProfile = userProfile;

// const mysql = require('mysql2/promise')
// const db = require('../config/db.config')

const createUser = async (req, res, next) => {
  try {
    const { id, name, email } = req.body;

    const conn = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'BASIC_NODEJS'
    });

    const sql = `INSERT INTO users (id, name, email) VALUES (?, ?, ?)`;
    const values = [id,name, email];

    const [result] = await conn.execute(sql, values);
    conn.end();

    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result
    })
  } catch (err) {
    res.json({
      success: false, message: err.message
    })
  }
}

exports.createUser = createUser;

const deleteUser = async (req, res, next) => {
  try {
    // const { id } = req.params;
    const { id } = req.body;

    const conn = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'BASIC_NODEJS'
    });

    const sql = `DELETE FROM users WHERE id = ?`;
    const values = [id];

    const [result] = await conn.execute(sql, values);
    conn.end();

    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      data: result
    })
  } catch (err) {
    res.json({
      success: false, message: err.message
    })
  }
}

exports.deleteUser = deleteUser;

const updateUser = async (req, res, next) => {
  try{
      const { id, name, email } = req.body;

    const conn = await (await mysql.createConnection(db))

    const sql = `UPDATE users SET name=?, email=? WHERE id=?`;
    const values = [name, email, id]

    const [result] = await conn.execute(sql, values);
    conn.end();

    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: result
    })

  }catch(err) {
    res.json({
      success: false, message: err.message
    })
  }
}

exports.updateUser = updateUser;

