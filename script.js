// const student = document.getElementById("title")
// const bottons = document.getElementById("btn")
// const students = document.getElementById("appear")

// function fun1() {
//     students.innerHtml = student.value;
// }
// bottons.addEventListener('click', fun1)
function myFunction() {
    var x = document.getElementById("title").value;
    document.getElementById("appear").innerHTML += x;

}