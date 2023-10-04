import React from 'react'
import Input from './Input';

function Price({handleChange}) {
  return (
    <section>
    <div className="Price flex flex-col gap-2 px-2  dark:bg-black dark:text-gray-500">
        <h1 className='font-bold border-b-2 border-gray-500 mt-2 dark:text-white'>Price</h1>
        <Input onChange={handleChange} value='all' title='All' name='test' / >
       <Input handleChange={handleChange} value='50' title='$0-50' name='test' / >
       <Input handleChange={handleChange} value='100' title='$50-100' name='test' / >
       <Input handleChange={handleChange} value='150' title='$100-150' name='test' / >
       <Input handleChange={handleChange} value='a150' title='Over $150' name='test' / >
    </div>
   </section>
  )
}

export default Price;