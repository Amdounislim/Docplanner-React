import React from 'react'

export default function Brands(props) {
  return (
    <div className="brands">
        <h2>We are a global company<br/>with local culture</h2>
        <ul className="">{
        props.items.map(el => <li>
                                <a href="#">
                                    <img className={el.class} src={el.image}></img>
                                </a>
                              </li>
  
        )}
        </ul>
    </div>
  )
}
