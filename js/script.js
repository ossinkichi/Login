const form_container = document.querySelector(".form-container")
form_container.innerHTML += "<h1>Bem vindos ao <span>Login</span></h1>"
form_container.innerHTML += "<p>Preencha os dados de login para acessar</p>"
form_container.innerHTML += "<form method=\"post\"></form>"

const form = document.querySelector("form")
form.innerHTML += "<div class=\"login\"><div/>"
form.innerHTML += "<div class=\"password\"><div/>"
form.innerHTML += "<button>Entrar</button>"

const login = document.querySelector('.login')
login.innerHTML += "<label for=\"user\">Usuario</label>"
login.innerHTML += "<input id=\"user\" type=\"text\" placeholder=\"Usuario\" autofocus required />"

const pass = document.querySelector('.password')
pass.innerHTML += "<label for=\"pass\">Senha</label>"
pass.innerHTML += "<input id=\"pass\" type=\"password\" placeholder=\"Senha\" autocomplete=\"off\" required />"

// console.log(login)