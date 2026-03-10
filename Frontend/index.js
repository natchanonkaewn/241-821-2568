const validateData = (userData) => {
    let errors = []
    if (!userData.firstname) {
        errors.push("กรุณากรอกชื่อ")
    }
    if (!userData.lastname) {
        errors.push("กรุณากรอกนามสกุล")
    }
    if (!userData.age) {
        errors.push("กรุณากรอกอายุ")
    }
    if (!userData.gender) {
        errors.push("กรุณาเลือกเพศ")
    }
    if (!userData.interests) {
        errors.push("กรุณาเลือกความสนใจอย่างน้อย 1 อย่าง")
    }
    if (!userData.description) {
        errors.push("กรุณากรอกคำอธิบายเกี่ยวกับตัวคุณ")
    }
    return errors
}

const submitData = async () => {
    let firstNameDOM = document.querySelector('input[name=firstname]')
    let lastNameDOM = document.querySelector('input[name=lastname]')
    let ageDOM = document.querySelector('input[name=age]')
    let genderDOM = document.querySelector('input[name=gender]:checked') || {}
    let interestDOMs = document.querySelectorAll('input[name=interests]:checked') || {}
    let descriptionDOM = document.querySelector('textarea[name=description]')

    let messageDOM = document.getElementById('message')

    // let userData

    try {
        let interest = ''
        for (let i = 0; i < interestDOMs.length; i++) {
            interest += interestDOMs[i].value
            if (i != interestDOMs.length - 1) {
                interest += ','
            }
        }

        let userData = {
            firstname: firstNameDOM.value,
            lastname: lastNameDOM.value,
            age: ageDOM.value,
            gender: genderDOM.value,
            description: descriptionDOM.value,
            interests: interest
        }

        const errors = validateData(userData)
        if (errors.length > 0) { // มี error > 0
            throw {
                message: "กรอกข้อมูลไม่ครบถ้วน",
                errors: errors
            }
        }

        const response = await axios.post('http://localhost:8000/users',userData)
        console.log("response",response.data)
        messageDOM.innerText = "บันทึกข้อมูลสำเร็จ"
        messageDOM.className = 'message success'

    } 
    catch (error) {
        console.log("error message",error.message)
        console.log("error",error.errors)
        
        if (error.response) {
            console.log("Error response:",error.response.data.message)
            error.message = error.response.data.message
            error.errors = error.response.data.errors
        }

        let htmlData = '<div>'
        htmlData += `<div>${error.message}</div>`
        htmlData += '<ul>'

        for (let i = 0; i < error.errors.length; i++) {
            htmlData += `<li>${error.errors[i]}</li>`
        }

        htmlData += '</ul>'
        htmlData += '</div>'

        messageDOM.innerHTML = htmlData
        messageDOM.className = 'message danger'
    }

    // console.log('submitData',userData)
    
}

// function submitData() {
//     // 1. ดึงค่าจาก Input ธรรมดา
//     const firstname = document.querySelector('input[name="firstname"]').value;
//     const lastname = document.querySelector('input[name="lastname"]').value;
//     const age = document.querySelector('input[name="age"]').value;
//     const description = document.querySelector('textarea[name="description"]').value;

//     // 2. ดึงค่าจาก Radio Button (เพศ)
//     let gender = 'ไม่ระบุ';
//     const genderRadios = document.getElementsByName('gender');
//     for (let radio of genderRadios) {
//         if (radio.checked) {
//             // ดึงข้อความข้างๆ radio button มาเป็นค่า
//             gender = radio.parentElement.innerText.trim();
//             break;
//         }
//     }

//     // 3. ดึงค่าจาก Checkbox (งานอดิเรก)
//     let interests = [];
//     const interestCheckboxes = document.getElementsByName('interest');
//     for (let checkbox of interestCheckboxes) {
//         if (checkbox.checked) {
//             interests.push(checkbox.value);
//         }
//     }

//     // 4. ตรวจสอบข้อมูลเบื้องต้น
//     if (firstname === "" || lastname === "") {
//         alert("กรุณากรอกชื่อและนามสกุล");
//         return;
//     }

//     // 5. แสดงผลลัพธ์ (ในตัวอย่างนี้ใช้ alert แสดงค่า)
//     const resultMessage = `
//     === ข้อมูลลงทะเบียน ===
//     ชื่อ-สกุล: ${firstname} ${lastname}
//     อายุ: ${age}
//     เพศ: ${gender}
//     งานอดิเรก: ${interests.length > 0 ? interests.join(", ") : "-"}
//     คำอธิบาย: ${description}
//     `;

//     alert(resultMessage);
    
//     // หรือถ้าต้องการ log ดูใน console
//     console.log({
//         firstname,
//         lastname,
//         age,
//         gender,
//         interests,
//         description
//     });
// }