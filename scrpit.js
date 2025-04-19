function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let dob = document.getElementById("dob").value.trim();
    let age = document.getElementById("age").value.trim();
    let bgrp = document.getElementById("bgrp").value.trim();
    let qualify = document.getElementById("qualify").value.trim();

    if (name === "") {
        alert("Enter a name");
    } else if (dob === "") {
        alert("Enter a dob");
    } else if (age === "") {
        alert("Enter an age");
    } else if (bgrp === "") {
        alert("Enter a Blood Group");
    } else if (qualify === "") {
        alert("Enter a Qualification");
    } else {
        let studentData = {
            name: name,
            dob: dob,
            age: age,
            bgrp: bgrp,
            qualify: qualify
        };

        let students = JSON.parse(localStorage.getItem("students")) || [];
        let editIndex = localStorage.getItem("editIndex");

        if (editIndex !== null && editIndex !== "null") {
            students[editIndex] = studentData;
            localStorage.removeItem("editIndex");
            localStorage.removeItem("editStudent");
        } else {
            students.push(studentData);
        }

        localStorage.setItem("students", JSON.stringify(students));
        alert(editIndex !== null ? "Updated Successfully" : "Submitted Successfully");
        document.querySelector("form").reset();
        window.location.href = "index1.html";
    }
}

window.onload = function () {
    let editIndex = localStorage.getItem("editIndex");
    let student = JSON.parse(localStorage.getItem("editStudent"));

    if (editIndex !== null && student) {
        document.getElementById("name").value = student.name;
        document.getElementById("dob").value = student.dob;
        document.getElementById("age").value = student.age;
        document.getElementById("bgrp").value = student.bgrp;
        document.getElementById("qualify").value = student.qualify;
        const submitBtn = document.getElementById("submit");
        submitBtn.innerText = "Update";
    }
}

function editStudent(index) {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    let student = students[index];

    localStorage.setItem("editIndex", index);
    localStorage.setItem("editStudent", JSON.stringify(student));
    window.location.href = "index.html";
}

function deleteStudent(index) {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    window.location.reload();
}
