const db = require('../config/db')

const getAllUsers = async (params) => {
    const [rows] = await db.query('select * from users')
    return rows
}

module.exports = {getAllUsers}