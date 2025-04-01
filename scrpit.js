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
        alert("Enter a BloodGroup");
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
        students.push(studentData);
        localStorage.setItem("students", JSON.stringify(students));

        alert("Submitted Successfully");
        document.querySelector("form").reset(); 
    }
}

window.onload = function () {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    let tableBody = document.getElementById("studentDetails");

    students.forEach(student => {
        let row = `<tr>
            <td>${student.name}</td>
            <td>${student.dob}</td>
            <td>${student.age}</td>
            <td>${student.bgrp}</td>
            <td>${student.qualify}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
};
