export const toToggle = () => {
  const toggle = document.querySelector(".toggle")
  const container = document.querySelector(".header-button_container")

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active")
    container.classList.toggle("toggle-menu")
    // console.log("oi")
  })
}
export const ToHome = () => {
  const HomeBTN = document.querySelectorAll(".home-btn")
  HomeBTN.forEach(btn => {
    btn.addEventListener("click", () => {
      window.location.replace("/src/pages/HomePage/index.html")
    })
  })
}

export const ToLogin = () => {
  const lognBTN = document.querySelectorAll(".login-btn")
  lognBTN.forEach(btn => {
    btn.addEventListener("click", () => {
      console.log("MIAU")
      window.location.replace("/src/pages/loginpage/index.html")
    })
  })
}

export const ToSingup = () => {
  const signBtn = document.querySelectorAll(".singup-btn")
  signBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      window.location.replace("/src/pages/singupPage/index.html")
    })
  })
}

export const ToUser = () => {
  const BTN = document.querySelector(".user-btn")

  BTN.addEventListener("click", () => {
    window.location.replace("/src/pages/loginpage/index.html")
  })
}

export const ToAdm = () => {
  const BTN = document.querySelector(".adm-btn")

  BTN.addEventListener("click", () => {
    window.location.replace("/src/pages/loginpage/index.html")
  })
}

export const logout = () => {
  const BTN = document.querySelector(".adm-btn")

  BTN.addEventListener("click", () => {
    localStorage.clear()
    window.location.replace("/src/pages/loginpage/index.html")
  })
}
