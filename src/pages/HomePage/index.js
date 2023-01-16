import { ToLogin, toToggle } from "../../scripts/buttons.js"
import { renderJobsHP, renderSelectedList } from "../../scripts/render.js"
import { getAllCompanies } from "../../scripts/request.js"

const companies = await getAllCompanies()

toToggle()
ToLogin()
getAllCompanies()
renderJobsHP(companies)
// console.log(companies)
renderSelectedList()
