import React from 'react'

function App () {

  return (
    <div className='w-full min-h-screen flex'>
      <nav className='w-[15%] h-screen bg-zinc-50 flex flex-col items-center pt-5'>
        <a className='py-2 px-3 border text-blue-600 font-semibold bg-sky-100 rounded-lg' href="/create">Add new product</a>
        <hr className='w-[80%] my-3 ' />
        <h1 className='w-[80%] text-lg tracking-wide font-semibold'>Category Filter</h1>
        <ul className='w-[75%]'>
          <li className='py-2 flex items-center gap-2'><span className='block bg-red-300 w-2 h-2 rounded-full'></span> Cat 1</li>
          <li className='py-2 flex items-center gap-2'><span className='block bg-cyan-300 w-2 h-2 rounded-full'></span> Cat 2</li>
          <li className='py-2 flex items-center gap-2'><span className='block bg-purple-300 w-2 h-2 rounded-full'></span> Cat 3</li>
          <li className='py-2 flex items-center gap-2'><span className='block bg-amber-300 w-2 h-2 rounded-full'></span> Cat 4</li>
        </ul>
      </nav>

      <div className='w-[85%] bg-zinc-200 p-4'>

        <div className='flex flex-wrap gap-5 items-center mx-10 my-5'>

          <div className='w-52 h-64 border shadow rounded bg-emerald-100 p-2 flex flex-col items-center'>
            <div className='bg-contain bg-center bg-no-repeat w-full h-52 hover:scale-105 mt-3' style={ { backgroundImage: "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)" } }></div>
            
            <h1 className='text-sm font-semibold my-3'>Lorem ipsum dolor sit.</h1>
          </div>

        </div>

      </div>
    </div>
  )
}

export default App
