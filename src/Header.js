import React from 'react'
import NavMenu from "./NavMenu"

const arr = [{titel: "About us", class: "titel"}, 
{titel: "Career"}, 
{titel: "Departments", sousitems:["Marketing & PR", "Customer Success & Sales", "IT, Product, Design & UX", "Finance & Administration", "HR & more"]}]
export default function Header() {
  return (
    <div className="header">
      <a href="#"><img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" className="logo-docplanner"></img></a>
      <NavMenu navItem = {arr}/>
    </div>
  )
}
