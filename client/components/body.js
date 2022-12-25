window.onload = () => {
    const createNavbar = () => {
        document.getElementById('nav').innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light"><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item active"><a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="student">Student</a></li><li class="nav-item"><a class="nav-link" href="lecturer">Lecturer</a></li><li class="nav-item"><a class="nav-link disabled" href="#">Disabled</a></li></ul></div></nav>`
    }
    createNavbar()
    const createContent = () => {
        document.getElementById('content').innerHTML = getAllStudentsComponent()
    }
    createContent()
}