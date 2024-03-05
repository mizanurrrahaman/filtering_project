import React from 'react'

const Card = ({item}) => {
  return (
    <div className='container'>
       <div className='item_wrapper'>
           {
            item.map((val) =>(
              <div className='item_box' key={val.id}>
                <div className='item_img'>
                   <img src={val.img} alt="" />
                </div>
                 <div className='item_deteals'>
                    <div className='item_title'>
                        {val.title} -- {val.price}
                    </div>
                    <div className='item_desc'>
                        {val.desc}
                    </div>
                 </div>
              </div>
            ))
           }
       </div>
    </div>
  )
}

export default Card