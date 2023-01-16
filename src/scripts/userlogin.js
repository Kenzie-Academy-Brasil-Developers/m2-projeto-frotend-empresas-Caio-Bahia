import { login } from "./request.js"

export function Userlogin() {
  const LogEmail = document.querySelector(".login-email")
  const LogPassword = document.querySelectorAll(".login-password")
  const Loginbutton = document.querySelector(".form-login_btn")
  const loginUser = {}

  Loginbutton.addEventListener("click", async event => {
    event.preventDefault()
    console.log(LogPassword)

    let loginuser = {
      username: LogEmail.value,
      password: LogPassword.value
    }

    console.log(loginuser)
    const requests = await login(loginuser)

    localStorage.setItem("@kenzieEmpresas:user", JSON.stringify(requests))
  })
}
