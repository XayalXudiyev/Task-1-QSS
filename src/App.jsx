import React from 'react'

export default function App() {
  return (
    <div className='bg-[#051124] h-screen m-0 p-0 '>

      <ul className='flex flex-wrap justify-between container mx-auto' >

        <li className='border border-[#4A628A] bg-[#293F64] my-8 p-2 rounded-lg text-white w-[202px] h-[38px] flex items-center text-[14px]'>
          <select name="" id="" className=' bg-transparent w-full focus:outline-none'>
            <option value="" className='option'>(All)</option>
            <option value="" className='option'>(All)</option>
            <option value="" className='option'>(All)</option>
          </select>
        </li>

        <li className='border border-[#4A628A] bg-[#293F64] my-8 p-2 rounded-lg text-white w-[202px] h-[38px] flex items-center'>
          <select name="" id="" className=' bg-transparent w-full  focus:outline-none '>
            <option value="" className='option bg-transparent rounded-full '>Economy</option>
            <option value="" className='option'>(Economy)</option>
            <option value="" className='option'>(Economy)</option>

          </select>
        </li>

        <li className='border border-[#4A628A] bg-[#293F64] my-8 p-2 rounded-lg text-white w-[202px] h-[38px] flex items-center'>
          <select name="" id="" className=' bg-transparent w-full focus:outline-none'>
            <option value="" className='option'>GDP and economic gr..</option>
            <option value="" className='option'>GDP and economic gr..</option>
            <option value="" className='option'>GDP and economic gr..</option>
          </select>
        </li>

        <li className='border border-[#4A628A] bg-[#293F64] my-8 p-2 rounded-lg text-white w-[202px] h-[38px] flex items-center'>
          <select name="" id="" className=' bg-transparent w-full focus:outline-none'>
            <option value="" className='option'>Gross Domestic Prod..</option>
            <option value="" className='option'>Gross Domestic Prod..</option>
            <option value="" className='option'>Gross Domestic Prod..</option>
          </select>
        </li>

      </ul>
    </div>
  )
}
