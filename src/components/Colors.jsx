import React from 'react'
import Input from './Input';

function Colors({handleChange}) {
  return (
    <section>
    <div className="Price flex flex-col gap-2 px-2  dark:bg-black dark:text-gray-500">
        <h1 className='font-bold border-b-2 border-gray-500 mt-2 dark:text-white'>Colors</h1>
        <Input onChange={handleChange} value='all' title='All' name='test' / >
       <Input handleChange={handleChange} value='blue' title='Blue' name='test' / >
       <Input handleChange={handleChange} value='red' title='Red' name='test' / >
       <Input handleChange={handleChange} value='green' title='Green' name='test' / >
       <Input handleChange={handleChange} value='black' title='Black' name='test' / >
    </div>
   </section>
  )
}

export default Colors;