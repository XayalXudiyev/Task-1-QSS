import React from 'react'

const Sector = () => {
    return (
        <div className="relative ">
            <h1 className='text-[#A7B4CA] my-2'>Sector</h1>

            <select className="w-full p-2.5 text-[#A7B4CA] bg-[#293F64] border border-[#4A628A]  shadow-sm outline-none appearance-none rounded-[7px]">
                <option>Economy</option>
                <option>Laravel 9 with React</option>
                <option>React with Tailwind CSS</option>
                <option>React With Headless UI</option>
            </select>
        </div>
    )
}

export default Sector
