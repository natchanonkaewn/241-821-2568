const bodyParser = require('body-parser');
const express = require('express')
const app = express();

const port = 8000

app.use(bodyParser.json())
let users = []
let counter = 1

//path = GET /test
app.get('/users',(req,res) => {

    // let users = {
    //     name: "Michael",
    //     age: 25,
    //     email: "hehe@ku.th"
    // }
    res.json(users)
})

// path = POST /user
app.post('/user',(req,res) => {
    let user = req.body
    user.id = counter
    counter++
    users,push(user)
    res.json({
        message: 'User added successfully',
        user: user })
    })

// path = PUT /user/:id
app.patch('/user/:id',(req,res) => {
    let id = req.params.id
    let updatedUser = req.body
    // user จาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id)

    // อัพเดตข้อมูล user
    if (updatedUser.name) {
        users[selectedIndex].name = updatedUser.name
    }
    if (updatedUser.email) {
        users[selectedIndex].email = updatedUser.email
    }

    // เอาข้อมูลที่ update ส่ง response กลับไป
    res.json({
        message: 'User updated succesfully',
        data: {
            user: updatedUser,
            indexUpdated: selectedIndex
        }
    })
})

// path = DELETE /user/:id
app.delete('/user/:id',(req,res) => {
    let id = req.params.id
    // หา index ของ user ที่ต้องการลบจาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id)
    // ลบ user จาก array โดยใช้ delete
    users.splice(selectedIndex, 1)

    res.json({
        message: 'User updated succesfully',
        data: {
            user: updatedUser,
            indexUpdated: selectedIndex
        }
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
