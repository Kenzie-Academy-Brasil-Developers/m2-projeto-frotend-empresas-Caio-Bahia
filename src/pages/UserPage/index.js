export function logoutUser() {
  const logoutbtn = document.querySelector(".logout")

  logoutbtn.addEventListener("click", () => {
    localStorage.clear()
    window.location.replace("/src/pages/HomePage/index.html")
  })
}

logoutUser()
