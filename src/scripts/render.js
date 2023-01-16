import { getAllCompanies, getAllSectors } from "./request.js"

// homepage-----------------------

const companies = await getAllCompanies()
const UlContainer = document.querySelector(".job-card-container")

export function renderJobsHP(array, comparador) {
  UlContainer.innerHTML = ""
  // console.log(array)
  array.forEach(element => {
    if (comparador) {
      if (element.sectors.description == comparador) {
        const li = document.createElement("li")
        li.classList.add("card")

        const h3 = document.createElement("h3")
        h3.innerText = element.name

        const pHour = document.createElement("p")
        pHour.innerText = element.opening_hours

        const pSector = document.createElement("p")
        pSector.innerText = element.sectors.description
        pSector.classList.add("card-sector")

        li.append(h3, pHour, pSector)
        UlContainer.appendChild(li)
      }
    } else {
      const li = document.createElement("li")
      li.classList.add("card")

      const h3 = document.createElement("h3")
      h3.innerText = element.name

      const pHour = document.createElement("p")
      pHour.innerText = element.opening_hours

      const pSector = document.createElement("p")
      pSector.innerText = element.sectors.description
      pSector.classList.add("card-sector")

      li.append(h3, pHour, pSector)
      UlContainer.appendChild(li)
    }
  })
}

// console.log(companies)

const AllSectors = await getAllSectors()

export function renderSelectedList() {
  const select = document.querySelector("#jobs-select")
  select.innerHTML = ""

  const option = document.createElement("option")
  option.innerText = "Selecionar Setores"
  option.value = "SelectAll"

  select.appendChild(option)
  select.addEventListener("change", () => {
    console.log(select.value)
    console.log(companies)

    if (select.value == "SelectAll") {
      renderJobsHP(companies)
    }
    renderJobsHP(companies, select.value)
    // console.log("oi")
  })

  AllSectors.forEach(element => {
    const CreateOption = document.createElement("option")

    CreateOption.innerText = element.description
    CreateOption.value = element.description
    CreateOption.id = element.description

    select.append(CreateOption)
  })
}

// login-------------------------
