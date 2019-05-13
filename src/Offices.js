import React from 'react'

export default function Offices(props) {
  return (
    <div className="offices">
      <div className="offices-header">
          <h2>Improve the lives of millions. Change yours forever</h2>
          <p>More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Czech Republic, Mexico City, Colombia and Curitiba, our search for great talent never stops.</p>
      </div>
      <div className="offices-main">
       {props.officelink.map(el => <a href="#" className={el.class}>
                                    <img src={el.image}></img>
                                    {el.title}
                                    <span>{el.button}</span>
                                   </a>
       )}
      </div>
    </div>
  )
}
