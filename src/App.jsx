import React from 'react'

export default function App() {
  return (
    <div className='bg-[#051124] h-screen'>

      <div className='container flex justify-between mx-auto'>

        <div className="relative  ">
          <h1 className='text-[#A7B4CA] my-2'>Country</h1>
          <select className="w-full p-2.5 text-[#A7B4CA] bg-[#293F64] border border-[#4A628A]  shadow-sm outline-none appearance-none  rounded-[7px]">
            <option>(All)</option>
            <option>Laravel 9 with React</option>
            <option>React with Tailwind CSS</option>
            <option>React With Headless UI</option>
          </select>
        </div>

        <div className="relative ">
          <h1 className='text-[#A7B4CA] my-2'>Sector</h1>

          <select className="w-full p-2.5 text-[#A7B4CA] bg-[#293F64] border border-[#4A628A]  shadow-sm outline-none appearance-none rounded-[7px]">
            <option>Economy</option>
            <option>Laravel 9 with React</option>
            <option>React with Tailwind CSS</option>
            <option>React With Headless UI</option>
          </select>
        </div>


        <div className="relative ">
          <h1 className='text-[#A7B4CA] my-2'>Subsector</h1>

          <select className="w-full p-2.5 text-[#A7B4CA] bg-[#293F64] border border-[#4A628A]  shadow-sm outline-none appearance-none rounded-[7px]">
            <option>GDP and economic gr..</option>
            <option>Laravel 9 with React</option>
            <option>React with Tailwind CSS</option>
            <option>React With Headless UI</option>
          </select>
        </div>


        <div className="relative ">
          <h1 className='text-[#A7B4CA] my-2'>Indicator</h1>

          <select className="w-full p-2.5 text-[#A7B4CA] bg-[#293F64]  border border-[#4A628A] shadow-sm outline-none appearance-none rounded-[7px]">
            <option>Gross Domestic Prod..</option>
            <option>Laravel 9 with React</option>
            <option>React with Tailwind CSS</option>
            <option>React With Headless UI</option>
          </select>
        </div>
      </div>
    </div>
  )
}
