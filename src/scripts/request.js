// import { json } from "stream/consumers"
// import { getLocalStorage } from "./localstorage"
// import { toast } from "./toast"

import { redirectUser } from "../pages/loginpage/redirect.js"

const user = getUser() || {}
const { token } = user
const baseURL = " http://localhost:6278"
const requestHeaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`
}
const red = "#C20803"
const green = "#08C203"

/* USer Requests */

export function getUser() {
  const user = JSON.parse(localStorage.getItem("@KenzieEmpresas:user"))
  return user
}

export async function createUser(data) {
  const newUser = await fetch(`${baseURL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  const newUserJSON = await newUser.json()
  if (!newUser.ok) {
    console.log("yahoo!")
    // toast(newUserJSON.error, red)
  } else {
    // toast("Criação de usuario Concluida", green)
    window.location.replace("/src/pages/UserPage/index.html")
  }
  console.log(newUserJSON)
  return newUserJSON
}

export async function login(data) {
  const PostLogin = await fetch(`${baseURL}/auth/login`, {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(res => res)
    .then(res => {
      let token = JSON.stringify(res.token)
      localStorage.setItem("token", token)
      redirectUser()
    })
  const PostLoginJSON = await PostLogin.json()

  return PostLoginJSON
}

export async function validateUser(data) {
  const get = await fetch(`${baseURL}/auth/validate_user`, {
    method: "GET",
    headers: requestHeaders,
    body: JSON.stringify(data)
  })
  const getJSON = await get.json()
  const isAdm = getJSON.is_admin

  if (!isAdm) {
    localStorage.setItem("user-type", "user")
    window.location.replace("/src/pages/UserPage/index.html")
  } else {
    localStorage.setItem("user-type", "admin")
    window.location.replace("/src/pages/adminPage/index.html")
  }
}

/* get empresas */

export async function getAllCompanies() {
  const getCompany = await fetch(`${baseURL}/companies`, {
    method: "GET",
    headers: requestHeaders
  })
  const getCompanyJSON = await getCompany.json()

  return getCompanyJSON
}

export async function getAllSectors() {
  const getSelectors = await fetch(`${baseURL}/sectors`, {
    method: "GET",
    headers: requestHeaders
  })
  const getSelectorsJSON = await getSelectors.json()

  if (!getSelectors.ok) {
    toast(getSelectorsJSON.error, red)
  }

  return getSelectorsJSON
}
export async function getCompanyBySectors(sector) {
  const getCompanyBySectors = await fetch(`${baseURL}/companies/${sector}`, {
    method: "GET",
    headers: requestHeaders
  })
  const getCompanyBySectorsJSON = await getCompanyBySectors.json()

  if (!getCompanyBySectors.ok) {
    toast(getCompanyBySectorsJSON.error, red)
  }

  return getCompanyBySectorsJSON
}

// Funcionarios

export async function getUserProfileInfo() {
  const getFuncionarios = await fetch(`${baseURL}/users/profile`, {
    method: "GET",
    headers: requestHeaders
  })
  const getFuncionariosJSON = getFuncionarios.json()

  if (!getFuncionarios.ok) {
    toast(getFuncionariosJSON.error, red)
  }
  return getFuncionariosJSON
}

export async function getSameDepartament() {
  const departament = await fetch(`${baseURL}/users/departments/coworkers`, {
    method: "GET",
    headers: requestHeaders
  })
  const departamentJSON = await departament.json()

  return departamentJSON
}

export async function getDepartamentFromUser() {
  const departament = await fetch(`${baseURL}/users/departments`, {
    method: "GET",
    headers: requestHeaders
  })
  const departamentJSON = await departament.json()

  return departamentJSON
}

export async function patchUpdateUserData(data) {
  const update = await fetch(`${baseURL}/users`, {
    method: "PATCH",
    headers: requestHeaders,
    body: JSON.stringify(data)
  })
  const updateJSON = await update.json()

  return updateJSON
}

//ADM

export async function getAllUsers() {
  const users = await fetch(`${baseURL}/users`, {
    method: "GET",
    headers: requestHeaders
  })
  const usersJSON = await users.json()

  return usersJSON
}

export async function getAllUsersOutOfWork() {
  const users = await fetch(`${baseURL}/admin/out_of_work`, {
    method: "GET",
    headers: requestHeaders
  })
  const usersJSON = await users.json()

  return usersJSON
}

export async function patchUpdateEmployeeByAdm(data, id) {
  const usersUpdate = await fetch(`${baseURL}/admin/update_user/${id}`, {
    method: "PATCH",
    headers: requestHeaders,
    body: JSON.stringify(data)
  })
  const usersUpdateJSON = await usersUpdate.json()

  if (!usersUpdate.ok) {
    toast(usersUpdateJSON.error, red)
  } else {
    toast("Informações atualizadas!", green)
  }

  return usersUpdateJSON
}

export async function deleteEmployeeByAdm(id) {
  const usersUpdate = await fetch(`${baseURL}/admin/delete_user/${id}`, {
    method: "DELETE",
    headers: requestHeaders
  })
  const usersUpdateJSON = await usersUpdate.json()

  if (!usersUpdate.ok) {
    toast(usersUpdateJSON.error, red)
  } else {
    toast("Usuario removido!", green)
  }

  return usersUpdateJSON
}

// Cadastrar Empresa

export async function registerEnterprise(data) {
  const enterprise = await fetch(`${baseURL}/companies`, {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify(data)
  })
  const enterpriseJSON = await enterprise.json()

  if (!enterprise.ok) {
    toast(enterpriseJSON.error, red)
  } else {
    toast("Empresa Cadastrada com sucesso!", green)
  }

  return enterpriseJSON
}

// Departaments

export async function getAllDepartments() {
  const departaments = await fetch(`${baseURL}/departments`, {
    method: "GET",
    headers: requestHeaders
  })
  const departamentsJSON = await departaments.json()

  return departamentsJSON
}

export async function getAllDepartmentsFromEnterprise(id) {
  const departaments = await fetch(`${baseURL}/departments/${id}`, {
    method: "GET",
    headers: requestHeaders
  })
  const departamentsJSON = await departaments.json()

  return departamentsJSON
}

export async function CreateDepartment(data) {
  const departments = await fetch(`${baseURL}/departments`, {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify(data)
  })
  const departmentsJSON = await departments.json()

  if (!departments.ok) {
    toast(departmentsJSON.error, red)
  } else {
    toast("Departamento criado com sucesso!", green)
  }

  return departmentsJSON
}

export async function hireEmployee(data) {
  const hireEmp = await fetch(`${baseURL}/departments/hire/`, {
    method: "PATCH",
    headers: requestHeaders,
    body: JSON.stringify(data)
  })
  const hireEmpJSON = await hireEmp.json()

  if (!hireEmp.ok) {
    toast(hireEmpJSON.error, red)
  } else {
    toast("Colaborador contratado!", green)
  }

  return hireEmpJSON
}

export async function fireEmployee(id) {
  const fireEmp = await fetch(`${baseURL}/departments/dismiss/${id}`, {
    method: "PATCH",
    headers: requestHeaders
  })
  const fireEmpJSON = await fireEmp.json()

  if (!fireEmp.ok) {
    toast(fireEmpJSON.error, red)
  } else {
    toast("Colaborador demitido!", green)
  }

  return fireEmpJSON
}

export async function editDepartment(data, id) {
  const fireEmp = await fetch(`${baseURL}/departments/${id}`, {
    method: "PATCH",
    headers: requestHeaders,
    body: JSON.stringify(data)
  })
  const fireEmpJSON = await fireEmp.json()

  if (!fireEmp.ok) {
    toast(fireEmpJSON.error, red)
  } else {
    toast("Edição concluida!!", green)
  }

  return fireEmpJSON
}

export async function deleteDepartment(id) {
  const deletedep = await fetch(`${baseURL}/departments/${id}`, {
    method: "DELETE",
    headers: requestHeaders
  })
  const deletedepJSON = await deletedep.json()

  if (!deletedep.ok) {
    toast(deletedepJSON.error, red)
  } else {
    toast("Departamento removido!", green)
  }

  return deletedepJSON
}
