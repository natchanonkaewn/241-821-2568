const bodyParser = require('body-parser')
const express = require('express')
const mysql = require('mysql2/promise')
const app = express()
const cors = require('cors')

const port = 8000

app.use(bodyParser.json())
app.use(cors())

let users = []
let counter = 1
let conn = null

const initDBConnection = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8821
    })
}

app.get('/users',async (req,res) => {
    const results = await conn.query("SELECT * FROM users")
    res.json(results[0])
})

// app.get('/testdb',(req,res) => {
//     mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '1234',
//         database: 'testdb'
//     }).then((conn) => {
//         conn.query('SELECT * FROM users')
//         .then((results) => {
//             res.json(results[0])
//         }).catch((err) => {
//             console.error(err)
//             res.status(500).json({error: 'Database query error'})
//         })
//     })
// })

// app.get('/testdb-new', async (req,res) => {
//     try {
//         const conn = await mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'root',
//         database: 'webdb',
//         port: 8821
//     })
//     const [results] = await conn.query('SELECT * FROM users')
//     res.json(results[0])
//     } catch (err) {
//         console.error(err)
//         res.status(500).json({error: 'Database query error'})
//     }
// })

// //path = GET /test
// app.get('/users',(req,res) => {

//     // let users = {
//     //     name: "Michael",
//     //     age: 25,
//     //     email: "hehe@ku.th"
//     // }
//     res.json(users)
// })

// path = POST /user
app.post('/users',async (req,res) => {
    try {
        let user = req.body
        const results = await conn.query('INSERT INTO users SET ?',user)
        console.log('results:',results)
        res.json({
            message: 'User created successfully',
            data: results[0]
        })
    } catch (error) {
        console.error("Error creating user:",error)
        res.status(500).json({
            message: "Error creating user",
            error: error.message
        })
    }
})

app.get('/users/:id',async (req,res) => {
    try {
        let id = req.params.id
        const results = await conn.query('SELECT * FROM users WHERE id = ?',id)
        if (results[0].length == 0) {
            throw { statusCode: 404,message: 'User not found'}
        }
        res.json(results[0][0])
    }
    catch (error) {
        console.error("Error fetching user:",error.message)
        let statusCode = error.statusCode || 500
        res.status(statusCode).json({
            message: "Error fetching user",
            error: error.message
        })
    }
})

//PUT /users/:id สำหรับแก้ไขข้อมูล user ที่มี id ตรงกับที่ส่งมา
app.put('/users/:id',async (req,res) => {
    try {
        let id = req.params.id
        let updatedUser = req.body
        const results = await conn.query('UPDATE users SET ? WHERE id = ?',[updatedUser,id])
        if (results[0].affectedRows == 0) {
            throw {statusCode: 404,message: 'User not found'}
        }
        res.json({
            message: "User updated successfully",
            data: updatedUser
        })
    } catch (error) {
        console.error("Error updating user:",error.message)
        let statusCode = error.statusCode || 500
        res.status(statusCode).json({
            message: "Error updating user",
            error: error.message
        })
    }
})

// DELETE /users/:id สำหรับลบ user ที่มี id ตรงกับที่ส่งมา
app.delete('/users/:id',async (req,res) => {
    try {
        let id = req.params.id
        const results = await conn.query('DELETE FROM users WHERE id = ?',id)
        if (results[0].affectedRows == 0) {
            throw {statusCode: 404,message: "User not found"}
        }
        res.json({
            message: "User deleted successfully"
        })
    } catch (error) {
        console.error('Error deleting user:',error.message)
        let statusCode = error.statusCode || 500
        res.status(statusCode).json({
            message: "Error deleting user",
            error: error.message
        })
    }
})

// // path = PUT /user/:id
// app.patch('/user/:id',(req,res) => {
//     let id = req.params.id
//     let updatedUser = req.body
//     // user จาก id ที่ส่งมา
//     let selectedIndex = users.findIndex(user => user.id == id)

//     // อัพเดตข้อมูล user
//     if (updatedUser.name) {
//         users[selectedIndex].name = updatedUser.name
//     }
//     if (updatedUser.email) {
//         users[selectedIndex].email = updatedUser.email
//     }

//     // เอาข้อมูลที่ update ส่ง response กลับไป
//     res.json({
//         message: 'User updated succesfully',
//         data: {
//             user: updatedUser,
//             indexUpdated: selectedIndex
//         }
//     })
// })

// // path = DELETE /user/:id
// app.delete('/user/:id',(req,res) => {
//     let id = req.params.id
//     // หา index ของ user ที่ต้องการลบจาก id ที่ส่งมา
//     let selectedIndex = users.findIndex(user => user.id == id)
//     // ลบ user จาก array โดยใช้ delete
//     users.splice(selectedIndex, 1)

//     res.json({
//         message: 'User updated succesfully',
//         data: {
//             user: updatedUser,
//             indexUpdated: selectedIndex
//         }
//     })
// })

app.listen(port, async () => {
    await initDBConnection()
    console.log(`Server is running on port ${port}`)
})
