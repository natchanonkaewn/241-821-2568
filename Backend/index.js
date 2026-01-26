//import http module เพื่อสร้าง server
const http = require("http")
const host = "localhost"
const port = 8000;

//กำหนดค่าเริ่มต้นของ server เมื่อเปิดใช้งานเว็ปผ่านบราวเซอร์ที่ localhost:8000
const requestListener = function(req,res) {
    res.writeHead(200)
    res.end("My First Server!")
}

//run server
const server = http.createServer(requestListener)
server.listen(port,host,() => {
    console.log(`Server is running at http://${host}:${port}`)
})