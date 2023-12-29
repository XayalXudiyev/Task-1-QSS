import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchSectors } from '../features/sectorSlice';

const Sector = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSectors());

    }, [dispatch]);

    const sectors = useSelector((state) => state.sector.sectors);


    return (
        <div className="relative ">
            <h1 className='text-[#A7B4CA] my-2'>Sector</h1>

            <select className="w-full p-2.5 text-[#A7B4CA] bg-[#293F64] border border-[#4A628A]  shadow-sm outline-none appearance-none rounded-[7px]">
            
                    {
                        sectors.map((sector) => (
                            <option key={sector} value={sector}>{sector}</option>
                        ))
                    }

            </select>
        </div>
    )
}

export default Sector
