import React from 'react'

export default function NavMenu(props) {
  return (
    <ul className="navitem">{
        props.navItem.map(el => <li ><a className={`navlink ${el.class}`} href="#">{el.titel}</a>
        {!el.sousitems ? null :
          <ul className='sousitems'> {el.sousitems.map(el => <li><a href="#">{el}</a></li>)}
          </ul>
        }</li>
  
        )}
      </ul>
  )
}
