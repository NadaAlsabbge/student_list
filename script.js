function myFunction() {
    var x = document.getElementById("title").value;
    document.getElementsByTagName("form")[0].innerHTML += `<div id="appear" class="appear">${x}</div>`;
}