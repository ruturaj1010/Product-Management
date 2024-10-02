import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [products] = useContext( ProductContext );

    let distinctCatergory = products && products.reduce( ( acc, cv ) => [...acc, cv.category], [] )
    // console.log(distinctCatergory);

    distinctCatergory = [...new Set( distinctCatergory )]
    // console.log( distinctCatergory );

    const color = () => {
        return `rgba(${( Math.random() * 255 ).toFixed()}, ${( Math.random() * 255 ).toFixed()}, ${( Math.random() * 255 ).toFixed()}, 0.4)`
    }

    return (
        <nav className='w-full h-screen bg-zinc-50 flex flex-col items-center pt-5'>
            <Link className='py-2 px-3 my-1 border text-blue-600 font-semibold bg-sky-100 rounded-lg' to="/create">Add new product</Link>
            <hr className='w-[80%] my-3 ' />
            <h1 className='w-[80%] text-lg tracking-wide font-semibold'>Category Filter</h1>
            <div className='w-[75%]'>
                { distinctCatergory.map( ( item, index ) => {
                    return <Link key={ index } to={ `/?category=${item}` } className='py-2 flex items-center gap-2 capitalize'><span className='block w-2 h-2 rounded-full'
                        style={ { backgroundColor: color() } }
                    ></span>{ item }</Link>
                } ) }

            </div>
        </nav>
    )
}

export default Navbar