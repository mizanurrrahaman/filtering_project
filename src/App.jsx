import { useState } from 'react'
import Card from './Card'
import Data from './Data'
import Button from './Button'

function App() {
 const [item, setItem] = useState(Data)
 const menuItems = [...new Set(Data.map((val) => val.catagory))]

 const filterItems = (cat)=>{
   const newItems = Data.filter((newval) => newval.catagory === cat)
   setItem(newItems)
 }

  return (
    <div className='container'>
      <div>
        <h1> Food Filter App</h1>
         <Button
          menuItems={menuItems}
          filterItems={filterItems}
          setItem={setItem}
         />
        <Card item={item}/>
      </div>
    </div>
  )
}

export default App
