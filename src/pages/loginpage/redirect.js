import { validateUser } from "../../scripts/request.js"

export async function redirectUser() {
  let token = localStorage.getItem("token")
  if (token != null) {
    await validateUser()
  }
}
