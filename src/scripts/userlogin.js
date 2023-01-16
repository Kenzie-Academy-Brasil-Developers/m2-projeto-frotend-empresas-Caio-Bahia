import { login } from "./request"

export function Userlogin() {
  const userLoginForm = document.querySelector(".form-user_login")
  const inputs = document.querySelectorAll(".form-user_login>input")
  const Loginbutton = document.querySelector(".form-login_btn")
  const loginUser = {}

  Loginbutton.addEventListener("click", async event => {
    event.preventDefault()

    inputs.forEach(input => {
      loginUser[input.name] = input.value
      console.log(input.name)
      console.log(input.value)
    })
    const requests = await login(loginUser)

    localStorage.setItem("@kenzieEmpresas:user", JSON.stringify(requests))
  })
}
