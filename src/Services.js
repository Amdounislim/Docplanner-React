import React from 'react'

export default function Services(props) {
  return (
    <div className="services">
      {props.navItem.map(el => 
      (<div className={el.class}>
        <h3>{el.titel}</h3>
		<h2>{el.description}</h2> 
        {!el.contry ? null : <select>{el.contry.map(el => <option>{el}</option>)}</select>}
        <img className={el.class1} src={el.image}/>
      </div>))}
    </div>
  )
}
