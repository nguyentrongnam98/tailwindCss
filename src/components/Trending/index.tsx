import React from 'react'
import { movieData } from './Movie'
import MovieDetail from './MovieDetail'

export default function Trending() {
  return (
    <div>
        <h3 className='border-b border-primary mt-12 mb-6 pb-4'>Trending</h3>
        <div className='grid grid-cols-4 gap-10 mb-12'>
            {movieData.map((item,index) => <MovieDetail key={index} movie={item}/>)}
        </div>
        <div className='flex justify-center'>
            <button className='btn '>Load more</button>
        </div>
    </div>
  )
}
