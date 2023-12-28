import React from 'react'
import Sector from './components/Sector'
import Country from './components/Country'
import Subsector from './components/Subsector'
import Indigator from './components/Indigator'

export default function App() {


  return (
    <div className='bg-[#051124] h-screen'>
      <div className='container flex justify-between mx-auto'>
        <Country />
        <Sector />
        <Subsector />
        <Indigator />
      </div>
    </div>
  )
}
