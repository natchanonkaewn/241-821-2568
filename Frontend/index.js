function submitData() {
    // 1. ดึงค่าจาก Input ธรรมดา
    const firstname = document.querySelector('input[name="firstname"]').value;
    const lastname = document.querySelector('input[name="lastname"]').value;
    const age = document.querySelector('input[name="age"]').value;
    const description = document.querySelector('textarea[name="description"]').value;

    // 2. ดึงค่าจาก Radio Button (เพศ)
    let gender = 'ไม่ระบุ';
    const genderRadios = document.getElementsByName('gender');
    for (let radio of genderRadios) {
        if (radio.checked) {
            // ดึงข้อความข้างๆ radio button มาเป็นค่า
            gender = radio.parentElement.innerText.trim();
            break;
        }
    }

    // 3. ดึงค่าจาก Checkbox (งานอดิเรก)
    let interests = [];
    const interestCheckboxes = document.getElementsByName('interest');
    for (let checkbox of interestCheckboxes) {
        if (checkbox.checked) {
            interests.push(checkbox.value);
        }
    }

    // 4. ตรวจสอบข้อมูลเบื้องต้น
    if (firstname === "" || lastname === "") {
        alert("กรุณากรอกชื่อและนามสกุล");
        return;
    }

    // 5. แสดงผลลัพธ์ (ในตัวอย่างนี้ใช้ alert แสดงค่า)
    const resultMessage = `
    === ข้อมูลลงทะเบียน ===
    ชื่อ-สกุล: ${firstname} ${lastname}
    อายุ: ${age}
    เพศ: ${gender}
    งานอดิเรก: ${interests.length > 0 ? interests.join(", ") : "-"}
    คำอธิบาย: ${description}
    `;

    alert(resultMessage);
    
    // หรือถ้าต้องการ log ดูใน console
    console.log({
        firstname,
        lastname,
        age,
        gender,
        interests,
        description
    });
}