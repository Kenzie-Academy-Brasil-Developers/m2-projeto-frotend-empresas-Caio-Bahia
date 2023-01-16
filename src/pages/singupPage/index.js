import { ToHome, ToLogin, toToggle } from "../../scripts/buttons.js"
import { createUser } from "../../scripts/request.js"

toToggle()
ToLogin()
ToHome()
singupCactch()

export function singupCactch() {
  const name = document.querySelector(".input-name")
  const email = document.querySelector(".input-email")
  const password = document.querySelector(".input-password")
  const stack = document.querySelector(".form-signup_select")
  const button = document.querySelector(".signup-button")

  button.addEventListener("click", event => {
    console.log("oi")
    event.preventDefault()
    if (
      name.value != "" &&
      email.value != "" &&
      email.value.includes("@") &&
      password.value != ""
    ) {
      console.log("to aqui!")
      let registerUser = {
        username: name.value,
        password: password.value,
        email: email.value,
        professional_level: stack.value
      }
      createUser(registerUser)
    }
  })
}
