import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSubsector } from '../features/subsectorSlice'

const Subsector = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSubsector());

    }, [dispatch]);

    const subsectors = useSelector((state) => state.subsector.subsectors);

console.log(subsectors)
    return (
        <div className="relative ">
            <h1 className='text-[#A7B4CA] my-2'>Subsector</h1>

            <select className="w-full p-2.5 text-[#A7B4CA] bg-[#293F64] border border-[#4A628A]  shadow-sm outline-none appearance-none rounded-[7px]">
                {
                    subsectors.map((subsector) => (
                        <option key={subsector} value={subsector}>{subsector}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Subsector
