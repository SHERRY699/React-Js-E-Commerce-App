import React from 'react'
import Aside from './Aside';


function Products({handleChange,result}) {
  return (
   <section>
<div className="main flex dark:bg-black ">
    <div className="1">
    <Aside handleChange={handleChange}/>
    </div>
    <div className="div grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mr-14 lg:mr-0   lg:px-28 gap-6">
    
        {result}
    </div> 
    </div>
   
   </section>
  )
}

export default Products;