import React from 'react'
import Data from './Data'

const Button = ({menuItems, filterItems, setItem}) => {
  return (
    <div className='button-wrapper'>
        <button className='button-all' onClick={()=> setItem(Data)} >All </button>
       {
        menuItems.map(val => (
          <button className='button-item' onClick={()=> filterItems(val)}>
            {val}
          </button>
        ))
       }
    </div>
  )
}

export default Button