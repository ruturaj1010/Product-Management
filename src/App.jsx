import React from 'react'
import Home from './components/Home'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Details from './components/Details'
import Create from './components/Create'
import Edit from './components/Edit'

function App () {

  const { search, pathname } = useLocation()

  return (
    <div className='h-full w-full relative'>
      { ( pathname !== '/' || search.length > 0 ) &&
        <Link to={ "/" } className='mx-10 absolute top-2 left-[16vw] inline-block my-1 px-3 py-2 font-semibold bg-amber-100 text-red-600 rounded-md'>Home</Link>
      }
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path='/create' element={ <Create /> } />
        <Route path='/details/:id' element={ <Details /> } />
        <Route path='/edit/:id' element={ <Edit /> } />
      </Routes>
    </div>
  )
}

export default App
