import { login } from "./request.js"

export function Userlogin() {
  const userLoginForm = document.querySelector(".form-user_login")
  const inputs = document.querySelectorAll(".form-user_login>input")
  const Loginbutton = document.querySelector(".form-login_btn")
  const loginUser = {}

  Loginbutton.addEventListener("click", async event => {
    event.preventDefault()
    console.log("oi")
    inputs.forEach(input => {
      loginUser[input.name] = input.value
      //   console.log(input.name)
      console.log(input.value)
    })
    const requests = await login(loginUser)

    localStorage.setItem("@kenzieEmpresas:user", JSON.stringify(requests))
  })
}

// export const eventLogin = () => {
//   const form = document.querySelector("form")
//   //   console.log(form);
//   const elements = [...form.elements]
//   //   console.log(elements);

//   form.addEventListener("submit", async event => {
//     event.preventDefault()

//     const body = {}

//     elements.forEach(element => {
//       if (element.tagName == "INPUT" && element.value !== "") {
//         body[element.name] = element.value
//       }
//       // console.log(body);
//     })
//     const check = await requestLogin(body)
//     // console.log(check);
//   })
// }
