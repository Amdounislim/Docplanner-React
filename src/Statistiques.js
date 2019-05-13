import React from 'react'

export default function Statistiques(props) {
  return (
    <div className="statistiques">
        <div className="statistiques-col1">
            <h2>The world's<br/>biggest healthcare platform</h2>
            <p class="we-work">We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
            <img src="https://www.docplanner.com/img/logo.png" alt="docplanner"></img>
        </div>
        <div className="statistiques-col2">
        {props.explcart.map(el => <div className={el.class}>
                                        <img  src={el.icon}></img>
                                        <h3>{el.title}</h3>
                                        <p>{el.description}</p>
                                    </div>
            )}
        </div>
    </div>
  )
}
