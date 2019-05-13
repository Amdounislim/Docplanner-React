import React from 'react'
import Services from './Services'
import Brands from './Brands'
import Statistiques from './Statistiques'
import Offices from './Offices'

const  arr = [{titel:"For patients", 
               description:"Find a doctor, book a visit and solve any health-related doubt", 
               contry:["Choose country", "Argentina", "Australia", "Brazil", "Chile", "Colombia", "Czech", "France", "Italy", "Mexico", "Peru", "poland", "Portugal", "Spain", "Turkey", "UK"], 
               image:"https://www.docplanner.com/img/screen-marketplace@2x.png", 
               class:"for-patients",
               class1:"figurepatient"},
               {titel:"For doctors", 
               description:"Save time managing visits and cut no-shows by half", 
               image:"https://www.docplanner.com/img/screen-saas@2x.png", 
               class:"for-doctors"}
             ]

const  arrbrinds = [{image:"https://platform.docplanner.com/img/pl/logo/logo-default-pl.svg?v=7", class:"brandsimg"}, 
                    {image:"https://platform.docplanner.com/img/es/logo/logo-default-es.svg?v=7", class:"brandsimg"}, 
                    {image:"https://platform.docplanner.com/img/it/logo/logo-default-it.svg?v=7", class:"brandsimg"}, 
                    {image:"https://platform.docplanner.com/img/tr/logo/logo-default-tr.svg?v=7", class:"brandsimg"}, 
                    {image:"https://platform.docplanner.com/img/cz/logo/logo-default-cz.svg?v=7", class:"brandsimg"},]

const explfeaturcart = [{icon:"https://www.docplanner.com/img/flag.png", title:"Leader in 10 countries", description:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile", class:"flag"}, 
                        {icon:"https://www.docplanner.com/img/visits.png", title:"1.5 million appointments", description:"booked last month", class:"visit"}, 
                        {icon:"https://www.docplanner.com/img/patients.png", title:"30 million unique patients", description:"visit us every month", class:"patient"}, 
                        {icon:"https://www.docplanner.com/img/doctors.png", title:"2 million active doctors", description:"trust in our solutions", class:"doctor"}]

const officeslink = [{image:"https://www.docplanner.com/images/warsaw.png", title:"Warsaw", button:"See openings", class:"office"}, 
                    {image:"https://www.docplanner.com/images/barcelona.png", title:"Barcelona", button:"See openings", class:"office"}, 
                    {image:"https://www.docplanner.com/images/istanbul.png", title:"Istanbul", button:"See openings", class:"office"}, 
                    {image:"https://www.docplanner.com/images/rome.png", title:"Rome", button:"See openings", class:"office"}, 
                    {image:"https://www.docplanner.com/images/mexico-city.png", title:"Mexico City", button:"See openings", class:"office"}, 
                    {image:"https://www.docplanner.com/images/curitiba.png", title:"Curitiba", button:"See openings", class:"office"}]

export default function Main() {
  return (
    <div className="main">
            <div className="lead">
                    <img src="https://www.docplanner.com/img/sygnet.png" className="leadlogo"></img>
                    <h1>Making the healthcare experience more human</h1>
                    <div>
                            <p>
                                We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.
                            </p>
                        
                            <p>
                                We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.
                            </p>
                    </div>
            </div>
            <Services navItem={arr}/>
            <Brands items={arrbrinds}/>
            <Statistiques explcart={explfeaturcart}/>
            <Offices officelink={officeslink}/>
    </div>
  )
}
