const BASE_URL = 'http://localhost:8000'

// 1. load user ทั้งหมดจาก api /users
window.onload = async () => {
    await loadData()
}

const loadData = async () => {
    const response = await axios.get(`${BASE_URL}/users`)
    console.log(response.data)

   
    const userDOM = document.getElementById('user')
    let htmlData = '<div>'
    // 2. นำข้อมูล user ที่ได้มาแสดงในหน้าเว็ป
    for (let i = 0; i < response.data.length; i++) {
        let user = response.data[i]
        htmlData += `<div>
        ${user.id} ${user.firstname} ${user.lastname}
        <button>Edit</button>
        <button class='delete' data-id='${user.id}'>Delete</button>
        
        </div>`
    }
    htmlData += '</div>'
    userDOM.innerHTML = htmlData

    const deleteDOMs = document.getElementsByClassName('delete')
    for (let i = 0; i < deleteDOMs.length; i++) {
        deleteDOMs[i].addEventListener('click',async(event) => {
            const id = event.target.dataset.id
            try {
                await axios.delete(`${BASE_URL}/users/${id}`)
                loadData() // recursive function เรียก function ตัวเอง
            } catch (error) {
                console.error(error)
            }
        })
    }
}