import React from 'react'
import Input from './Input';

function Category({handleChange}) {
  return (
   <section>
    <div className="category flex flex-col gap-2 px-2 dark:bg-black dark:text-gray-500 ">
        <h1 className='font-bold border-b-2 border-gray-500 dark:text-white'>Category</h1>
       <Input onChange={handleChange} value='all' title='All' name='test' / >
       <Input handleChange={handleChange} value='heels' title='Heels' name='test' / >
       <Input handleChange={handleChange} value='flats' title='Flats' name='test' / >
       <Input handleChange={handleChange} value='sandals' title='Sandals' name='test' / >
       <Input handleChange={handleChange} value='sneakers' title='Sneakers' name='test' / >
      
    </div>
   </section>
  )
}

export default Category;