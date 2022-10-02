import React from 'react'
import { Movie } from './Movie'
import  {BiTime} from 'react-icons/bi'
export default function MovieDetail({movie}:{movie:Movie}) {
  return (
    <div className='bg-primary rounded-md shadow-md shadow-primary relative'>
        <img src={movie.src} alt="movie" className='w-full'/>
        <div className='p-4 text-white'>
            <h4>{movie.title}</h4>
            <p>{movie.main}</p>
        </div>
        <div className='absolute flex justify-between items-center bg-cyan-50 rounded-md top-2 left-2 p-2 min-w-[25%]'>
           <BiTime/>
           <p>{movie.runtime}</p>
        </div>
    </div>
  )
}
